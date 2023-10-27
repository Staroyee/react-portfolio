import React from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import styled from "styled-components";

const styles = {
  formStyles: {
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "1.5rem",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  formGroupStyles: {
    paddingBottom: "10px",
  },
  buttonStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    border: "solid 1px #55b956",
  },
};

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
  username: "",
  email: "",
  mobile: "",
  query: "",
});

// Contact component
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
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message. Your query has been forwarded.`);
    const templateId = "template_z27224s";
    const serviceID = "service_bevruwj";
    // Send feedback with the form data
    sendFeedback(serviceID, templateId, {
      from_name: formData.name,
      mobile: formData.mobile,
      message_html: formData.query,
      email: formData.email,
    });

    console.log(formData);
  };

  // Render the form component
  return (
    <>
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
              </Form.Group>
              <Form.Group style={styles.formGroupStyles} id="formGridQuery">
                <Form.Label>Query*</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="query"
                  as="textarea"
                />
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
    </>
  );
}

export default Contact;
