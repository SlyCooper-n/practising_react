export default ({ show }) => (
  <div
    className={`${
      show ? "" : "hidden"
    } absolute p-4 -bottom-16 bg-red-100 text-red-500 border border-red-500 rounded-sm`}
  >
    <p>
      Invalid hex value! <br />
    </p>
  </div>
);
