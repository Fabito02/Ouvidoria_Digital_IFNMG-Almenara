import { Container, Row, Col } from "react-bootstrap";
import './fale-conosco.css'
import { BlankLayout } from "../../components/BlankLayout/BlankLayout";
import { useEffect } from "react";

const FaleConosco = () => {
  useEffect(() => {
    document.title = "Fale Conosco"
  })
    return (
      <BlankLayout showFooter={false} showHeader={true} showNavbar={true} removeBodyPadding={false}>
        <Container className="container-cards mt-5">
          <Row className="linha">
            <Col className="coluna" sm={'6'} xs={'12'}>
              <a href="/fale-conosco/reclamacao">
                <img className="tipoManifestacao" src="/fale-conosco/cards/reclamação.svg" alt="Card Reclamação" />
              </a>
            </Col>

            <Col className="coluna"  sm={'6'} xs={'12'}>
              <a href="/fale-conosco/elogio">
                <img className="tipoManifestacao" src="/fale-conosco/cards/elogio.svg" alt="Card Elogio" />
              </a>
            </Col>
          </Row>
          <Row className="linha">
            <Col className="coluna"  sm={'6'} xs={'12'}>
              <a href="/fale-conosco/denuncia">
                <img className="tipoManifestacao" src="/fale-conosco/cards/denúncia.svg" alt="Card Denúncia" />
              </a>
            </Col>

            <Col className="coluna"  sm={'6'} xs={'12'}>
              <a href="/fale-conosco/sugestao">
                <img className="tipoManifestacao" src="/fale-conosco/cards/sugestão.svg" alt="Card Sugestão" />
              </a>
            </Col>
          </Row>
        </Container>
      </BlankLayout>
    );
  };
  
  export default FaleConosco;
  