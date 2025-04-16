import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Button from "../../components/buttons/Button";
import { BlankLayout } from "../../components/BlankLayout/BlankLayout";
import { useEffect } from "react";

const AlterarSenha = () => {
  useEffect(() => {
    document.title = "Alterar Senha"
  })
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      senhaAtual,
      novaSenha,
      confirmacao,
    });
  };

  return (
    <BlankLayout showFooter={false}>
        <Container className="py-5">
        <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
            <Card className="shadow-sm p-4 float-card">
                <h1 className="mb-4 text-center muted">Alterar Senha</h1>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Senha Atual</Form.Label>
                    <Form.Control
                    type="password"
                    value={senhaAtual}
                    onChange={(e) => setSenhaAtual(e.target.value)}
                    placeholder="••••••••"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nova Senha</Form.Label>
                    <Form.Control
                    type="password"
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                    placeholder="••••••••"
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Confirmar Nova Senha</Form.Label>
                    <Form.Control
                    type="password"
                    value={confirmacao}
                    onChange={(e) => setConfirmacao(e.target.value)}
                    placeholder="••••••••"
                    />
                </Form.Group>

                <div className="text-end">
                    <Button
                    texto="Salvar Nova Senha"
                    icon="material-symbols:lock"
                    type="submit"
                    />
                </div>
                </Form>
            </Card>
            </Col>
        </Row>
        </Container>
    </BlankLayout>
  );
};

export default AlterarSenha;
