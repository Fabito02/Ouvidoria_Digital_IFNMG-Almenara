import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ffffff' }} className='lineBottom'>
      <Container className="d-flex justify-content-center">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="d-flex justify-content-center"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '15px',
              width: '100%',
            }}
          >
            <Link className="link-navbar active" to="/" style={{ backgroundColor: '#ffffff' }}>PÁGINA INICIAL</Link>
            <Link className="link-navbar active" to="/reclamacao" style={{ backgroundColor: '#ffffff' }}>FAZER RECLAMAÇÃO</Link>
            <Link className="link-navbar active" to="/acompanhamento" style={{ backgroundColor: '#ffffff' }}>ACOMPANHAMENTO</Link>
            <Link className="link-navbar active" to="/informacoes" style={{ backgroundColor: '#ffffff' }}>INFORMAÇÕES E FAQs</Link>
            <Link className="link-navbar active" to="/regulamento" style={{ backgroundColor: '#ffffff' }}>POLÍTICAS E REGULAMENTOS</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;