import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Book from "../components/Book";
import { useDispatch, useSelector } from "react-redux";

import { QUERY_BOOKS } from "../utils/queries";
import { UPDATE_BOOKS } from "../utils/actions";

const BookList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { loading, data } = useQuery(QUERY_BOOKS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_BOOKS,
        books: data.books,
      });
    }
  }, [data, loading, dispatch]);

  const books = state?.books || [];

  if (!books?.length) {
    return <h3>There are no books in this library!</h3>;
  }

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book._id}
          bookId={book._id}
          title={book.title}
          author={book.author}
          pages={book.pages}
        />
      ))}
    </div>
  );
};

export default BookList;
