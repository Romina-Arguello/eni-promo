/**
 * Information page: displays the general details of the promotion
 * (name, training period, number of students, description)
 * read from data/promo.json.
 */
document.addEventListener("DOMContentLoaded", () => {
  const promoName = document.getElementById("promo-name");
  const promoPeriod = document.getElementById("promo-period");
  const promoCount = document.getElementById("promo-count");
  const promoDescription = document.getElementById("promo-description");

  // French date format, e.g. "05/01/2026".
  // timeZone "UTC" avoids a one-day shift: "2026-01-05" is read as UTC midnight.
  const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });

  /**
   * Builds a <time> element: readable text for the user,
   * machine-readable ISO date in the datetime attribute.
   *
   * @param {string} isoDate Date in YYYY-MM-DD format.
   * @returns {HTMLTimeElement}
   */
  function createTimeElement(isoDate) {
    const time = document.createElement("time");
    time.dateTime = isoDate;
    time.textContent = dateFormatter.format(new Date(isoDate));
    return time;
  }

  loadPromo()
    .then((promo) => {
      promoName.textContent = promo.nom;

      promoPeriod.replaceChildren(
        "Du ",
        createTimeElement(promo.dateDebut),
        " au ",
        createTimeElement(promo.dateFin),
      );

      promoCount.textContent = promo.nombreApprenants;
      promoDescription.textContent = promo.description;
    })
    .catch((error) => {
      const message = "Information indisponible";
      promoName.textContent = message;
      promoPeriod.textContent = message;
      promoCount.textContent = message;
      console.error(error);
    });
});
