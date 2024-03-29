import { useDrop } from "react-dnd";

import { PropTypes } from "prop-types";
import { Card } from "./Card";
import { ButtonComponent } from "../pure/ButtonComponent";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { KanbanContext } from "../../context/KanbanContext";
import { useContext, useState } from "react";
import ContentEditable from "react-contenteditable";

export const CardKanbanComponent = ({
  idList,
  title,
  tasks,
  onTarjetaDrop,
}) => {
  const { colorSelected, mockData } = useContext(KanbanContext);
  const { setKanbanList } = mockData;
  const { tertiary } = colorSelected;
  const [content, setContent] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const [, drop] = useDrop({
    accept: "TARJETA",
    drop: (item) => onTarjetaDrop(item, title),
  });
  const addCard = () => {
    setKanbanList((prevData) => {
      const updatedData = [...prevData];
      const editListIndex = updatedData.findIndex((card) => card.id === idList);
      const updatedTasks = [
        ...updatedData[editListIndex].tasks,
        { id: updatedData.length + 1, title: "Nueva tarjeta" },
      ];

      // Actualizar el estado con la nueva copia de datos
      updatedData[editListIndex] = {
        ...updatedData[editListIndex],
        tasks: updatedTasks,
      };

      return updatedData;
    });
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setContent(value);

    setKanbanList((prevData) => {
      const updatedData = [...prevData];
      const listEditIndex = updatedData.findIndex((el) => el.id === idList);

      updatedData[listEditIndex].title = value;
      return updatedData;
    });
  };
  const handleFocus = () => setIsEditing(true);
  const handleBlur = () => setIsEditing(false);
  const deleteList = () => {
    setKanbanList((prevData) => {
      const updatedData = [...prevData];
      const deleteList = updatedData.filter((el) => el.id !== idList);
      // console.log(listEditIndex);
      return deleteList;
    });
  };
  return (
    <>
      <div
        ref={drop}
        className={`${tertiary} min-w-60 h-auto p-2 rounded-md shadow-lg shadow-gray-400/15`}
      >
        {idList}
        <div className="flex justify-between items-center gap-2">
          <ContentEditable
            html={content}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tagName="h3" // Puedes especificar el elemento HTML que quieres usar (por defecto es un div)
            className={`text-gray-200 p-1 rounded-md outline-none select-all:bg-blue-100 border flex-1 ${
              isEditing ? "border-gray-200" : "border-transparent"
            }`}
            contentEditable={!isEditing}
          />
          <ButtonComponent
            text={<TrashIcon className="size-5" />}
            color="text-gray-200 opacity-60 hover:opacity-80"
            handleClick={deleteList}
          />
        </div>
        <div className="">
          {tasks.length ? (
            tasks.map((task, index) => (
              <Card key={index} idList={idList} task={task} />
            ))
          ) : (
            <p className="text-center text-gray-200">
              Añade la primera tarjeta.
            </p>
          )}
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
            handleClick={addCard}
          ></ButtonComponent>
        </div>
      </div>
    </>
  );
};
CardKanbanComponent.propTypes = {
  idList: PropTypes.string,
  title: PropTypes.string,
  tasks: PropTypes.array,
  onTarjetaDrop: PropTypes.func,
};
