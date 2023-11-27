const express = require('express')
const path = require('path')
const webRoute = require('./route/web')

const app = express()
const port = 3000

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//config static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', webRoute)

app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});