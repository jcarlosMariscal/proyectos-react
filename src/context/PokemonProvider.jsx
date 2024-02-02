import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { PropTypes } from "prop-types";
import { useForm } from "../hooks/useForm";
import { pokemonTypeStates } from "../helpers/colorsPokemon";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  // Utilizar CustomHooks
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  // Estados simples para la aplicacion
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  const getAllPokemons = async (limit = 40) => {
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

  const getGlobalPokemons = async (limit = 100000) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=0`);
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

  // Filter Function + State
  const [typeSelected, setTypeSelected] = useState(pokemonTypeStates);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const handleCheckbox = (e) => {
    // console.log(e.target);
    const dataType = JSON.parse(e.target.value);
    setTypeSelected((prevBase) =>
      prevBase.map((type) =>
        type.type === dataType.type ? { ...type, checked: !type.checked } : type
      )
    );
    // if (e.target.checked) {
    //   const filteredResults = globalPokemons.filter((pokemon) =>
    //     pokemon.types.map((type) => type.type.name).includes(dataType.type)
    //   );
    //   setFilteredPokemons([...filteredPokemons, ...filteredResults]);
    // } else {
    //   const filteredResults = filteredPokemons.filter((pokemon) =>
    //     pokemon.types.map((type) => type.type.name).includes(dataType.type)
    //   );
    //   setFilteredPokemons([...filteredResults]);
    // }
  };
  const test = () => {
    const search = typeSelected.filter((el) => el.checked);
    if (!search.length) setFilteredPokemons([]);
    console.log(search);
    const filteredResults = search.flatMap((el) => {
      return globalPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(el.type)
      );
    });
    const uniqueFilteredResults = Array.from(new Set(filteredResults)).sort(
      (a, b) => a.id - b.id
    );
    console.log(uniqueFilteredResults);
    setFilteredPokemons(uniqueFilteredResults);
  };
  useEffect(() => {
    // const search = typeSelected.filter((el) => el.checked);
    test();
    // console.log(search);
    // if (!search.length) setFilteredPokemons([]);
  }, [typeSelected]);
  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        globalPokemons,
        getPokemonById,
        loading,
        pokeOffSet: { offset, setOffset },
        filterActive: { active, setActive },
        allItems,
        valueSearch,
        onInputChange,
        onResetForm,
        // Filter
        handleCheckbox,
        filteredPokemons,
        types: { typeSelected, setTypeSelected },
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
