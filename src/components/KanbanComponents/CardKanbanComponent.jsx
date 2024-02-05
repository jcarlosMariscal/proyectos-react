import { useDrop } from "react-dnd";
import { PropTypes } from "prop-types";
import { Card } from "./Card";
import { ButtonComponent } from "../pure/ButtonComponent";
import { PaintBrushIcon, PlusIcon } from "@heroicons/react/24/solid";
import { KanbanContext } from "../../context/KanbanContext";
import { useContext } from "react";

export const CardKanbanComponent = ({ title, tasks, onTarjetaDrop }) => {
  const { colorSelected } = useContext(KanbanContext);
  const { secondary, tertiary } = colorSelected;

  const [, drop] = useDrop({
    accept: "TARJETA",
    drop: (item) => onTarjetaDrop(item, title),
  });
  return (
    <div
      ref={drop}
      className={`${tertiary}  w-60 h-auto p-2 rounded-md shadow-lg shadow-gray-400/15`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-gray-200">{title}</h3>
        <ButtonComponent
          text={<PaintBrushIcon className="size-4 text-gray-200" />}
          color={`${secondary} hover:opacity-80`}
          size="size-8"
        />
      </div>
      <div className="">
        {tasks.map((task, index) => (
          <Card key={index} task={task} />
        ))}
      </div>
      <div className="!text-sm text-gray-200">
        <ButtonComponent
          text={
            <>
              <PlusIcon className="size-5" />{" "}
              <span className="mx-1">Añada una tarjeta</span>
            </>
          }
          color={`${tertiary} hover:opacity-80 border border-transparent hover:border-gray-200`}
          size="w-full !justify-start rounded-md"
        ></ButtonComponent>
      </div>
    </div>
  );
};
CardKanbanComponent.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
  onTarjetaDrop: PropTypes.func,
};
