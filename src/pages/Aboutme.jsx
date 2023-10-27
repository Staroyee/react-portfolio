/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import { styled } from "styled-components";
import Typewriter from "typewriter-effect";

const styles = {
  titleStyles: {
    marginTop: '3rem',
    paddingBottom: '2rem'
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
