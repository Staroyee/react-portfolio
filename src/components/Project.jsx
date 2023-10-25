import Col from "react-bootstrap/Col";

const styles = {
  divStyle: {
    border: "2px solid black",
    width: '300px'
  },
};

function Project() {
  return (
    <Col>
      <div style={styles.divStyle}>This is a project!</div>
    </Col>
  );
}

export default Project;

//  // Import necessary React hooks and components
// import { useEffect, useState, useCallback, useRef } from "react";
//  // Import the motion component for animations
// import { motion } from "framer-motion";
//  // Import the images data
// import images from "../assets/images";

// // Styles for various elements
// const styles = {
//   divStyle: {
//     margin: '3% 10%',
//   },
//   itemStyle: {
//     minHeight: '40rem',
//     minWidth: '30rem',
//     padding: '40px',
//     cursor: 'pointer',
//   },
//   imgStyle: {
//     width: '100%',
//     height: '100%',
//     borderRadius: '2rem',
//     pointerEvents: 'none',
//     border: '2px solid #2b2f32',
//     transition: "box-shadow 0.3s, background-color 0.3s",
//   },
//   imgHovered: {
//     boxShadow: '0px 0px 5px rgba(0, 0, 0, .2)',
//     backgroundColor: "#f0f0f0",
//     borderRadius: '2rem',
//     margin: '10px',
//   },
//   innerCarousel: {
//     display: 'flex',
//   },
//   outerCarousel: {
//     cursor: 'grab',
//     overflow: 'hidden',
//   },
// };

// function Project() {
//   // State for keeping track of container width
//   const [width, setWidth] = useState(0); // Set initial width to 0, with a function to update it
//   const id = "carousel-container"; // Define the id for the carousel container
//   const scrollPosition = useRef(0); // Create a ref to store the scroll position

//   // Function to handle the left constraint (preventing scrolling too far to the left)
//   const handleLeftConstraint = useCallback(() => {
//     const el = document.getElementById(id);
//     if (el) {
//       const newWidth = el.scrollWidth - el.clientWidth;
//       // Update the width state
//       setWidth(newWidth);
//       const maxPosition = newWidth - el.clientWidth;
//       if (scrollPosition.current > maxPosition) {
//         scrollPosition.current = maxPosition;
//         el.scrollLeft = maxPosition;
//       }
//     }
//   }, []);

//   // Effect for handling container width, scroll position, and resize events
//   useEffect(() => {
//     const el = document.getElementById(id);
//     if (el) {
//       scrollPosition.current = el.scrollLeft;
//     }
//     handleLeftConstraint();
//     const handleResize = () => {
//       console.log('hello')
//       const el = document.getElementById(id);
//       if (el) {
//         const newWidth = el.scrollWidth - el.clientWidth;
//         setWidth(newWidth);
//         const maxPosition = newWidth - el.clientWidth;
//         if (scrollPosition.current > maxPosition) {
//           scrollPosition.current = maxPosition;
//           el.scrollLeft = maxPosition;
//         }
//         console.log(newWidth)
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [width]);

//   // Function to handle image hover event
//   const handleImageHover = (e) => {
//     e.currentTarget.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.2)";
//     e.currentTarget.style.backgroundColor = "#f0f0f0";
//   };

//   // Function to handle image leave event
//   const handleImageLeave = (e) => {
//     e.currentTarget.style.boxShadow = "none";
//     e.currentTarget.style.backgroundColor = "transparent";
//   };

//   // Return the component's JSX
//   return (
//     <div style={styles.divStyle}>
//       <motion.div id={id} style={styles.outerCarousel}>
//         <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} style={styles.innerCarousel}>
//           {images.map((image) => {
//             return (
//               <motion.div
//                 style={{ ...styles.itemStyle }}
//                 key={image}
//                 whileHover={styles.imgHovered}
//                 onMouseEnter={handleImageHover}
//                 onMouseLeave={handleImageLeave}
//               >
//                 <img
//                   style={{ ...styles.imgStyle }}
//                   src={image}
//                   alt="img"
//                   className="img"
//                 />
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Project;
