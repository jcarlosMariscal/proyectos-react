// import { v4 as uuidv4 } from "uuid";
export const mockData = [
  {
    id: 1,
    title: "Por hacer",
    isEditing: false,
    tasks: [
      { id: 1, title: "Tarjeta 1", isEditing: false },
      { id: 2, title: "Tarjeta 2", isEditing: false },
      { id: 3, title: "Tarjeta 3", isEditing: false },
    ],
  },
  {
    id: 2,
    title: "En proceso",
    isEditing: false,
    tasks: [
      { id: 1, title: "Tarjeta 4", isEditing: false },
      { id: 2, title: "Tarjeta 5", isEditing: false },
      { id: 3, title: "Tarjeta 6", isEditing: false },
    ],
  },
  {
    id: 3,
    title: "Finalizado",
    isEditing: false,
    tasks: [
      { id: 1, title: "Tarjeta 7", isEditing: false },
      { id: 2, title: "Tarjeta 8", isEditing: false },
      { id: 3, title: "Tarjeta 9", isEditing: false },
    ],
  },
];

export const kanbanColors = [
  {
    primary: "bg-slate-500",
    secondary: "bg-slate-700",
    tertiary: "bg-slate-900",
  },
  {
    primary: "bg-red-500",
    secondary: "bg-red-700",
    tertiary: "bg-red-900",
  },
  {
    primary: "bg-amber-500",
    secondary: "bg-amber-700",
    tertiary: "bg-amber-900",
  },
  {
    primary: "bg-yellow-500",
    secondary: "bg-yellow-700",
    tertiary: "bg-yellow-900",
  },
  {
    primary: "bg-green-500",
    secondary: "bg-green-700",
    tertiary: "bg-green-900",
  },
  {
    primary: "bg-emerald-500",
    secondary: "bg-emerald-700",
    tertiary: "bg-emerald-900",
  },
  {
    primary: "bg-cyan-500",
    secondary: "bg-cyan-700",
    tertiary: "bg-cyan-900",
  },
  {
    primary: "bg-blue-500",
    secondary: "bg-blue-700",
    tertiary: "bg-blue-900",
  },
  {
    primary: "bg-purple-500",
    secondary: "bg-purple-700",
    tertiary: "bg-purple-900",
  },
  {
    primary: "bg-pink-500",
    secondary: "bg-pink-700",
    tertiary: "bg-pink-900",
  },
];
export const kanbanColorsHexa = [
  {
    primary: "rgb(71 85 105)", // Tono 200
    tertiary: "rgb(2 6 23)", // Tono 950
  },
  {
    primary: "rgb(220 38 38)", // Tono 500
    tertiary: "rgb(69 10 10)", // Tono 950
  },
  {
    primary: "rgb(217 119 6)", // Tono 200
    tertiary: "rgb(69 26 3)", // Tono 950
  },
  {
    primary: "rgb(202 138 4)", // Tono 200
    tertiary: " rgb(66 32 6)", // Tono 950
  },
  {
    primary: "rgb(22 163 74)", // Tono 200
    tertiary: "rgb(5 46 22)", // Tono 950
  },
  {
    primary: "rgb(5 150 105)", // Tono 200
    tertiary: "rgb(2 44 34)", // Tono 950
  },
  {
    primary: "rgb(8 145 178)", // Tono 200
    tertiary: "rgb(8 51 68)", // Tono 950
  },
  {
    primary: "rgb(37 99 235)", // Tono 200
    tertiary: "rgb(23 37 84)", // Tono 950
  },
  {
    primary: "rgb(147 51 234)", // Tono 200
    tertiary: "rgb(59 7 100)", // Tono 950
  },
  {
    primary: "rgb(219 39 119)", // Tono 600
    tertiary: "rgb(80 7 36)", // Tono 950
  },
];
