// Import necessary components and modules.
import { Container, Row, Col } from "react-bootstrap";
import { styled } from "styled-components";
import Typewriter from "typewriter-effect";
import heroAboutme from "../assets/images/hero-aboutme.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Define an array of navigation links.
const navLinks = [
  { to: "/about-me", label: "About Me" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

// Define custom styles for the title.
const styles = {
  titleStyles: {
    marginTop: "3rem",
    paddingBottom: "2rem",
  },
};

// Create a styled component 'HeroContainer' for styling the hero section.
const HeroContainer = styled.div`
  background-image: url(${heroAboutme});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
`;

// Create a styled title component using 'styled-components'.
const Title = styled.h1`
  margin: 7px;
  color: #fff;
  font-size: 5vw;
`;

// Define the 'Aboutme' component.
function Aboutme() {
  return (
    <>
      <HeroContainer>
      
        <Header links={navLinks} />
        <div className="flex-grow-1">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <Title style={styles.titleStyles}>Hi, I'm Daniel.</Title>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Title>A</Title>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Title>
                {/* Use Typewriter component for dynamic text animation. */}
                <Typewriter
                  options={{ autoStart: true, loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("MERN") // Type "MERN"
                      .pauseFor(1000) // Pause for 1 second
                      .deleteAll() // Delete the text
                      .typeString("Mongo | Express | React | Node") // Type "Mongo | Express | React | Node"
                      .pauseFor(1000) // Pause for 1 second
                      .deleteAll() // Delete the text
                      .start(); // Start the loop
                  }}
                />
              </Title>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Title>Full Stack Developer</Title>
            </Col>
          </Row>
        </Container>
        </div>
        <Footer />
        
      </HeroContainer>
    </>
  );
}

export default Aboutme;
