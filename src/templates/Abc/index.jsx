import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const Abc = () => {
  const { slug, id } = useParams();
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      history("/");
    }, 3000);
  }, [history]);

  return (
    <h1>
      ABC {slug} {id}
    </h1>
  );
};
