export default function () {
  return (
    <header className="py-6 text-green-800 text-xl font-semibold border-4 border-b-green-900 shadow-xl">
      <div className="container mx-auto px-1 flex justify-between items-center">
        <h1 className="text-3xl font-mono">TheCocktailDB</h1>

        <ul className="flex gap-8">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
