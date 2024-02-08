document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".books-container-grid-item");

  elements.forEach((element) => {
    element.addEventListener("click", function () {
      console.log("click");
      const child = this.querySelector(".item-details");
      child.classList.toggle("details");
    });
  });
});

document.getElementById("contactForm").onsubmit = function (event) {
  var formData = new FormData(event.target);
  alert("Le message a été envoyé");
};
