---
title: "Resep Rahasia Claude"
description: "Kode sumber yang bocor mengungkap bagaimana AI ini \"mengingat\" kamu \u2014 dan mengapa ingatannya masih jauh dari sempurna."
date: 2026-03-15
source: "https://statisticalintuitions.com/posts/anthropic-memory/"
sourceTitle: "Statistical Intuitions — Spandan Madan"
tags: ["AI", "Claude", "memori", "arsitektur", "kode sumber"]
lang: "id"
---

*Teknologi & Kecerdasan Buatan*

Bayangkan kamu punya asisten pribadi yang setiap pagi bangun tidur dengan amnesia total. Kamu harus menjelaskan ulang siapa kamu, apa pekerjaanmu, dan apa yang sedang kamu kerjakan — dari nol, setiap hari. Melelahkan, bukan? Itulah masalah mendasar dari semua AI seperti Claude. Mereka *stateless* — setiap sesi dimulai dari halaman kosong.

Tapi di akhir Maret 2026, sesuatu yang tak terduga terjadi: kode sumber Claude Code bocor ke publik. Dan di dalamnya, para peneliti menemukan sesuatu menarik — resep rahasia bagaimana Claude berusaha mengingat penggunanya.

## Lemari Arsip, Bukan Otak

Sistem memori Claude bukan teknologi canggih seperti yang dibayangkan banyak orang. Intinya sederhana: memori disimpan sebagai catatan teks pendek sekitar 150 karakter, ditulis ke dalam file di disk. Claude sendirilah yang bertugas membaca dan menulis catatan-catatan itu.

Semua file memori tersimpan dalam satu folder di komputer: `~/.claude/projects/[nama-proyek]/memory/` — folder biasa yang bahkan bisa kamu buka dan baca sendiri.

> *"Sistem ini lebih mirip lemari arsip yang rapi daripada otak yang hidup."*

## Empat Jenis Ingatan

Claude membagi memorinya ke dalam empat kategori:

- **User**: Siapa kamu, peranmu, keahlian, dan preferensimu dalam bekerja.
- **Feedback**: Koreksi atau konfirmasi yang pernah kamu berikan tentang cara kerjanya.
- **Project**: Konteks pekerjaan yang sedang berjalan, tenggat waktu, dan motivasi.
- **Reference**: Penunjuk ke sistem eksternal dan di mana menemukan informasi.

Yang menarik: memori tidak menyimpan pola kode, arsitektur sistem, atau jalur file. Sistem ini secara eksplisit mengecualikan apa pun yang bisa didapat dari melihat langsung kondisi kode saat ini. Memori hanya untuk hal-hal yang *tidak bisa diceritakan* oleh kode.

## Trik Hemat Biaya: Dua Lapis Penyaringan

Setiap kali kamu mengirim pesan, Claude tidak langsung membaca semua file memori — itu terlalu mahal. Sebagai gantinya, Claude hanya membaca bagian *frontmatter* (metadata singkat) dari setiap file memori, lalu mengirimkannya bersama pesanmu ke model yang lebih kecil dan murah (Sonnet) dengan pertanyaan sederhana: "Mana yang relevan? Pilih maksimal 5." Hanya file yang lolos seleksi itulah yang dibaca isinya secara penuh.

Efisien. Tapi ada konsekuensinya — nanti kita bahas.

## Bagaimana Claude Menulis Ingatan Baru

Ada dua cara Claude menyimpan memori baru.

**Cara pertama, otomatis di latar belakang:** setelah Claude selesai menjawab pesanmu, sebuah sub-agen bekerja di balik layar, menganalisis sekitar 10 pesan terakhir dan memperbarui file memori yang relevan.

**Cara kedua, langsung saat percakapan:** Claude juga bisa langsung menulis memori selama proses berpikir, terutama ketika kamu secara eksplisit memintanya mengingat sesuatu, atau ketika dia menemukan informasi yang cocok dengan salah satu dari empat kategori memori.

## Di Mana Sistem Ini Masih Kurang

Bocoran kode ini juga membuka kekurangan yang selama ini tersembunyi di balik antarmuka yang tampak canggih.

**1. Reaktif, bukan proaktif**

Memori Claude hanya aktif saat kamu mengirim pesan. Tidak ada yang muncul dengan sendirinya. Manusia bisa tiba-tiba teringat sesuatu karena suasana, tempat, atau siapa yang ada di sekitarnya. Claude tidak punya "ambiens" seperti itu.

**2. Ada batas keras**

Indeks memori dibatasi 200 baris. Memori yang disimpan enam bulan lalu punya bobot sama dengan yang disimpan kemarin. Tidak ada penguatan melalui pengulangan, tidak ada peluruhan, tidak ada adaptasi berdasarkan apakah ingatan itu ternyata berguna atau tidak.

**3. Pencarian kata kunci, bukan asosiasi**

Agar sebuah memori muncul, pesanmu harus mengandung kata-kata yang mirip dengan yang ada di file memori. Ingatan manusia berbeda: satu memori bisa memicu memori lain, membentuk rantai asosiasi yang panjang. Claude tidak bisa melakukan itu.

## Kesimpulan

Sistem memori Anthropic adalah solusi rekayasa yang pragmatis untuk keterbatasan nyata — model bahasa besar memang tidak dirancang untuk memodelkan memori manusia. Namun arsitektur ini tidak mencoba menangkap tiga sifat fundamental ingatan manusia: kemunculan yang proaktif, penyimpanan seumur hidup, dan pengambilan secara asosiatif.

Claude, pada akhirnya, lebih mirip lemari arsip yang rapi daripada otak yang hidup. Resep rahasianya sudah terbuka. Dan ternyata, lebih sederhana dari yang kita kira — sekaligus lebih jujur tentang batas kemampuannya.
