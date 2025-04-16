import { useEffect, useState, useRef } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import Button from "../../components/buttons/Button";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const Reclamacao = () => {
  const [anonimo, setAnonimo] = useState(false);
  const [tipoReclamacao, setTipoReclamacao] = useState("");
  const editorRef = useRef<Quill | null>(null);

  useEffect(() => {

    document.title = "Enviar reclamação"

    if (!editorRef.current) {
      editorRef.current = new Quill("#editor", {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: "1" }, { header: "2" }, { header: "3" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            ["blockquote", "code-block"],
            ["link", "image", "video"],
            ["clean"],
          ],
        },
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const editor = document.querySelector("#editor") as HTMLElement;
    const content = editor.innerHTML;
    console.log(content);
  };

  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5 title">RECLAMAÇÃO</h1>
      <Form onSubmit={handleSubmit}>
        <span>Deseja fazer a reclamação de forma anônima?</span>
        <Form.Group controlId="formAnonimo" className="mb-3">
          <Form.Check
            type="checkbox"
            onChange={(e) => setAnonimo(e.target.checked)}
          />
        </Form.Group>

        {!anonimo && (
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu e-mail"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        )}

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formTipoReclamacao">
              <Form.Label>Tipo de Reclamação</Form.Label>
              <Form.Select
                defaultValue=""
                onChange={(e) => setTipoReclamacao(e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="infraestrutura">Estrutura e Espaços</option>
                <option value="atendimento">Atendimento</option>
                <option value="servico">Serviço</option>
                <option value="seguranca">Segurança</option>
                <option value="higiene">Higiene</option>
                <option value="alimentacao">Alimentação</option>
                <option value="equipamentos">Equipamentos</option>
                <option value="docentes">Docentes</option>
                <option value="servidores">Servidores</option>
                <option value="acessibilidade">Acessibilidade</option>
                <option value="eventos">Eventos</option>
                <option value="burocracia">Burocracia</option>
                <option value="outros">Outros</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {tipoReclamacao === "infraestrutura" && (
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formAreaCampus">
                <Form.Label>Área do Campus</Form.Label>
                <Form.Select defaultValue="">
                  <option value="">Selecione...</option>
                  <option value="portaria">Portaria</option>
                  <option value="biblioteca">Biblioteca</option>
                  <option value="setor-administrativo">
                    Setor Administrativo
                  </option>
                  <option value="predio-pedagogico-1">
                    Prédio Pedagógico I
                  </option>
                  <option value="auditório">Auditório</option>
                  <option value="semirresidencial">Semirresidencial</option>
                  <option value="nucleo-assuntos-estudantis">
                    Núcleo de Assuntos Estudantis
                  </option>
                  <option value="lanchonete">Lanchonete</option>
                  <option value="refeitorio">Refeitório</option>
                  <option value="nucleo-estudos-agroecologia">
                    Núcleo de Estudos em Agroecologia
                  </option>
                  <option value="predio-pedagogico-2">
                    Prédio Pedagógico II
                  </option>
                  <option value="moradia-estudantil">
                    Moradia Estudantil - Residencial
                  </option>
                  <option value="laboratorio-solos">
                    Laboratório de Solos
                  </option>
                  <option value="ginasio">Ginásio</option>
                  <option value="suinocultura">Suinocultura</option>
                  <option value="casa-racao">Casa de Ração</option>
                  <option value="laboratorio-campo">
                    Laboratório de Campo
                  </option>
                  <option value="bovinocultura">Bovinocultura</option>
                  <option value="avicultura">Avicultura</option>
                  <option value="casa-maquinas">Casa de Máquinas</option>
                  <option value="outros">Outros</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        )}

        <Form.Group controlId="formTituloElogio" className="mb-3">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o título da reclamação"
            required
          />
        </Form.Group>

        <Form.Group controlId="formReclamacao" className="mb-3">
          <Form.Label>Descreva sua reclamação</Form.Label>
          <div
            id="editor"
            style={{
              minHeight: "200px",
              padding: "5px",
              borderRadius: "0px 0px 11px 11px",
            }}
            className="inputReclamacao"
          ></div>
        </Form.Group>

        <Button
          type="submit"
          texto="Enviar Reclamação"
          className="mb-5"
          icon="material-symbols:send-rounded"
          iconPosition="right"
        />
      </Form>
    </Container>
  );
};

export default Reclamacao;
