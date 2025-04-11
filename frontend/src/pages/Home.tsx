import { Link } from "react-router-dom";
import { Row, Col, Card, Container } from 'react-bootstrap';
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Button from "../components/buttons/Button";
import Slider from "../components/Slider";

const slides = [
  "/home/slides/1.png",
  "/home/slides/2.png",
  "/home/slides/3.png",
  "/home/slides/4.png",
  "/home/slides/5.png",
  "/home/slides/6.png",
  "/home/slides/7.png",
  "/home/slides/8.png",
  "/home/slides/9.png",
  "/home/slides/10.png"
]

const Home = () => {

  return (
    <div className="ouvidoria-home">

      <section className="hero-banner bg-light py-5">
        <div className="container text-center mb-3">
          <h1 className="display-4 mb-3 frase-impactante">
            Sua voz é importante!
          </h1>
          <p className="lead mb-5">
            Compartilhe aqui suas críticas, elogios, denúncias, sugestões ou
            necessidades.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-5">
            <Link to="/fale-conosco">
              <Button
                texto="Enviar Manifestação"
                icon="material-symbols:add-box"
              />
            </Link>
            <Link to="/minhas-manifestacoes">
              <Button
                outline
                texto="minhas manifestações"
                icon="material-symbols:feedback-rounded"
              />
            </Link>
          </div>
        </div>
      </section>

      <Slider imagens={slides} indicadores={window.innerWidth <= 662 ? false : true} />

      <section className="info-cards py-5">
        <Container>
          <Row className="justify-content-center g-4">
            <Col xs={12} md={6} lg={3} className="d-flex justify-content-center">
              <Card className="card-info shadow-sm manifestacao w-100">
                <h2 className="total mt-2">14</h2>
                <p className="titulo-card-info text-muted">Manifestações</p>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3} className="d-flex justify-content-center">
              <Card className="card-info shadow-sm pendente w-100">
                <h2 className="total mt-2">2</h2>
                <p className="titulo-card-info text-muted">Pendentes</p>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3} className="d-flex justify-content-center">
              <Card className="card-info shadow-sm andamento w-100">
                <h2 className="total mt-2">5</h2>
                <p className="titulo-card-info text-muted">Em andamento</p>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3} className="d-flex justify-content-center">
              <Card className="card-info shadow-sm concluido w-100">
                <h2 className="total mt-2">7</h2>
                <p className="titulo-card-info text-muted">Concluídas</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="action-cards py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow radius-card">
                <div className="card-body text-center p-4">
                  <Icon
                    icon="material-symbols:add-box"
                    className="iconeCard mb-3"
                    width="48"
                    height="48"
                  />
                  <h3 className="h5 fw-bold">Nova Manifestação</h3>
                  <p className="text-muted">
                    Registre sua reclamação, sugestão ou elogio.
                  </p>
                  <Link to="/fale-conosco">
                    <Button texto="Acessar" outline />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow radius-card">
                <div className="card-body text-center p-4">
                  <Icon
                    icon="material-symbols:help-center"
                    className="iconeCard mb-3"
                    width="48"
                    height="48"
                  />
                  <h3 className="h5 fw-bold">Dúvidas Frequentes</h3>
                  <p className="text-muted">
                    Encontre respostas rápidas no FAQ.
                  </p>
                  <Link to="/informacoes">
                    <Button texto="Ver FAQ" outline />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow radius-card">
                <div className="card-body text-center p-4">
                  <Icon
                    icon="material-symbols:list-alt"
                    className="iconeCard mb-3"
                    width="48"
                    height="48"
                  />
                  <h3 className="h5 fw-bold">Regulamento</h3>
                  <p className="text-muted">Consulte o regulamento do site.</p>
                  <Link to="/regulamento">
                    <Button texto="Consultar" outline />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <Icon
                icon="material-symbols:calendar-clock"
                width="40"
                height="40"
                className=" mb-2 iconeInfo"
              />
              <h3 className="h5 fw-bold">Prazos de Resposta</h3>
              <p className="text-muted">Atendemos em até 3 dias úteis.</p>
            </div>
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <Icon
                icon="material-symbols:lock"
                width="40"
                height="40"
                className="mb-2 iconeInfo"
              />
              <h3 className="h5 fw-bold">Sigilo Garantido</h3>
              <p className="text-muted">Seus dados são protegidos pela LGPD.</p>
            </div>
            <div className="col-md-4 text-center">
              <Icon
                icon="material-symbols:alternate-email"
                width="40"
                height="40"
                className="mb-2 iconeInfo"
              />
              <h3 className="h5 fw-bold">Contato Alternativo</h3>
              <p className="text-muted">ouvidoria.almenara@ifnmg.edu.br</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
