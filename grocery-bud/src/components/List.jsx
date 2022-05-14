import { useState } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

function List({ content, edit, funcDelete, showAlert }) {
  return (
    <>
      <div className="mt-4 flex-1 flex flex-col overflow-x-visible sm:overflow-y-hidden">
        <ul className="px-3 flex-1 overflow-x-visible sm:overflow-y-scroll">
          {content.map((el) => (
            <li
              key={el.id}
              className="group my-2 p-2 flex justify-between bg-slate-50 border text-left shadow-md hover:scale-[1.02] transition-transform duration-300"
            >
              <Values
                id={el.id}
                title={el.title}
                funcDelete={funcDelete}
                editInList={edit}
                showAlert={showAlert}
              />
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        ul.flex-1::-webkit-scrollbar {
          width: 7px;
        }
        ul.flex-1::-webkit-scrollbar-track {
          background: transparent;
        }
        ul.flex-1::-webkit-scrollbar-thumb {
          width: 7px;
          background: #80808080;
          border-radius: 3px;
        }
      `}</style>
    </>
  );
}

function Values({ id, title, funcDelete, editInList, showAlert }) {
  const [isEditing, setIsEdititng] = useState(false),
    [editValue, setEditValue] = useState(title);

  function saveNewValue(event) {
    event.preventDefault();

    if (!editValue) {
      showAlert("Please insert a value to rename", "danger");
      return;
    }

    editInList(id, editValue, title);
    setIsEdititng(false);
  }

  return (
    <>
      {isEditing ? (
        <form onSubmit={saveNewValue} className="flex items-center">
          <input
            type="text"
            value={editValue}
            onChange={(event) => setEditValue(event.target.value)}
            autoFocus={true}
            className="mr-2 bg-neutral-200 indent-2 rounded-sm"
          />

          <button type="submit">
            <FaCheck className="text-green-500" />
          </button>
        </form>
      ) : (
        <p className="flex-1 text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </p>
      )}

      <div>
        {isEditing ? (
          ""
        ) : (
          <button
            onClick={() => setIsEdititng(true)}
            className="mr-2 p-1 opacity-100 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-neutral-200 rounded-full transition-opacity"
          >
            <FaEdit className="text-green-500" />
          </button>
        )}

        <button
          onClick={() => funcDelete(id, title)}
          className="p-1 opacity-100 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-neutral-200 rounded-full transition-opacity"
        >
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </>
  );
}

export default List;
