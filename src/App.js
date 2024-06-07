import React from "react";
import { Navbar, Container, Nav, Card, Row, Col } from "react-bootstrap";

function App() {
  // <React.Fragment> or <> because jsx return only one element
  return (
    <React.Fragment>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#link1">Link 01</Nav.Link>
              <Nav.Link href="#link2">Link 02</Nav.Link>
              <Nav.Link href="#link3">Link 03</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container className="mt-4">
          <h1 className="text-center">CheckPoint 02 : React js</h1>
          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 1</Card.Title>
                  <Card.Text>this is the first card text</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 2</Card.Title>
                  <Card.Text>this is the second card text</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                  <Card.Text>this is the third card text</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
