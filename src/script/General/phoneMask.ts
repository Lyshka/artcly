import IMask from "imask";

const phoneInputs =
  document.querySelectorAll<HTMLInputElement>('input[type="tel"]');

phoneInputs.forEach((input) => {
  IMask(input, {
    mask: [
      {
        mask: "+375 (00) 000 00 00",
        lazy: false,
      },
    ],
  });
});
