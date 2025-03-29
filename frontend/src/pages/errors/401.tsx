import { Link } from "react-router-dom";
import Button from "../../components/buttons/ButtonOutline";
import { BlankLayout } from "../../components/BlankLayout/BlankLayout";

export default function Erro401() {
  return (
    <BlankLayout
      showFooter={false}
      showHeader={false}
      showNavbar={false}
      centerContent
      removeBodyPadding
    >
      <div style={{ textAlign: "center" }}>
        <h1>401 - Autenticação necessária</h1>
        <p>Para acessar esta página, você precisa fazer login.</p>
        <Link to="/login">
          <Button texto="Login" />
        </Link>
      </div>
    </BlankLayout>
  );
}
