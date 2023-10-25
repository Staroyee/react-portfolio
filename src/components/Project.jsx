import Card from "react-bootstrap/Card";
import eCommerce from "../assets/images/e-commerce.png";

const styles = {
  textStyle: {
    backgroundColor: "#000",
    color: "#fff",
  },
};

function Project() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={eCommerce} alt="Card image" />
      <Card.ImgOverlay style={styles.cardStyle}>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Project;
