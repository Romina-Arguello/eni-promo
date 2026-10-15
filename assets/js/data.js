async function loadStudents() {
  const response = await fetch("data/promo.json");

  if (!response.ok) {
    throw new Error("Impossible de charger les apprenants.");
  }

  const data = await response.json();
  return data.apprenants;
}