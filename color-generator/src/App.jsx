import { useState } from "react";

function App() {
  return (
    <div className="min-h-screen py-12 bg-gray-900 text-slate-100 font-semibold">
      <Header />
    </div>
  );
}

export default App;

function Header() {
  const [hexColor, setHexColor] = useState("");

  function setValue(event) {
    setHexColor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(hexColor);
  }

  return (
    <section className="px-8 flex items-center">
      <h1 className="mr-8 text-4xl font-bold">Color Generator</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={hexColor}
            onChange={setValue}
            placeholder="Type a hex color. Ex: #ffffff"
            className="mr-4 px-2 py-1 indent-1 rounded-sm"
          />
        </label>

        <button type="submit" className="px-4 py-1 bg-gray-700 rounded-sm">
          Submit
        </button>
      </form>
    </section>
  );
}
