import { useGlobalContext } from "../AppProvider";
import { FaBars } from "react-icons/fa";

function Home() {
  const { sidebar, modal } = useGlobalContext();

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-slate-100 font-semibold">
      <header className="w-full p-4">
        <button onClick={() => sidebar.toggleSidebar()}>
          <FaBars className="text-2xl animate-pulse" />
        </button>
      </header>

      <section className="flex-1 flex justify-center items-center">
        <button
          onClick={() => modal.toggleModal()}
          className="px-7 py-3 bg-gray-700 border-4 border-slate-100 text-lg font-semibold rounded-md transition-colors hover:bg-slate-100 hover:text-black"
        >
          Show Modal
        </button>
      </section>
    </div>
  );
}

export default Home;
