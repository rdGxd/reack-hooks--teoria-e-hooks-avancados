import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

export default function App() {
  // A gente tem uma função passa o estado inicial para essa função e depois a gente pega do retorno dessa função

  // Primeira posição valor do estado, Segunda posição função para setar o valor do estado
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? "reverse" : "";

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>

        <p>
          <button type="button" onClick={handleIncrement}>
            Incremente {counter}
          </button>
        </p>

        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>
      </header>
    </div>
  );
}
