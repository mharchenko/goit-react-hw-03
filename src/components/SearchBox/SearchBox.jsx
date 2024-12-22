import s from './SearchBox.module.css';
import React from 'react';

const SearchBox = ({ filter, onFilterChange }) => (
  <div className={s.searchBox}>
    <label className={s.label}>Find contacts by name:</label>
    <input
      type="text"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
      className={s.input}
    />
  </div>
);

export default SearchBox;
