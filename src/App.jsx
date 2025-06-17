import "./App.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header/>
      <p>Hello World</p>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
    </>
  );
}

export default App;
