import React, { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  const handleChanges = e => {
    setQuery(e.target.value);
  };

  //   const handleSubmit = e => {
  //     e.preventDefault;
  //   };

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
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchForm;
