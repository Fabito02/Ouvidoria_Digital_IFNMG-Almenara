import React, { useState } from "react";
import { Container, Row, Col, Form, Image, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { BlankLayout } from "../../components/BlankLayout/BlankLayout";

const Perfil = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [name, setName] = useState("Seu Nome");
  const [email, setEmail] = useState("email@exemplo.com");
  const [phone, setPhone] = useState("(00) 00000-0000");

  const navigate = useNavigate();

  const handlePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
      profilePic,
    });
  };

  return (
    <BlankLayout showFooter={false} showHeader={true} showNavbar={true}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Card className="p-4 border-0">
              <Row className="align-items-center mb-5">
                <Col xs="auto">
                  <Image
                    src={profilePic || "/user_placeholder.png"}
                    roundedCircle
                    width={100}
                    height={100}
                    alt="Foto de perfil"
                    style={{ objectFit: "cover" }}
                  />
                </Col>
                <Col>
                  <Form.Group controlId="formFotoPerfil">
                    <Form.Label className="fw-semibold">
                      Foto de Perfil
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handlePicChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNome">
                  <Form.Label className="fw-semibold">Nome</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-semibold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@exemplo.com"
                  />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formTelefone">
                  <Form.Label className="fw-semibold">Telefone</Form.Label>
                  <Form.Control
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                  />
                </Form.Group>

                <div className="d-flex flex-column flex-md-row gap-2">
                  <Button
                    texto="Alterar Senha"
                    icon="mdi:lock-reset"
                    color="secondary"
                    onClick={() => navigate("/alterar-senha")}
                    className="w-100"
                  />

                  <Button
                    texto="Salvar Alterações"
                    icon="material-symbols-light:save"
                    type="submit"
                    className="w-100"
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

export default Perfil;
