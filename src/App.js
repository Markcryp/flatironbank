
import React, { useState } from 'react';
import TransactionForm from './Components/TransactionForm';
import TransactionTable from './Components/TransactionTable';
import SearchBar from './Components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <TransactionForm />
      <TransactionTable searchTerm={searchTerm} />
    </div>
  );
}

export default App;
