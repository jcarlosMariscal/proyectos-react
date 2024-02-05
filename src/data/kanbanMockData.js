import { v4 as uuidv4 } from "uuid";
export const mockData = [
  {
    id: uuidv4(),
    title: "Por hacer",
    tasks: [
      { id: uuidv4(), title: "Tarjeta 1" },
      { id: uuidv4(), title: "Tarjeta 2" },
      { id: uuidv4(), title: "Tarjeta 3" },
    ],
  },
  {
    id: uuidv4(),
    title: "En proceso",
    tasks: [
      { id: uuidv4(), title: "Tarjeta 4" },
      { id: uuidv4(), title: "Tarjeta 5" },
      { id: uuidv4(), title: "Tarjeta 6" },
    ],
  },
  {
    id: uuidv4(),
    title: "Finalizado",
    tasks: [
      { id: uuidv4(), title: "Tarjeta 7" },
      { id: uuidv4(), title: "Tarjeta 8" },
      { id: uuidv4(), title: "Tarjeta 9" },
    ],
  },
];
