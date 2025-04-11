import { Container, Row, Col } from "react-bootstrap";
import "./ConteudoInicial.css";
import Button from "../buttons/Button";
import MaisBemAvaliados from "../MaisBemAvaliados";
import { useEffect } from "react";
import { BlankLayout } from "../BlankLayout/BlankLayout";

const ConteudoHome = () => {
  useEffect(() => {
    const animar = document.querySelectorAll(".animar");
    const desiredPixels = 100;
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
    <BlankLayout>
      <a href="/login">
        <Button texto="login" className="login-btn" />
      </a>
      <img src="/home/auris.svg" alt="Logo Auris" className="logo-auris" />
      <Container className=" animar">
        <Row className="tela">
          <Col className="textos coluna-tela">
            <div className="textos text-right">
              <h1 className="title">Auris – Ouvidoria Digital</h1>
              <p className="complemento">
                 Envie sua manifestação na plataforma para construir um IFNMG - Campus Almenara melhor para todos(as).
              </p>
              <a href="/login">
                <Button texto="acessar plataforma" className="plataforma-btn" />
              </a>
            </div>
          </Col>
          <Col className="imagem coluna-tela">
            <img src="/home/img1.svg" alt="Homem utilizando o computador" className="imagemCol" />
          </Col>
        </Row>
      </Container>

      <div className="bg-cinza">
        <Container className="animar">
          <Row className="tela">
            <Col className="textos text-right coluna-tela">
              <h1 className="title">Locais mais bem avaliados do campus:</h1>
              <p className="complemento">
                Descubra e valorize os locais mais bem avaliados do campus.
              </p>
            </Col>
            <Col className="imagem coluna-tela">
              <MaisBemAvaliados />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="animar">
        <Row className="tela">
          <Col className="imagem col-inverso coluna-tela">
            <img src="/home/img2.svg" alt="Homem utilizando o computador" className="imagemCol" />
          </Col>
          <Col className="textos coluna-tela">
            <h1 className="title">O elogio é combustível para a excelência!</h1>
            <p className="complemento">
              Conte-nos sobre aquela experiência positiva que merece ser celebrada.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="animar">
        <Row className="tela">
          <Col className="textos text-right coluna-tela">
            <h1 className="title">Escutamos agora para melhorar sempre!</h1>
            <p className="complemento">
              Seja para valorizar o que dá certo ou ajustar o que pode ser melhorado.
            </p>
          </Col>
          <Col className="imagem coluna-tela">
            <img src="/home/img3.svg" alt="Homem utilizando o computador" className="imagemCol" />
          </Col>
        </Row>
      </Container>

      <div className="bg-cinza">
        <Container className="animar">
          <Row className="tela">
            <Col className="column textos coluna-tela">
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
    </BlankLayout>
  );
};

export default ConteudoHome;
