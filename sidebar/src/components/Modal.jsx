import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../AppProvider";

export default function Modal() {
  const { modal } = useGlobalContext();

  return (
    <div
      className={`${
        modal.isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-40 transition-opacity`}
    >
      <section className="relative w-4/5 lg:w-[600px] h-[300px] flex justify-center items-center bg-slate-100 text-lg font-semibold rounded-md">
        <button
          onClick={() => modal.toggleModal()}
          className="absolute top-0 right-0 m-4"
        >
          <FaTimes className="text-red-500" />
        </button>
        Modal content
      </section>
    </div>
  );
}
