import { Card } from "react-bootstrap/";

const SingleBook = ({ book }) => (
  <Card className="h-100 shadow">
    <Card.Img variant="top" src={book.img} style={{ height: "250px", objectFit: "contain" }} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
    </Card.Body>
  </Card>
);

export default SingleBook;
