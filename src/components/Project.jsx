import Card from "react-bootstrap/Card";
import eCommerce from "../assets/images/e-commerce.png";

const styles = {
  backgroundStyle: {
    backgroundColor: "rgb(0, 0, 0, .8)",
    color: "#fff",
    padding: ".4rem",
    borderRadius: ".4rem",
  },
  cardStyle: {
    backgroundColor: '#fff',
    margin: '1rem',
    padding: '.2rem',
    borderRadius: '.5rem',
    maxWidth: '20rem',
    maxHeight: '20rem',
}
};

function Project() {
  return (
    <Card style={styles.cardStyle} className="bg-dark text-white">
      <Card.Img src={eCommerce} alt="Card image" />
      <Card.ImgOverlay>
        <div style={styles.backgroundStyle}>
          <Card.Title>DELT FITNESS STORE</Card.Title>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Project;
