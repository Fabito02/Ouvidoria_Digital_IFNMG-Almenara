import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import "./Acompanhamento.css";
import { BlankLayout } from "../../components/BlankLayout/BlankLayout";
import { useEffect } from "react";
import Geral from "../../components/acompanhamento/Geral";
import Reclamacoes from "../../components/acompanhamento/Reclamacoes";
import Elogios from "../../components/acompanhamento/Elogios";
import Denuncias from "../../components/acompanhamento/Denuncias";
import Sugestoes from "../../components/acompanhamento/Sugestoes";

const Acompanhamento = () => {
  const [expandido, setExpandido] = useState(false);
  const [abaSelecionada, setAbaSelecionada] = useState("0");

  useEffect(() => {

    const handleExibirTab = () => {
      const tabs = document.querySelectorAll(".tabContainer");
      tabs.forEach((tab) => {
        if (tab.id === `tab-${abaSelecionada}`) {
          tab.classList.remove("d-none");
        } else {
          tab.classList.add("d-none");
        }
      });
    };
    handleExibirTab();
    setExpandido(false);
  }, [abaSelecionada]);

  const toggleSidebar = () => {
    setExpandido(!expandido);
  };

  const opcoes = [
    { icon: "material-symbols:dashboard-rounded", label: "Visão Geral" },
    { icon: "material-symbols:feedback-rounded", label: "Reclamações" },
    { icon: "material-symbols:thumb-up-rounded", label: "Elogios" },
    { icon: "material-symbols:warning-rounded", label: "Denúncias" },
    { icon: "material-symbols:lightbulb-rounded", label: "Sugestões" },
  ];

  return (
    <BlankLayout showFooter={false} showHeader={true} showNavbar={true} removeBodyPadding={false}>   
      <Container fluid className="corpoDoSite">
        <div className={`barraLateral ${expandido ? "expandido" : ""}`}>
          <Button
            onClick={toggleSidebar}
            className="toggle-expandir"
          >
            <Icon
              icon={
                expandido
                  ? "material-symbols:chevron-left"
                  : "material-symbols:chevron-right"
              }
            />
          </Button>
          {opcoes.map((opcao, index) => (
            <div key={index} className={`opcao ${expandido ? "expandido" : ""}`} onClick={() => setAbaSelecionada(index.toString())}>
            <Icon icon={opcao.icon} className="icone" />
            {expandido && <span className="label">{opcao.label}</span>}
            </div>
          ))}
        </div>

        <div className={`conteudo ${expandido ? "escurecido" : ""}`} onClick={() => setExpandido(false)}>
          <Container className="conteudoContainer">
            <div className="tabContainer d-none" id="tab-0">
              <Geral />
            </div>
            <div className="tabContainer d-none" id="tab-1">
              <Reclamacoes />
            </div>
            <div className="tabContainer d-none" id="tab-2">
              <Elogios />
            </div>
            <div className="tabContainer d-none" id="tab-3">
              <Denuncias />
            </div>
            <div className="tabContainer d-none" id="tab-4">
              <Sugestoes />
            </div>
          </Container>
        </div>
      </Container>
    </BlankLayout>
  );
};

export default Acompanhamento;
