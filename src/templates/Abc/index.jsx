import { useParams } from "react-router-dom";

export const Abc = () => {
  // const params = useParams();
  const { slug, id } = useParams();

  return (
    <h1>
      ABC {slug} {id}
    </h1>
  );
};
