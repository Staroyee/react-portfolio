import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import images from "../assets/images";

const styles = {
  divStyle: {
    margin: '3% 10%',
  },
  itemStyle: {
    minHeight: '40rem',
    minWidth: '30rem',
    padding: '40px',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    borderRadius: '2rem',
    pointerEvents: 'none',
  },
  innerCarousel: {
    display: 'flex',
  },
  outerCarousel: {
    cursor: 'grab',
    overflow: 'hidden',
  },
};

function Portfolio() {
  const [width, setWidth] = useState(0);
  const [containerKey, setContainerKey] = useState(0);
  const id = "carousel-container";

  const handleLeftConstraint = useCallback(() => {
    const el = document.getElementById(id);
    if (el) {
      setWidth(el.scrollWidth - el.clientWidth);
    }
  }, []);

  useEffect(() => {
    handleLeftConstraint(); // Initial calculation
    const handleResize = () => {
      handleLeftConstraint(); // Recalculate width on resize
      setContainerKey((prev) => prev + 1); // Trigger re-render
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleLeftConstraint]);

  const dragConstraints = { right: 0, left: -width };

  return (
    <div style={styles.divStyle}>
      <motion.div key={containerKey} id={id} style={styles.outerCarousel} whileTap={{ cursor: "grabbing" }}>
        <motion.div drag='x' dragConstraints={dragConstraints} style={styles.innerCarousel}>
          {images.map(image => {
            return (
              <motion.div style={styles.itemStyle} key={image}>
                <img style={styles.imgStyle} src={image} alt="img" className="img" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Portfolio;


// const styles = {
//   col: {
//     flex: "1 100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// };
 // <Container>
    //   <Row>
    //     <Col style={styles.col}>
    //       <Project />
    //     </Col>
    //     <Col style={styles.col}>
    //       <Project />
    //     </Col>
    //   </Row>
    // </Container>