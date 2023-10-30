import { Row, Col, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import resume from "../assets/resume/Resume.pdf"

const styles = {
  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: "50px",
    marginBottom: "20px",
    color: "#fff",
  },
  buttonStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    border: "solid 1px #55b956",
    marginBottom: "20px",
  },
};

const Title = styled.h1`
  border-bottom: 1px solid #55b956;
  color: #55b956;
`;

const SubTitle = styled.h4`
  color: #55b956;
`;

const Text = styled.div`
  font-size: 17px;
`;

const Label = styled.div`
  padding-top: 30px;
`;

const DownloadButton = styled(Button)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #55b956;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover:before {
    opacity: 0.3;
  }
`;


function Resume() {
  return (
    <Container style={styles.containerStyle}>
      <Row>
        <Col>
          <Title>Stack</Title>
          <Text>
            Proficient in both front-end and back-end web development, with a
            strong focus on the MERN stack (MongoDB, Express.js, React,
            Node.js).
          </Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title>Front-End Tech</Title>
          <Text>React</Text>
          <Text>React-Bootstrap (Bootstrap)</Text>
          <Text>Styled Components</Text>
          <Text>Handlebars</Text>
          <Text>Skeleton CSS</Text>
        </Col>
        <Col>
          <Title>Back-End Tech</Title>
          <Text>Express.js</Text>
          <Text>Node.js</Text>
          <Text>MySQL (Sequelize)</Text>
          <Text>MongoDB (Mongoose)</Text>
          <Text>IndexedDB</Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title>People Skills</Title>
          <SubTitle>Teamwork</SubTitle>
          <Text>
            Adept at collaborating within development teams to achieve project
            goals and objectives.
          </Text>
          <SubTitle>Communication</SubTitle>
          <Text>
            Effective communication skills, both in technical and non-technical
            contexts, ensuring clarity in project discussions and requirements.
          </Text>
          <SubTitle>Fast Learning</SubTitle>
          <Text>
            Quick adaptation to new technologies, languages, and tools,
            facilitating the ability to stay up-to-date in the ever-evolving
            field of web development.
          </Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>Resume.pdf</Label>
          <a href={resume} download><DownloadButton style={styles.buttonStyle}>Download</DownloadButton></a>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
