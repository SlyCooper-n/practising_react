import { useEffect, useState } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import { nanoid } from "nanoid";

function App() {
  const [name, setName] = useState(""),
    [list, setList] = useState(
      JSON.parse(localStorage.getItem("groceryBud")) ?? []
    ),
    [alert, setAlert] = useState({
      show: false,
      msg: "",
      type: "",
    });

  useEffect(() => {
    localStorage.setItem("groceryBud", JSON.stringify(list));
  }, [list]);

  function addItem(event) {
    event.preventDefault();

    if (!name) {
      showAlert("Please enter a value", "danger");
      return;
    }

    setList((prevList) => {
      return [
        ...prevList,
        {
          id: nanoid(),
          title: name,
        },
      ];
    });

    showAlert("Item added!", "success");
    setName("");
  }

  function handleEdit(id, newValue, oldValue) {
    if (newValue == oldValue) {
      return;
    }

    setList((prevList) =>
      prevList.map((el) => {
        return el.id == id ? { ...el, title: newValue } : el;
      })
    );

    showAlert(`${oldValue} changed to ${newValue}!`, "success");
  }

  function handleDelete(id, title) {
    setList((prevList) => prevList.filter((item) => item.id != id));

    showAlert(`${title} deleted!`, "danger");
  }

  function showAlert(msg, type) {
    setAlert({ show: true, msg, type });
  }

  function hideAlert() {
    setAlert((prevAlert) => ({ ...prevAlert, show: false }));
  }

  function clearList() {
    setList([]);
    showAlert("All items deleted!", "danger");
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200">
      <main className="w-full min-h-screen sm:w-[600px] sm:min-h-fit sm:max-h-[510px] md:w-[750px] lg:w-[900px] p-4 flex flex-col bg-white shadow-2xl text-center text-slate-900 font-semibold rounded-sm">
        {alert.show && (
          <Alert msg={alert.msg} type={alert.type} hide={hideAlert} />
        )}

        <h1 className="mb-4 text-2xl font-bold">Grocery Bud</h1>

        <form
          onSubmit={addItem}
          className="w-full flex justify-center items-center"
        >
          <input
            type="text"
            value={name}
            placeholder="e.g. eggs"
            onChange={(event) => setName(event.target.value)}
            className="flex-1 h-8 mr-2 bg-neutral-200 indent-2 rounded-sm outline-none focus:ring-2 ring-slate-900 ring-offset-2"
          />

          <button
            type="submit"
            className="h-8 px-2 bg-slate-500 text-slate-50 font-semibold rounded-sm outline-none focus:ring-2 ring-slate-900 ring-offset-2"
          >
            Add
          </button>
        </form>

        {list.length > 0 ? (
          <>
            <List
              content={list}
              edit={handleEdit}
              funcDelete={handleDelete}
              clear={clearList}
              showAlert={showAlert}
            />
            <button
              onClick={() => clearList()}
              className="w-full mt-4 h-8 bg-red-400 text-red-900 font-semibold rounded-sm outline-none focus:ring-2 ring-slate-900 ring-offset-2"
            >
              Clear list
            </button>
          </>
        ) : (
          <p className="mt-8 opacity-75">-- Empty list --</p>
        )}
      </main>
    </div>
  );
}

export default App;
