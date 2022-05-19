import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "../../../context";

export function CartItem({ product }) {
  const {
    reducer: { toggleAmount, remove },
  } = useGlobalContext();

  return (
    <li id={product.id} className="h-24 my-12 flex items-center text-lg">
      <img
        src={product.img}
        alt={product.title}
        className="w-auto h-full mr-2"
      />

      <div className="flex-1 h-full flex flex-col justify-between text-left">
        <div>
          <p className="capitalize">{product.title}</p>

          <p className="text-neutral-500">${product.price}</p>
        </div>

        <button
          onClick={() => remove(product.id)}
          className="w-fit text-sky-500 font-semibold tracking-widest"
        >
          Remove
        </button>
      </div>

      <div className="h-full flex flex-col justify-between items-center">
        <button onClick={() => toggleAmount(product.id, "add")}>
          <FaChevronUp className="text-sky-500" />
        </button>

        <span>{product.amount}</span>

        <button onClick={() => toggleAmount(product.id, "rem")}>
          <FaChevronDown className="text-sky-500" />
        </button>
      </div>
    </li>
  );
}
