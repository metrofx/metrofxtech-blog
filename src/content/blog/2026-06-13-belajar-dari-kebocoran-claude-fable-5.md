---
title: "Belajar dari Kebocoran System Prompt Claude Fable 5"
description: "Analisis 1500+ baris system prompt Claude Fable 5 yang bocor — 6 pola desain prompt engineering yang bisa langsung kamu terapkan."
date: 2026-06-13
source: "https://github.com/elder-plinius/CL4R1T4S/blob/main/ANTHROPIC/CLAUDE-FABLE-5.md"
sourceTitle: "elder-plinius / CL4R1T4S"
image: "/images/hero-prompt-engineering.svg"
lang: "id"
draft: false
---

Beberapa waktu lalu, sebuah repository bernama CL4R1T4S di GitHub membocorkan system prompt Claude Fable 5 secara lengkap. Bagi kebanyakan orang, ini mungkin hanya dianggap sebagai "kebocoran model" biasa. Namun bagi siapa pun yang serius mempelajari prompt engineering, dokumen ini adalah harta karun.

Bukan karena isinya berisi rahasia perusahaan, melainkan karena ia memperlihatkan dengan sangat detail bagaimana sebuah organisasi sekelas Anthropic merancang instruksi untuk model frontier mereka. Di balik 1500+ baris prompt tersebut, terdapat pola-pola desain yang jarang terlihat di tutorial prompt engineering biasa.

Berikut beberapa pelajaran paling berharga yang bisa kita ambil.

## 1. Aturan penting harus dinyatakan secara absolut

Salah satu bagian paling menonjol dalam prompt ini adalah aturan copyright. Anthropic tidak menulis "cobalah untuk tidak mengutip terlalu panjang", melainkan menetapkan batas keras: maksimal 15 kata per kutipan, hanya satu kutipan per sumber, dan melanggarnya dianggap "severe violation".

Pendekatan ini jauh lebih efektif daripada instruksi yang bersifat sugestif. Model cenderung mengikuti batasan yang dinyatakan secara tegas dan tidak ambigu.

**Pelajaran:** Ketika sebuah aturan benar-benar penting, jangan gunakan bahasa yang lembut. Gunakan frasa seperti "harus", "tidak boleh", atau "ini adalah batas keras".

## 2. Tentukan default behavior + kondisi pengecualian

Claude Fable 5 tidak hanya diberi tahu "gunakan bullet points jika perlu". Prompt-nya justru mendefinisikan perilaku default terlebih dahulu: respon dalam bentuk prosa alami. Baru kemudian dijelaskan kapan bullet points boleh digunakan — yaitu ketika kontennya "multifaceted enough that they are essential for clarity".

Ini adalah pola yang sangat kuat. Kebanyakan prompt hanya mendeskripsikan output yang diinginkan, tanpa pernah mendefinisikan apa yang harus dilakukan secara default.

**Pelajaran:** Selalu jawab dua pertanyaan ini dalam prompt kamu:

- Apa yang harus dilakukan model secara default?
- Dalam kondisi apa saja ia boleh menyimpang dari default tersebut?

## 3. Negative constraint sering lebih efektif

Prompt ini penuh dengan instruksi negatif: jangan over-format, jangan psychoanalyze user, jangan bertanya lebih dari satu pertanyaan per respons, jangan mereproduksi lirik lagu, dan sebagainya.

Negative constraint bekerja karena ia secara langsung menekan pola default yang biasanya muncul (seperti kecenderungan model untuk selalu menggunakan bullet points atau terlalu sopan).

**Pelajaran:** Ketika kamu melihat model berulang kali melakukan sesuatu yang tidak diinginkan, tambahkan instruksi negatif yang langsung, bukan hanya mendeskripsikan output yang kamu inginkan.

## 4. Gunakan decision framework, bukan panduan samar

Bagian "search_instructions" dan "when to use the image search tool" tidak memberikan arahan yang samar seperti "gunakan tool jika diperlukan". Sebaliknya, ia membangun kriteria keputusan yang cukup spesifik: kapan harus mencari, kapan tidak perlu, dan bagaimana menyesuaikan jumlah tool call berdasarkan kompleksitas query.

Model jauh lebih konsisten ketika diberi aturan keputusan dibandingkan ketika hanya diberi niat baik.

**Pelajaran:** Untuk perilaku yang kompleks, buat aturan keputusan yang eksplisit. Hindari frasa seperti "gunakan judgment kamu" jika kamu bisa mendefinisikan kriterianya.

## 5. Antisipasi edge case secara eksplisit

Prompt ini memiliki bagian khusus untuk menangani berbagai skenario sulit: user yang marah, kritik terhadap model, tanda-tanda masalah kesehatan mental, percakapan panjang, hingga potensi jailbreak. Ini bukan sekadar "safety", melainkan upaya untuk menjaga konsistensi perilaku di berbagai kondisi.

**Pelajaran:** Setelah menulis instruksi utama, luangkan waktu untuk bertanya: "Apa yang mungkin dilakukan model secara salah?" Lalu tambahkan instruksi untuk mencegahnya.

## 6. Contoh konkret mengalahkan aturan abstrak

Di beberapa bagian penting (terutama soal copyright dan penggunaan search), prompt ini menyertakan contoh input-output yang konkret. Ini jauh lebih efektif daripada hanya menjelaskan aturan secara teoritis.

**Pelajaran:** Ketika mengajarkan perilaku yang nuanced, sertakan 2–3 contoh konkret daripada hanya memberikan definisi.

## Menutup: Apa yang sebaiknya kita lakukan?

Kebocoran ini mengingatkan kita bahwa prompt engineering yang baik bukan soal menulis instruksi yang panjang, melainkan soal presisi dalam mendefinisikan perilaku.

Coba renungkan ini:

Dari semua instruksi yang biasa kamu tulis untuk model, berapa banyak yang benar-benar mendefinisikan *default behavior* dan *kondisi pengecualian*? Berapa banyak yang hanya memberikan arahan positif tanpa pernah menekan pola yang tidak diinginkan?

Mungkin saatnya kita berhenti hanya "memberi tahu" model apa yang harus dilakukan, dan mulai merancang sistem instruksi yang lebih disiplin.
