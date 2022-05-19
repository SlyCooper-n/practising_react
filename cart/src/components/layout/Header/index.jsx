import { FaShoppingBag } from "react-icons/fa";
import { useGlobalContext } from "../../../context";

export default function Header() {
  const { amount } = useGlobalContext();

  return (
    <header className="w-full py-4 bg-sky-700 text-white font-semibold">
      <div className="container mx-auto px-1 flex justify-between items-center">
        <h1 className="text-4xl">useReducer</h1>

        <div className="relative">
          <span className="absolute -right-2 w-6 aspect-square text-center bg-sky-400 rounded-full">
            {amount}
          </span>

          <FaShoppingBag className="text-4xl" />
        </div>
      </div>
    </header>
  );
}
