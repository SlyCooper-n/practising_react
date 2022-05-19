export default function (state, action) {
  switch (action.type) {
    case "REMOVE":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id != action.payload
        ),
      };

    case "TOGGLE_AMOUNT":
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id == action.payload.id
              ? {
                  ...product,
                  amount:
                    action.payload.calc == "add"
                      ? product.amount++
                      : product.amount--,
                }
              : product
          )
          .filter((el) => el.amount > 0),
      };

    case "CLEAR_CART":
      return {
        ...state,
        products: [],
        amount: 0,
        total: 0,
      };

    case "GET_TOTALS":
      let { amount, total } = state.products.reduce(
        (acc, product) => {
          acc.amount += product.amount;
          acc.total += product.price * product.amount;

          return acc;
        },
        { amount: 0, total: 0 } // inital value
      );

      return { ...state, amount, total };

    case "LOADING":
      return { ...state, loading: true };

    case "DISPLAY_CART":
      return { ...state, loading: false, products: action.payload };

    default:
      throw new Error("No such type in the reducer function");
  }
}
