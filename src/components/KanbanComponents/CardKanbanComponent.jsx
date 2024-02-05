// Columna.js

import { useDrop } from "react-dnd";
import { PropTypes } from "prop-types";
import { Card } from "./Card";
import { ButtonComponent } from "../pure/ButtonComponent";
import { PaintBrushIcon, PlusIcon } from "@heroicons/react/24/solid";

export const CardKanbanComponent = ({ title, tasks, onTarjetaDrop }) => {
  const [, drop] = useDrop({
    accept: "TARJETA",
    drop: (item) => onTarjetaDrop(item, title),
  });
  return (
    <div ref={drop} className="bg-blue-950 border w-60 h-auto p-2 rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-200">{title}</h3>
        <ButtonComponent
          text={<PaintBrushIcon class="size-4 text-gray-200" />}
          color="bg-blue-800"
          size="size-8"
        />
      </div>
      <div className="">
        {tasks.map((task, index) => (
          <Card key={index} task={task} />
        ))}
      </div>
      <div className="!text-sm">
        <ButtonComponent
          text={
            <>
              <PlusIcon className="size-5" />{" "}
              <span className="mx-1">Añada una tarjeta</span>
            </>
          }
          color="hover:bg-blue-800 rounded-md text-gray-200"
          size="w-full !justify-start"
        ></ButtonComponent>
        {/* Añada una tarjeta */}
      </div>
    </div>
  );
};
CardKanbanComponent.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
  onTarjetaDrop: PropTypes.func,
};
