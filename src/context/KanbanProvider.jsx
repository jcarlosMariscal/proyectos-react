import { useEffect, useState } from "react";
import { KanbanContext } from "./KanbanContext";
import { PropTypes } from "prop-types";
import { kanbanColors } from "../data/kanbanMockData";

export const KanbanProvider = ({ children }) => {
  const [colorsActive, setColorsActive] = useState(false);
  const [indexSelected, setIndexSelected] = useState(0);
  const [colorSelected, setColorSelected] = useState(
    kanbanColors[indexSelected]
  );
  useEffect(() => {
    setColorSelected(kanbanColors[indexSelected]);
  }, [indexSelected]);
  return (
    <KanbanContext.Provider
      value={{
        colorsState: { active: colorsActive, setColorsActive },
        indexSelec: { indexSelected, setIndexSelected },
        colorSelected,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
};

KanbanProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
