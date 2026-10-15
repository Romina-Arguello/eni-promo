document.addEventListener("DOMContentLoaded", () => {
  const studentsContainer = document.getElementById("students-container");
  const viewOptions = document.querySelectorAll('input[name="student-view"]');
  const searchInput = document.getElementById("student-search");

 loadStudents()
  .then((students) => {
    studentsContainer.replaceChildren();

    students.forEach((student) => {
      const card = document.createElement("article");
      card.className = "student-card";

      const content = document.createElement("div");
      content.className = "student-card__content";

      const name = document.createElement("h2");
      name.className = "student-card__name";
      name.textContent = `${student.prenom} ${student.nom}`;

      const city = document.createElement("p");
      city.className = "student-card__city";
      city.textContent = student.ville;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "student-card__button";
      button.textContent = "Voir le profil";

      content.append(name, city);
      card.append(content, button);
      studentsContainer.append(card);
    });
  })
  .catch((error) => {
    studentsContainer.textContent =
      "Une erreur est survenue lors du chargement des apprenants.";
    console.error(error);
  });
  viewOptions.forEach((option) => {
    option.addEventListener("change", () => {
      if (!option.checked) return;

      studentsContainer.classList.remove(
        "students-results__container--list",
        "students-results__container--grid",
      );

      studentsContainer.classList.add(
        `students-results__container--${option.value}`,
      );
    });
  });
});

