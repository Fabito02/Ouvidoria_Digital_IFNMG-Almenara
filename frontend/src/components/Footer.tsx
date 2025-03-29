import { 
  Container, 
  Row, 
  Col, 
  Nav,
} from 'react-bootstrap';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import './Footer.css';
import Button from './buttons/Button';

const Footer = () => {
  const sections = [
    { title: "Páginas", opcoes: [{ name: "Página Inicial", link: "/" }, { name: "Home", link: "/home" }, { name: "Fale Conosco", link: "/fale-conosco" }, { name: "Informações e FAQs", link: "/informacoes" }, { name: "Políticas e Regulamentos", link: "/regulamento" }] },
    { title: "Desenvolvedores", opcoes: [{ name: "Fabiano Júnior", link: "https://github.com/Fabito02/" }, { name: "Francisco Rodrigues", link: "https://github.com/FranSRodrigues/" }, { name: "Pablo Messias", link: "https://github.com/PabloMessias007/" }, { name: "Bruno Araújo", link: "https://github.com/EoBrunin/" }] }
  ];

  return (
    <Container className='footer-container'>
    <footer className="py-5">
      <Row>
        <Col md={2}>
          <img src="/Logo - Footer.svg" alt="Logo Auris" className='logo-footer' />
        </Col>
        {sections.map((section, index) => (
          <Col key={index} md={2} className='mb-3'>
            <h5 className="text-white">{section.title}</h5>
            <Nav className="flex-column">
              {section.opcoes.map((opcao, i) => (
                <Nav.Item key={i} className="mb-2">
                  <Nav.Link href={opcao.link} className="p-0 text-white">
                    {opcao.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        ))}

        <Col md={4} className="offset-md-1">
          <h5 className="text-white">Visite o site oficial do IFNMG - Campus Almenara</h5>
          <p className="text-white">Encontre informações acadêmicas, administrativas e as últimas notícias do campus Almenara.</p>
          <Button href="https://almenara.ifnmg.edu.br/">Visitar Site</Button>
        </Col>
      </Row>

      <div className="d-flex justify-content-between py-3 my-4 border-top">
        <p className="text-white">&copy; 2025 IFNMG - Campus Almenara. Todos os direitos reservados.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a href="https://www.youtube.com/c/IFNMGCampusAlmenara" className="link-light" aria-label="YouTube">
              <Icon icon={"mingcute:youtube-fill"} width="24" height="24" />
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.instagram.com/almenara_ifnmg/" className="link-light" aria-label="Instagram">
              <Icon icon={"ri:instagram-fill"} width="24" height="24" />
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.facebook.com/IFNMGoficial" className="link-light" aria-label="Facebook">
              <Icon icon={"ic:baseline-facebook"} width="24" height="24" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
    </Container>
  );
};

export default Footer;