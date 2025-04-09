import './LoginERegistrar.css'
import { Row, Col, Container, Form } from "react-bootstrap";
import ButtonBootstrap from 'react-bootstrap/Button';
import Button from '../components/buttons/Button';
import { Icon } from "@iconify-icon/react";
import { BlankLayout } from '../components/BlankLayout/BlankLayout';

const Login = () => {
    return (
      <BlankLayout showFooter={false} showHeader={false} showNavbar={false} removeBodyPadding>
        <Container>
            <Row>
                <Col lg={'5'}>
                    <div className='box'>
                        <h1 className='title'>Bem Vindo de Volta!</h1>
                        <p className='subtitle' style={{marginTop: '15px'}}>Para continuar conectado,<br /> faça login com suas informações pessoais</p>
                        <a href="/registrar">
                            <ButtonBootstrap
                                variant="outline-light"
                                className='botaoBranco'
                            >
                                CRIAR CONTA
                            </ButtonBootstrap>
                        </a>
                    </div>
                </Col>
                <Col lg={'7'} className='formulario'>
                    <h1 className="text-center title2 mb-4">LOGIN</h1>
                    <div className="text-center mb-5">
                        <img src="/google-icon.svg" alt="Google logo" style={{ width: '40px', cursor: 'pointer' }} />
                    </div>
                    <p className="text-center mb-4">ou use seu e-mail para entrar</p>
                    <Form>
                        <Form.Group className="mb-3 shadow-sm" controlId="formEmail" style={{position: 'relative'}}>
                            <Icon className='iconeForm' icon="material-symbols:stacked-email-rounded" />
                            <Form.Control type="email" placeholder="E-mail ou usuário" className='custom-input' />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-sm" controlId="formPassword" style={{position: 'relative'}}>
                        <Icon className='iconeForm' icon="material-symbols:password-rounded" />
                            <Form.Control type="password" placeholder="Senha" className='custom-input' />
                        </Form.Group>

                        <Button texto='login' className='bt-login'/>
                    </Form>
                </Col>
            </Row>
        </Container>
      </BlankLayout>
    );
  };
  
  export default Login;
  