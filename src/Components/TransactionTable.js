import React, {useState, useEffect} from 'react';
import './TransactionTable.css';

function TransactionTable({searchTerm}) {
    const [transactions, setTransactions] = useState([]);


useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then(response => response.json())
    .then(data => setTransactions(data))
    .catch(error => console.error('Error fetching transactions:',error))
}, []);

const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
); 

const handleDelete = (id) => {
    fetch(`http://localhost:3000/transactions/${id}`, {method: 'DELETE'})
    .then(() => setTransactions(transactions.filter(t => t.id !== id)))
    .catch(error => console.error('Error deleting transaction:',error));
};

return(
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {filteredTransactions.map(transaction => 
                <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                    <td>
                        <button onClick={() => handleDelete(transaction.id)}>Delete</button>
                    </td>
                </tr>
            )}
        </tbody>
    </table>
);
}

export default TransactionTable;