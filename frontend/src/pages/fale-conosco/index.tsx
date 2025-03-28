import { Container, Row, Col } from "react-bootstrap";
import './fale-conosco.css'

const Reclamacao = () => {
    return (
      <Container className="container-cards">
        <Row className="linha">
          <Col className="coluna">
            <a href="/fale-conosco/reclamacao">
              <img className="tipoManifestacao" src="/fale-conosco/cards/reclamação.svg" alt="Card Reclamação" />
            </a>
          </Col>

          <Col className="coluna">
            <a href="/fale-conosco/elogio">
              <img className="tipoManifestacao" src="/fale-conosco/cards/elogio.svg" alt="Card Elogio" />
            </a>
          </Col>
        </Row>
        <Row className="linha">
          <Col className="coluna">
            <a href="/fale-conosco/denuncia">
              <img className="tipoManifestacao" src="/fale-conosco/cards/denúncia.svg" alt="Card Denúncia" />
            </a>
          </Col>

          <Col className="coluna">
            <a href="/fale-conosco/sugestao">
              <img className="tipoManifestacao" src="/fale-conosco/cards/sugestão.svg" alt="Card Sugestão" />
            </a>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Reclamacao;
  