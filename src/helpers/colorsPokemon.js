export const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};
export const secondaryColor = (hexColor, factor = 0.5) => {
  // Convierte el color hexadecimal a RGB
  hexColor = hexColor.replace(/^#/, "");
  const bigint = parseInt(hexColor, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Ajusta la luminosidad para oscurecer el color
  const darkenedR = Math.round(r * factor);
  const darkenedG = Math.round(g * factor);
  const darkenedB = Math.round(b * factor);

  // Convierte RGB a formato hexadecimal
  const darkenedHexColor = `#${(
    (darkenedR << 16) |
    (darkenedG << 8) |
    darkenedB
  )
    .toString(16)
    .padStart(6, "0")}`;

  return darkenedHexColor;
};
