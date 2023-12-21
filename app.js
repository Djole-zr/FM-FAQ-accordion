document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");

  
    accordionItems.forEach(item => {
      const heading = item.querySelector(".question");
      const content = item.querySelector("p");
      const icon = item.querySelector("img");
  
      heading.addEventListener("click", function() {
        content.classList.toggle("show");
        if (content.classList.contains('show')) {
          icon.src = "assets/images/icon-minus.svg"
        } else {
          icon.src = "assets/images/icon-plus.svg"
        }

        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.querySelector("p").classList.remove("show");
            otherItem.querySelector("img").src = "assets/images/icon-plus.svg"
          }
        });
      });
    });
  });