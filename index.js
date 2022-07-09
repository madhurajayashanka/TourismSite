$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".resNavBar").css("background", "#1363DF");
      $(".resNavBar").css(
        "box-shadow",
        "0px 10px 13px -7px #000000, 0px 21px 14px 1px rgba(0,0,0,0.04)"
      );
    } else {
      $(".resNavBar").css("background", "transparent");
      $(".resNavBar").css(
        "box-shadow",
        "0px 0 0 0 transparent, 0px 0 0 1px transparent"
      );
    }
  });
});

function changeColor() {
  document.getElementById("navBarId").style.backgroundColor = "#1363DF";
  document.getElementById("navBarId").style.boxShadow =
    "0px 10px 13px -7px #000000, 0px 21px 14px 1px rgba(0,0,0,0.04)";
}
