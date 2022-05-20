import { useGlobalContext } from "../../../context";

export default function () {
  const {
    searchTerm,
    functions: { setSearchTerm },
  } = useGlobalContext();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="w-full sm:w-[600px] mb-12 p-4 bg-white text-green-900 shadow-xl rounded-sm"
    >
      <label className="text-xl">
        Search for your favourite cocktail! <br />
        <input
          type="text"
          value={searchTerm}
          placeholder="e.g. Margarita"
          onChange={(event) => setSearchTerm(event.target.value)}
          className="w-full mt-4 h-10 bg-slate-200 indent-2 rounded-sm outline-none"
        />
      </label>
    </form>
  );
}
