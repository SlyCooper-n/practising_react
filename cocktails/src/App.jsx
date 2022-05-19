import CocktailsList from "./components/layout/CocktailsList";
import Header from "./components/layout/Header";
import SearchField from "./components/layout/SearchField";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="flex flex-col items-center font-semibold">
        <SearchField />

        <CocktailsList />
      </main>
    </div>
  );
}

export default App;
