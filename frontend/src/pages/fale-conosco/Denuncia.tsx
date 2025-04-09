import { Row, Col, Container, Form } from "react-bootstrap";
import Button from "../../components/buttons/Button";
import { useEffect, useState, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const Denuncia = () => {
  const [anonimo, setAnonimo] = useState(false);

  const editorRef = useRef<Quill | null>(null);

  useEffect(() => {
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
      <h1 className="mb-5 title">Denúncia</h1>
      <Form onSubmit={handleSubmit}>
        <span>Deseja fazer a denúncia de forma anônima?</span>
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
                    className="shadow-sm"
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
                    className="shadow-sm"
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
                  <Form.Control
                    className="shadow-sm"
                    type="tel"
                    placeholder="(00) 00000-0000"
                  />
                </Form.Group>
              </Col>
            </Row>
          </>
        )}

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formTipoDenuncia">
              <Form.Label>Tipo de Denúncia</Form.Label>
              <Form.Select className="shadow-sm" defaultValue="">
                <option value="">Selecione...</option>
                <option value="assedio-moral">Assédio Moral</option>
                <option value="assedio-sexual">Assédio Sexual</option>
                <option value="discriminacao">
                  Discriminação (Racial, de Gênero, etc.)
                </option>
                <option value="violencia">Violência ou Agressão Física</option>
                <option value="ameaça">Ameaça ou Intimidação</option>
                <option value="bullying">Bullying ou Cyberbullying</option>
                <option value="negligencia">
                  Negligência ou Abuso de Autoridade
                </option>
                <option value="corrupcao">
                  Corrupção, Fraude ou Irregularidades
                </option>
                <option value="abuso-poder">Abuso de Poder</option>
                <option value="desvios-eticos">
                  Desvios de Conduta ou Ética
                </option>
                <option value="infraestrutura-perigosa">
                  Infraestrutura Perigosa ou Insegura
                </option>
                <option value="conduta-inadequada">
                  Conduta Inadequada de Docentes ou Servidores
                </option>
                <option value="higiene">
                  Falta de Higiene em Ambientes Críticos
                </option>
                <option value="descarte-irregular">
                  Descarte Irregular de Resíduos
                </option>
                <option value="outros">Outros</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formDenuncia" className="mb-3">
          <Form.Label>Descreva sua denúncia</Form.Label>
          <div
            id="editor"
            style={{
              minHeight: "200px",
              padding: "5px",
              borderRadius: "0px 0px 12px 12px",
            }}
            className="inputDenuncia shadow-sm"
          ></div>
        </Form.Group>

        <Button
          type="submit"
          texto="Enviar Denúncia"
          className="mb-5"
          icon="material-symbols:send-rounded"
          iconPosition="right"
        />
      </Form>
    </Container>
  );
};

export default Denuncia;
