import { Form, FloatingLabel, Button } from 'react-bootstrap'

import './AuthComponents.css'

function Signup() {
  return (
    <>
      <Form>
        <h1 className="h3 mb-3 fw-normal text-center">Signup</h1>
        <FloatingLabel controlId="floatingInput" label="Email address">
          <Form.Control
            className="block-bottom"
            type="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            className="block-full"
            type="password"
            placeholder="Password"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password Again">
          <Form.Control
            className="block-top"
            type="password"
            placeholder="Password"
          />
        </FloatingLabel>
        <Form.Check
          type="checkbox"
          id="checkDefault"
          label="Remember me"
          className="my-3"
        />
        <Button variant="primary" size="lg" className="w-100">
          Signup
        </Button>
      </Form>
    </>
  )
}

export default Signup
