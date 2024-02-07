import { useDrag } from "react-dnd";
import { PropTypes } from "prop-types";
import { useContext, useState } from "react";
import { KanbanContext } from "../../context/KanbanContext";
import ContentEditable from "react-contenteditable";
// import { ButtonComponent } from "../pure/ButtonComponent";
// import {
//   PencilSquareIcon,
//   TrashIcon,
//   BookmarkIcon,
// } from "@heroicons/react/24/solid";

export const Card = ({ idList, task }) => {
  const { colorSelected, mockData } = useContext(KanbanContext);
  const { setKanbanList } = mockData;
  const [textIsEditing, setTextIsEditing] = useState(false);
  const [content, setContent] = useState(task.title);
  const { secondary } = colorSelected;

  const [, drag] = useDrag({
    type: "TARJETA",
    item: { task },
  });
  const handleChange = (event) => {
    const value = event.target.value;
    setContent(value);
    setKanbanList((prevData) => {
      const updatedData = [...prevData];
      const listEditIndex = updatedData.findIndex((el) => el.id === idList);
      const listTasks = updatedData[listEditIndex].tasks.map((tas) => {
        if (tas.id == task.id) tas.title = value;
        return tas;
      });

      updatedData[listEditIndex].tasks = listTasks;
      return updatedData;
    });
  };
  const handleFocus = () => setTextIsEditing(true);
  const handleBlur = () => setTextIsEditing(false);
  return (
    <div ref={drag} className={`my-2 h-14`}>
      <div
        className={`${secondary} text-gray-200 text-sm rounded-md cursor-move outline-none h-full relative`}
      >
        <ContentEditable
          html={content}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tagName="p" // Puedes especificar el elemento HTML que quieres usar (por defecto es un div)
          className={`${secondary} text-gray-200 text-sm p-1 rounded-md cursor-move outline-none h-full border ${
            textIsEditing ? "border-gray-200" : "border-transparent"
          }`}
          disabled={false}
        ></ContentEditable>
      </div>
    </div>
  );
};

Card.propTypes = {
  idList: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired,
};
