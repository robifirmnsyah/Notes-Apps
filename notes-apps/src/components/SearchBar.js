import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      className="form-control mr-sm-2 mb-3"
      type="search"
      aria-label="Search"
      placeholder="Cari judul catatan"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)} />
  )
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}

export default SearchBar;