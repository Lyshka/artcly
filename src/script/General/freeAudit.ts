const freeAuditHandle = () => {
  const modalFreeAudit = document.getElementById(
    "modalFreeAudit"
  ) as HTMLElement;
  const closeModal = modalFreeAudit.querySelector(
    ".closeModal"
  ) as HTMLButtonElement;
  const openFreeAuditElements =
    document.querySelectorAll<HTMLButtonElement>(".openFreeAudit");

  openFreeAuditElements.forEach((openFreeAudit) => {
    openFreeAudit.onclick = () => {
      modalFreeAudit.classList.add("open");
    };
  });

  closeModal.onclick = () => {
    modalFreeAudit.classList.remove("open");
  };
};
freeAuditHandle();
