import Project from "../components/Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import delt from "../assets/images/delt.png"
import text from "../assets/images/text.png"
import blog from "../assets/images/blog.png"
import note from "../assets/images/note.png"
import movie from "../assets/images/movie.png"
import movie1 from "../assets/images/movie1.png"

const styles = {
  containerStyles: {
    padding: "20px",
    gap: "20px",
  }
}

function Portfolio() {
  return (
    <Container>
      <Row style={styles.containerStyles}>
        <Project title="Delt Fitness" image={delt}/>
        <Project title="Text Editor" image={text}/>
        <Project title="Tech Blog" image={blog}/>
        <Project title="Note Taker" image={note}/>
        <Project title="Movie Multiverse1" image={movie}/>
        <Project title="Movie Multiverse2" image={movie1}/>
      </Row>
    </Container>
  );
}

export default Portfolio;
