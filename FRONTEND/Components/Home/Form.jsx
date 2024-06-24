import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    resortaddress: yup.string().required(),
    number: yup.number().required(),
    zip: yup.number().required(),
    buspermit: yup.mixed().required(),
    fsc: yup.mixed().required(),
    esc: yup.mixed().required(),
    buildingpermit: yup.mixed().required(),
    sanicert: yup.mixed().required(),
    bir: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        resortaddress: '',
        nnumber: '',
        zip: '',
        buspermit: null,
        fsc: null,
        esc: null,
        buildingpermit: null,
        sanicert: null,
        bir: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Resort Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Resort Address"
                name="resortaddress"
                value={values.resortaddress}
                onChange={handleChange}
                isInvalid={!!errors.resortaddress}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.resortaddress}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number"
                name="number"
                value={values.number}
                onChange={handleChange}
                isInvalid={!!errors.number}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.number}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
            <Form.Label>VALID ID</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="position-relative mb-3">
            <Form.Label>BUSINESS PERMIT</Form.Label>
            <Form.Control
              type="file"
              required
              name="buspermit"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.businesspermit}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="position-relative mb-3">
            <Form.Label>Fire Safety Certificates</Form.Label>
            <Form.Control
              type="file"
              required
              name="fsc"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.fsc}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="position-relative mb-3">
            <Form.Label>Environmental Safety Certificates</Form.Label>
            <Form.Control
              type="file"
              required
              name="esc"
              onChange={handleChange}
              isInvalid={!!errors.esc}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.esc}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="position-relative mb-3">
            <Form.Label>Building PERMIT</Form.Label>
            <Form.Control
              type="file"
              required
              name="buildingpermit"
              onChange={handleChange}
              isInvalid={!!errors.buildingpermit}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.buildingpermit}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="position-relative mb-3">
            <Form.Label>Sanitation PERMIT</Form.Label>
            <Form.Control
              type="file"
              required
              name="sanicert"
              onChange={handleChange}
              isInvalid={!!errors.sanicert}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.sanicert}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="position-relative mb-3">
            <Form.Label>BIR</Form.Label>
            <Form.Control
              type="file"
              required
              name="bir"
              onChange={handleChange}
              isInvalid={!!errors.bir}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.bir}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;