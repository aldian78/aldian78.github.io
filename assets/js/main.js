// BUTTON QTY 
// $(this).next untuk mencari element selanjutnya yaitu input
$('.button-minus').on('click', function (e) {
    e.preventDefault();
    var minus = Number($(this).next().val());
    if (minus > 1) $(this).next().val(minus - 1);
});

// $(this).prev untuk mencari element sebelumnya yaitu input
$('.button-plus').on('click', function (e) {
    e.preventDefault();
    var plus = Number($(this).prev().val());
    $(this).prev().val(plus + 1);
});
// END BUTTON QTY

// PAGE TO TOP
var btn = document.getElementById("pagetoTop");

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

function topFunction() {
    $('html, body').animate({
        scrollTop: 0
    }, '300');
};
// END PAGE TO TOP

// EYES FORM CONTROL PASSWORD

function ShowHidePassword() {
    const password = document.querySelector('#inputPassword');
    const Konfirmasipassword = document.querySelector('#inputKonfirmasiPassword');

    const getType = password.getAttribute('type');
    if (getType === "password") {
        password.setAttribute("type", "text");
        if (Konfirmasipassword !== null) {
            Konfirmasipassword.setAttribute("type", "text");
        }
    } else {
        password.setAttribute("type", "password");
        if (Konfirmasipassword !== null) {
            Konfirmasipassword.setAttribute("type", "password");
        }
    }
}
// END EYES FORM CONTROL PASSWORD