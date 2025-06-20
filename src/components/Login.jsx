import { Form, FloatingLabel, Button } from 'react-bootstrap'

function Login() {
  return (
    <>
      <Form>
        <img class="mb-4" src="/vite.svg" alt="" width="72" height="57"></img>
        <h1 class="h3 mb-3 fw-normal">Login</h1>
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
        <Button variant="primary" size="lg">
          Login
        </Button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017-2025</p>
      </Form>
    </>
  )
}

export default Login
