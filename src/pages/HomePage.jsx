// import { useState } from "react";
import { CardHomeComponent } from "../components/CardHomeComponent";
const projects = [
  {
    name: "Poke API",
    description:
      "Aplicación básica para consumir una API con React y aplicar estilos con Tailwind.",
    direction: "PokePage",
  },
  {
    name: "Poke fs",
    description:
      "Aplicación básica para consumir una API con React y aplicar estilos con Tailwind.",
    direction: "PokePage",
  },
];

export const HomePage = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex py-3 px-[2rem] justify-center align-items-center flex-wrap gap-2">
      {projects.map((el, index) => (
        <CardHomeComponent key={index} person={el} />
      ))}
    </div>
  );
};
