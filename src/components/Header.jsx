import { useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ links }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Image src="https://example.com/your-avatar-image.jpg" alt="Avatar" />
          Daniel Masefield
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleCollapsed} />
        <Navbar.Collapse className={`justify-content-${collapsed ? "center" : "end"}`}>
          <Nav>
            {links.map((link, index) => (
              <Nav.Item key={index}>
                <Link to={link.to} className="nav-link">
                  {link.label}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;