import { useState } from 'react';
import { ethers } from 'ethers';

function WalletConnect() {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState("");

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                // Menggunakan BrowserProvider (Ethers.js v6)
                const provider = new ethers.BrowserProvider(window.ethereum);
                
                // Meminta izin akses akun MetaMask
                await provider.send("eth_requestAccounts", []);
                
                const signer = await provider.getSigner();
                const address = await signer.getAddress();
                
                // Mengambil saldo dan mengonversinya dari Wei ke Ether
                const balanceWei = await provider.getBalance(address);
                const balanceEth = ethers.formatEther(balanceWei);

                setAccount(address);
                setBalance(balanceEth);
            } catch (error) {
                console.error("Error connecting wallet:", error);
                alert("Gagal menghubungkan wallet. Pastikan MetaMask terpasang.");
            }
        } else {
            alert("Silakan instal MetaMask!");
        }
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <button onClick={connectWallet} style={{ padding: "10px 20px", cursor: "pointer" }}>
                {account ? `Connected: ${account.substring(0, 6)}...${account.substring(account.length - 4)}` : "Connect MetaMask"}
            </button>
            {balance && <p>Balance: {balance} ETH</p>}
        </div>
    );
}

export default WalletConnect;