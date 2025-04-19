import { useEffect } from "react";
import { BlankLayout } from "../BlankLayout/BlankLayout";
import Button from "../buttons/Button";
import MaisBemAvaliados from "../MaisBemAvaliados";
import "./ConteudoInicial.css";
import { Link } from "react-router-dom";

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
    <BlankLayout removeBodyPadding>
      <Link to="/login" className="z-100">
        <Button texto="login" className="login-btn" />
      </Link>
      <img src="/home/auris.svg" alt="Logo Auris" className="logo-auris" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animar tela primeira-tela px-[7vw]">
        <div className="textos text-right coluna-tela">
          <h1 className="title">Auris – Ouvidoria Digital</h1>
            <p className="complemento flex flex-col items-center lg:items-end">
              Envie sua manifestação na plataforma para construir um IFNMG - Campus Almenara melhor para todos(as).
            <Link to="/login" className="mt-4">
              <Button texto="acessar plataforma" className="plataforma-btn" />
            </Link>
          </p>
        </div>
        <div className="imagem coluna-tela">
          <img src="/home/img1.svg" alt="Homem utilizando o computador" className="imagemCol" />
        </div>
      </div>

      <div className="bg-cinza">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animar tela px-[7vw]">
          <div className="textos text-right coluna-tela">
            <h1 className="title">Locais mais bem avaliados do campus:</h1>
            <p className="complemento">
              Descubra e valorize os locais mais bem avaliados do campus.
            </p>
          </div>
          <div className="imagem coluna-tela">
            <MaisBemAvaliados />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animar tela px-[7vw]">
        <div className="imagem col-inverso coluna-tela">
          <img src="/home/img2.svg" alt="Homem utilizando o computador" className="imagemCol" />
        </div>
        <div className="textos coluna-tela">
          <h1 className="title">O elogio é combustível para a excelência!</h1>
          <p className="complemento">
            Conte-nos sobre aquela experiência positiva que merece ser celebrada.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animar tela px-[7vw]">
        <div className="textos text-right coluna-tela">
          <h1 className="title">Escutamos agora para melhorar sempre!</h1>
          <p className="complemento">
            Seja para valorizar o que dá certo ou ajustar o que pode ser melhorado.
          </p>
        </div>
        <div className="imagem coluna-tela">
          <img src="/home/img3.svg" alt="Homem utilizando o computador" className="imagemCol" />
        </div>
      </div>

      <div className="bg-cinza">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 animar tela px-[7vw]">
          <div className="column textos coluna-tela">
            <div className="title">Venha fazer parte da mudança!</div>
            <p className="complemento">
              Acesse a plataforma, compartilhe sua opinião e ajude a construir um ambiente ainda melhor.
            </p>
            <Link to="/login">
              <Button texto="acessar plataforma" className="plataforma-btn" />
            </Link>
          </div>
        </div>
      </div>
    </BlankLayout>
  );
};

export default ConteudoHome;
