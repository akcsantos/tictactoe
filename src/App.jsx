import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CenterContainer from "./components/CenterContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <CenterContainer />
      <Footer />
    </div>
  );
}

export default App;
