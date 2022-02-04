// import PropTypes from 'prop-types';
import { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = (props) => {

  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
    props.onSearchFilter(e.target.value);
  };

  return (
    <form className='filter-search-form' onSubmit={e => e.preventDefault()}>
      <label htmlFor="searchFilter">Search:</label>
      <input type="text"
        name="searchFilter" id="searchFilter"
        value={input}
        onChange={handleInput} />
    </form>
  );
}

SearchFilter.defaultProps = {
  onSearchFilter: () => { },
}

export default SearchFilter;