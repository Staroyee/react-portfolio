import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import githubLogo from '../assets/images/github-mark-white.png';
import linkedinLogo from '../assets/images/linkedin.png'
import stackOverflow from '../assets/images/stack-overflow.png'

const styles = {
  footerStyle: {
    borderTop: '1px solid white',
    margin: 'auto',
    width: '90%',
    maxWidth: '850px',
    display: 'flex',
  },
  footerbrandStyle: {
    margin: '10px 30px',
  }
}

function Footer() {
  return (
    <>
      <Navbar style={styles.footerStyle} variant='dark'>
        <Container>
          <Navbar.Brand style={styles.footerbrandStyle} href="https://github.com/Staroyee" target='_blank'>
            <img
              src={githubLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Github"
            />
          </Navbar.Brand>
          <Navbar.Brand style={styles.footerbrandStyle} href="https://www.linkedin.com/in/danielmasefield03/" target='_blank'>
            <img
              src={linkedinLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Github"
            />
          </Navbar.Brand>
          <Navbar.Brand style={styles.footerbrandStyle} href="https://stackoverflow.com/users/22794356/staroye" target='_blank'>
            <img
              src={stackOverflow}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Github"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
