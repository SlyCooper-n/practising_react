export default function () {
  return (
    <header className="mb-12 py-6 bg-white text-green-800 text-xl font-semibold border-4 border-b-green-900 shadow-xl">
      <div className="container mx-auto px-1 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-mono">TheCocktailDB</h1>

        <nav className="mt-8 sm:mt-0">
          <ul className="flex gap-8">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
