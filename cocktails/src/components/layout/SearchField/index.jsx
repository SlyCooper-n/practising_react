export default function () {
  return (
    <form className="w-full sm:w-[600px] mb-12 p-4 bg-white text-green-900 shadow-xl rounded-sm">
      <label className="text-xl">
        Search for your favourite cocktail! <br />
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          className="w-full mt-4 h-10 bg-slate-200 indent-2 rounded-sm outline-none"
        />
      </label>
    </form>
  );
}
