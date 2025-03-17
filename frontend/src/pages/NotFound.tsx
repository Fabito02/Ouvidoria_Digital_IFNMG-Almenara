import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você tentou acessar não existe.</p>
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Voltar para a Home
        </button>
      </Link>
    </div>
  );
}
