import CardComposition from "./components/CardComposition.tsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default function App() {
  return (
    <CardComposition title="Card Title" text="Some quick example text to build on the card title and make up the
          bulk of the card's content."><Card.Img variant="top" src="/public/react_img.png" /></CardComposition>
  )
}