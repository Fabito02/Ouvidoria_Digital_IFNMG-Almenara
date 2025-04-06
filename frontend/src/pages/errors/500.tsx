import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { BlankLayout } from "../../components/BlankLayout/BlankLayout";

export default function Erro500() {
  return (
    <BlankLayout
      showFooter={false}
      showHeader={false}
      showNavbar={false}
      centerContent
      removeBodyPadding
    >
      <div style={{ textAlign: "center" }}>
        <h1>500 - Erro inesperado</h1>
        <p>Tente novamente ou contate o suporte para mais informações.</p>
        <Link to="/">
          <Button texto="página inicial" outline />
        </Link>
      </div>
    </BlankLayout>
  );
}
