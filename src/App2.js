import React, { useState } from "react";
import { fetchData } from "./components/book/bookSlice";
import { useDispatch, useSelector } from "react-redux";

function App2() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.book.status);
  const books = useSelector((state) => state.book.books);

  const [pageNum, setPageNum] = useState(1);
  const [query, setQuery] = useState("");

  const limit = 10;

  const handleClick = () => {
    dispatch(fetchData({ pageNum, limit: 20, query }));
    console.log(books);
  };
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App2;
