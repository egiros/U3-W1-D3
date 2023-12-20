import SingleBook from "./SingleBook";

const BookList = ({ books }) => (
  <>
    {books.map((book) => (
      <SingleBook key={book.asin} book={book} />
    ))}
  </>
);

export default BookList;
