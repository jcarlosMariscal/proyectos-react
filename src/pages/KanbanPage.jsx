import { kanbanColorsHexa } from "../data/kanbanMockData";
import { useContext } from "react";
import { DndProvider } from "react-dnd/dist";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CardKanbanComponent } from "../components/KanbanComponents/CardKanbanComponent";
import { SelectColorsComponent } from "../components/KanbanComponents/SelectColorsComponent";
import { HeaderKanbanComponent } from "../components/KanbanComponents/HeaderKanbanComponent";
import { KanbanContext } from "../context/KanbanContext";

export const KanbanPage = () => {
  const { colorsState, indexSelec, mockData } = useContext(KanbanContext);
  const { kanbanList, setKanbanList } = mockData;
  const { indexSelected } = indexSelec;
  const { primary, tertiary } = kanbanColorsHexa[indexSelected];

  const handleTarjetaDrop = (move, destinationCard) => {
    const { task } = move;
    setKanbanList((prevData) => {
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
    <div
      className={`w-full h-[calc(90vh)] relative`}
      style={{
        backgroundColor: `${tertiary}`,
        backgroundImage: `linear-gradient(90deg, ${primary} 0%, ${tertiary} 100%)`,
      }}
    >
      <HeaderKanbanComponent />

      <DndProvider backend={HTML5Backend}>
        <div className="flex justify-center my-5">
          <div className="flex items-start gap-3">
            {kanbanList.map((el, index) => (
              <CardKanbanComponent
                key={index}
                idList={el.id}
                title={el.title}
                tasks={el.tasks}
                onTarjetaDrop={handleTarjetaDrop}
              />
            ))}
          </div>
        </div>
      </DndProvider>
      {colorsState.active && <SelectColorsComponent />}
    </div>
  );
};
