import { isMobileDevice } from "../utils";

const headerMenu = () => {
  const openMenu = document.getElementById("openMenu") as HTMLButtonElement;
  const closeMenu = document.getElementById("closeMenu") as HTMLButtonElement;
  const menu = document.getElementById("menu");
  const mobileMenu = document.getElementById("mobileMenu");
  // const HTMLALL = document.querySelector("html") as HTMLElement;

  closeMenu.onclick = () => {
    closeMenu?.classList.toggle("open");
    openMenu?.classList.toggle("open");

    if (closeMenu.classList.contains("open")) {
      // HTMLALL.style.overflowY = "hidden";

      if (isMobileDevice()) {
        mobileMenu?.classList.add("open");
      } else {
        menu?.classList.add("open");
      }
    } else {
      // HTMLALL.style.overflowY = "scroll";

      if (isMobileDevice()) {
        mobileMenu?.classList.remove("open");
      } else {
        menu?.classList.remove("open");
      }
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

const mobileMenuLists = () => {
  const mobileServiceButtunOpenMenu = document.getElementById(
    "mobileServiceButtunOpenMenu"
  ) as HTMLButtonElement;
  const menuSecondPopupHeaderMobile = document.getElementById(
    "menu-second-popup-header-mobile"
  ) as HTMLElement;

  let open = false;

  mobileServiceButtunOpenMenu.onclick = () => {
    open = !open;

    if (!open) {
      mobileServiceButtunOpenMenu.style.color = "#333333";
      menuSecondPopupHeaderMobile.classList.remove("open");
    } else {
      mobileServiceButtunOpenMenu.style.color = "#4042E2";
      menuSecondPopupHeaderMobile.classList.add("open");
    }
  };

  const mobileOpenButtonSiteCreateMenuList = document.getElementById(
    "mobileOpenButtonSiteCreateMenuList"
  ) as HTMLButtonElement;
  const menuMobileSiteCreationList = document.getElementById(
    "menuMobileSiteCreationList"
  ) as HTMLElement;
  const mobileDownBlockInDown = document.getElementById(
    "mobileDownBlockInDown"
  ) as HTMLElement;
  const mobileDownBlockInDown2 = document.getElementById(
    "mobileDownBlockInDown2"
  ) as HTMLElement;

  let open2 = false;

  mobileOpenButtonSiteCreateMenuList.onclick = () => {
    open2 = !open2;

    if (!open2) {
      mobileOpenButtonSiteCreateMenuList.style.color = "#545454";
      menuMobileSiteCreationList.classList.remove("open");
      mobileDownBlockInDown.style.bottom = "0px";
      mobileDownBlockInDown2.style.bottom = "0px";
    } else {
      mobileOpenButtonSiteCreateMenuList.style.color = "#4042E2";
      menuMobileSiteCreationList.classList.add("open");
      mobileDownBlockInDown.style.bottom = "-100px";
      mobileDownBlockInDown2.style.bottom = "-100px";
    }
  };
};
mobileMenuLists();
