import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokedexComponent } from "../components/PokedexComponents/CardPokedexComponent";
export const PokemonSearchPage = () => {
  const location = useLocation();
  const { globalPokemons } = useContext(PokemonContext);
  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );
  // console.log(filteredPokenons);
  return (
    <>
      <div className="container mx-auto my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
        {filteredPokemons.length === 0 ? (
          <p>Pokemón no encontrado</p>
        ) : (
          filteredPokemons.map((pokemon) => (
            <CardPokedexComponent key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </div>
    </>
  );
};
