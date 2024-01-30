import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { resetString } from "../helpers/resetString";
import { LoaderComponent } from "../components/pure/LoaderComponent";
import { colours, secondaryColor } from "../helpers/colorsPokemon";
import { StatsPokemonComponent } from "../components/pure/StatsPokemonComponent";
import { TypePokemonComponent } from "../components/pure/TypePokemonComponent";

export const PokemonPage = () => {
  const { getPokemonById } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState({});
  const [color, setColor] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonById(id);
    setPokemon(data);
    setLoading(false);
    const primary = colours[data.types[0].type.name];
    setColor({ primary: primary, secondary: secondaryColor(primary) });
  };
  const { primary, secondary } = color;
  useEffect(() => {
    fetchPokemon(id);
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-[calc(90vh-2rem)] flex justify-center items-center">
          <LoaderComponent />
        </div>
      ) : (
        <div
          className="flex flex-col-reverse md:grid m-[1rem] p-5 md:h-[calc(40vh-2rem)] md:grid-cols-6 xl:h-[calc(90vh-2rem)] gap-3"
          style={{
            color: `${secondary}`,
          }}
        >
          <div
            className="h-auto md:min-h-full md:col-span-2 flex items-center justify-center px-3 rounded-md"
            style={{
              background: `${primary}`,
            }}
          >
            <img
              className="size-60 md:size-80 animate-movePokemon"
              src={pokemon.sprites?.other?.dream_world?.front_default}
              alt="sds"
            />
          </div>
          <div className=" col-span-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <h4 className="text-4xl font-bold">
                {resetString(pokemon.name)}
              </h4>
              <div>
                {pokemon.types.map((type, index) => (
                  <TypePokemonComponent key={index} name={type.type.name} />
                ))}
              </div>
            </div>
            <div className="flex flex-col my-3 items-center md:items-start">
              <p>
                <span className="font-bold">Height: </span>
                {pokemon.height}
              </p>
              <p>
                <span className="font-bold">Weight: </span>
                {pokemon.weight} KG
              </p>
            </div>
            <div className="my-3">
              <h5 className="text-2xl font-bold text-center">Stats</h5>
              <div>
                {pokemon.stats.map((stat, index) => (
                  <StatsPokemonComponent
                    key={index}
                    name={stat.stat.name}
                    color={color}
                    base_stat={stat.base_stat}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
