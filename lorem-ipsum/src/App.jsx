import { useState } from "react";
import data from "./data";

function App() {
  const [paragraphs, setParagraphs] = useState(data),
    [lorem, setLorem] = useState([]),
    [showLorem, setShowLorem] = useState(false),
    [quantity, setQuantity] = useState(1);

  function handleChange(event) {
    if (event.target.value < 1 || event.target.value > 8) {
      return;
    }
    setQuantity(event.target.value);
  }

  function generateParagraphs() {
    let newArr = [];

    for (let i = 0; i < quantity; i++) {
      let num = generateRandomNumber();

      while (newArr.includes(num)) {
        num = generateRandomNumber();
      }

      newArr.push(num);
    }

    setLorem(newArr);
    setShowLorem(true);
  }

  function generateRandomNumber() {
    return Math.floor(Math.random() * 8);
  }

  return (
    <div className="min-h-screen py-12 flex flex-col items-center bg-gray-900 text-slate-100 font-semibold">
      <h1 className="pb-4 text-center text-4xl font-bold uppercase">
        Tired of boring lorem ipsum?
      </h1>

      <Input
        quantity={quantity}
        handleChange={handleChange}
        generateParagraphs={generateParagraphs}
      />

      {showLorem && (
        <section className="w-4/5 md:w-1/2 mt-12 text-center">
          {lorem.map((index) => (
            <>
              <p>{paragraphs[index]}</p>
              <br />
            </>
          ))}
        </section>
      )}
    </div>
  );
}

export default App;

function Input({ quantity, handleChange, generateParagraphs }) {
  return (
    <section className="w-4/5 text-center text-lg">
      <label>
        Paragraphs:{" "}
        <input
          type="number"
          value={quantity}
          onChange={handleChange}
          className="w-12 ml-2 mr-8 mb-4 sm:mb-0 indent-2 rounded-sm"
        />
      </label>

      <button
        onClick={generateParagraphs}
        className="px-4 py-1 bg-gray-700 hover:bg-gray-600 active:shadow-gray-50 active:shadow-inner rounded-sm transition-colors"
      >
        Generate
      </button>
    </section>
  );
}
