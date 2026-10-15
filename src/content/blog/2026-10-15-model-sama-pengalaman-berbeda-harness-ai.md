---
title: "Model Sama, Pengalaman Berbeda: Mengapa Harness AI Penting"
description: "Catatan dari penggunaan Qwen 3.8 Flash lewat tiga harness, dan mengapa evaluasi AI agent perlu melihat lingkungan kerjanya, bukan model saja."
date: 2026-10-15
tags: ["AI", "AI Agent", "Harness", "Qwen", "Claude Code", "OpenCode", "Hermes Agent"]
image: "/images/hero-model-sama-pengalaman-berbeda-harness-ai.jpg"
lang: "id"
draft: false
---

Saya mengira penggunaan model yang sama akan memberikan pengalaman yang relatif serupa. Namun, saat menggunakan Qwen 3.8 Flash melalui Hermes Agent, OpenCode, dan Claude Code, hasilnya terasa berbeda.

Perbedaannya paling terlihat ketika saya mengembangkan ide dasar atau *problem statement* menjadi solusi platform digital. Ketiganya bisa mendiagnosis masalah dan menawarkan solusi yang relevan. Namun, Claude Code terasa lebih tajam dalam menemukan asumsi yang belum saya sadari dan menggali persoalan lebih jauh. Saat mengolah proyeksi finansial dan asumsi matematis, hasilnya juga melampaui ekspektasi saya.

“Tajam” di sini bukan berarti jawabannya lebih panjang. Yang terasa berbeda adalah kedalaman pertanyaannya, asumsi yang berhasil diangkat, dan seberapa berguna analisisnya untuk melanjutkan pekerjaan.

## Modelnya sama, tetapi cara kerjanya?

Saat menilai AI agent, kita sering bertanya, “Model mana yang terbaik?” Pertanyaan itu penting, tetapi belum lengkap. Hasil yang kita terima juga dipengaruhi oleh lingkungan yang mengarahkan model dan memberinya cara untuk bekerja.

Lapisan itu disebut *harness*: perangkat lunak yang mengatur bagaimana model menerima konteks, memakai tools, dan menjalankan proses kerja. Harness dapat menentukan instruksi yang diberikan, informasi yang dibawa ke dalam sesi, tindakan yang bisa dilakukan model, serta bagaimana agent memeriksa hasil dan memutuskan kapan harus berhenti.

Jadi, menggunakan model dengan nama yang sama belum tentu berarti model menerima kondisi kerja yang sama. Perbedaannya dapat muncul dari seluruh sistem di sekeliling model, bukan dari model itu sendiri saja.

## Ada petunjuk dari pengujian lain

Pengujian Composio memberi contoh yang relevan. Mereka menjalankan model Kimi K3 melalui delapan harness pada 25 tugas, dengan provider, tingkat reasoning, tools, instruksi, dan data yang sama. Hasil keberhasilan tugas berkisar dari 68% hingga 88%. Pengujian itu mengukur apakah agent berhasil menuntaskan tugas, bukan apakah jawabannya terasa lebih tajam. Model dan tugasnya pun berbeda dari pengalaman saya dengan Qwen 3.8 Flash. Jadi, temuan tersebut mendukung pentingnya harness, tetapi tidak menjelaskan penyebab pengalaman saya.

## Pengalaman, hipotesis, dan hal yang belum terbukti

Yang bisa saya katakan adalah: dalam penggunaan saya, Claude Code lebih sering menggali asumsi tersembunyi dan menghasilkan analisis proyeksi finansial yang melampaui ekspektasi.

Salah satu kemungkinan, perbedaan harness ikut membentuk pengalaman itu. Namun, pengalaman ini belum membuktikan bahwa harness adalah penyebab tunggal, apalagi bahwa Claude Code selalu lebih unggul. Untuk membandingkan dengan lebih terkontrol, saya juga perlu memastikan faktor seperti model ID dan endpoint, pengaturan reasoning, konteks sesi, serta anggaran token dan iterasi.

Itulah sebabnya pengalaman pribadi ini lebih tepat diperlakukan sebagai alasan untuk menguji, bukan sebagai peringkat produk.

## Uji pasangan yang benar-benar dipakai

Bagi pengguna, pertanyaannya bukan hanya “model mana yang terbaik?”, tetapi juga “model ini bekerja paling baik dalam lingkungan seperti apa untuk tugas saya?”

Gunakan pekerjaan yang benar-benar mencerminkan kebutuhan sendiri. Nilai ketepatan dan kegunaan hasil, termasuk kemampuan menemukan asumsi yang luput, bukan panjang jawabannya. Perlakukan model dan harness sebagai satu konfigurasi yang perlu diuji.

Pengalaman ini belum membuktikan mengapa Claude Code memberikan hasil yang lebih cocok bagi saya. Tetapi pengalaman tersebut mengubah cara saya mengevaluasi AI: bukan hanya melihat model yang digunakan, melainkan juga bagaimana model itu diarahkan, diberi konteks, dan diajak bekerja.

*Model penting. Namun, model tidak bekerja sendirian.*

Sumber: [8 Best AI Agent Harnesses in 2026: Performance, Cost, and Speed Compared](https://composio.dev/content/best-ai-agent-harnesses) oleh Composio, 4 Agustus 2026.
