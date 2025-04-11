import { Row, Col, Card, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardInfo.css";

type CardInfoProps = {
    conteudo_cards: Array<{
        total: number;
        titulo: string;
        cor?: string;
    }>;
}

const CardInfo = (conteudo_cards: CardInfoProps) => {

  return (
      <section className="info-cards py-5">
        <Container>
          <Row className="justify-content-center g-4">
            {conteudo_cards.conteudo_cards.map((card) => (
                <Col xs={12} md={6} lg={3} className="d-flex justify-content-center">
                  <Card className={`card-info shadow-sm w-100 ${card.cor? card.cor : "primary"}`}>
                  <h2 className="total mt-2">{card.total}</h2>
                  <h2 className="titulo-card-info text-muted">{card.titulo}</h2>
                  </Card>
                </Col>
            ))}
            </Row>
        </Container>
      </section>
  );
};

export default CardInfo;
