import { useState } from "react";

export const useFetch = async (offset, limit) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const baseURL = "https://pokeapi.co/api/v2/";
  const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
  const data = await res.json();
  // console.log(data);
  const promises = data.results.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    const data = await res.json();
    return data;
  });
  const results = await Promise.all(promises);
  // console.log(results);
  setAllPokemons(results);
  return allPokemons;
};
