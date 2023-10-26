import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const styles = {
  cardStyle: {
    border: "2px solid black",
    width: "20rem",
  },
};

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
    opacity: 0.7;
  }
`;

const InvisibleTitle = styled(Card.Title)`
  opacity: 0;
  transition: opacity 0.4s;
  ${ImageOverlay}:hover & {
    opacity: 1;
  }
`;

const InvisibleText = styled(Card.Text)`
  opacity: 0;
  transition: opacity 0.4s;
  ${ImageOverlay}:hover & {
    opacity: 1;
  }
`;

function Project({ title, image, link, desc }) {
  return (
    <Col className="d-flex justify-content-center">
      <a href={link} target="_blank" rel="noopener noreferrer">
      <Card style={styles.cardStyle} className="bg-dark text-white">
        <ImageOverlay>
          <Card.Img src={image} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>
              <InvisibleTitle>{title}</InvisibleTitle>
            </Card.Title>
            <Card.Text>
              <InvisibleText>{desc}</InvisibleText>
            </Card.Text>
          </Card.ImgOverlay>
        </ImageOverlay>
      </Card>
      </a>
    </Col>
  );
}

export default Project;
