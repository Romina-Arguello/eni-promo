/**
 * Fetches the whole promo.json file.
 * Shared by loadStudents() and loadPromo() so the fetch logic is written once.
 *
 * @returns {Promise<Object>} The parsed JSON content ({ promo, apprenants }).
 * @throws {Error} If the file cannot be loaded.
 */
async function loadPromoData() {
  const response = await fetch("data/promo.json");

  if (!response.ok) {
    throw new Error("Impossible de charger les données de la promotion.");
  }

  return response.json();
}

/**
 * Returns the list of students of the promotion.
 *
 * @returns {Promise<Array<Object>>} The students array.
 */
async function loadStudents() {
  const data = await loadPromoData();
  return data.apprenants;
}

/**
 * Returns the general information about the promotion
 * (name, start date, end date, description, number of students).
 *
 * @returns {Promise<Object>} The promo object.
 */
async function loadPromo() {
  const data = await loadPromoData();
  return data.promo;
}
