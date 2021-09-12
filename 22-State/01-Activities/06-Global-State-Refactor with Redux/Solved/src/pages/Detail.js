import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import Book from "../components/Book";

import { QUERY_BOOKS } from "../utils/queries";
import { UPDATE_BOOKS, UPDATE_CURRENT_BOOK } from "../utils/actions";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const { bookId } = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_BOOKS);

  const currentBook = state.books.find(({ _id }) => _id === bookId);

  useEffect(() => {
    if (data && !currentBook) {
      dispatch({
        type: UPDATE_BOOKS,
        books: data.books,
      });
    } else if (currentBook) {
      dispatch({
        type: UPDATE_CURRENT_BOOK,
        currentBook,
      });
    }

    // on page leave (component unmount), unset current book
    return () => {
      dispatch({
        type: UPDATE_CURRENT_BOOK,
        currentBook: {},
      });
    };
  }, [loading, currentBook, dispatch, data]);

  return (
    <main>
      <div className="m-5">
        {currentBook ? <Book {...currentBook} /> : <h2>Loading...</h2>}
      </div>
    </main>
  );
};

export default Detail;
