import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você tentou acessar não existe.</p>
      <Link to="/">
        <Button texto="página inicial" />
      </Link>
    </div>
  );
}
