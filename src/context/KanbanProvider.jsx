import { useEffect, useState } from "react";
import { KanbanContext } from "./KanbanContext";
import { PropTypes } from "prop-types";
import { kanbanColors, mockData } from "../data/kanbanMockData";

export const KanbanProvider = ({ children }) => {
  const [kanbanList, setKanbanList] = useState(mockData);
  const [colorsActive, setColorsActive] = useState(false);
  const [indexSelected, setIndexSelected] = useState(0);
  const [textIsEditing, setTextIsEditing] = useState(false);
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
        mockData: { kanbanList, setKanbanList },
        isEditing: { textIsEditing, setTextIsEditing },
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
