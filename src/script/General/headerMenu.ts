const headerMenu = () => {
  const openMenu = document.getElementById("openMenu") as HTMLButtonElement;
  const closeMenu = document.getElementById("closeMenu") as HTMLButtonElement;
  const menu = document.getElementById("menu");
  const HTMLALL = document.querySelector("html") as HTMLElement;

  closeMenu.onclick = () => {
    closeMenu?.classList.toggle("open");
    openMenu?.classList.toggle("open");

    if (closeMenu.classList.contains("open")) {
      HTMLALL.style.overflowY = "hidden";
      menu?.classList.add("open");
    } else {
      HTMLALL.style.overflowY = "scroll";
      menu?.classList.remove("open");
    }
  };
};
headerMenu();

const subMenu = () => {
  const menuitemElements = document.querySelectorAll(".menu-item");

  menuitemElements.forEach((menuitem) => {
    const subMenuElement = menuitem.querySelector(".sub-menu");
    const firstMenuItem = menuitem.querySelector("a");

    if (subMenuElement) {
      menuitem.addEventListener("mouseenter", () => {
        firstMenuItem?.classList.add("active");
        subMenuElement?.classList.add("active");
      });

      menuitem.addEventListener("mouseleave", () => {
        firstMenuItem?.classList.remove("active");
        subMenuElement?.classList.remove("active");
      });
    }
  });
};
subMenu();
