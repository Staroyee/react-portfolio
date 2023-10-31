// Import necessary components, modules, and styles.
import { PropTypes } from "prop-types";
import { Col, Card } from "react-bootstrap";
import { styled } from "styled-components";
import { motion } from "framer-motion";

// Define custom styles for the column and card.
const styles = {
  colStyle: {
    padding: "10px",
    height: "70vh",
  },
  cardStyle: {
    border: "4px solid #000000",
    width: "20rem",
  },
};

// Create a styled component for image overlay.
const ImageOverlay = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0e1112;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover:before {
    opacity: 0.9;
  }
`;

// Create a styled component for an invisible title that becomes visible on hover.
const InvisibleTitle = styled(Card.Title)`
  opacity: 0;
  transition: opacity 0.4s;
  ${ImageOverlay}:hover & {
    opacity: 1;
    background-color: #55b956;
    border-radius: 5px;
    font-size: 40px;
  }
`;

// Create a styled component for invisible text that becomes visible on hover.
const InvisibleText = styled(Card.Text)`
  opacity: 0;
  transition: opacity 0.4s;
  ${ImageOverlay}:hover & {
    opacity: 1;
  }
`;

// Define the 'Project' component, which represents a project card.
function Project({ title, image, link, desc }) {
  return (
    <Col style={styles.colStyle} className="d-flex justify-content-center">
      <motion.div
        whileHover={{ scale: 1.05 }} // Add zoom effect on hover using Framer Motion
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Card style={styles.cardStyle} className="bg-dark text-white">
            <ImageOverlay>
              <Card.Img src={image} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>
                  {/* Display the project title with invisible title effect. */}
                  <InvisibleTitle>{title}</InvisibleTitle>
                </Card.Title>
                <Card.Text>
                  {/* Display project description with invisible text effect. */}
                  <InvisibleText>{desc}</InvisibleText>
                </Card.Text>
              </Card.ImgOverlay>
            </ImageOverlay>
          </Card>
        </a>
      </motion.div>
    </Col>
  );
}

// Define prop types for the 'Project' component.
Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Project;
