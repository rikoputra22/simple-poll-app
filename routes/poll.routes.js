const express = require('express');
const router = express.Router();
const Poll = require('../models/poll.model');

// Menampilkan halaman utama polling dengan data untuk grafik
router.get('/', async (req, res) => {
    try {
        const poll = await Poll.findOne(); // Ambil satu polling saja
        if (!poll) {
            return res.status(404).send("Polling tidak ditemukan.");
        }

        // 1. Siapkan data untuk Grafik Batang (Bar Chart)
        const barChartData = {
            categories: poll.options.map(opt => opt.name),
            series: [{
                name: 'Jumlah Suara',
                data: poll.options.map(opt => opt.votes)
            }]
        };

        // 2. Siapkan data untuk Grafik Donat (Doughnut Chart)
        const doughnutChartData = poll.options.map(opt => ({
            name: opt.name,
            y: opt.votes
        }));
        
        // 3. Kirim semua data ke file EJS
        res.render('poll', { 
            poll,
            barChartData: JSON.stringify(barChartData),
            doughnutChartData: JSON.stringify(doughnutChartData)
        });

    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rute untuk menerima suara (VOTE) tetap sama, tidak perlu diubah
router.post('/vote/:pollId', async (req, res) => {
    const { optionId } = req.body;
    try {
        const poll = await Poll.findById(req.params.pollId);
        const selectedOption = poll.options.id(optionId);
        
        selectedOption.votes++;
        await poll.save();

        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;