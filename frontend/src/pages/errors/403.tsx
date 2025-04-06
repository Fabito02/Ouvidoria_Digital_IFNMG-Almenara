import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { BlankLayout } from "../../components/BlankLayout/BlankLayout";

export default function Erro403() {
  return (
    <BlankLayout
      showFooter={false}
      showHeader={false}
      showNavbar={false}
      centerContent
      removeBodyPadding
    >
      <div style={{ textAlign: "center" }}>
        <h1>403 - Acesso negado</h1>
        <p>Você não tem permissão para acessar esta página.</p>
        <Link to="/">
          <Button texto="página inicial" outline />
        </Link>
      </div>
    </BlankLayout>
  );
}
