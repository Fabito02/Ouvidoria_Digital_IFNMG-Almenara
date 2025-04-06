import { Container, Row, Col, Card } from "react-bootstrap";
import "./Informacoes.css";
import { Link } from "react-router-dom";

const Informacoes = [
  {
    title: "Como posso entrar em contato com a Ouvidoria do IFNMG Almenara?",
    content: (
      <>
        Você pode entrar em contato através do{" "}
        <Link className="link" to="/fale-conosco">formulário online</Link> disponível no site da
        ouvidoria, por e-mail (<a className="link" href="mailto:6n9GK@example.com">ouvidoria.almenara@ifnmg.edu.br</a>), por telefone (<a className="link" href="tel: +55 33 4402-8922">+55 33 4402-8922</a>) ou pessoalmente
        no setor da Ouvidoria no campus, de segunda a sexta-feira, das 8h às
        17h.
      </>
    ),
  },
  {
    title: "Quanto tempo leva para receber uma resposta da Ouvidoria?",
    content: (
      <>
        O prazo máximo para resposta é de 20 dias corridos, prorrogáveis por mais 10 dias mediante justificativa, conforme estabelece o <a className="link" href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/decreto/d10153.htm">Decreto nº 10.153/2019</a>, posteriormente alterado pelo decreto <a className="link" href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/decreto/d10890.htm">Decreto nº 10.890/2021

</a>. Ainda assim, buscamos responder o mais rápido possível, geralmente em até 3 dias úteis.
      </>
    ),
  },
  {
    title: "Posso fazer denúncias anônimas?",
    content:
      "Sim, a Ouvidoria aceita denúncias anônimas. No entanto, informamos que denúncias identificadas permitem um acompanhamento mais eficaz, pois podemos entrar em contato para obter mais informações ou dar retorno sobre as providências tomadas.",
  },
  {
    title: "Quais tipos de manifestações a Ouvidoria pode receber?",
    content:
      "A Ouvidoria aceita reclamações, denúncias, sugestões e elogios. Todas as manifestações são tratadas com sigilo e encaminhadas aos setores responsáveis.",
  },
  {
    title: "Como devo escrever a minha manifestação?",
    content:
      "Sua manifestação deve ser clara, objetiva e respeitosa, evitando linguagem inadequada, informações pessoais sensíveis sem necessidade, ofensas ou casos que não estejam relacionadas ao âmbito de atuação do IFNMG.",
  },
  {
    title: "Como acompanho o andamento da minha manifestação?",
    content: (
      <>
        Ao registrar sua manifestação, você pode acompanhar o andamento através do sistema, em <a href="/minhas-manifestacoes" className="link">Minhas manifestações</a> ou entrar em contato diretamente com a Ouvidoria para solicitar informações."
      </>
    ),
  },
  {
    title: "A Ouvidoria pode resolver problemas acadêmicos individuais?",
    content:
      "A Ouvidoria não substitui os canais regulares de atendimento acadêmico. Recomendamos primeiro buscar solução junto à Coordenação de Curso ou Direção Acadêmica. Caso não haja solução satisfatória, a Ouvidoria pode intermediar o processo.",
  },
  {
    title: "Quais são os horários de funcionamento da Ouvidoria presencial?",
    content:
      "O atendimento presencial ocorre de segunda a sexta-feira, das 8h às 12h e das 14h às 17h, no prédio administrativo do campus, sala da Ouvidoria.",
  },
];

export default function Faq() {
  return (
    <Container className="py-5">
      <h1 className="text-center title">FAQ</h1>
      <p className="text-center text-muted subtitle">Perguntas Frequentes</p>

      <Row className="gy-4">
        {Informacoes.map((faq, index) => (
          <Col key={index} md={6} className="position-relative">
            <Card className="p-3 border-0 w-100">
              <Row>
                <Col xs={10} className="mx-auto">
                  <h5 className="fw-bold">{faq.title}</h5>
                  <p className="text-muted mb-0">{faq.content}</p>
                </Col>
              </Row>
            </Card>
            <div className="traco"></div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
