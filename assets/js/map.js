document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("students-map").setView([46.603354, 1.888334], 6);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  loadStudents()
  .then((students) => {
    const markers = [];

    students.forEach((student) => {
      const latitude = Number(student.coordonnees.latitude);
      const longitude = Number(student.coordonnees.longitude);

      if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
        return;
      }

      const marker = L.marker([latitude, longitude]).addTo(map);

      const popup = document.createElement("div");

      const name = document.createElement("strong");
      name.textContent = `${student.nom} ${student.prenom}`;

      const city = document.createElement("p");
      city.textContent = student.ville;

      popup.append(name, city);
      marker.bindPopup(popup);

      markers.push(marker);
    });

    if (markers.length > 0) {
      const group = L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.1), { maxZoom: 10 });
    }
  })
  .catch((error) => {
    console.error("Erreur de chargement des apprenants :", error);
  });
});

