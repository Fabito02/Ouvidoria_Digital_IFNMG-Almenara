import { Row, Col, Container, Form } from "react-bootstrap";
import Button from "../../components/buttons/Button";
import { useEffect, useState, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const Sugestao = () => {
  const [anonimo, setAnonimo] = useState(false);

  const editorRef = useRef<Quill | null>(null);

  useEffect(() => {
    
    document.title = "Enviar sugestão"

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
      <h1 className="mb-5 title">SUGESTÃO</h1>
      <Form onSubmit={handleSubmit}>
        <span>Deseja fazer a sugestão de forma anônima?</span>
        <Form.Group controlId="formAnonimo" className="mb-3">
          <Form.Check
            type="checkbox"
            onChange={(e) => setAnonimo(e.target.checked)}
          />
        </Form.Group>

        {!anonimo && (
          <>
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

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formTelefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control type="tel" placeholder="(00) 00000-0000" />
                </Form.Group>
              </Col>
            </Row>
          </>
        )}

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formTipoSugestao">
              <Form.Label>Tipo de Sugestão</Form.Label>
              <Form.Select defaultValue="">
                <option value="">Selecione...</option>
                <option value="melhoria-infraestrutura">
                  Melhoria na Infraestrutura
                </option>
                <option value="novos-servicos">Novos Serviços</option>
                <option value="processos-burocraticos">
                  Otimização de Processos
                </option>
                <option value="eventos-atividades">
                  Sugestão de Eventos e Atividades
                </option>
                <option value="tecnologia-sistemas">
                  Aprimoramento Tecnológico
                </option>
                <option value="alimentacao">Sugestões para Alimentação</option>
                <option value="espacos-estudo">
                  Melhoria nos Espaços de Estudo
                </option>
                <option value="sustentabilidade">
                  Ações de Sustentabilidade
                </option>
                <option value="outros">Outros</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formTituloSugestao" className="mb-3">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o título da sugestão"
            required
          />
        </Form.Group>

        <Form.Group controlId="formSugestao" className="mb-3">
          <Form.Label>Descreva sua sugestão</Form.Label>
          <div
            id="editor"
            style={{
              minHeight: "200px",
              padding: "5px",
              borderRadius: "0px 0px 11px 11px",
            }}
            className="inputSugestao"
          ></div>
        </Form.Group>

        <Button
          type="submit"
          texto="Enviar sugestão"
          className="mb-5"
          icon="material-symbols:send-rounded"
          iconPosition="right"
        />
      </Form>
    </Container>
  );
};

export default Sugestao;
