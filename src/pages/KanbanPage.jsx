import { mockData } from "../data/kanbanMockData";
import { useState } from "react";
import { DndProvider } from "react-dnd/dist";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CardKanbanComponent } from "../components/KanbanComponents/CardKanbanComponent";

export const KanbanPage = () => {
  const [data, setData] = useState(mockData);

  const handleTarjetaDrop = (move, destinationCard) => {
    const { task } = move;
    setData((prevData) => {
      const updatedData = [...prevData];

      // Encuentra el índice de la Card de origen
      const sourceIndex = updatedData.findIndex((el) =>
        el.tasks.some((t) => t.title === task.title)
      );

      // Encuentra el índice de la Card de destino
      const destinationIndex = updatedData.findIndex(
        (card) => card.title === destinationCard
      );

      if (sourceIndex !== -1 && destinationIndex !== -1) {
        // Filtra las tareas en la Card de origen
        const sourceTasks = updatedData[sourceIndex].tasks.filter(
          (t) => t.title !== task.title
        );

        // Actualiza las columnas con las tareas filtradas y la tarea de destino
        updatedData[sourceIndex] = {
          ...updatedData[sourceIndex],
          tasks: sourceTasks,
        };
        updatedData[destinationIndex] = {
          ...updatedData[destinationIndex],
          tasks: [...updatedData[destinationIndex].tasks, task],
        };
      }
      return updatedData;
    });
  };
  return (
    <>
      <div className="w-full h-[90vh]">
        <DndProvider backend={HTML5Backend}>
          <div className="flex justify-center bg-blue-200 h-full py-6">
            <div className="flex items-start gap-3">
              {data.map((el, index) => (
                <CardKanbanComponent
                  key={index}
                  title={el.title}
                  tasks={el.tasks}
                  onTarjetaDrop={handleTarjetaDrop}
                />
              ))}
            </div>
            {/* <div className="flex bg-violet-500">
            </div> */}
          </div>
        </DndProvider>
      </div>
    </>
  );
};