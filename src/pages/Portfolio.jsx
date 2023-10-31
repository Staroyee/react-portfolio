// Component Imports
import Project from "../components/Project";
// Styling Imports
import { Container, Row, Col } from "react-bootstrap";
import { motion, useScroll,
  useSpring, } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Image Imports
import delt from "../assets/images/delt.png";
import text from "../assets/images/text.png";
import blog from "../assets/images/blog.png";
import social from "../assets/images/social.png";
import movie from "../assets/images/movie.png";
import weather from "../assets/images/weather.png";

// Array of projects and their respective details
const projects = [
  {
    title: "Delt Fitness",
    desc: "E-Commerce: HTML, CSS, JS, MySQL, Express.JS, Node.JS, Handlebars.",
    image: delt,
    link: "https://delt-fitness-e-commerce-36c3e8da33f5.herokuapp.com/",
  },
  {
    title: "Social Media API",
    desc: "JS, MongoDB, Express.JS, Node.JS.",
    image: social,
    link: "https://github.com/Staroyee/social-network-api",
  },
  {
    title: "Text Editor",
    desc: "PWA: HTML, CSS, JS, Express, IndexedDB.",
    image: text,
    link: "https://pwa-text-editor-staroye-0fb413c04525.herokuapp.com/",
  },
  {
    title: "Tech Blog",
    desc: "HTML, CSS, JS, MySQL, Express.",
    image: blog,
    link: "https://tech-blog-staroyee-0f66f97e3132.herokuapp.com/",
  },
  {
    title: "Movie Multiverse",
    desc: "HTML, CSS, JS, API.",
    image: movie,
    link: "https://staroyee.github.io/Project-Movie-Multiverse/",
  },
  {
    title: "Weather Dashboard",
    desc: "HTML, CSS, JS, API.",
    image: weather,
    link: "https://staroyee.github.io/daniel-weather-dashboard/",
  },
];

// Animation variants
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05,
    },
  },
};


function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <Container>
      <Row>
        <Col>
          {projects.map((project, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
            });
            return (
              <motion.div
                key={index}
                ref={ref}
                variants={fadeInAnimationVariants}
                initial={inView ? "animate" : "initial"}
                animate={inView ? "animate" : "initial"}
              >
                <Project
                  title={project.title}
                  desc={project.desc}
                  image={project.image}
                  link={project.link}
                />
              </motion.div>
              
            );
          })}
          <motion.div className="progress" style={{ scaleX }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
