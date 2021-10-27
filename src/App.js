import "./App.css";
import { useState } from "react";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana 🍌", color: "yellow", price: 2 },
    { name: "cherry 🍒", color: "red", price: 3 },
    { name: "strawberry 🍓", color: "red", price: 4 },
  ]);

  const [price, setPrice] = useState(fruits.reduce((a, b) => a + b.price, 0));

  const filterRedFruits = () => {
    const filtered = fruits.filter((fruit) => fruit.color === "red");

    setFruits(filtered);

    setPrice(filtered.reduce((a, b) => a + b.price, 0));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <List list={fruits} />
          <h2>Valor total: {price}</h2>
          <Button filterRedFruits={filterRedFruits} />
        </div>
      </header>
    </div>
  );
}

export default App;
