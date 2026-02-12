# Aplikasi Donasi Web3 Terdesentralisasi

Aplikasi terdesentralisasi (DApp) untuk donasi yang dibangun dengan React, Node.js, dan kontrak pintar Solidity.

## Struktur Proyek

```
web3-dapp-uas/
├── backend/          # Server Express Node.js
├── frontend/         # Aplikasi React
├── smart-contracts/  # Kontrak pintar Solidity
└── README.md
```

## Prasyarat

- Node.js (v16 atau lebih tinggi)
- npm atau yarn
- Ekstensi browser MetaMask (untuk fungsionalitas Web3)
- Jaringan Ethereum lokal (seperti Ganache) atau koneksi testnet

## Instalasi

### Pengaturan Backend

1. Navigasi ke direktori backend:
   ```bash
   cd backend
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan server backend:
   ```bash
   npm start
   ```
   Server akan berjalan di http://localhost:5000

### Pengaturan Frontend

1. Navigasi ke direktori frontend:
   ```bash
   cd frontend
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan server pengembangan React:
   ```bash
   npm start
   ```
   Aplikasi akan terbuka di http://localhost:3000 (atau port lain jika 3000 ditempati)

## Fitur

- **Koneksi Wallet**: Hubungkan wallet MetaMask untuk berinteraksi dengan DApp
- **Sistem Donasi**: Lakukan donasi menggunakan Ethereum
- **Riwayat Transaksi**: Lihat daftar transaksi donasi
- **Integrasi Kontrak Pintar**: Berinteraksi dengan kontrak pintar Solidity di Ethereum

## Kontrak Pintar

Kontrak pintar `DonationContract.sol` menangani:
- Menerima donasi
- Menyimpan catatan transaksi
- Mengelola informasi donor

## Penggunaan

1. Pastikan server backend dan frontend berjalan
2. Buka aplikasi frontend di browser Anda
3. Hubungkan wallet MetaMask Anda
4. Lakukan donasi dan lihat riwayat transaksi

## Teknologi yang Digunakan

- **Frontend**: React.js, Ethers.js v6
- **Backend**: Node.js, Express.js
- **Blockchain**: Solidity, Ethereum
- **Web3**: Integrasi MetaMask

## Pengembangan

Untuk memodifikasi kontrak pintar:
1. Edit `smart-contracts/DonationContract.sol`
2. Deploy ke jaringan Ethereum pilihan Anda
3. Perbarui alamat kontrak di kode frontend

## Lisensi

Proyek ini untuk tujuan pendidikan sebagai bagian dari UAS Pemrograman Web.
