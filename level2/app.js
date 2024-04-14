const tabBtn = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

// for (let i = 0; i < tabBtn.length; i++) {
//   tabBtn[i].addEventListener("click", function () {
//     tabBtn.forEach((btn) => btn.classList.remove("orange"));
//     tabBtn[i].classList.add("orange");

//     tabContent.forEach((content) => content.classList.remove("show"));
//     tabContent[i].classList.add("show");
//   });
// }

/*for (let i = 0; i < 3; i++) {
  // jQuery를 사용할 경우, 클래스 선택자는 "."을 붙여야 합니다.
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      // 모든 버튼에 대한 동작
      $(".tab-button").removeClass("orange");
      $(".tab-button").eq(i).addClass("orange");

      // 모든 콘텐츠에 대한 동작
      $(".tab-content").removeClass("show");
      $(".tab-content").eq(i).addClass("show");
    });
}
*/

$(".list").click(function () {
  if (e.target == document.querySelectorAll(".tab-button")[0]) {
    $(".tab-button").eq(0).addClass(".orange");
  }
});
