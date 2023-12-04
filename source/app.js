const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const SP = require('./model/ttsp');
const KH = require('./model/kh');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://nhom3b:nhom3b@cluster0.mlensdg.mongodb.net/CTDbook?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

//Các biến toàn cục
let kh = '', err = ''

//Trang root
app.get('/', (req, res) => {
  res.redirect('/main');
});

//Trang Đăng nhập
app.get('/signup', (req, res) => {
    res.render('test_signup', {title: 'SignUp', err: err});
    err = '';
});

//Trang Đăng kí
app.get('/login', (req, res) => {    
    res.render('test_login', {title: 'Login', err: err});
    err = '';
});

//Trang chủ
app.get('/main', (req, res) => {
  SP.find()
  .then(result => {
      res.render('test_index', { sps: result, title: 'Trang chủ', kh: kh});
    })
    .catch(err => {
      console.log(err);
    });
});

//middleware - Đăng nhập + Đăng kí
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  KH.findOne({ mail: req.body.mail, password: req.body.password })
      .then(result => {
          if (result != null){
            kh = result.username;
            res.redirect('/main');
          }
          else {
            err = "Please try again. Email or Password are wrong!!!";
            res.redirect('/login');
          }
      })
      .catch(err => {
          console.log(err);
      });
});
app.post('/signup', (req, res) => {
  if (req.body.password == req.body.password1) {
    KH.findOne({ mail: req.body.mail})
          .then(result => {
            if (result == null ){
              const kh = new KH({
                mail: req.body.mail,
                password: req.body.password,
                username: req.body.username,
              })            
              kh.save();
              err = "Welcome! Please login to start! Let's go!!!";
              res.redirect('/login');
            }
            else {
              err = "Sorry this Email has already signup before. Try another one or Login!";
              res.redirect('/signup');
            }
          })
  }  
  else {
    res.render('test_signup', {title: 'SignUp', err: 'Err: Your passwords are not the same.'});
  }      
});

//Trang thông sản phẩm
app.get('/main/:id', (req, res) => {  
  const url = req.params.id; 
  SP.findOne({id: url})
  .then(result => {
      res.render('tt', {sp: result, title: result.tensach });
    })
    .catch(err => {
      console.log(err);
    });
});

//Trang Sách mới
app.get('/sachmoi', (req, res) => {
  SP.find({danhmuc: 'sachmoi'})
  .then(result => {
      res.render('test_sachmoi', { spmois: result, title: 'Sách mới'});
    })
    .catch(err => {
      console.log(err);
    });
});





//Thêm 1sp
app.get('/add-sp', (req, res) => {
  const sp = new SP({
    id: 'nhocmaruko3',
    tensach: 'Nhóc Maruko - Tập 3',
    masp: '0007',
    danhmuc: 'sachbanchay',
    nxb: 'Kim Đồng',
    tacgia: 'Momoko Sakura',
    namxb: 2023,
    dichgia: 'Hương Giang',
    giagoc: '40.000 đ',
    giagiam: '38.400 đ',
    phantram: '5%',
    trongluong: 190,
    kichthuoc: '	18 x 13 x 0.8 cm',
    sotrang: 172,
    bia: 'Bìa mềm',
    img_small1: 'https://cdn0.fahasa.com/media/catalog/product/n/h/nhoc_maruko_bia_tap_3.jpg',
    img_small2: 'https://cdn0.fahasa.com/media/catalog/product/n/h/nhoc_maruko_bia_tap_3.jpg',
    img_small3: 'https://cdn0.fahasa.com/media/catalog/product/n/h/nhoc-maruko_bia_set-postcard_tap-3.jpg?_gl=1*193g3zz*_ga*MjA1MzYwMjYwOC4xNjk2ODQxNjM2*_ga_460L9JMC2G*MTcwMTY2NTQyOS4yMC4xLjE3MDE2NjU4MDYuNjAuMC4w*_gcl_aw*R0NMLjE2OTY4NDE2MzUuQ2p3S0NBand5WTZwQmhBOUVpd0FNem1md1p1OHNXT29ucE9BVWRlRHA1YlI3SWtOajBoRHF4N3Z2NElRV1RWZDhYaGVVMjc2b2dnSDZob0Npd29RQXZEX0J3RQ..*_gcl_au*MTM5NTY4MzUzNy4xNjk2ODQxNjM1',
    img_small4: 'https://cdn0.fahasa.com/media/catalog/product/n/h/nhoc_maruko_set_postcard_tap_3.jpg',
    //img_small5: '',
    mota: '<p> Họa sĩ Momoko có chia sẻ rằng: “Hình như dạo này, nhóc Maru hồi nhỏ càng ngày càng giống tôi bây giờ thì phải. Hay nói đúng hơn, chẳng biết từ khi nào tôi đã nhiễm câu cửa miệng của nhóc Maru và trở thành bản sao của cô bé rồi.”</p> <p> Tập 3 “Nhóc Maruko” vẫn là cuốn truyện tranh tự truyện mà cả gia đình có thể cùng đọc cùng vui nha các bạn. </p> <p> --- </p><p>“Nhóc Maruko” ra đời năm 1986, là bộ truyện tranh đình đám không chỉ ở Nhật Bản mà còn ở Việt Nam và rất quen thuộc với thế hệ độc giả 8x, 9x. Bộ truyện được sáng tác dựa trên chính tuổi thơ của tác giả Momoko Sakura, với nhân vật chính là cô bé tiểu học Maruko, sống trong đại gia đình gồm có ông bà nội, bố mẹ và chị gái.</p><p>Những câu chuyện đời sống hàng ngày được miêu tả qua góc nhìn của một cô bé ngây thơ, những hành động hết sức ngộ nghĩnh, trẻ con không chỉ mang lại tiếng cười vui vẻ giải trí, mà còn truyền tải không ít bài học nhẹ nhàng về gia đình, tình bạn, cuộc sống cho trẻ nhỏ…</p> <p>“Nhóc Maruko” bắt đầu phát hành dài kì trên Ribon từ số tháng 8 năm Chiêu Hòa thứ 61 (1986). Tập 2 bao gồm các truyện đăng trên Ribon từ số tháng 5 đến số tháng 10 năm Chiêu Hòa thứ 62 (1987). “Tớ muốn ăn tuyết...” đăng trên Ribon Original số đầu xuân năm Chiêu Hòa thứ 61 (1986), “Mái tóc bát úp” đăng trên Ribon Original số mùa xuân năm Chiêu Hòa thứ 61 (1986), “Cậu bạn phương Đông tháng 5” đăng trên Ribon Original số đầu hè năm Chiêu Hòa thứ 61 (1986), “Chẳng ai biết mắc cỡ” đăng trên Ribon Original số mùa thu năm Chiêu Hòa thứ 61 (1986), “Một mình xông pha Đại hội Thể thao” đăng trên Ribon Original số đầu thu năm Chiêu Hòa thứ 61 (1986).</p>',
    
    /*
    img_small1: '',
    img_small2: '',
    img_small3: '',
    img_small4: '',
    img_small5: '',
    mota: '',
    */
 })

  sp.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});
app.get('/add-sp', (req, res) => {
  const sp = new SP({
    id: 'chualanhnhungsangchantuoitho',
    tensach: 'Chữa Lành Những Sang Chấn Tuổi Thơ',
    masp: '0002',
    danhmuc: 'sachmoi',
    nxb: 'Thế giới',
    tacgia: 'Bác sĩ Tiến sĩ Bruce D Perry, Oprah Winfrey',
    namxb: 2022,
    dichgia: 'Trịnh Ngọc Minh',
    giagoc: '220.000 đ',
    giagiam: '147.400 đ',
    phantram: '33%',
    trongluong: 350,
    kichthuoc: '23.5 x 15.5 cm x 1.6',
    sotrang: 344,
    bia: 'Bìa mềm',
    img_big: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607137.jpg',
    img_small1: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607137.jpg',
    img_small2: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607137_11.jpg?_gl=1*l65r8y*_ga*MjA1MzYwMjYwOC4xNjk2ODQxNjM2*_ga_460L9JMC2G*MTcwMTA3NDkwNy4xNS4xLjE3MDEwNzQ5NzkuNjAuMC4w*_gcl_aw*R0NMLjE2OTY4NDE2MzUuQ2p3S0NBand5WTZwQmhBOUVpd0FNem1md1p1OHNXT29ucE9BVWRlRHA1YlI3SWtOajBoRHF4N3Z2NElRV1RWZDhYaGVVMjc2b2dnSDZob0Npd29RQXZEX0J3RQ..*_gcl_au*MTM5NTY4MzUzNy4xNjk2ODQxNjM1',
    img_small3: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607137_12.jpg',
    img_small4: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607137_13.jpg',
    img_small5: 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/chua_lanh_nhung_sang_chan_tuoi_tho/2022_11_16_10_52_39_1-390x510.jpg',
    mota: 'CHỮA LÀNH NHỮNG SANG CHẤN TUỔI THƠ <br> Hiểu để phục hồi và chữa lành <br> Hàng triệu đứa trẻ phải nếm trải sự ngược đãi và bị bỏ rơi&nbsp; <br> Mỗi năm trên thế giới có hơn 130 triệu đứa trẻ được sinh ra. Mỗi em lại đến thế giới này cùng những hoàn cảnh xã hội, kinh tế và văn hóa riêng biệt. Một số được chào đón với lòng biết ơn và niềm vui, được nâng niu trong vòng tay cha mẹ, khiến gia đình ngất ngây trong hạnh phúc. Số khác thì bị chối bỏ bởi người mẹ trẻ đang mơ về một cuộc sống khác, bởi cặp vợ chồng bị đói nghèo đè nặng, bởi người cha không biết kiểm soát bản thân và quen thói bạo hành, ... <br> Những trận đòn đầu đời, những đổ vỡ cảm xúc và sự đứt gãy mối quan hệ với những người thân quan trọng trong thời thơ ấu chắc chắn đã khiến nhiều người hình thành tính độc lập và thu mình lại theo cách cực đoan. Theo ngôn từ mạnh mẽ của bài thơ Invictus (Bất khuất), đó gọi là thuyền trưởng của tâm hồn mình và là chủ nhân của số phận mình. <br> Và bạn có biết, hàng triệu người đã bị đối xử giống như vậy lúc nhỏ đã lớn lên với niềm tin rằng cuộc đời mình chẳng có giá trị gì. Và khi ai đó phải nếm trải sự ngược đãi và bị sang chấn khi còn nhỏ, não bộ của họ đã tìm được cách để thích nghi. <br> Chữa lành những sang chấn tuổi thơ - Cuốn sách giúp bạn khám phá phục hồi và trưởng thành sau sang chấn <br> Tiến sĩ Bruce D. Perry sẽ giải thích trong cuốn sách&nbsp;<em>What Happened To You? | Conversations On Trauma, Resilience, And Healing</em>&nbsp;này, hiểu được cách bộ não phản ứng trước căng thẳng hay sang chấn đầu đời sẽ giúp ta hiểu rõ cách mà những điều đã qua có thể định hình con người ta, cách ta hành xử và lý do vì sao ta lại làm những việc mà ta đang làm. <br> Qua lăng kính này, ta có thể hình thành một ý thức mới về giá trị bản thân và sau cùng là điều chỉnh lại phản ứng của mình đối với các hoàn cảnh, tình huống và các mối quan hệ. Nói cách khác, đó là bí quyết để ta định hình lại cuộc đời mình. <br> “Chữa Lành Những Sang Chấn Tuổi Thơ” là cuốn sách giúp bạn khám phá những tác động của mất mát đau thương, ngược đãi, lạm dụng tình dục, phân biệt chủng tộc, kỳ thị nữ giới, bạo lực gia đình, bạo lực cộng đồng, các vấn đề bản dạng giới và tình dục, án oan... để từ đó giúp ta hiểu thêm về sức khỏe, quá trình chữa lành cũng như khả năng phục hồi và trưởng thành sau sang chấn. <br> Và câu hỏi cơ bản “Điều gì đã xảy ra?” có thể giúp mỗi chúng ta hiểu thêm một chút về cách mà những trải nghiệm - cả tốt lẫn xấu - định hình con người mình. Khi chia sẻ những câu chuyện và khái niệm khoa học này, tác giả hy vọng mỗi người đọc, theo từng cách riêng, sẽ có được những chiêm nghiệm riêng để từ đó có thể sống tốt hơn, trọn vẹn hơn.',
  })

  sp.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

//TEST
app.get('/try', (req, res) => {        
  SP.find({danhmuc: 'sachmoi'})
  .then(result => {
      res.send(result);
      //res.render('tt', { sp: result, title: result.tensach });
    })
    .catch(err => {
      console.log(err);
    });
});