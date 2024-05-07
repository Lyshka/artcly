import IMask from "imask";

const phoneInput = [
  ...document.querySelectorAll(".phone-input"),
] as HTMLInputElement[];

phoneInput.forEach((el) => {
  IMask(el, {
    mask: "+375 (00) 000-00-00",
    prepare: function (appended) {
      if (/[0-9]/.test(appended)) {
        return "+375" + appended;
      }
      return appended;
    },
  });
});
