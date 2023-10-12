import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Api4 = () => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="../assets/img/seraAsi.jpg" />
    <Card.Body>
      <Card.Title>Horacio</Card.Title>
      <Card.Text>
        Gracias Anto
      </Card.Text>
      <Button variant="primary">Alta card amego</Button>
    </Card.Body>
  </Card>
  )
}

export default Api4;