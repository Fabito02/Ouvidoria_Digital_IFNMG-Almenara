import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Image, Alert } from 'react-bootstrap';
import './Perfil.css';
import { BlankLayout } from '../../components/BlankLayout/BlankLayout';

interface ProfileData {
  nome: string;
  email: string;
  avatar: string;
  notificacoesNoEmail: boolean;
  acesso: 'Comum' | 'Administrador';
}

const Perfil = () => {
  const [profile, setProfile] = useState<ProfileData>({
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    avatar: '/pudim.png',
    notificacoesNoEmail: true,
    acesso: 'Administrador',
  });

  return (
    <BlankLayout showFooter={false} showHeader={false} showNavbar={false}>
        <Container className="py-5">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Image src={profile.avatar} alt="Avatar" className="avatar" />
                            <h2>{profile.nome}</h2>
                            <p>{profile.email}</p>  
                            <p>{profile.acesso}</p>  
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </BlankLayout>
  );
};

export default Perfil;