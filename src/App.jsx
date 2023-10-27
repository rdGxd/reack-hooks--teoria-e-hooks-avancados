import React, { useEffect, useState } from "react";
import "./App.css";

const eventFn = () => {
  console.log("H1 Clicado");
};

export default function App() {
  /* useState
  // A gente tem uma função passa o estado inicial para essa função e depois a gente pega do retorno dessa função

  // Primeira posição valor do estado, Segunda posição função para setar o valor do estado
  // const [reverse, setReverse] = useState(false);
  // const [counter, setCounter] = useState(0);
  // const reverseClass = reverse ? "reverse" : "";

  // const handleClick = () => {
  //   // setReverse((prevReverse) => !prevReverse);
  //   setReverse(!reverse);
  // };

  // const handleIncrement = () => {
  //   // setCounter((prevCounter) => prevCounter + 1);
  //   setCounter(counter + 1);
  // };
 */

  /*

  */

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log("componentDidUpdate");
  });

  // componentDidMount - executa 1x
  useEffect(() => {
    document.querySelector("h1")?.addEventListener("click", eventFn);

    // componentWillUnmount - limpeza
    return () => {
      document.querySelector("h1")?.removeEventListener("click", eventFn);
    };
  }, []);

  // Com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log("C1", counter, "C2", counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste2</p>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        C1 +
      </button>

      <button
        type="button"
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        C2 +
      </button>
    </div>
  );
}
