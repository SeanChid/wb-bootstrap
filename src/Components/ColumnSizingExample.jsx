import { Container, Col, Row} from 'react-bootstrap'

export default function ColumnSizingExample() {
  return (
    <Container fluid>
      <Row>
        <Col xs="9">9 width</Col>
        <Col xs="3">3 width</Col>
      </Row>

      <Row>
        <Col>Column</Col>
        <Col xs="6">6 width</Col>
        <Col>Column</Col>
      </Row>
    </Container>
  );
}
