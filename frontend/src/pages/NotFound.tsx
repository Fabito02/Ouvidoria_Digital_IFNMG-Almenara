import { Link } from "react-router-dom";
import ButtonOutline from "../components/buttons/ButtonOutline";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você tentou acessar não existe.</p>
      <Link to="/">
        <ButtonOutline texto="PÁGINA INICIAL" />
      </Link>
    </div>
  );
}
