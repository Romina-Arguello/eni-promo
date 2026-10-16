document.addEventListener("DOMContentLoaded", () => {
  const studentsContainer = document.getElementById("students-container");
  const viewOptions = document.querySelectorAll('input[name="student-view"]');
  const searchInput = document.getElementById("student-search");
  const citySelect = document.getElementById("student-city");
  const sortSelect = document.getElementById("student-sort");
  const studentsCount = document.getElementById("students-count");

  // Chargement des apprenants depuis le fichier JSON
  loadStudents()
    .then((students) => {
      studentsContainer.replaceChildren();

      // Création dynamique des fiches
      students.forEach((student) => {
        const card = document.createElement("article");
        card.className = "student-card";
        card.dataset.lastname = student.nom;
        card.dataset.studentId = student.id;

        const content = document.createElement("div");
        content.className = "student-card__content";

        const name = document.createElement("h2");
        name.className = "student-card__name";
        name.textContent = `${student.nom} ${student.prenom}`;

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

      // Création automatique du filtre par ville
      const cities = [
        ...new Set(students.map((student) => student.ville)),
      ].sort((a, b) => a.localeCompare(b, "fr"));

      cities.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.append(option);
      });

      // Recherche dynamique et filtrage par ville

      function filterStudents() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const selectedCity = citySelect.value;

        const cards = studentsContainer.querySelectorAll(".student-card");
        let visibleCount = 0;

        cards.forEach((card) => {
          const studentName = card
            .querySelector(".student-card__name")
            .textContent.toLowerCase();

          const studentCity = card.querySelector(
            ".student-card__city",
          ).textContent;

          const matchesName = studentName.includes(searchTerm);
          const matchesCity =
            selectedCity === "" || studentCity === selectedCity;

          const isVisible = matchesName && matchesCity;
          card.hidden = !isVisible;

          if (isVisible) {
            visibleCount++;
          }
        });

        studentsCount.textContent =
          visibleCount === 0
            ? "Aucun apprenant trouvé"
            : `${visibleCount} apprenant${visibleCount > 1 ? "s" : ""}`;
      }

      // Événements des filtres
      searchInput.addEventListener("input", filterStudents);
      citySelect.addEventListener("change", filterStudents);
      filterStudents();

      function sortStudents() {
        const direction = sortSelect.value;

        const cards = [...studentsContainer.querySelectorAll(".student-card")];

        cards.sort((cardA, cardB) => {
          const nameA = cardA.dataset.lastname;
          const nameB = cardB.dataset.lastname;

          return direction === "asc"
            ? nameA.localeCompare(nameB, "fr")
            : nameB.localeCompare(nameA, "fr");
        });

        studentsContainer.append(...cards);
      }

      sortSelect.addEventListener("change", sortStudents);
      sortStudents();
    })

    .catch((error) => {
      studentsContainer.textContent =
        "Une erreur est survenue lors du chargement des apprenants.";

      console.error(error);
    });
  // Mode d'affichage enregistré ou valeur par défaut
  const savedView = localStorage.getItem("view") === "grid" ? "grid" : "list";

  function applyView(view) {
    studentsContainer.classList.remove(
      "students-results__container--list",
      "students-results__container--grid",
    );

    studentsContainer.classList.add(`students-results__container--${view}`);

    const selectedOption = [...viewOptions].find(
      (option) => option.value === view,
    );

    if (selectedOption) {
      selectedOption.checked = true;
    }
  }

  // Restaurer le mode enregistré au chargement
  applyView(savedView);

  // Enregistrer immédiatement les changements
  viewOptions.forEach((option) => {
    option.addEventListener("change", () => {
      if (!option.checked) return;

      applyView(option.value);
      localStorage.setItem("view", option.value);
    });
  });
});
