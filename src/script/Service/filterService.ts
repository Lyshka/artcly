const filterService = () => {
  const listServicePage = document.getElementById(
    "listServicePage"
  ) as HTMLElement;

  if (!listServicePage) return;

  const openServiceFilter = document.getElementById(
    "openServiceFilter"
  ) as HTMLButtonElement;

  let open = false;

  openServiceFilter.onclick = () => {
    open = !open;

    if (open) {
      listServicePage.classList.add("open");
      openServiceFilter.classList.add("active");
    } else {
      listServicePage.classList.remove("open");
      openServiceFilter.classList.remove("active");
    }
  };
};

filterService();
