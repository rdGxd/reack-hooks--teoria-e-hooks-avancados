import P from "prop-types";
import { useEffect, useMemo, useState } from "react";

import "./App.css";

const Post = ({ post }) => {
  console.log("Filho renderizou");
  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    title: P.string,
    body: P.string,
  }),
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
  /* useEffect

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
  /* useCallback
    // useCallback vai renderizar a função sempre que a dependência mudar
  const incrementCounter = useCallback((num) => {
    // Usando o valor antigo do counter dessa maneira eu nao tenho mais dependências
    setCounter((prevCounter) => prevCounter + num);
  }, []);
  */
  // useMemo() voce pode memorizar um component em sí, um valor para ser memorizado
  // useCallback() para vc memorizar um callback (FUNÇÃO)
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  console.log("Pai renderizou!");

  // componentDidMount
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((response) => setPosts(response));
    }, 3000);
  }, []);

  return (
    <div className="App">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {useMemo(() => {
        return posts.length > 0 ? (
          posts.map((post) => <Post post={post} key={post.id} />)
        ) : (
          <p>Ainda Não existem posts</p>
        );
      }, [posts])}
    </div>
  );
}
