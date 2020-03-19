import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../actions";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  const handleChanges = e => {
    setQuery(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setSearch(query));
    setQuery("");
  };

  return (
    <div>
      <label htmlFor="search">
        <input
          onChange={handleChanges}
          id="search"
          type="text"
          placeholder="Search Countries"
          value={query}
        />
      </label>
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchForm;
