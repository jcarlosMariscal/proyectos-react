import { useContext } from "react";
import { KanbanContext } from "../../context/KanbanContext";
import { ButtonComponent } from "../pure/ButtonComponent";
import { PaintBrushIcon, PlusIcon } from "@heroicons/react/24/solid";

export const HeaderKanbanComponent = () => {
  const { colorsState, colorSelected, mockData } = useContext(KanbanContext);
  const { kanbanList, setKanbanList } = mockData;
  const { colorsActive, setColorsActive } = colorsState;
  const { secondary, tertiary } = colorSelected;
  const changeState = () => {
    setColorsActive(!colorsActive);
  };
  const addList = () => {
    setKanbanList([
      ...kanbanList,
      { id: kanbanList.length + 1, title: "Nueva Lista", tasks: [] },
    ]);
  };
  return (
    <div
      className={`${tertiary} px-6 py-2 flex flex-col md:flex-row justify-between items-center`}
    >
      <div className="">
        <h3 className="text-xl text-gray-200">Kanban</h3>
      </div>
      <div className="text-gray-200 right-6 flex gap-1">
        <ButtonComponent
          text={
            <>
              <PlusIcon className={`size-6 p-1`} />
              <span className="mx-1">Añadir lista</span>
            </>
          }
          color={`${secondary} hover:opacity-80`}
          size={`h-8 px-1 rounded-md`}
          handleClick={addList}
        />
        <ButtonComponent
          text={
            <>
              <PaintBrushIcon className={`size-6 p-1`} />
              <span className="mx-1">Cambiar Fondo</span>
            </>
          }
          color={`${secondary} hover:opacity-80`}
          size={`h-8 px-1 rounded-md`}
          handleClick={changeState}
        />
      </div>
    </div>
  );
};
