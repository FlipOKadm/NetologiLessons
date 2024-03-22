import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export interface ICard {
    children: React.ReactNode;
    title: string;
    text: string;
}

export default function CardComposition({ children, title, text }: ICard) {
  return (
    <Card style={{ width: '18rem' }}>
      {children}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}