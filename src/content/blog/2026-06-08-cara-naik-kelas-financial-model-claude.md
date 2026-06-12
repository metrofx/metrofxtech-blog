---
title: "Cara Naik Kelas Bikin Financial Model Pakai Claude AI"
description: "Pelajaran dari Purwadi Niti Mijoyo, Director Financial Modeling di Deloitte, tentang cara memanfaatkan Claude AI untuk mempercepat pembuatan model keuangan."
date: 2026-06-08
source: "https://youtu.be/ejEy03_DRq8"
sourceTitle: "CFA Society Indonesia — Purwadi Niti Mijoyo"
tags: ["AI", "Claude", "financial modeling", "Excel", "produktivitas"]
lang: "id"
---

*Berikut adalah artikel blog yang merangkum esensi dan seluruh insights penting dari sesi presentasi Pak Purwadi Niti Mijoyo di CFA Society Indonesia.*

*Good evening, everyone.* Santai saja ya.

Saya mau *share* sedikit. Kemarin saya melihat antusiasme yang luar biasa waktu demo *financial modeling* menggunakan AI. Jujur, saya sudah berkarier di dunia *financial modeling* ini selama 25 tahun — mulai dari zaman di Chase Manhattan Bank, lalu beresin *loan restructuring* di BPPN pas krisis '98, sampai jadi Director Financial Modeling di Deloitte.

Dulu, kalau kita bikin *financial model*, tahu enggak butuh waktu berapa lama? Bisa berminggu-minggu, berbulan-bulan, bahkan waktu saya bikin model untuk PLN itu proyeknya makan waktu hampir setahun! Tergantung seberapa kompleks mekaniknya. Kita harus duduk di depan monitor, *punching keyboard* 8 jam sehari sampai jempol mau copot.

Tapi sekarang, dengan adanya AI seperti Claude, Shortcut, atau Trace Light, hidup kita berubah total. *I’m really excited!* Pekerjaan yang tadinya butuh waktu dua bulan, sekarang tiga minggu bisa kelar. Pertanyaannya: Anda mau tetap kerja pakai cara kerja purba, atau mau memanfaatkan teknologi ini buat melipatgandakan produktivitas Anda?

Mari kita bedah bagaimana caranya "menyedot" kapabilitas AI ini untuk *financial modeling*, langsung berdasarkan pengalaman saya di lapangan.

## 1. Posisikan AI sebagai Civil Engineer, Anda adalah Sang Arsitek

Menurut Dan Martel (seorang *angel investor*), ada tiga level pengguna AI di dunia ini:

- **Level 1 (Chat):** Cuma pakai AI buat tugas-tugas receh atau sekadar tanya-tanya kasual (*chatbot*). Nah, 99% orang di dunia masih mandek di level ini. Kalau Anda cuma pakai AI begini, ya Anda sendiri yang masih kepayahan bikin modelnya dari nol.
- **Level 2 (Automate):** Sudah pakai AI *agents* untuk mengotomatisasi alur kerja (*workflow*).
- **Level 3 (Delegate):** Mendelegasikan seluruh proyek ke AI *agents* untuk membangun, mengeksekusi, dan mengelolanya secara mandiri.

Target kita malam ini adalah dorong diri kita naik kelas dari Level 1. Jangan biarkan AI cuma jadi tempat mengobrol. Posisikan AI sebagai **Co-pilot**.

Prinsipnya simpel: **Anda adalah otaknya (*the brain*), Anda arsiteknya.** AI adalah **civil engineer**-nya. AI yang akan melakukan semua pekerjaan kasar (*the groundwork, the drudgery*), sementara Anda yang pegang kendali desain jalurnya. Dengan cara ini, Anda bisa menghemat 70% sampai 80% waktu Anda.

## 2. Rahasia Prompting: Be Radically Specific!

Banyak orang komplain ke saya, *"Pak Purwadi, saya coba pakai Claude kok hasilnya halusinasi ya? Rumusnya berantakan."* Saya cuma bisa ketawa. Saya tanya balik, *"Kamu kasih instruksinya berapa baris?"* Paling cuma satu-dua baris, kan? Ya jelas dia halusinasi! AI itu butuh informasi yang lengkap. Kalau Anda tidak kasih batasan, dia akan ngarang sendiri suka-suka dia.

Ingat, memperlakukan AI itu persis seperti Anda sedang mengarahkan seorang *junior analyst* atau *coworker* di sebelah Anda. Kalau instruksi Anda abu-abu, hasilnya pasti kacau. Kalau mau model yang *exact*, *clean*, dan presisi, *prompt* Anda harus memuat komponen-komponen ini:

- **Berikan Role yang Kuat:** Jangan cuma bilang "Buatkan model." Katakan: "Anda adalah seorang Investment Banker dengan pengalaman 20 tahun di Deloitte dalam membangun proyek finansial kompleks." Posisikan dia di level tertinggi.
- **Konteks Industri dan Standar Akuntansi:** Tentukan industrinya apa (Manufaktur? Perkebunan? Energi?). Pakai standar akuntansi yang mana? IFRS atau PSAK? Mau patuh pada *guideline* apa? FAST Standard atau Modano? Kasih tahu dia!
- **Detail Anatomi Spreadsheet:** Anda harus dikte sampai ke hal-hal mendetail. Mulai dari sel berapa (*starting from cell B2*), warna *fill*-nya apa, ukuran *font*-nya berapa, lebar kolomnya seberapa, sampai ke *sign convention* (apakah COGS mau ditulis positif lalu dikurangi, atau ditulis dalam kurung/negatif).
- **Gunakan Metode Chain of Thought (Step-by-Step):** Jangan suruh AI langsung bikin gelondongan dari awal sampai kiamat. Selesai satu tahap, minta dia berhenti. *"Step one: Buat time engine dulu, lalu stop dan minta konfirmasi saya. Kalau saya bilang OK, baru lanjut ke input."*

**Tips Cepat untuk Pemula (Reverse Prompt Engineering):** Kalau Anda belum bisa menulis *prompt* yang panjangnya ratusan baris dari nol, pakai trik saya: Ambil *file financial model* Excel Anda yang sudah jadi dan sudah benar formulanya. Cemplungin ke Claude, lalu ketik instruksi: *"Tolong analisa model ini, lalu generate prompt utuh yang bisa menciptakan kembali model yang persis sama dengan formulasi dan kosmetik yang identik."* Claude akan buatkan *prompt* sepanjang 100 baris lebih. Anda tinggal salin *prompt* tersebut, buka workbook kosong, dan masukkan kembali ke Claude. Boom! Anda bisa belajar langsung dari struktur *prompt* yang dia buat.

## 3. Workflow itu Harga Mati, Jangan Asal Tembak

Orang yang bisa bikin prompt financial model yang bagus adalah orang yang sudah khatam *workflow*-nya di dunia nyata. Kalau Anda sendiri belum pernah bikin model secara manual, Anda tidak akan tahu apa yang harus dimasukkan ke dalam instruksi. *Underlying knowledge*-nya tetap wajib Anda kuasai.

Secara umum, pastikan alur kerja yang Anda perintahkan ke AI mengikuti struktur standar ini:

- **Sheet Input:** Berisi data historis (*historical audited financial statement*) dan asumsi proyeksi (*projection assumptions*).
- **Sheet Calculation:** Berisi *supporting schedules* (skedul pendapatan, biaya, working capital, capex, pajaknya, pinjamannya, dll).
- **Sheet Output:** Berisi tiga laporan keuangan utama (Income Statement, Balance Sheet, Cash Flow Statement) yang saling terintegrasi, ditambah rasio keuangan, analisis sensitivitas, atau analisis skenario.
- **Kelengkapan Profesional:** Selalu perintahkan AI di akhir *prompt* untuk melengkapi model dengan *model error check* (biar ketahuan kalau tidak *balance*) dan sebuah *cover sheet* yang berisi daftar isi menggunakan *hyperlink*.

## 4. Jangan Setia Sama Satu AI: Gunakan Ecosystem Synergy

Jangan pernah tanya ke saya, "AI mana yang terbaik, Pak?" Itu pertanyaan yang salah. Setiap AI punya kekuatan masing-masing. Di laptop saya, saya pasang Claude, Shortcut, dan Trace Light sekaligus. Mereka bekerja bergiliran bagaikan tim audit.

- **Claude:** Sangat kuat di *deep reasoning*, mendesain logika, dan menyusun kerangka berpikir awal.
- **Shortcut:** Sangat cepat untuk urusan eksekusi dan delivery awal dari *prompt universal* kita.
- **Trace Light:** Paling jagoan untuk urusan *audit model*.

Jadi cara kerjanya begini: Saya desain modelnya di Claude sampai bersih. Begitu modelnya jadi di Excel, saya minta Trace Light untuk melakukan *self-audit*: *"Tolong audit model ini, cari apakah ada error atau ada formula yang di-hardcode."* Begitu Trace Light temukan error, saya minta dia perbaiki. Setelah bersih, baru saya *review* sendiri menggunakan *human judgment* saya. Berlapis-lapis. Keamanan model jadi jauh lebih terjamin.

## 5. Garis Tegas: Apa yang Menjadi Tanggung Jawab Manusia?

Ini poin paling krusial. AI itu hebat untuk mengurus *mechanical work* yang menguras waktu. Tapi begitu kita bicara soal **Asumsi Proyeksi (Projection Assumptions)**, *that is NOT AI's responsibility. That is YOUR job!*

Mau pertumbuhan pendapatan dinaikkan 5%, 10%, atau COGS-nya ditekan jadi 65%, itu murni keputusan Anda. Mengapa? Karena yang tahu kondisi riil klien, yang tahu dinamika industri di lapangan, dan yang memegang akuntabilitas hukum atas model tersebut adalah Anda, bukan AI.

Saya punya cerita riil. Tahun 2008, saya bikin model finansial 15 tahun untuk Bank Mandiri. Waktu serah terima, model itu diuji seharian penuh oleh 40 orang analis kredit di dalam satu kelas. Hasilnya? Sempurna, tidak ada error, semua *balance*.

Tiga tahun kemudian, saya ditelepon oleh tim Mandiri. Mereka bilang, "Pak Purwadi, ini ada kasus klien yang minta proyeksi sampai 15 tahun penuh, kok di 3 tahun terakhir mendadak tidak *balance* ya?" Saya bingung, saya cek lagi file-nya. Ternyata apa? Saya ini manusia biasa, manusia itu tidak sempurna dan bisa capek. Ternyata ada dua baris di *cash flow statement* yang rumusnya kurang saya *drag* sampai ke ujung tahun ke-15. Waktu *user test* dulu tidak ketahuan karena rata-rata mereka cuma tes sampai tahun ke-7 atau ke-10.

*Human error* seperti ini sangat lumrah terjadi kalau kita dikejar-kejar *deadline* sampai jam 5 pagi dalam kondisi stres dan kurang tidur. Nah, AI hadir justru untuk mengeliminasi kesalahan-kesalahan mekanis seperti ini. AI tidak punya rasa lelah, dia tidak akan lupa men-drag rumus. Tapi untuk urusan *judgment* bisnis? Tetap ada di tangan Anda.

## 6. Gunakan Fitur "Skills" di Claude untuk Otomatisasi Jangka Panjang

Biar Anda tidak perlu mengetik *prompt* sepanjang ratusan baris setiap kali membuka lembar kerja baru, manfaatkan fitur *Skills* atau *Custom Instructions* di Claude.

Masukkan semua *guideline* tetap Anda ke dalam sana: masukkan PSAK, masukkan aturan baku FAST Standard atau Modano, masukkan preferensi pribadi Anda (misal: "Saya benci *offset function*, selalu gunakan *index-match* atau *xlookup*").

Begitu semua aturan dasar itu sudah tertanam di dalam *Skills* Claude Anda, ke depannya Anda tinggal ketik perintah pendek saja: "Buatkan model DCF untuk perusahaan perkebunan kelapa sawit." Claude secara otomatis akan memanggil semua aturan baku yang ada di *Skills*-nya untuk membangun model Anda tanpa halusinasi.

Kalau Anda bingung bagaimana cara menyusun *Skills* tersebut, tanyakan saja ke Claude: *"Claude, saya mau buat Custom Skills untuk financial modeling standar IFRS. Tolong wawancarai saya, tanyakan apa saja preferensi saya, lalu buatkan teks pengaturannya."* Selesai. AI itu guru yang sangat baik kalau Anda tahu cara bertanya.

## Closing Thoughts: Mulai Sekarang, Jangan Ditunda!

Teknologi Claude yang bisa bikin model seapik ini baru berumur sekitar 6 bulanan di pasaran. Bayangkan kapabilitasnya 3 atau 5 tahun dari sekarang!

Kalau Anda tidak mau belajar *prompt engineering* dari sekarang, siap-siap saja beberapa tahun lagi Anda akan tertinggal jauh di belakang. Dunia bergerak cepat sekali. Di era AI ini, *bos* Anda di kantor tidak akan lagi menoleransi model yang selesai dalam satu bulan. Standar produktivitas kita semua sudah dinaikkan secara masif.

Tahun depan usia saya masuk 70 tahun. Dan di usia sekarang, saya masih punya energi besar untuk belajar Python, mencoba berbagai AI tools baru setiap hari, karena saya tahu ini membuat hidup saya jauh lebih produktif. Kalau saya yang sekarang saja bisa dan mau belajar, masa Anda yang muda-muda tidak bisa? **Do it now, start learning!**

Sampai ketemu di sesi berikutnya. Thank you.
