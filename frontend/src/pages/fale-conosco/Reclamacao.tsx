import './Form.css';
import { Row, Col, Container, Form } from 'react-bootstrap';
import Button from '../../components/buttons/Button';
import { useEffect, useState, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const Reclamacao = () => {
    const [anonimo, setAnonimo] = useState(false);

    const editorRef = useRef<Quill | null>(null);

    useEffect(() => {
        if (!editorRef.current) {
            editorRef.current = new Quill('#editor', {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'align': [] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        ['blockquote', 'code-block'],
                        ['link', 'image', 'video'],
                        ['clean']
                    ]
                }
            });
        }
    }, []);    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const editor = document.querySelector('#editor') as HTMLElement;
        const content = editor.innerHTML;
        console.log(content);
    };

    return (
        <Container className="mt-5">
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
                    <>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formNome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control className='shadow-sm' type="text" placeholder="Digite seu nome" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control className='shadow-sm' type="email" placeholder="Digite seu e-mail" required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formTelefone">
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control className='shadow-sm' type="tel" placeholder="(00) 00000-0000" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </>
                )}

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formAreaCampus">
                            <Form.Label>Área do Campus</Form.Label>
                            <Form.Select className='shadow-sm' defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="administracao">Administração</option>
                                <option value="secretaria">Secretaria</option>
                                <option value="biblioteca">Biblioteca</option>
                                <option value="laboratorios">Laboratórios</option>
                                <option value="sala-aula">Salas de Aula</option>
                                <option value="restaurante">Lanchonete</option>
                                <option value="portaria">Portaria</option>
                                <option value="outros">Outros</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formTipoReclamacao">
                            <Form.Label>Tipo de Reclamação</Form.Label>
                            <Form.Select className='shadow-sm' defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="atendimento">Atendimento</option>
                                <option value="infraestrutura">Infraestrutura</option>
                                <option value="servico">Serviço</option>
                                <option value="seguranca">Segurança</option>
                                <option value="outros">Outros</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="formReclamacao" className="mb-3">
                    <Form.Label>Descreva sua reclamação</Form.Label>
                    <div id="editor" style={{ minHeight: '200px', padding: '5px',  borderRadius: '0px 0px 12px 12px'}} className='inputReclamacao shadow-sm'></div>
                </Form.Group>

                <Button type="submit" texto="Enviar Reclamação" className='mb-3' />
            </Form>
        </Container>
    );
};

export default Reclamacao;
