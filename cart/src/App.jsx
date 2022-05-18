import Header from "./components/layout/Header";
import Bag from "./components/layout/Bag";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Bag />
    </div>
  );
}
