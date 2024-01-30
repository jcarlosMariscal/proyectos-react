import { resetString } from "../../helpers/resetString";
import PropTypes from "prop-types";
import { colours, secondaryColor } from "../../helpers/colorsPokemon";

export const TypePokemonComponent = ({ name }) => {
  const bg = secondaryColor(colours[name]);
  return (
    <span
      className="mr-2 text-white rounded-lg py-1 px-3"
      style={{
        background: `${bg}`,
      }}
    >
      {resetString(name)}
    </span>
  );
};

TypePokemonComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
