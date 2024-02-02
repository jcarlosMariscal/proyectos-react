import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokedexComponent } from "../components/PokedexComponents/CardPokedexComponent";
import { LoaderComponent } from "../components/pure/LoaderComponent";
import { Pagination } from "../components/Pagination";
import { TypesFilterComponent } from "../components/PokedexComponents/TypesFilterComponent";

export const PokedexPage = () => {
  const { allPokemons, loading, filterActive, filteredPokemons } =
    useContext(PokemonContext);
  const [itemsPerPage] = useState(40);
  const dataPokemons = filteredPokemons.length ? filteredPokemons : allPokemons;
  return (
    <div className="relative">
      {filterActive.active && <TypesFilterComponent />}
      {loading ? (
        <div className="h-[calc(90vh-2rem)] flex justify-center items-center">
          <LoaderComponent />
        </div>
      ) : (
        <>
          <div className="container mx-auto my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {dataPokemons.map((pokemon) => (
              <CardPokedexComponent key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </>
      )}
      {!filteredPokemons.length && (
        <div className="flex justify-center my-3">
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      )}
    </div>
  );
};
