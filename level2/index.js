const OnlyForModal = document.querySelector(".black-bg");

OnlyForModal.addEventListener("click", function (e) {
  if (e.target == this) {
    document.querySelector(".black-bg").classList.remove("show-modal");
    document.querySelector(".white-bg").classList.remove("show-modal");
    console.log(e.target);
  }
});
