function pag1() {
  x = document.getElementById("pag1");
  x.innerHTML = "<img src='./img/activebarleft1.png'>";
}

$(".notice a").click(function () {
  $(".noteoutl").toggleClass("noteoutl-display");
});

$(document).ready(function () {
  $(".articles1").click(function () {
    $(".phoimg1").attr("src", "./img/activeimg1.png");
  });

  $(".articles2").click(function () {
    $(".phoimg2").attr("src", "./img/activeimg2.png");
  });

  $(".articles3").click(function () {
    $(".phoimg3").attr("src", "./img/activeimg3.png");
  });

  $(".articles4").click(function () {
    $(".phoimg4").attr("src", "./img/activeimg4.png");
  });

  $(".articles5").click(function () {
    $(".phoimg5").attr("src", "./img/activeimg5.png");
  });

  $(".articles6").click(function () {
    $(".phoimg6").attr("src", "./img/activeimg6.png");
  });

  $(".articles7").click(function () {
    $(".phoimg7").attr("src", "./img/activeimg7.png");
  });
});
