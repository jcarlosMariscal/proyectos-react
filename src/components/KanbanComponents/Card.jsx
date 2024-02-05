import { useDrag } from "react-dnd";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import { KanbanContext } from "../../context/KanbanContext";

export const Card = ({ task }) => {
  const { colorSelected } = useContext(KanbanContext);
  const { secondary } = colorSelected;

  const [, drag] = useDrag({
    type: "TARJETA",
    item: { task },
  });

  return (
    <div
      ref={drag}
      className={`${secondary} my-2 py-1 cursor-move rounded-md h-12`}
    >
      <p className="text-gray-200 text-sm px-2">{task.title}</p>
    </div>
  );
};

Card.propTypes = {
  task: PropTypes.object.isRequired,
};
