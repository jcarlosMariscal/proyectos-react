import { useContext } from "react";
import { colours } from "../../helpers/colorsPokemon";
import { resetString } from "../../helpers/resetString";
import { PropTypes } from "prop-types";
import { PokemonContext } from "../../context/PokemonContext";

export const TypesCheckboxComponent = ({ type }) => {
  const { handleCheckbox } = useContext(PokemonContext);
  return (
    <li>
      <input
        type="checkbox"
        id={`${type.type}`}
        name={`${type.type}`}
        value={`${JSON.stringify(type)}`}
        onChange={handleCheckbox}
      />
      <label
        htmlFor={`${type.type}`}
        className="rounded-full px-4 py-1"
        style={{
          color: `${type.checked ? "white" : colours[type.type]}`,
          background: `${type.checked ? colours[type.type] : "#f9fafb"}`,
          border: `1px solid${colours[type.type]}`,
        }}
      >
        {resetString(type.type)}
      </label>
    </li>
  );
};

TypesCheckboxComponent.propTypes = {
  type: PropTypes.object.isRequired,
};
