import { useContext } from "react";
import { KanbanContext } from "../../context/KanbanContext";
import { kanbanColors, kanbanColorsHexa } from "../../data/kanbanMockData";
import { ButtonComponent } from "../pure/ButtonComponent";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ColorComponent } from "./ColorComponent";

export const SelectColorsComponent = () => {
  const { colorsState, indexSelec, colorSelected } = useContext(KanbanContext);
  const { setColorsActive } = colorsState;
  const { indexSelected } = indexSelec;
  const { secondary: colorSec, tertiary: colorTer } = colorSelected;
  const { primary: colorHexaPri } = kanbanColorsHexa[indexSelected];
  const changeState = () => {
    setColorsActive(false);
  };

  return (
    <div
      className={`${colorTer} absolute top-0 bottom-0 right-0 w-80`}
      style={{ borderLeft: `1px solid ${colorHexaPri}` }}
    >
      <div className="flex justify-between items-center py-2 px-3">
        <h5 className="text-gray-200 font-bold">Colores</h5>
        <ButtonComponent
          text={
            <>
              <XMarkIcon className={`size-6 text-sm text-gray-200`} />
            </>
          }
          color={"hover:" + colorSec}
          size={`rounded-md`}
          handleClick={changeState}
        />
      </div>
      <div className="flex justify-center flex-wrap gap-2">
        {kanbanColors.map((color, index) => (
          <ColorComponent key={index} color={color} id={index} />
        ))}
      </div>
    </div>
  );
};
