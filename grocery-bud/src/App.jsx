import List from "./components/List";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200">
      <main className="p-4 bg-white shadow-2xl text-center text-slate-900 font-semibold">
        <h1 className="mb-4 text-2xl font-bold">Grocery Bud</h1>

        <form className="flex items-center">
          <input
            type="text"
            className="h-8 mr-2 bg-neutral-200 indent-2 rounded-sm outline-none focus:ring-2 ring-slate-900 ring-offset-2"
          />

          <button className="h-8 px-2 bg-slate-500 text-slate-50 rounded-sm outline-none focus:ring-2 ring-slate-900 ring-offset-2">
            Submit
          </button>
        </form>

        <List />
      </main>
    </div>
  );
}

export default App;
