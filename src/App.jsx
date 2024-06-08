import { useState } from "react";
import "./App.css";
import { Components } from "./components/Components";
import { Footer } from "./pages/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Components />
      <Footer/>
    </div>
  );
}

export default App;
