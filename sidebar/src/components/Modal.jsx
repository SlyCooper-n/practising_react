import { FaTimes } from "react-icons/fa";

export default function Modal() {
  return (
    <div className="hidden">
      <button>
        <FaTimes />
      </button>

      <section>Modal content</section>
    </div>
  );
}
