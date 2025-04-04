import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ffffff' }} className='lineBottom lineTop'>
      <Container className="d-flex ">
        <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        style={{
          position:"relative",
          borderRadius:'8px',
          marginBottom:'5px',
          border:'none',
          outline:'none',
        }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="d-flex justify-content-center"
            style={{
              display: 'flex',
              width: '100%',
              gap: '15px',
            }}
          >
            <Link className="link-navbar" to="/home" style={{ backgroundColor: '#ffffff' }}>HOME</Link>
            <Link className="link-navbar" to="/fale-conosco" style={{ backgroundColor: '#ffffff' }}>FALE CONOSCO</Link>
            <Link className="link-navbar" to="/acompanhamento" style={{ backgroundColor: '#ffffff' }}>ACOMPANHAMENTO</Link>
            <Link className="link-navbar" to="/informacoes" style={{ backgroundColor: '#ffffff' }}>INFORMAÇÕES E FAQs</Link>
            <Link className="link-navbar" to="/regulamento" style={{ backgroundColor: '#ffffff' }}>POLÍTICAS E REGULAMENTOS</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;