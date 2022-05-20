import { useGlobalContext } from "../../../context";

export default function () {
  const {
    state: { cocktails, loading, error },
  } = useGlobalContext();

  if (error) {
    return <div>No cocktails matched your search criteria ⊙.☉</div>;
  }

  if (loading) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <div className="flex h-32 rotate-180">
          <div className="w-10 mx-1 bg-green-900"></div>
          <div className="w-10 mx-1 bg-green-900"></div>
          <div className="w-10 mx-1 bg-green-900"></div>
        </div>

        <style>{`
            div.w-10 {
              animation: loading 1.6s ease infinite;
            }
            div.w-10:nth-child(2) {
              animation-delay: 0.3s;
            }
            div.w-10:nth-child(1) {
              animation-delay: 0.6s;
            }

            @keyframes loading {
              0% {
                height: 100%;
              }
              50% {
                height: 5%;
              }
              100% {
                height: 100%;
              }
            }
          `}</style>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:container sm:mx-auto sm:px-1 md:grid-cols-3 xl:max-w-[1280px]">
      {cocktails.map((drink) => (
        <section
          key={drink.idDrink}
          id={drink.idDrink}
          className="bg-white rounded-sm shadow-lg"
        >
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="rounded-t-sm"
          />

          <div className="my-4 pl-4">
            <h3 className="text-2xl font-bold">{drink.strDrink}</h3>

            <h4 className="text-lg">{drink.strCategory}</h4>

            <span className="block text-sm text-gray-400">
              {drink.strAlcoholic}
            </span>

            <button className="mt-2 px-3 py-1 bg-green-700 text-white font-semibold tracking-widest rounded-sm hover:bg-green-500 transition-colors">
              Details
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
