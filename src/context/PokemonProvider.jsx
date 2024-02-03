import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { PropTypes } from "prop-types";
import { useForm } from "../hooks/useForm";
import { pokemonTypeStates } from "../helpers/colorsPokemon";
import { customFetch } from "../hooks/customFetch";

const baseURL = "https://pokeapi.co/api/v2/";
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
    const url = `${baseURL}pokemon?limit=${limit}&offset=${offset}`;
    const data = await customFetch(url);
    setAllItems(data.count);
    const promises = data.results.map(async (pokemon) => {
      return await customFetch(pokemon.url);
    });
    const results = await Promise.all(promises);
    limit === 100000
      ? setGlobalPokemons(results)
      : setAllPokemons([...results]);

    setLoading(false);
  };

  const getPokemonById = async (id) => {
    const url = `${baseURL}pokemon/${id}`;
    return await customFetch(url);
  };
  // Filter Function + State
  const [typeSelected, setTypeSelected] = useState(pokemonTypeStates);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const handleCheckbox = (e) => {
    const dataType = JSON.parse(e.target.value);
    setTypeSelected((prevBase) =>
      prevBase.map((type) =>
        type.type === dataType.type ? { ...type, checked: !type.checked } : type
      )
    );
  };
  const filterPokemons = () => {
    const typesChecked = typeSelected.filter((type) => type.checked); ///Filtra los types que están seleccionados
    if (!typesChecked.length) setFilteredPokemons([]); // Establecer estado de filtro en vacío
    const filterRes = typesChecked.flatMap((type) => {
      return globalPokemons.filter(
        // Filtrar desde la petición global
        (pokemon) => pokemon.types.map((el) => el.type.name).includes(type.type) // Filtrar por los tipos
      );
    });
    // Eliminar valores repetidos y ordenar los resultados por su id
    const results = Array.from(new Set(filterRes)).sort((a, b) => a.id - b.id);
    setFilteredPokemons(results);
  };
  useEffect(() => {
    getAllPokemons();
  }, [offset]);
  useEffect(() => {
    getAllPokemons(100000);
  }, []);
  useEffect(() => {
    filterPokemons();
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
        inputSearch: { valueSearch, onInputChange, onResetForm },
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
