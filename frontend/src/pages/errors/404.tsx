import { Link } from "react-router-dom";
import Button from "../../components/buttons/ButtonOutline";
import { BlankLayout } from "../../components/BlankLayout/BlankLayout";

export default function Erro404() {
  return (
    <BlankLayout
      showFooter={false}
      showHeader={false}
      showNavbar={false}
      centerContent
      removeBodyPadding
    >
      <div style={{ textAlign: "center" }}>
        <h1>404 - Página não encontrada</h1>
        <p>A página que você tentou acessar não existe.</p>
        <Link to="/">
          <Button texto="página inicial" />
        </Link>
      </div>
    </BlankLayout>
  );
}
