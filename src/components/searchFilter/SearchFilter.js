// import PropTypes from 'prop-types';
import { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = (props) => {

  const [inputs, setInputs] = useState({ searchFilter: '' });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.onSearchFilter(inputs.searchFilter);
  // };
  const handleInput = (e) => {
    setInputs({ searchFilter: '' });
    const { name, value } = e.target;
    console.log(value);
    setInputs((inp) => ({
      ...inp,
      [name]: value
    }))
    props.onSearchFilter(inputs.searchFilter);
  };

  return (
    // <form onSubmit={handleSubmit}>
    <form className='filter-search-form'>
      {/* <div> */}
      {/* <label htmlFor="searchFilter">Search:</label> */}
      <input type="text"
        name="searchFilter" id="searchFilter"
        value={inputs.searchFilter}
        onChange={handleInput} />
      {/* </div> */}
    </form>
  );
}

SearchFilter.defaultProps = {
  onSearchFilter: () => { },
}

export default SearchFilter;