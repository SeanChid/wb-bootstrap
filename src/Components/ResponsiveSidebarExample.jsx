import { Col, Container, Row } from 'react-bootstrap'

export default function ResponsiveSidebarExample() {
  return (
    <Container fluid>
      <Row>
        <Col xs='12' md='6' lg='3'>Sidebar</Col>
        <Col xs='12' md='6' lg='9'>Main Content</Col>
      </Row>
    </Container>
  );
}
