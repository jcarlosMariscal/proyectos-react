import { useDrag } from "react-dnd";
import { PropTypes } from "prop-types";

export const Card = ({ task }) => {
  const [, drag] = useDrag({
    type: "TARJETA",
    item: { task },
  });

  return (
    <div
      ref={drag}
      className="bg-blue-700 my-2 py-1 cursor-move rounded-md h-12"
    >
      <p className="text-gray-200 text-sm px-2">{task.title}</p>
    </div>
  );
};

Card.propTypes = {
  task: PropTypes.object.isRequired,
};
