import CocktailsList from "./components/layout/CocktailsList";
import Header from "./components/layout/Header";
import SearchField from "./components/layout/SearchField";
import { useGlobalContext } from "./context";

function App() {
  const {
    state: { loading },
  } = useGlobalContext();

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Header />

      <main className="flex-1 flex flex-col items-center font-semibold">
        <SearchField />

        <CocktailsList />
      </main>
    </div>
  );
}

export default App;
