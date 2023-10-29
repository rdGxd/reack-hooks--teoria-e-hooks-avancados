import "./App.css";
import { Div } from "./components/Div";
import { AppContext } from "./contexts/AppContext";

export default function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

// useState() - é um gancho React que permite adicionar uma variável de estado ao componente.
// useEffect() - é um gancho React que permite sincronizar um componente com um sistema externo.
// useCallback() - Retorna um callback (Função) memoizado (guardado em cache).
// useMemo() - Retorna um valor memoizado (guardado em cache).
// useRef() - serve para pegar alguma coisa que está na tela elemento da DOM, use no lugar do document.querySelector quando estiver usando React.
// useContext()/React.createContext() - permite eu transforma algo em global para ser usado em outro lugar sem precisar ficando passando pelas props
