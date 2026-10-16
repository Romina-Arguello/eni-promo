document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("student-modal");
  const closeButton = document.getElementById("student-modal-close");
  const modalTitle = document.getElementById("student-modal-title");
  const modalAvatar = document.getElementById("student-modal-avatar");
  const modalCity = document.getElementById("student-modal-city");
  const modalAnecdote = document.getElementById("student-modal-anecdote");

  let activeButton = null;

  document;
  document.addEventListener("click", async (event) => {
    const button = event.target.closest(
      ".student-card__button, .student-map-popup__button",
    );

    if (!button) return;

    let studentId;

    if (button.matches(".student-card__button")) {
      const card = button.closest(".student-card");
      studentId = Number(card.dataset.studentId);
    } else {
      studentId = Number(button.dataset.studentId);
    }

    try {
      const students = await loadStudents();
      const student = students.find((item) => item.id === studentId);

      if (!student) return;

      modalTitle.textContent = `${student.nom} ${student.prenom}`;
      const defaultAvatar = "assets/images/avatars/default.svg";

      modalAvatar.src = student.avatar || defaultAvatar;
      modalAvatar.onerror = () => {
        if (!modalAvatar.src.endsWith("/default.svg")) {
          modalAvatar.src = defaultAvatar;
        }
      };
      modalCity.textContent = `Ville : ${student.ville}`;
      modalAnecdote.textContent = `Anecdote : ${student.anecdotes}`;

      activeButton = button;
      modal.showModal();
      closeButton.focus();
    } catch (error) {
      console.error("Impossible d'ouvrir le profil :", error);
    }
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("close", () => {
    activeButton?.focus();
  });
});
