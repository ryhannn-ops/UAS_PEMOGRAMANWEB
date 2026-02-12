import React from 'react';
import WalletConnect from './components/WalletConnect';
import TransactionList from './components/TransactionList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web3 Donation DApp</h1>
        <WalletConnect />
        <TransactionList />
      </header>
    </div>
  );
}

export default App;
