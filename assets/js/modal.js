document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("student-modal");
  const closeButton = document.getElementById("student-modal-close");
  const modalTitle = document.getElementById("student-modal-title");
  const modalCity = document.getElementById("student-modal-city");
  const modalAnecdote = document.getElementById("student-modal-anecdote");

  let activeButton = null;

  document.getElementById("students-container").addEventListener("click", async (event) => {
    const button = event.target.closest(".student-card__button");

    if (!button) return;

    const card = button.closest(".student-card");
    const studentId = Number(card.dataset.studentId);

    try {
      const students = await loadStudents();
      const student = students.find((item) => item.id === studentId);

      if (!student) return;

      modalTitle.textContent = `${student.nom} ${student.prenom}`;
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