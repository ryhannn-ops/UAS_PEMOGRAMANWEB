import { useState, useEffect } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>Amount: {tx.amount} ETH, Donor: {tx.donor}</li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
