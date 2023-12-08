var slideIndex = 1;
carousel();
//plusDivs: page transition manually with button
function plusDivs(n) {
    slideIndex += n;
    var i;
    var x = document.getElementsByClassName("main_banner");
    if (slideIndex > x.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
//carousel: page transition automatic
function carousel() {
    var i;
    var slides = document.getElementsByClassName("main_banner");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}