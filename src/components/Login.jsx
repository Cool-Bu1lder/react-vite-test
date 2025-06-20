import { Form, FloatingLabel, Button } from 'react-bootstrap'

function Login() {
  return (
    <>
      <Form>
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <FloatingLabel controlId="floatingInput" label="Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Form.Check
          type="checkbox"
          id="checkDefault"
          label="Remember me"
          className="my-3"
        />
        <Button variant="primary" size="lg" className="w-100">
          Login
        </Button>
      </Form>
    </>
  )
}

export default Login
