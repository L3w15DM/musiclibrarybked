import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import "./SearchBar.css";

const SearchBar = ({ songFilter }) => {
  const [search, setSearch] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    songFilter(search);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Stack>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            size="75"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Seacrh by title, artist, album"
          />
          <button type="submit" className="btn btn-outline-danger">
            Search
          </button>
          <button className="btn btn-outline-light" onClick={refreshPage}>
            Refresh
          </button>
        </form>
      </div>
    </Stack>
  );
};

export default SearchBar;
