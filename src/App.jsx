import { useReducer } from "react";
import "./App.css";

export const globalState = {
  title: "O titulo do contexto",
  body: "O body do contexto",
  counter: 0,
};

// Sempre que eu usar uma função de reducer tenho que retorna um state
const reducer = (state, action) => {
  switch (action.type) {
    // Se a ação tiver o type 'muda' executa essa função
    case "muda": {
      console.log("Chamou muda com", action.payload);
      return { ...state, title: action.payload };
    }

    case "inverter": {
      console.log("Chamou inverter");
      const { title } = state;
      return { ...state, title: title.split("").reverse().join("") };
    }
  }

  console.log("NENHUMA ACTION ENCONTRADA...");
  // Se não executa essa função de retorno
  return { ...state };
};

export default function App() {
  // useReducer recebe uma função de reducer e um estado inicial -> Ele retornar o estado e a função dispatch
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      {/* dispatch -> dispara ações -> Use com o objeto e coloque o type informando o type da ação */}
      {/* payload -> voce envia os dados que precisa */}
      <button
        type="button"
        onClick={() => dispatch({ type: "muda", payload: new Date().toLocaleString("pt-BR") })}
      >
        Click
      </button>

      <button type="button" onClick={() => dispatch({ type: "inverter" })}>
        Invert
      </button>

      <button type="button" onClick={() => dispatch({ type: "" })}>
        SEM ACTION
      </button>
    </div>
  );
}

// useState() - é um gancho React que permite adicionar uma variável de estado ao componente.
// useEffect() - é um gancho React que permite sincronizar um componente com um sistema externo.
// useCallback() - Retorna um callback (Função) memoizado (guardado em cache).
// useMemo() - Retorna um valor memoizado (guardado em cache).
// useRef() - serve para pegar alguma coisa que está na tela elemento da DOM, use no lugar do document.querySelector quando estiver usando React.
// useContext()/React.createContext() - permite eu transforma algo em global para ser usado em outro lugar sem precisar ficando passando pelas props
