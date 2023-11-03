import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        height: "60px",
        alignItems: "center",
      }}
    >
      {/* <Link> Carrega somente o necessário */}
      <Link to={"/"}>Home</Link>
      <Link to={"/abc"}>Abc</Link>
      {/* <a> ELE VAI CARREGAR UMA PÁGINA TODA DO ZERO  */}
      <a href={"/"}>Home (A)</a>
      <a href={"/abc"}>Abc (A)</a>
    </nav>
  );
};
