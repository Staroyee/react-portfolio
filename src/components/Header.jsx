/* eslint-disable react/prop-types */
import { useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import avatar from "../assets/images/avatar.jpg"

const styles = {
  navStyle: {
    padding: '1.3rem',
    alignContent: 'center'
  },
  avatarStyle: {
    width: 60,
  },
  titleStyle: {
    padding: '0px 20px 0px 20px'
  },
};

function Header({ links }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Navbar style={styles.navStyle} bg="dark" variant="dark" expand="lg">
      <Container>
        <Image style={styles.avatarStyle} src={avatar} alt="Avatar" roundedCircle/>
        <Navbar.Brand style={styles.titleStyle}>
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