document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".site-nav__toggle");
    const navigation = document.querySelector(".site-nav");

    if (!toggle || !navigation) return;

    toggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");

        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute(
            "aria-label",
            isOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"
        );
    });

    document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
        navigation.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Ouvrir le menu de navigation");
        toggle.focus();
    }
});
});