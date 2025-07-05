# Simple Polling App 📊

Aplikasi polling atau voting sederhana yang dibangun dengan Node.js, Express, dan MongoDB. Proyek ini mendemonstrasikan aplikasi full-stack dasar dengan visualisasi data real-time menggunakan Highcharts.js dan UI yang modern dengan Tailwind CSS.

![App Screenshot](https://imgur.com/a/XjuYbfG)

---

## 🚀 Fitur

-   **Voting Interaktif**: Pengguna dapat memilih salah satu opsi polling.
-   **Visualisasi Data Real-time**: Hasil polling langsung diperbarui dan ditampilkan dalam berbagai format:
    -   Tabel Rinci
    -   Grafik Batang (Bar Chart)
    -   Grafik Donat (Doughnut Chart)
-   **UI Modern**: Desain yang bersih, responsif, dan menarik menggunakan Tailwind CSS.

---

## 🛠️ Teknologi yang Digunakan

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB dengan Mongoose
-   **Frontend**: EJS (Embedded JavaScript templating)
-   **Styling**: Tailwind CSS
-   **Visualisasi Data**: Highcharts.js
-   **Development**: Nodemon untuk auto-reload server

---

## ⚙️ Instalasi dan Konfigurasi Lokal

Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/rikoputra22/simple-poll-app.git](https://github.com/rikoputra22/simple-poll-app.git)
    cd simple-poll-app
    ```

2.  **Install semua dependensi:**
    ```bash
    npm install
    ```

3.  **Buat file `.env`** di folder utama dan isi dengan koneksi MongoDB Atlas Anda:
    ```
    MONGO_URI=mongodb+srv://user:<password>@cluster...mongodb.net/pollApp
    ```

4.  **Buka dua terminal:**
    -   Di terminal pertama, jalankan Tailwind CSS watcher:
        ```bash
        npm run watch-css
        ```
    -   Di terminal kedua, jalankan server pengembangan:
        ```bash
        npm run dev
        ```

5.  **Buka aplikasi** di browser Anda pada alamat `http://localhost:3000`.

---

## 👨‍💻 Penulis

Proyek ini dibuat oleh:
-   **Riko Gimin Dwi Putra**