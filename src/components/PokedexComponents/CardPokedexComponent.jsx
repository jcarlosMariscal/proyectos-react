import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { colours, secondaryColor } from "../../helpers/colorsPokemon";
import { resetString } from "../../helpers/resetString";
import { TypePokemonComponent } from "../pure/TypePokemonComponent";

export const CardPokedexComponent = ({ pokemon }) => {
  const primary = colours[pokemon.types[0].type.name];
  const secondary = secondaryColor(primary);
  return (
    <>
      <Link
        to={`pokemon/${pokemon.id}`}
        className="rounded-lg relative h-[13rem] md:h-[15rem] md:h-[13rem] mx-4 sm:mx-0"
        style={{
          background: `${primary}`,
          color: `${secondary}`,
        }}
      >
        <div className="p-2 text-center sm:text-left">
          <h3 className="font-bold text-2xl">{resetString(pokemon.name)}</h3>
          <div className="mt-2">
            {pokemon.types.map((type, index) => (
              <TypePokemonComponent key={index} name={type.type.name} />
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
CardPokedexComponent.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
