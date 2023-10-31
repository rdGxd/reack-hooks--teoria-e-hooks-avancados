import { Posts } from "../../components/Posts";
import { CounterProvider } from "../../contexts/ExampleProvider";
import { PostsProvider } from "../../contexts/PostsProvider";
import "./styles.css";

export default function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <Posts />
      </PostsProvider>
    </CounterProvider>
  );
}
