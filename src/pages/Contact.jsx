// Import necessary components, modules, and styles.
import React from "react";
import validator from "validator";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { styled } from "styled-components";
import heroContact from "../assets/images/hero-contact.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Define an array of navigation links.
const navLinks = [
  { to: "/about-me", label: "About Me" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

// Define custom styles for the form and buttons.
const styles = {
  formStyles: {
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "1.5rem",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  formGroupStyles: {
    paddingBottom: "10px",
  },
  buttonStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    border: "solid 1px #55b956",
  },
};

// Create a styled component 'HeroContainer' for styling the hero section.
const HeroContainer = styled.div`
  background-image: url(${heroContact});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
`;

// Create a styled button component using 'styled-components'.
const StyledButton = styled(Button)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #55b956;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover:before {
    opacity: 0.3;
  }
`;

// Define initial form data with empty values
const initialFormData = Object.freeze({
  name: "",
  email: "",
  query: "",
  emailError: "",
  queryError: "",
});

// Define the 'Contact' component
function Contact() {
  // Set up state to manage the form data
  const [formData, updateFormData] = React.useState(initialFormData);

  // Function to send feedback using emailjs
  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        // Log a success message on successful email send
        res.status(200);
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error("There has been an Error.", err));
  };

  // Function to handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is the email field
    if (name === "email") {
      // Check if the email is valid
      if (!validator.isEmail(value)) {
        updateFormData({
          ...formData,
          [name]: value,
          emailError: "Please enter a valid email address",
        });
      } else {
        // If the email is valid, clear any previous error message.
        updateFormData({
          ...formData,
          [name]: value,
          emailError: "",
        });
      }
    } else {
      // For other fields, simply update the form data.
      updateFormData({
        ...formData,
        [name]: value.trim(),
      });
    }
  };

  // Function to handle query field onBlur event
  const handleQueryBlur = (e) => {
    const { name, value } = e.target;

    // Check if the query field is empty
    if (name === "query" && value.trim() === "") {
      // Handle the error by setting an error message.
      updateFormData({
        ...formData,
        queryError: "Query cannot be empty",
      });
    } else {
      // If the query is not empty, clear any previous error message.
      updateFormData({
        ...formData,
        queryError: "",
      });
    }
  };

  // Function to handle query field onFocus event
  const handleQueryFocus = () => {
    // Clear the query error message
    updateFormData({
      ...formData,
      queryError: "",
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Check if the query field is empty
    if (formData.query.trim() === "") {
      alert("Query cannot be empty.");
      return;
    }
    alert(`Thank you for your message. Your query has been forwarded.`);
    const templateId = "template_z27224s";
    const serviceID = "service_bevruwj";
    // Send feedback with the form data
    sendFeedback(serviceID, templateId, {
      from_name: formData.name,
      message_html: formData.query,
      email: formData.email,
    });
  };

  // Define the 'Contact' component
  return (
    <>
      <HeroContainer>
        <Header links={navLinks} />
        <div className="flex-grow-1">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <Form style={styles.formStyles}>
                <Form.Group
                  style={styles.formGroupStyles}
                  controlId="formGridName"
                >
                  <Form.Label>Name*</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="name"
                    type="name"
                    placeholder="Name"
                  />
                </Form.Group>
                <Form.Group
                  style={styles.formGroupStyles}
                  controlId="formGridEmail"
                >
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="Enter email"
                  />
                  {formData.emailError && (
                    <Form.Text style={{ color: "red" }}>
                      {formData.emailError}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group
                  style={styles.formGroupStyles}
                  controlId="formGridQuery"
                >
                  <Form.Label>Query*</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    onBlur={handleQueryBlur}
                    onFocus={handleQueryFocus}
                    name="query"
                    as="textarea"
                  />
                  {/* Display the error message for the query field */}
                  {formData.queryError && (
                    <Form.Text style={{ color: "red" }}>
                      {formData.queryError}
                    </Form.Text>
                  )}
                </Form.Group>
                <StyledButton
                  style={styles.buttonStyle}
                  onClick={handleSubmit}
                  type="submit"
                >
                  Send
                </StyledButton>
              </Form>
            </Col>
          </Row>
        </Container>
        </div>
        <Footer />
      </HeroContainer>
    </>
  );
}

export default Contact;
