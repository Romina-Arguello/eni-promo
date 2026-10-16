
const preferencesForm = document.querySelector("#preferences-form");
const preferencesFeedback = document.querySelector("#preferences-feedback");

// Récupérer les préférences enregistrées
const savedView = localStorage.getItem("view") || "list";
const selectedSavedTheme = localStorage.getItem("theme") === "dark"
    ? "dark"
    : "light";
// Préselectionner les options sauvegardées
preferencesForm.elements.theme.value = selectedSavedTheme;
preferencesForm.elements.view.value = savedView;

// Enregistrer uniquement lors de la validation
preferencesForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedTheme = preferencesForm.elements.theme.value;
    const selectedView = preferencesForm.elements.view.value;

    localStorage.setItem("theme", selectedTheme);
    localStorage.setItem("view", selectedView);
    document.documentElement.dataset.theme = selectedTheme;

    preferencesFeedback.textContent = "Vos préférences ont été enregistrées.";
});
