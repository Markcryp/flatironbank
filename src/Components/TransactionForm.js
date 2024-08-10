import React, {useState} from 'react';
import './TransactionForm';

function TransactionForm() {
    const [date, setDate] =useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('')

     const handleSubmit = (event) => {
        event.preventDefault();
        const newTransaction = {date, description, category,amount:parseFloat(amount)};

        fetch("https://flatironbank-backend.vercel.app/transactions",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTransaction),
        })
        .then(response => response.json())
        .then(data => {
        setDate('');
        setDescription('');
        setCategory('');
        setAmount('');
        })
        .catch(error => console.log('Error adding transaction:', error))
     };

     return (
        <form onSubmit={handleSubmit}>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <button type="submit">Add TransactionForm</button>
         </form>
     );
}

export default TransactionForm;