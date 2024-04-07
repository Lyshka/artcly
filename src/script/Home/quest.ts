const Quest = () => {
  const questCardElements = document.querySelectorAll(".questCard");

  questCardElements.forEach((questCard) => {
    questCard.addEventListener("click", () => {
      const arrowIconElement = questCard.querySelector(".arrowIcon");
      const arrowIconColorElement =
        arrowIconElement?.querySelector(".arrowIconColor");
      const questText = questCard.querySelector(".questText");

      arrowIconElement?.classList.toggle("active");
      arrowIconColorElement?.classList.toggle("active");
      
      questText?.classList.toggle("open");
    });
  });
};

Quest();
