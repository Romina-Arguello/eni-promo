const validCoordinates = {
  latitude: 45.6885,
  longitude: 5.9153,
};

const expectedResult = true;
const actualResult = hasValidCoordinates(validCoordinates);

console.assert(
  actualResult === expectedResult,
  "ÉCHEC : les coordonnées valides devraient être acceptées."
);

if (actualResult === expectedResult) {
  console.log("SUCCÈS : les coordonnées valides sont acceptées.");
}

const missingCoordinates = null;

const expectedMissingResult = false;
const actualMissingResult = hasValidCoordinates(missingCoordinates);

console.assert(
  actualMissingResult === expectedMissingResult,
  "ÉCHEC : les coordonnées null devraient être refusées."
);

if (actualMissingResult === expectedMissingResult) {
  console.log("SUCCÈS : les coordonnées null sont refusées.");
}

const invalidLatitude = {
  latitude: 120,
  longitude: 5.9153,
};

const expectedLatitudeResult = false;
const actualLatitudeResult = hasValidCoordinates(invalidLatitude);

console.assert(
  actualLatitudeResult === expectedLatitudeResult,
  "ÉCHEC : une latitude supérieure à 90 devrait être refusée."
);

if (actualLatitudeResult === expectedLatitudeResult) {
  console.log("SUCCÈS : une latitude hors limites est refusée.");
}

const invalidLongitude = {
  latitude: 45.6885,
  longitude: 250,
};

const expectedLongitudeResult = false;
const actualLongitudeResult = hasValidCoordinates(invalidLongitude);

console.assert(
  actualLongitudeResult === expectedLongitudeResult,
  "ÉCHEC : une longitude supérieure à 180 devrait être refusée."
);

if (actualLongitudeResult === expectedLongitudeResult) {
  console.log("SUCCÈS : une longitude hors limites est refusée.");
}

const emptyLatitude = {
  latitude: "",
  longitude: 5.9153,
};

const expectedEmptyResult = false;
const actualEmptyResult = hasValidCoordinates(emptyLatitude);

console.assert(
  actualEmptyResult === expectedEmptyResult,
  "ÉCHEC : une latitude vide devrait être refusée."
);

if (actualEmptyResult === expectedEmptyResult) {
  console.log("SUCCÈS : une latitude vide est refusée.");
}

const nullLatitude = {
  latitude: null,
  longitude: 5.9153,
};

const expectedNullLatitudeResult = false;
const actualNullLatitudeResult = hasValidCoordinates(nullLatitude);

console.assert(
  actualNullLatitudeResult === expectedNullLatitudeResult,
  "ÉCHEC : une latitude null devrait être refusée."
);

if (actualNullLatitudeResult === expectedNullLatitudeResult) {
  console.log("SUCCÈS : une latitude null est refusée.");
}