import { Container, Row, Col } from "react-bootstrap";
import "./ConteudoInicial.css";
import Button from "../buttons/Button";
import MaisBemAvaliados from "../MaisBemAvaliados";
import { useEffect } from "react";

const ConteudoHome = () => {
  useEffect(() => {
    const animar = document.querySelectorAll(".animar");
    const desiredPixels = 700;
    const thresholdPercentage = desiredPixels / window.innerHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: thresholdPercentage }
    );

    animar.forEach((element) => observer.observe(element));

    return () => animar.forEach((element) => observer.unobserve(element));
  }, []);

  return (
    <>
      <a href="/login">
        <Button texto="login" className="login-btn" />
      </a>
      <img src="/home/auris.svg" alt="Logo Auris" className="logo-auris" />
      <Container className="px-4 animar">
        <Row>
          <Col className="textos">
            <div className="textos text-right">
              <h1 className="title">Auris – Ouvir para transformar!</h1>
              <p className="complemento">
                Aqui, cada voz importa. Suas sugestões e opiniões ajudam a construir um IFNMG - Campus Almenara melhor para todos.
              </p>
              <a href="/login">
                <Button texto="acessar plataforma" className="plataforma-btn" />
              </a>
            </div>
          </Col>
          <Col className="imagem">
            <img src="/home/img1.svg" alt="Homem utilizando o computador" className="imagemCol" />
          </Col>
        </Row>
      </Container>

      <div className="bg-cinza">
        <Container className="px-4 animar">
          <Row>
            <Col className="textos text-right">
              <h1 className="title">Locais mais bem avaliados do campus:</h1>
              <p className="complemento">
                Descubra e valorize os locais mais bem avaliados do campus.
              </p>
            </Col>
            <Col className="imagem">
              <MaisBemAvaliados />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="px-4 animar">
        <Row>
          <Col className="imagem col-inverso">
            <img src="/home/img2.svg" alt="Homem utilizando o computador" className="imagemCol" />
          </Col>
          <Col className="textos">
            <h1 className="title">O elogio é combustível para a excelência!</h1>
            <p className="complemento">
              Conte-nos sobre aquela experiência positiva que merece ser celebrada.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="px-4 animar">
        <Row>
          <Col className="textos text-right">
            <h1 className="title">Escutamos agora para melhorar sempre!</h1>
            <p className="complemento">
              Seja para valorizar o que dá certo ou ajustar o que pode ser melhorado.
            </p>
          </Col>
          <Col className="imagem">
            <img src="/home/img3.svg" alt="Homem utilizando o computador" className="imagemCol" />
          </Col>
        </Row>
      </Container>

      <div className="bg-cinza">
        <Container className="px-4 animar">
          <Row>
            <Col className="column textos">
              <div className="title">Venha fazer parte da mudança!</div>
              <p className="complemento">
                Acesse a plataforma, compartilhe sua opinião e ajude a construir um ambiente ainda melhor.
              </p>
              <a href="/login">
                <Button texto="acessar plataforma" className="plataforma-btn" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ConteudoHome;
