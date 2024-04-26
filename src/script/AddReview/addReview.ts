const handleImageInputInfo = () => {
  const inputFileReview = document.getElementById(
    "inputFileReview"
  ) as HTMLInputElement;

  if (!inputFileReview) return;

  const imageName = document.getElementById("imageName") as HTMLElement;

  inputFileReview.onchange = (event: Event) => {
    const fileInput = (event.target as HTMLInputElement).files;
    if (fileInput && fileInput.length > 0) {
      const firstFileName = fileInput[0].name;
      imageName.textContent = firstFileName;
    }
  };
};
handleImageInputInfo();

const openListWorkName = () => {
  const listWorkName = document.getElementById("listWorkName") as HTMLElement;

  if (!listWorkName) return;

  const openListWorkName = document.getElementById(
    "openListWorkName"
  ) as HTMLButtonElement;

  let open = false;

  openListWorkName.onclick = () => {
    open = !open;

    if (!open) {
      listWorkName.classList.remove("open");
      openListWorkName.classList.remove("active");
    } else {
      listWorkName.classList.add("open");
      openListWorkName.classList.add("active");
    }
  };
};
openListWorkName();

const observerWorkNameChecked = () => {
  const containerCheckedWorkName = document.getElementById(
    "containerCheckedWorkName"
  ) as HTMLElement;

  const checkedWorkNameInputElements = [
    ...document.querySelectorAll<HTMLInputElement>(".workNameInput:checked"),
  ];

  const deleteButton = checkedWorkNameInputElements
    .map(
      (checkedWorkNameInput) => `
        <div data-id-input="${checkedWorkNameInput.id}" class="flex gap-[5px] items-center deleteButton cursor-pointer group hover:text-[#605EB3]" role="button">
          ${checkedWorkNameInput.value}

          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2896_9538)">
<path d="M0.8125 0.75L13.8591 12.4972L13.1814 13.2499L0.134777 1.50269L0.8125 0.75Z" fill="#545454"/>
<path class="group-hover:fill-[#605EB3]" d="M0.8125 13.2501L13.8591 1.50286L13.1814 0.750171L0.134777 12.4974L0.8125 13.2501Z" fill="#545454"/>
</g>
<defs>
<clipPath id="clip0_2896_9538">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
        </div>
      `
    )
    .join("");
  containerCheckedWorkName.innerHTML = "";
  containerCheckedWorkName.innerHTML = deleteButton;

  const deleteButtonElements =
    document.querySelectorAll<HTMLButtonElement>(".deleteButton");

  deleteButtonElements.forEach((deleteButton) => {
    deleteButton.onclick = () => {
      const idInput = deleteButton.dataset["idInput"] as string;
      const inputUnChecked = document.getElementById(
        idInput
      ) as HTMLInputElement;

      deleteButton.remove();
      inputUnChecked.checked = false;
    };
  });
};

const selectWorkName = () => {
  const workNameInputElements =
    document.querySelectorAll<HTMLInputElement>(".workNameInput");

  workNameInputElements.forEach((workNameInput) => {
    workNameInput.onchange = () => {
      observerWorkNameChecked();
    };
  });
};
selectWorkName();
