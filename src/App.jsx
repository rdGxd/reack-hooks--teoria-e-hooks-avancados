import { useEffect, useRef, useState } from "react";
import "./App.css";

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    // Limpando o componente
    return () => clearInterval(interval);
  }, [delay]);
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button
        type="button"
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        +{incrementor}
      </button>
      <button
        type="button"
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        -{incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
    </div>
  );
}

// useState() - é um gancho React que permite adicionar uma variável de estado ao componente.
// useEffect() - é um gancho React que permite sincronizar um componente com um sistema externo.
// useCallback() - Retorna um callback (Função) memoizado (guardado em cache).
// useMemo() - Retorna um valor memoizado (guardado em cache).
// useRef() - serve para pegar alguma coisa que está na tela elemento da DOM, use no lugar do document.querySelector quando estiver usando React.
// useContext()/React.createContext() - permite eu transforma algo em global para ser usado em outro lugar sem precisar ficando passando pelas props
