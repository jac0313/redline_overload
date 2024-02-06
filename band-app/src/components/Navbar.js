import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'


function Navigation() {
  return (
    <Navbar expand="lg" className="bg-danger text-white">
      <Container>
        <Navbar.Brand href="/home">REDLINE OVERLOAD</Navbar.Brand>
           
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/bios">Bios</Nav.Link>
            <Nav.Link href="/shows">Shows</Nav.Link>
            <div className='socials'>
                <a href='https://www.facebook.com/RedlineOverload' className='facebook'>
                <FontAwesomeIcon icon={ faFacebook } size='2x'/>
                </a>
                <a href='https://www.instagram.com/redline.overload/' className='instagram'>
                    <FontAwesomeIcon icon={ faInstagram } size='2x' />
                </a>
                <a href='https://www.youtube.com/@redline.overload' className='youtube'>
                    <FontAwesomeIcon icon={ faYoutube } size='2x' />
                </a>
                
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

