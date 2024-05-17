import Card from 'react-bootstrap/Card';
import { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AuthContext } from './../auth-context';

function BasicExample() {
  const [validated, setValidated] = useState(false);
  const auth = useContext(AuthContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    // Log the form data
    console.log({
      username: form.elements['username'].value,
      password: form.elements['password'].value,
      agreeToTerms: form.elements['checkbox'].checked,
    });

    auth.login();
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card border="primary" style={{ width: '35rem', height:'20rem' }}>
        <Card.Header>Log in</Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="checkbox">
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
  );
}

export default BasicExample;