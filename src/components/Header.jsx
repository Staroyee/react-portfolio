import { useState } from "react";
import { Navbar, Nav, Image, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

const styles = {
  navStyle: {
    marginBottom: "20px",
    padding: "0rem 2rem",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  logoStyle: {
    width: 120,
    margin: "10px",
  },
  titleStyle: {
    margin: "10px",
  },
  dropdownStyle: {
    margin: "10px",
  },
};



function Header({ links }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Row>
      <Col>
        <Navbar style={styles.navStyle} variant="dark" expand="lg">
          <a href="http://localhost:3000/" className="href">
            <Image
              style={styles.logoStyle}
              src={logo}
              alt="Avatar"
              roundedCircle
            />
          </a>
          <Navbar.Brand style={styles.titleStyle}>
            Staroye Web Development
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={toggleCollapsed}
            style={styles.dropdownStyle}
          />
          <Navbar.Collapse
            className={`justify-content-${collapsed ? "center" : "end"}`}
          >
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
        </Navbar>
      </Col>
    </Row>
  );
}

export default Header;
