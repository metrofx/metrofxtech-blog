---
title: "Mengapa ChatGPT, Gemini, dan Claude Menjawab dengan Cara Berbeda"
description: "Model AI frontier besar tampak serupa di permukaan, tetapi arsitektur di baliknya berbeda. Inilah lima dimensi yang menjelaskan mengapa ChatGPT, Gemini, dan Claude berperilaku unik."
date: 2026-07-08
tags: ["AI", "LLM", "ChatGPT", "Gemini", "Claude", "ArsitekturAI", "MachineLearning", "Teknologi"]
lang: "id"
draft: false
---

Kirimkan prompt yang sama ke ChatGPT, Gemini, dan Claude. Jawabannya akan datang, tetapi sering kali dengan karakter yang berbeda.

Claude terkadang menolak atau mempertanyakan premis permintaan. Gemini dengan santai menelan file video berjam-jam seolah itu dokumen PDF. ChatGPT menjawab satu pertanyaan secara instan, lalu perlahan-lahan memikirkan pertanyaan berikutnya tanpa memberi tahu Anda jalur mana yang sedang diambilnya.

Perbedaan ini bukan kebetulan. Masing-masing jejak perilaku itu berasal dari keputusan arsitektur yang dibuat tim di balik model tersebut. Keputusan yang sama berulang di setiap rilis baru, sehingga pola perilakunya konsisten dari waktu ke waktu.

Artikel ini membahas lima dimensi arsitektur yang membedakan ketiga model frontier besar tersebut.

## Dasar yang Sama, Jalan yang Berbeda

Di fondasi paling bawah, ketiga model sama-sama menggunakan transformer. Arsitektur ini diperkenalkan pada 2017 melalui makalah "Attention Is All You Need". Intinya adalah self-attention, mekanisme yang memungkinkan setiap bagian teks menimbang hubungannya dengan bagian teks lain dalam satu urutan.

Yang membedakan bukan fondasi ini, melainkan komponen yang dibuat di sekelilingnya dan proses pelatihan yang membentuknya.

Pelatihan LLM modern umumnya terdiri dari dua fase:

- **Pre-training**: model belajar dari data masif dengan memprediksi token berikutnya, berulang miliaran kali.
- **Post-training**: model dasar dibentuk menjadi asisten yang berguna melalui metode seperti Reinforcement Learning from Human Feedback (RLHF) dan Constitutional AI.

Dari titik ini, ketiga perusahaan mulai berbelok ke arah berbeda.

## Densitas: Lebih Banyak Parameter Tanpa Biaya Penuh

Setiap parameter dalam neural network membawa biaya komputasi. Pada model dense tradisional, setiap parameter aktif untuk setiap token. Kalau jumlah parameter digandakan, biaya per kueri juga ikut meningkat.

Pertanyaannya: bagaimana menambah kapasitas total tanpa membayar harga penuh setiap kali bertanya?

Google memilih Mixture of Experts (MoE). Gemini 1.5 secara eksplisit disebut sebagai "sparse mixture-of-expert Transformer-based model", dan Gemini 3 Pro melanjutkan pendekatan serupa.

Dalam MoE, setiap token tidak memicu seluruh parameter. Sebuah router kecil mengarahkan token ke dua atau tiga ahli tertentu dari banyak ahli yang tersedia. Total parameter bisa sangat besar, tetapi hanya sebagian kecil yang aktif tiap kali. Syaratnya adalah proses training harus mampu menjaga keseimbangan beban dan spesialisasi antar ahli.

OpenAI tidak mengonfirmasi GPT-4 menggunakan MoE. Laporan teknis GPT-4 sengaja merahasiakan detail arsitektur. GPT-5 justru menekankan efisiensi lewat router yang memilih sub-model berbeda saat runtime, bukan MoE dalam arti tradisional.

Anthropic lebih tertutup mengenai pilihan arsitektur densitasnya.

Konsekuensinya terasa di penggunaan sehari-hari. Model MoE seperti Gemini bisa menyimpan pengetahuan luas dengan biaya komputasi lebih rendah, sehingga terasa lancar di banyak domain. Namun hasilnya bisa lebih bervariasi karena prompt yang berbeda mengaktifkan ahli yang berbeda. Model dense cenderung memberikan perilaku lebih prediktabil per token, tetapi lebih sulit dinaikkan skalanya secara ekstrem.

## Multimodalitas: Dari Lahir atau Dipasang Belakangan

Multimodal bisa diartikan dengan dua cara berbeda.

Pendekatan pertama adalah **sequential**. Model bahasa dibangun kuat dulu, kemudian ditambahkan encoder terpisah yang menerjemahkan gambar, audio, atau video menjadi representasi yang bisa dibaca model bahasa.

Pendekatan kedua adalah **native**. Satu jaringan dilatih sejak awal secara bersamaan atas teks, gambar, audio, dan video. Token teks, patch gambar, dan frame audio hidup dalam urutan yang sama dan diproses oleh layer transformer yang sama.

Google memilih pendekatan native sejak Gemini 1.0. Laporan teknis Gemini 1.5 menunjukkan model menangani "10,5 jam video pada 1 frame per detik" dalam satu input. Gemini 3 Pro melanjutkan desain ini dengan dukungan native multimodal untuk teks, vision, dan audio.

OpenAI awalnya memilih jalur sequential. GPT-4 pertama mendukung vision melalui pipeline terpisah. Baru pada GPT-4o Mei 2024 arsitekturnya menyatu, dan pengumuman GPT-5.5 mengakui bahwa model multimodal OpenAI sebelumnya pada dasarnya adalah beberapa model yang disatukan.

Anthropic tetap menjaga pendekatan text-first dengan kemampuan vision yang kuat. Claude Opus 4.8 mendukung input gambar resolusi tinggi hingga 3,75 megapiksel, sangat berguna untuk dokumen, screenshot, dan grafik padat. Audio dan video native masih disisihkan untuk sementara.

Bagi pengguna, perbedaan ini paling terasa saat bekerja dengan video. Gemini dan model ChatGPT terbaru bisa menangani file video panjang secara langsung. Claude paling nyaman dengan dokumen, screenshot, dan gambar berkualitas tinggi.

## Konteks: Seberapa Banyak Bahan yang Bisa Dibaca Sekaligus

Context window adalah jumlah input yang bisa diperhatikan model dalam satu kali proses, diukur dalam token.

Window yang lebih besar memungkinkan model bernalar atas lebih banyak materi mentah sekaligus. Namun ada dua tantangan.

Pertama, biaya komputasi. Attention berkira-kira berskala kuadratik terhadap panjang urutan, jadi window panjang memakan lebih banyak sumber daya.

Kedua, degradasi kualitas. Model sering kehilangan jejak informasi yang disebutkan di awal saat percakapan atau input semakin panjang.

Google mendorong ukuran window paling agresif. Laporan Gemini 1.5 mendemonstrasikan konteks hingga 10 juta token, dan Gemini 3 Pro serta 3.1 Pro menawarkan 1 juta token di produksi.

Anthropic menawarkan 1 juta token pada Claude Opus 4.8 dan Sonnet 5. Dokumentasinya sendiri menggunakan istilah "context rot" untuk menggambarkan penurunan kualitas pada sesi panjang, dan menangani hal ini melalui kompaksi otomatis yang merangkum bagian awal percakapan.

OpenAI lebih konservatif soal ukuran window, dengan GPT-4 Turbo di 128K token. Fokus efisiensinya lebih pada arsitektur routing yang dibahas di bagian berikutnya.

Secara praktis, memuat seluruh codebase atau transkrip berjam-jam ke dalam satu sesi lebih nyaman dilakukan di Gemini dan Claude. ChatGPT dirancang lebih untuk routing efisien antar sub-model daripada menampung input tunggal yang sangat besar.

## Alignment: Dari Penghasil Teks ke Asisten yang Bisa Diandalkan

Pre-training menghasilkan model dasar yang mahal memprediksi token berikutnya. Pada tahap ini model bersikap seperti pelengkap pola canggih tanpa banyak memperhatikan kejujuran, keselamatan, atau kegunaan.

Post-training adalah fase di mana model dasar dibentuk menjadi asisten yang Anda gunakan. Ketiga perusahaan mengambil jalur yang berbeda.

OpenAI mengandalkan RLHF sejak GPT-3 dan GPT-4. Prosesnya melibatkan tiga langkah: penilai manusia membandingkan pasangan output, perbandingan itu melatih reward model, lalu reward model digunakan untuk menyetel bahasa model ke arah preferensi manusia. GPT-4 menambahkan sinyal keselamatan ke dalam RLHF. Untuk model reasoning, OpenAI menambahkan deliberative alignment, di mana model menalar kebijakan keselamatan saat inference. Model Spec yang dipublikasikan menjelaskan perilaku yang diinginkan secara detail.

Anthropic mengembangkan Constitutional AI (CAI). Alih-alih mengandalkan penilai manusia di setiap langkah, CAI menggunakan konstitusi tertulis secara eksplisit. Model dikritik dan merevisi outputnya sendiri berdasarkan prinsip-prinsip tersebut, lalu feedback yang dihasilkan AI digunakan untuk menyempurnakan model. Pada Januari 2026, Anthropic menerbitkan konstitusi sepanjang 23.000 kata yang membentuk pelatihan Claude di berbagai tingkat.

Google juga menggunakan RLHF dengan learned reward models pada pipeline post-training Gemini, tetapi kerangka publiknya tidak seeksplisit dua perusahaan lainnya.

Perbedaan ini muncul sebagai "kepribadian" model. Claude cenderung lebih sering menolak atau mempertanyakan permintaan di tepi batas karena konstitusinya melatih perilaku tersebut. ChatGPT lebih cepat mencoba menyelesaikan tugas tanpa banyak bertanya. Gemini lebih bervariasi antar domain.

## Reasoning: Berpikir Lebih Lama Sebelum Menjawab

Dimensi arsitektur paling konsekuensial pada generasi model saat ini adalah apakah model langsung menjawab atau terlebih dahulu menghasilkan token berpikir secara eksplisit.

Model chat standar langsung memulai respons setelah menerima prompt. Model reasoning pertama menghasilkan internal thinking tokens, mengerjakan masalah secara internal, baru kemudian menampilkan jawaban akhir. Prompt yang sama, bobot yang sama, dan konteks yang sama bisa menghasilkan profil komputasi yang sangat berbeda tergantung pendekatan yang dipakai.

OpenAI membangun model reasoning khusus, dimulai dari o1 pada akhir 2024, dilanjutkan o3 Agustus 2025, dan terus berkembang di GPT-5.5 yang dirilis 23 April 2026. Arsitekturnya terdiri dari tiga komponen utama: GPT-5-Main sebagai model cepat dan high-throughput, GPT-5-Thinking sebagai model reasoning yang lebih dalam, dan Real-Time Router yang memilih di antara keduanya berdasarkan jenis percakapan, kompleksitas, kebutuhan tool, dan niat eksplisit dalam prompt.

Anthropic memilih pendekatan berbeda. Claude Opus 4.8 dan Sonnet 5 menggunakan adaptive thinking di dalam satu model. Model yang sama memutuskan sendiri berapa lama harus berpikir untuk setiap permintaan, dengan ringkasan reasoning yang bisa diinspeksi oleh developer.

Google mengintegrasikan thinking ke dalam Gemini 3 melalui Deep Think mode dan sistem thinking tiga tingkat pada Gemini 3.1 Pro, memungkinkan model bernalar atas teks, gambar, audio, dan video dalam satu kali thinking pass.

Bagi pengguna, perbedaan ini terasa dalam konsistensi antar sesi. ChatGPT kadang terasa tidak konsisten karena router bisa mengarahkan dua prompt serupa ke sub-model berbeda. Claude terasa lebih konsisten karena model yang sama menyesuaikan kedalaman berpikirnya sendiri. Gemini lebih banyak bergeser sesuai domain dan modalitas.

Yang menarik, di dimensi ini ketiga perusahaan justru konvergen. Setelah berbeda di hampir setiap dimensi sebelumnya, mereka sampai pada kesimpulan serupa: explicit reasoning tokens pada saat inference benar-benar meningkatkan performa model pada masalah sulit.

## Kesimpulan: Pilih Alat Sesuai Bentuk Masalah

Lima dimensi ini memberikan kerangka untuk memahami perilaku masing-masing model.

- **Densitas**: Google terbuka dengan MoE, OpenAI mengandalkan routing antar sub-model, Anthropic menjaga kerahasiaan pilihan arsitektur.
- **Multimodalitas**: Google native sejak awal, OpenAI berevolusi dari sequential ke unified, Anthropic fokus pada teks dan vision.
- **Konteks**: Google memaksimalkan ukuran window, Anthropic menangani degradasi jangka panjang, OpenAI memprioritaskan efisiensi routing.
- **Alignment**: OpenAI dengan RLHF dan Model Spec, Anthropic dengan Constitutional AI dan konstitusi publik, Google dengan RLHF yang kurang diekspos.
- **Reasoning**: ketiganya konvergen pada explicit reasoning tokens, meskipun implementasinya berbeda.

Saat Anda melihat salah satu model berperilaku tertentu, pertanyaan yang tepat bukan "kenapa model ini bodoh atau pintar", melainkan "dimensi arsitektur mana yang sedang memunculkan perilaku ini".

Tidak ada model yang secara universal terbaik. Ada masalah yang lebih cocok diselesaikan dengan konteks panjang Gemini, ada yang membutuhkan kehati-hatian kritis Claude, dan ada yang paling efisien melalui routing ChatGPT. Memahami arsitektur di baliknya membantu Anda memilih alat yang tepat untuk bentuk masalah yang sedang dihadapi.
