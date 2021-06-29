// $(function () {
//   $("input").focusin(function(){
//     $(this).attr("placeholder","キーワードを入力");
//   })
//   $("input").focusout(function () {
//     $(this).attr("placeholder","ここで検索");
//   });
// });

$(function () {
  $(".description").hide();
  $(".box").hover(function () {
    $(".description").fadeToggle();
  });
});