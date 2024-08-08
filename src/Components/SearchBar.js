import React from 'react';
import './SearchBar.css';

function SearchBar({setSearchTerm}) {
    return (
        <input 
        type="text"
        placeholder="Search for Transactions...."
        onChange={(e) => setSearchTerm(e.target.value)} />
    );
}

export default SearchBar;