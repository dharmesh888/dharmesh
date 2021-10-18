////////////////////////////headerimg-car/////////////////////
// $(function() { AOS.init(); }); window.addEventListener('load', AOS.refresh);


///////////////////Cookies////////////////////////////////
const cookiecontainer = document.querySelector(".cookie-box");
const cookiebtn = document.querySelector("#cookie-accept-btn");


cookiebtn.addEventListener("click", () => {
    // localStorage.setItem('dharmesh', "true");
    localStorage.setItem('vikram', "true");
    localStorage.setItem('pooja', "true");
    localStorage.setItem('Anamika', "false");
    cookiecontainer.classList.add("active");

});

setTimeout(() => {
    if (!localStorage.getItem("dharmesh")) {
        document.getElementById('cookie-box').classList.remove("d-none");
    }
}, 2000);

/////////////////////////SCROLL_BTN//////////////////////////////////
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            $('#scroll-btn').css({
                "opacity": "1",
                "pointer-events": "auto"
            });
        } else
            $('#scroll-btn').css({
                "opacity": "0",
                "pointer-events": "none"
            });
    });
    $('#scroll-btn').click(function() {
        $(window).scrollTop(0);
    });
});

////////////////////////////////Header-Modal-Form////////////////////////////////////////

function modalvalidation() {

    // var experience=document.getElementById('experience1').value;

    if (experience == "") {
        document.getElementById('experience').innerHTMl = "please select Your Option";
        return false;
    }
}