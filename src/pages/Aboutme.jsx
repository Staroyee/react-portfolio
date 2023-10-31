// Import necessary components and modules.
import { Container, Row, Col } from "react-bootstrap";
import { styled } from "styled-components";
import Typewriter from "typewriter-effect";

// Define custom styles for the title.
const styles = {
  titleStyles: {
    marginTop: "3rem",
    paddingBottom: "2rem",
  },
};

// Create a styled title component using 'styled-components'.
const Title = styled.h1`
  margin: 7px;
  color: #fff;
  font-size: 5vw;
`;

// Define the 'Aboutme' component.
function Aboutme() {
  return (
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
  );
}

export default Aboutme;
