import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { colours, secondaryColor } from "../../helpers/colorsPokemon";
import { resetString } from "../../helpers/resetString";
import { TypePokemonComponent } from "../pure/TypePokemonComponent";

export const CardPokedexComponent = ({ pokemon }) => {
  const types = pokemon.types.map((type) => type.type.name);
  const primary = colours[types[0]];
  const secondary = secondaryColor(primary);
  const primaryTwo = types.length > 1 ? colours[types[1]] : null;

  const other = pokemon.sprites.other;
  const image =
    other.dream_world.front_default ||
    other["official-artwork"].front_default ||
    other.home.front_default ||
    "../../src/assets/img/pokeballNotFound.png";
  const imageFound =
    other.dream_world.front_default ||
    other["official-artwork"].front_default ||
    other.home.front_default;
  return (
    <>
      <Link
        to={`../pokedex/pokemon/${pokemon.id}`}
        className="rounded-lg relative h-[13rem] md:h-[17rem] mx-4 sm:mx-0"
        style={{
          backgroundImage: primaryTwo
            ? `linear-gradient(75deg, ${primary} 30%, ${primary} 40%, ${primaryTwo} 60%)`
            : `linear-gradient(to left top, ${primary}, ${primary})`,
          color: `${secondary}`,
        }}
      >
        <div className="p-2 text-center sm:text-left">
          <h3 className="font-bold text-xl">{resetString(pokemon.name)}</h3>
          <div className="mt-2">
            {pokemon.types.map((type, index) => (
              <TypePokemonComponent key={index} name={type.type.name} />
            ))}
          </div>
        </div>
        <div
          className={`flex justify-center ${
            imageFound ? "" : "mt-8"
          } animate-movePokemon`}
        >
          <img
            src={image}
            alt={`Pokemon ${pokemon.name}`}
            className={`size-32 sm:${imageFound ? "size-40" : "size-28"}`}
          />
        </div>
      </Link>
    </>
  );
};
CardPokedexComponent.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
