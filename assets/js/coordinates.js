function hasValidCoordinates(coordinates) {
  if (!coordinates || typeof coordinates !== "object") {
    return false;
  }

  const { latitude, longitude } = coordinates;

  return (
    typeof latitude === "number" &&
    typeof longitude === "number" &&
    Number.isFinite(latitude) &&
    Number.isFinite(longitude) &&
    latitude >= -90 &&
    latitude <= 90 &&
    longitude >= -180 &&
    longitude <= 180
  );
}