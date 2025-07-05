require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const pollRoutes = require('./routes/poll.routes');
const Poll = require('./models/poll.model'); // data awal

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public')); 
app.set('view engine', 'ejs'); 

// Koneksi
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Berhasil terhubung ke MongoDB Atlas'))
    .catch(err => console.error('Koneksi gagal:', err));

// Routes
app.use('/', pollRoutes);

// Start Server
app.listen(PORT, async () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);

    // **HANYA UNTUK PERTAMA KALI**: Membuat data polling awal jika belum ada
    const count = await Poll.countDocuments();
    if (count === 0) {
        console.log('Membuat data polling awal...');
        await Poll.create({
            question: 'Framework JavaScript Frontend manakah yang jadi favoritmu di 2025?',
            options: [
                { name: 'React' },
                { name: 'Vue' },
                { name: 'Svelte' },
                { name: 'Qwik' }
            ]
        });
        console.log('Data awal berhasil dibuat!');
    }
});