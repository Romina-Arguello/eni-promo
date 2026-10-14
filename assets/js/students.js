document.addEventListener("DOMContentLoaded", () => {
    const studentsContainer = document.getElementById("students-container");
    const viewOptions = document.querySelectorAll('input[name="student-view"]');

    viewOptions.forEach((option) => {
        option.addEventListener("change", () => {
            if (!option.checked) return;

            studentsContainer.classList.remove(
                "students-results__container--list",
                "students-results__container--grid"
            );

            studentsContainer.classList.add(
                `students-results__container--${option.value}`
            );
        });
    });
});
