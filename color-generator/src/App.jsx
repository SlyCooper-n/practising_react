import { useEffect, useState } from "react";
import Values from "values.js";
import AlertDialog from "./components/AlertDialog";

function App() {
  const [showColors, setShowColors] = useState(false),
    [list, setList] = useState([]),
    [error, setError] = useState(false);

  function showColorsList(color, shades) {
    getAllColors(color, shades);

    setShowColors(true);
  }

  function getAllColors(color, shadesQuant) {
    try {
      let colors = new Values(color).all(100 / shadesQuant);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className="min-h-screen py-12 bg-gray-900 text-slate-100 font-semibold">
      <Header showColors={showColorsList} error={error} />

      {showColors && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7">
          {list.map((color) => {
            return <Color key={color.hex} color={color} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;

function Header({ showColors, error }) {
  const [hexColor, setHexColor] = useState(""),
    [shades, setShades] = useState(10);

  function setHexValue(event) {
    setHexColor(event.target.value);
  }

  function setShadesValue(event) {
    setShades(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    switch (hexColor.startsWith("#")) {
      case true:
        showColors(hexColor, shades);

        break;

      case false:
        showColors("#" + hexColor, shades);
        break;
    }
  }

  return (
    <section className="mb-12 px-8 flex flex-col md:flex-row md:items-end">
      <h1 className="mr-8 mb-4 md:mb-0 text-4xl font-bold">Color Generator</h1>

      <form onSubmit={handleSubmit} className="relative">
        <label>
          <input
            type="text"
            value={hexColor}
            onChange={setHexValue}
            placeholder="#55ffaa"
            className={`mb-2 md:mb-0 px-2 h-10 indent-1 rounded-sm bg-neutral-600 ${
              error ? "border border-red-500" : ""
            }`}
          />
        </label>

        <label className="mx-4">
          How much shades?
          <select
            name="shades"
            value={shades}
            onChange={setShadesValue}
            className="ml-2 px-2 h-10 bg-neutral-800 rounded-sm"
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </label>

        <button type="submit" className="px-4 h-10 bg-gray-700 rounded-sm">
          Submit
        </button>

        <AlertDialog show={error} />
      </form>
    </section>
  );
}

function Color({ color }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [copied]);

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText("#" + color.hex);
        setCopied(true);
      }}
      className={`w-auto aspect-square p-4 hover:cursor-pointer ${
        color.type == "tint" || color.type == "base" ? "text-neutral-800" : ""
      }`}
      style={{ background: `#${color.hex}` }}
    >
      #{color.hex} <br />
      {color.weight}% <br />
      {copied ? <p className="mt-6">Copied to clipboard!</p> : ""}
    </div>
  );
}
