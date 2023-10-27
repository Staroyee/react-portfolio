/* eslint-disable react/prop-types */
import { useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

const styles = {
  navStyle: {
    padding: "1.3rem",
    alignContent: "center",
  },
  avatarStyle: {
    width: 120,
  },
  titleStyle: {
    padding: "0px 20px 0px 20px",
  },
};

function Header({ links }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Navbar style={styles.navStyle} variant="dark" expand="lg">
      <Container>
        <a href="http://localhost:3000/" className="href">
          <Image
            style={styles.avatarStyle}
            src={logo}
            alt="Avatar"
            roundedCircle
          />
        </a>
        <Navbar.Brand style={styles.titleStyle}>
          Staroye Web Development
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleCollapsed} />
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
      </Container>
    </Navbar>
  );
}

export default Header;
