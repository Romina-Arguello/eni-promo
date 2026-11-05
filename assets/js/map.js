document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("students-map").setView([46.603354, 1.888334], 6);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  loadStudents()
    .then((students) => {
      const markers = [];
      const usedCoordinates = new Map();

      students.forEach((student) => {
        if (!hasValidCoordinates(student.coordonnees)) {
          return;
        }

        const { latitude, longitude } = student.coordonnees;
        const coordinateKey = `${latitude},${longitude}`;

        const duplicateIndex = usedCoordinates.get(coordinateKey) || 0;
        usedCoordinates.set(coordinateKey, duplicateIndex + 1);

        const offset = duplicateIndex * 0.0005;

        const displayLatitude = latitude + offset;
        const displayLongitude = longitude + offset;

        const defaultAvatar = "assets/images/avatars/default.svg";

        const avatar = document.createElement("img");
        avatar.className = "student-map-marker__avatar";
        avatar.src = student.avatar || defaultAvatar;
        avatar.alt = "";

        avatar.addEventListener("error", () => {
          if (!avatar.src.endsWith("/default.svg")) {
            avatar.src = defaultAvatar;
          }
        });

        const markerContent = document.createElement("div");
        markerContent.className = "student-map-marker";
        markerContent.append(avatar);

        const customIcon = L.divIcon({
          html: markerContent,
          className: "",
          iconSize: [36, 44],
          iconAnchor: [18, 44],
          popupAnchor: [0, -44],
        });

        const marker = L.marker([displayLatitude, displayLongitude], {
          icon: customIcon,
          // Accessible name of the marker (role="button" set by Leaflet)
          title: `${student.nom} ${student.prenom}, ${student.ville}`,
        }).addTo(map);

        const popup = document.createElement("div");
        popup.className = "student-map-popup";

        const popupAvatar = document.createElement("img");
        popupAvatar.className = "student-map-popup__avatar";
        popupAvatar.src = student.avatar || defaultAvatar;
        popupAvatar.alt = "";
        popupAvatar.width = 64;
        popupAvatar.height = 64;

        popupAvatar.addEventListener("error", () => {
          if (!popupAvatar.src.endsWith("/default.svg")) {
            popupAvatar.src = defaultAvatar;
          }
        });

        const name = document.createElement("strong");
        name.textContent = `${student.nom} ${student.prenom}`;
        const city = document.createElement("p");
        city.textContent = student.ville;

        const profileButton = document.createElement("button");
        profileButton.type = "button";
        profileButton.className = "student-map-popup__button";
        profileButton.textContent = "Voir le profil";
        profileButton.dataset.studentId = student.id;

        popup.append(popupAvatar, name, city, profileButton);
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
