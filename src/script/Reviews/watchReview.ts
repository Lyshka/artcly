const watchReviewHandle = () => {
  const previewReviewImageElemets = document.querySelectorAll<HTMLElement>(
    ".previewReviewImage"
  );

  if (!previewReviewImageElemets) return;

  const reviewModal = document.getElementById("reviewModal") as HTMLElement;

  if (!reviewModal) {
    return;
  }

  const closeModal = reviewModal.querySelector(
    ".closeModal"
  ) as HTMLButtonElement;
  const imageFullReview = reviewModal.querySelector(
    ".imageFullReview"
  ) as HTMLImageElement;

  previewReviewImageElemets.forEach((previewReviewImage) => {
    previewReviewImage.onclick = () => {
      const imageSrc = previewReviewImage.dataset["image"] as string;

      imageFullReview.src = imageSrc;
      reviewModal.classList.add("active");
    };
  });

  closeModal.onclick = () => {
    reviewModal.classList.remove("active");
  };
};
watchReviewHandle();

const openMenuInfoReview = () => {
  const containerCardReviewElements = document.querySelectorAll<HTMLElement>(
    ".containerCardReview"
  );

  if (!containerCardReviewElements) return;

  containerCardReviewElements.forEach((containerCardReview) => {
    const containerInfoReviewsElement = containerCardReview.querySelector(
      ".containerInfoReviews"
    ) as HTMLElement;

    const mobileCardButtonReviewOpenInfoElement =
      containerCardReview.querySelector(
        ".mobileCardButtonReviewOpenInfo"
      ) as HTMLElement;
    const arrowIconElement =
      mobileCardButtonReviewOpenInfoElement.querySelector(
        ".iconArrow"
      ) as HTMLElement;

    let open = false;

    mobileCardButtonReviewOpenInfoElement.onclick = () => {
      open = !open;

      if (!open) {
        containerInfoReviewsElement.classList.remove("open");
        arrowIconElement.classList.remove("active");
      } else {
        containerInfoReviewsElement.classList.add("open");
        arrowIconElement.classList.add("active");
      }
    };
  });
};
openMenuInfoReview();
