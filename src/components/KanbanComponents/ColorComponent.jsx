import { useContext } from "react";
import { KanbanContext } from "../../context/KanbanContext";
import { PropTypes } from "prop-types";

export const ColorComponent = ({ color, id }) => {
  const { colorsState, indexSelec, colorSelected } = useContext(KanbanContext);
  const { setColorsActive } = colorsState;
  const { setIndexSelected } = indexSelec;
  const { primary, secondary, tertiary } = color;
  const changeBg = (id) => {
    setIndexSelected(id);
    setColorsActive(false);
  };
  return (
    <div
      className={`${tertiary} w-[9rem] h-[6rem] rounded-md flex items-center justify-center cursor-pointer hover:opacity-70`}
      onClick={() => changeBg(id)}
    >
      <div
        className={`${secondary} w-[7rem] h-[4rem] rounded-md flex items-center justify-center`}
      >
        <div
          className={`${primary} w-[5rem] h-[2rem] rounded-md flex items-center justify-center`}
        >
          {colorSelected.primary === primary ? (
            <p className="text-white font-bold text-xl">&#x2713;</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
ColorComponent.propTypes = {
  color: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
