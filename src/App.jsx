import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Gameboard />
      <Footer />
    </div>
  );
}

export default App;
