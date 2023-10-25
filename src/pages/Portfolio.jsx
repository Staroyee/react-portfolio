import Project from "../components/Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
    colStyle: {
        backgroundColor: '#fff',
        margin: '1rem',
        padding: '.5rem',
        borderRadius: '.5rem',
        maxWidth: '20rem',
        maxHeight: '20rem',
    }
}

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col style={styles.colStyle}>
          <Project />
        </Col>
        <Col style={styles.colStyle}>
          <Project />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
