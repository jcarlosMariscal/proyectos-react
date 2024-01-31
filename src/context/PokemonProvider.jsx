import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { PropTypes } from "prop-types";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  // Estados simples para la aplicacion
  const [loading, setLoading] = useState(true);
  // const [active, setActive] = useState(false);

  const getAllPokemons = async (limit = 40) => {
    setLoading(true);
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    setAllItems(data.count);
    console.log(data);
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      // console.log(data);
      return data;
    });
    const results = await Promise.all(promises);
    // setAllPokemons([...allPokemons, ...results]);
    setAllPokemons([...results]);
    setLoading(false);
  };

  const getGlobalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    // console.log(results);
    setGlobalPokemons(results);
    setLoading(false);
  };
  const getPokemonById = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    getAllPokemons();
  }, [offset]);
  useEffect(() => {
    getGlobalPokemons();
  }, []);
  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        globalPokemons,
        getPokemonById,
        loading,
        pokeOffSet: { setOffset, offset },
        allItems,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: PropTypes.isRequired,
};
