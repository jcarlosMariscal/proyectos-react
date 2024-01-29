import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// const typeColorPokemon = (type) => {
const colours = {
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
const getColor = (hexColor, factor = 0.5) => {
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
// };
export const CardPokeComponent = ({ pokemon }) => {
  return (
    <>
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="rounded-lg relative h-[13rem] md:h-[15rem] md:h-[13rem] mx-4 sm:mx-0"
        style={{
          background: `${colours[pokemon.types[0].type.name]}`,
          color: `${getColor(colours[pokemon.types[0].type.name])}`,
        }}
      >
        <div className="p-2 text-center sm:text-left">
          {/* <span>N° {pokemon.id}</span> */}
          <h3 className="font-bold text-2xl">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h3>
          <div className="mt-2">
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                className="mr-2"
                style={{
                  background: `${getColor(colours[type.type.name])}`,
                  color: `${colours[type.type.name]}`,
                  borderRadius: ".5rem",
                  padding: ".3rem 1rem",
                }}
              >
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center sm:absolute sm:bottom-0 sm:right-[-1.5rem] md:right-[1.5rem] lg:right-[-1rem] xl:right-[-1.5rem] animate-movePokemon">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
            className="size-32 sm:size-40"
          />
        </div>
      </Link>
    </>
  );
};
CardPokeComponent.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
