import { useContext } from "react";
import { ButtonComponent } from "../pure/ButtonComponent";
import { PokemonContext } from "../../context/PokemonContext";
import { pokemonTypeStates } from "../../helpers/colorsPokemon";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { TypesCheckboxComponent } from "./TypesCheckboxComponent";

export const TypesFilterComponent = () => {
  const { filterActive, types } = useContext(PokemonContext);
  const { typeSelected, setTypeSelected } = types;
  const handleCloseFilter = () => filterActive.setActive(false);
  const handleResetFilter = () => setTypeSelected(pokemonTypeStates);
  return (
    <div className="fixed z-50 inset-x-5 backdrop-blur-2xl bg-white/90 px-1 rounded-md shadow-lg shadow-gray-400/50">
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <ButtonComponent
          text="Borrar filtros"
          color="btn-white"
          size="px-4 h-8"
          handleClick={handleResetFilter}
        />
        <ButtonComponent
          text={<XMarkIcon class="size-10" />}
          color="btn-white"
          size="size-8"
          handleClick={handleCloseFilter}
        />
      </div>
      <ul className="ks-cboxtags flex flex-wrap justify-center mt-14 mb-6 gap-2">
        {typeSelected.map((el, index) => (
          <TypesCheckboxComponent key={index} type={el} />
        ))}
      </ul>
    </div>
  );
};
