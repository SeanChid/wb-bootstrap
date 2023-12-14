import { Container, Col, Row } from "react-bootstrap";

export default function OrderExample() {
  return (
    <Container fluid>
      <Row>
        <Col xs='12' md={{span: 3, order: 2}}>
          <h1>Table of Contents</h1>
        </Col>
        <Col xs='12' md={{span: 9, order: 1}}>
          <h1>Article</h1>
          <p>Main Content</p>
        </Col>
      </Row>
    </Container>
  );
}
