import P from "prop-types";
import React, { useCallback, useState } from "react";
import "./App.css";

const Button = React.memo(function Button({ incrementButton }) {
  console.log("Filho");
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

export default function App() {
  const [counter, setCounter] = useState(0);

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

  /*  useEffect

  const [counter2, setCounter2] = useState(0);

  componentDidUpdate - executa toda vez que o component atualiza
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
 */

  // useCallback vai renderizar a função sempre que a dependência mudar
  const incrementCounter = useCallback((num) => {
    // Usando o valor antigo do counter dessa maneira eu nao tenho mais dependências
    setCounter((c) => c + num);
  }, []);

  console.log("PAI");

  return (
    <div className="App">
      <p>Teste2</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}
