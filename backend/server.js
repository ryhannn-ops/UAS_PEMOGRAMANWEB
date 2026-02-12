const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/transactions', (req, res) => {
  const dummyTransactions = [
    { id: 1, amount: 0.1, donor: '0x123...' },
    { id: 2, amount: 0.2, donor: '0x456...' },
  ];
  res.json(dummyTransactions);
});

app.listen(5000, () => console.log('Server running on port 5000'));
