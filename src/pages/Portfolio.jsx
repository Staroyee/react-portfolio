import Project from "../components/Project";
import { Container, Row, Col } from "react-bootstrap"
import delt from "../assets/images/delt.png"
import text from "../assets/images/text.png"
import blog from "../assets/images/blog.png"
import social from "../assets/images/social.png"
import movie from "../assets/images/movie.png"
import weather from "../assets/images/weather.png"


function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
        <Project title="Delt Fitness" desc="E-Commerce: HTML, CSS, JS, MySQL, Express.JS, Node.JS, Handlebars." image={delt} link="https://delt-fitness-e-commerce-36c3e8da33f5.herokuapp.com/"/>
        <Project title="Social Media API" desc="JS, MongoDB, Express.JS, Node.JS." image={social} link="https://github.com/Staroyee/social-network-api"/>
        <Project title="Text Editor" desc="PWA: HMTL, CSS, JS, Express, IndexedDB." image={text} link="https://pwa-text-editor-staroye-0fb413c04525.herokuapp.com/"/>
        <Project title="Tech Blog" desc="HTML, CSS, JS, MySQL, Express. " image={blog} link="https://tech-blog-staroyee-0f66f97e3132.herokuapp.com/"/>
        <Project title="Movie Multiverse" desc="HTML, CSS, JS, API." image={movie} link="https://staroyee.github.io/Project-Movie-Multiverse/"/>
        <Project title="Weather Dashboard" desc="HTML, CSS, JS, API." image={weather} link="https://staroyee.github.io/daniel-weather-dashboard/"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
