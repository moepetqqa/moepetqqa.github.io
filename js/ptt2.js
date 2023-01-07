$(".user .ub").click(function () {
  $(".user").toggleClass("expend");
  $(".visitor").toggleClass("hide");
});
$(".uw button").click(function () {
  var inputAccount = $('.input-area input[type="text"]').val();
  console.log(inputAccount);
  var inputPassword = $('.input-area input[type="password"]').val();
  if (inputAccount == "") {
    alert("請輸入帳號");
  } else if (inputPassword == "") {
    alert("請輸入密碼");
  }
});
