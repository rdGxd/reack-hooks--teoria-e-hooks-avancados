import { createContext, useContext, useState } from "react";
import "./App.css";

// eslint-disable-next-line
const globalState = {
  title: "O titulo do contexto",
  body: "O body do contexto",
  counter: 0,
};
// eslint-disable-next-line
const GlobalContext = createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <div className="App">
      <H1 />
      <P />
    </div>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

// eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
    setContextState,
  } = theContext;
  return <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>;
};

export default function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

// useState() - é um gancho React que permite adicionar uma variável de estado ao componente.
// useEffect() - é um gancho React que permite sincronizar um componente com um sistema externo.
// useCallback() - Retorna um callback (Função) memoizado (guardado em cache).
// useMemo() - Retorna um valor memoizado (guardado em cache).
// useRef() - serve para pegar alguma coisa que está na tela elemento da DOM, use no lugar do document.querySelector quando estiver usando React.
// useContext()/React.createContext() - permite eu transforma algo em global para ser usado em outro lugar sem precisar ficando passando pelas props
