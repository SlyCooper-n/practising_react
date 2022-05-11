import { useEffect, useState } from "react";
import data from "./data";

function App() {
  return (
    <div className="h-screen py-8 flex flex-col justify-center items-center bg-gray-900 text-slate-100">
      <h1 className="pb-8 text-5xl font-bold">/ Reviews</h1>

      <Slider />
    </div>
  );
}

export default App;

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex == data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <main className="relative w-4/5 h-[450px] max-w-3xl overflow-hidden">
      {data.map((article, i) => {
        let position = "next-slide";

        if (i == index) {
          position = "active-slide";
        }
        if (i == index - 1 || (index == 0 && i == data.length - 1)) {
          position = "prev-slide";
        }

        return <Slide key={article.id} data={article} position={position} />;
      })}

      <button
        onClick={() => {
          setIndex((prevIndex) =>
            prevIndex == 0 ? data.length - 1 : prevIndex - 1
          );
        }}
        className="px-4 py-1 absolute top-1/4 left-0 translate-y-1/2 bg-gray-600 rounded-sm"
      >
        &lt;
      </button>

      <button
        onClick={() => {
          setIndex((prevIndex) =>
            prevIndex == data.length - 1 ? 0 : prevIndex + 1
          );
        }}
        className="px-4 py-1 absolute top-1/4 right-0 translate-y-1/2 bg-gray-600 rounded-sm"
      >
        &gt;
      </button>
    </main>
  );
}

function Slide(props) {
  const { image, name, title, quote } = props.data;

  return (
    <article
      className={`${props.position} absolute opacity-0 text-center transition-transform`}
    >
      <img
        src={image}
        alt={name}
        className="w-44 h-44 mx-auto mb-4 object-cover rounded-full"
      />

      <h2 className="text-xl uppercase text-orange-700">{name}</h2>

      <p className="mb-8 capitalize">{title}</p>

      <p>{quote}</p>
    </article>
  );
}
