import React, { useState, useContext } from "react";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
import ErrorModal from "/Components/ErrorModal.jsx";
import { AuthContext } from '/Components/auth-context.js';
import ClipLoader from "react-spinners/ClipLoader";

function BasicExample() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false); // Add loading state

  const auth = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      if (form.checkValidity() === false) {
        event.stopPropagation();
        setValidated(true); 
      } else {
        setValidated(true); 
        setLoading(true); 

        const response = await fetch("http://localhost:5000/api/ownerauth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.elements["name"].value,
            number: form.elements["number"].value,
            email: form.elements["username"].value,
            password: form.elements["password"].value,
          }),
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        console.log(responseData);
      
        setLoading(false);
   
        auth.login();
       
      }
    } catch (error) {
      setError(error.message || "Something went wrong, please try again.");
      setIsLoading(false);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {loading && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 }}>
          <ClipLoader size={70} color={"#123abc"} loading={loading} />
        </div>
      )}
      <ErrorModal error={error} onClear={errorHandler} />

      <div className="">
        <Card>
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label htmlFor="name">Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    pattern="[A-Za-z\s]*"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid name without numbers.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="number">
                <Form.Label htmlFor="number">Phone Number</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">+63</InputGroup.Text>
                  <Form.Control
                    type="tel"
                    id="number"
                    name="number"
                    placeholder="Enter your number"
                    aria-describedby="inputGroupPrepend"
                    pattern="[0-9]+"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your number with digits only.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label htmlFor="email">Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a proper username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label htmlFor="password"> Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  aria-describedby="passwordHelpBlock"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$"
                  required
                />
                <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 6-20 characters long, contain letters and numbers,
                  and must not contain spaces, special characters, or emoji.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  Please enter a valid password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3 " controlId="checkbox">
                <Form.Check
                  required
                  label="Check me out"
                  feedback="You must check before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit">Log In</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default BasicExample;
