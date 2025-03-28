import { Container, Row, Col, Card } from "react-bootstrap";
import "./Informacoes.css";

const Informacoes = [
  {
    title: "Como posso entrar em contato com a Ouvidoria do IFNMG Almenara?",
    content:
      "Você pode entrar em contato através do formulário online disponível no site da ouvidoria, por e-mail (ouvidoria.almenara@ifnmg.edu.br) ou pessoalmente no setor da Ouvidoria no campus, de segunda a sexta-feira, das 8h às 17h.",
  },
  {
    title: "Quanto tempo leva para receber uma resposta da Ouvidoria?",
    content:
      "O prazo máximo para resposta é de 30 dias úteis, conforme estabelecido pela Lei nº 12.527/2011 (Lei de Acesso à Informação). No entanto, buscamos responder o mais rápido possível, geralmente em até 5 dias úteis.",
  },
  {
    title: "Posso fazer denúncias anônimas?",
    content:
      "Sim, a Ouvidoria aceita denúncias anônimas. No entanto, informamos que denúncias identificadas permitem um acompanhamento mais eficaz, pois podemos entrar em contato para obter mais informações ou dar retorno sobre as providências tomadas.",
  },
  {
    title: "Quais tipos de manifestações a Ouvidoria pode receber?",
    content:
      "A Ouvidoria aceita reclamações, denúncias, sugestões, elogios e solicitações de informação sobre serviços e processos do IFNMG Campus Almenara. Todas as manifestações são tratadas com sigilo e encaminhadas aos setores responsáveis.",
  },
  {
    title: "Minha reclamação não apareceu no sistema. O que aconteceu?",
    content:
      "Todas as manifestações passam por análise prévia. Reclamações que contenham linguagem inadequada, informações pessoais sensíveis sem necessidade, ofensas ou que não estejam relacionadas ao âmbito de atuação do IFNMG podem não ser publicadas. Garanta que sua manifestação seja clara, objetiva e respeitosa.",
  },
  {
    title: "Como acompanho o andamento do meu protocolo?",
    content:
      "Ao registrar sua manifestação, você receberá um número de protocolo. Com esse número, você pode acompanhar o andamento através do sistema de ouvidoria online ou entrar em contato diretamente com a Ouvidoria para solicitar informações.",
  },
  {
    title: "A Ouvidoria pode resolver problemas acadêmicos individuais?",
    content:
      "A Ouvidoria não substitui os canais regulares de atendimento acadêmico. Recomendamos primeiro buscar solução junto à Coordenação de Curso ou Direção Acadêmica. Caso não haja solução satisfatória, a Ouvidoria pode intermediar o processo.",
  },
  {
    title: "Quais são os horários de funcionamento da Ouvidoria presencial?",
    content:
      "O atendimento presencial ocorre de segunda a sexta-feira, das 8h às 12h e das 14h às 17h, no prédio administrativo do campus, sala da Ouvidoria. Recomendamos agendar previamente por e-mail ou telefone.",
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
