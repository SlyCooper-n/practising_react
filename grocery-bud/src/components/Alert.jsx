import { useEffect } from "react";

function Alert({ msg, type, hide }) {
  useEffect(() => {
    const alertTime = setTimeout(() => {
      hide();
    }, 3000);

    return () => {
      clearTimeout(alertTime);
    };
  }, []);

  return (
    <div
      className={`w-full mb-4 p-2 rounded-sm ${
        type == "success"
          ? "bg-green-300 text-green-900"
          : "bg-red-300 text-red-900"
      }`}
    >
      <p>{msg}</p>
    </div>
  );
}

export default Alert;
