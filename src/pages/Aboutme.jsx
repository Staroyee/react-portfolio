/* eslint-disable react/no-unescaped-entities */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const styles = {
  titleStyles: {
    marginTop: '3rem',
  }
}

const Title = styled.h1`
  margin: 7px;
`;

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
            <Typewriter
              options={{ autoStart: true, loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("MERN")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Mongo | Express | React | Node")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
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
