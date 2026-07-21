---
title: "Apple Mungkin Sudah Memenangkan Pertarungan Inference, dan Hampir Tak Ada yang Menyadarinya"
description: "Model AI open-weight kini hampir sebagus model berbayar. Pertanyaan yang sebenarnya penting bukan siapa yang membuat model terbaik, melainkan di hardware siapa model-model itu akan berjalan."
date: 2026-07-22
tags: ["Apple", "NVIDIA", "AI", "Inference", "UnifiedMemory", "MLX", "OpenWeight", "Hardware", "EdgeAI"]
image: "/images/hero-apple-inference.jpg"
lang: "id"
draft: false
---

17 Juli 2026. Jonathan menjadi salah satu orang pertama yang menuliskannya secara terbuka: Apple mungkin sudah menjadi raja AI saat ini, meski hampir tak seorang pun memahami mengapa.

Bukan karena Apple memiliki model bahasa terbaik. Bukan pula karena mereka membangun datacenter terbesar. Melainkan karena satu hal yang terdengar teknis, namun menentukan segalanya: unified memory.

## Papan skor yang salah dibaca semua orang

Cara dunia menilai perlombaan AI saat ini sederhana: siapa yang punya frontier model terbaik, dan siapa yang menjual chip untuk melatihnya. Dengan ukuran itu, NVIDIA tak terkalahkan. Kapitalisasi pasar melewati $5 triliun. Pendapatan naik 85% tahun ke tahun. Jensen Huang yakin GPU mereka takkan pernah menganggur.

Tetapi papan skor itu mengukur lomba training. Dan lomba training bukanlah tempat cerita ini berakhir. Tidak pernah.

Akhir dari setiap gelombang teknologi selalu sama: mainframe menjadi PC, timeshare menjadi laptop, cloud menjadi edge. Satu-satunya pihak yang pernah berargumen sebaliknya adalah mereka yang menjual mainframe.

Pertanyaan yang tepat bukan siapa yang punya model terbaik. Pertanyaannya adalah: ketika model-model itu menjadi gratis dan bisa diunduh siapa pun, hardware siapa yang akan menjalankannya?

Jawabannya hanya satu. Dan itu bukan Jensen.

## Model gratis datang lebih cepat dari yang diprediksi siapa pun

Lima bulan terakhir menunjukkan sebuah irama yang mengubah segalanya.

Februari 2026: Alibaba merilis Qwen 3.5, model 397 miliar parameter dengan arsitektur mixture-of-experts, weights tersedia di internet. April 2026: DeepSeek V4, 1,6 triliun parameter, lisensi MIT, mencapai 80,6% di SWE-bench Verified. Minggu yang sama, Moonshot merilis Kimi K2.6. Juni 2026: MiniMax M3 dengan jendela konteks satu juta token, Moonshot K2.7-Code, dan Zhipu GLM-5.2 dengan sekitar 750 miliar parameter serta lisensi MIT.

Lalu pada 16 Juli 2026, Moonshot mengumumkan Kimi K3. Sekitar 2,8 triliun parameter, peringkat ketiga dunia di belakang Anthropic dan OpenAI. Weights akan dirilis 27 Juli.

Bloomberg menyebutnya sebagai China yang menutup celah dengan rival AS. Versi yang lebih blak-blakan: jarak antara model terbaik yang bisa dibeli dengan uang dan model terbaik yang bisa diunduh gratis kini diukur dalam poin benchmark tunggal, dan semakin menyempit setiap beberapa minggu.

Ini bukan satu rilis keberuntungan. Ini adalah irama. Model near-frontier dengan lisensi MIT muncul setiap tiga sampai enam minggu. Anda tidak bisa membangun moat melawan irama.

## Rahasia kotor model triliunan parameter

Triliunan parameter itu tidak compute-bound. Mereka memory-bound. Model MoE seperti Kimi atau GLM hanya mengaktifkan beberapa puluh miliar parameter per token. Komputasinya hampir biasa. Tapi seluruh model harus duduk di memori cepat, menunggu. Bottleneck-nya bukan FLOPs. Melainkan byte.

NVIDIA menjawab dengan VRAM. Dan di sinilah cerita konsumen mereka runtuh. Kartu workstation terbesar mereka, RTX Pro 6000 Blackwell, punya 96GB. Itu batasnya. Quantized 4-bit GLM-5.2 saja butuh sekitar 467GB. Kartu itu secara fisik tidak bisa menampung satu model frontier modern. Tidak perlahan. Tidak sama sekali.

Apple menjawab dengan unified memory. Satu kolam memori cepat yang dibagi CPU dan GPU, bandwidth 819GB/s di M3 Ultra. Mac Studio bisa dikonfigurasi dengan 512GB unified memory, seharga sekitar $9.500, mengonsumsi beberapa ratus watt. Software-nya juga siap: MLX, framework machine learning yang dibangun khusus untuk arsitektur itu, ditambah komunitas yang mengquantized setiap rilis besar dalam hitungan hari.

Buktinya publik. DeepSeek V3, 671 miliar parameter, berjalan 20+ token per detik di satu Mac Studio 512GB. Kimi K2 Thinking, model triliunan parameter, berjalan sekitar 15 token per detik di dua unit. GLM-5.2, salah satu rilis frontier musim panas ini, muat di satu kotak pada 4-bit.

Sebuah mesin yang dicolok ke stopkontak biasa, lebih senyap dari kulkas, menjalankan model yang delapan belas bulan lalu merupakan AI terbaik di Bumi, dengan pintu tertutup dan kabel internet dicabut.

Tidak ada produk NVIDIA yang mampu melakukan ini. Tidak pada harga yang Anda atau saya akan pernah bayar.

## Perbandingan matematika yang Jensen harap Anda tidak lakukan

Jalan NVIDIA: RTX Pro 6000 Blackwell sekarang $13.250. Naik 55% dalam enam belas bulan karena kekurangan GDDR7. Untuk menyamai 512GB Mac Studio, Anda butuh lima sampai enam kartu: $60.000–75.000, menghabiskan hampir tiga kilowatt. Biaya listrik sekitar $360–400 per bulan.

Jalan Apple: Mac Studio 512GB sekitar $9.500. Mengonsumsi 200–270 watt: $25–35 per bulan. Satu persepuluh energi rig GPU.

Kapasitas memori sama. Harga seperenam. Daya sepersepuluh. Ini bukan perdebatan spesifikasi. Ini dua peradaban berbeda.

## Kabel $69 yang mempermalukan rak $200.000

NVIDIA melepas NVLink dari kartu workstation-nya. RTX Pro 6000 Blackwell tidak bisa di-link ke tetangganya. Multi-GPU pada flagship workstation NVIDIA berarti berteriak melintasi bus PCIe. NVLink nyata sekarang hidup eksklusif di server room, di dalam tray HGX yang dimulai dari ratusan ribu dolar, plus InfiniBand, plus insinyur jaringan.

Cerita interkoneksi Apple adalah kabel Thunderbolt 5 seharga $69. Yang pihak ketiga jual $25.

MLX punya native distributed inference. EXO 1.0 merilis RDMA over Thunderbolt 5, memotong latency antar-Mac dari 300 mikrodetik menjadi 3. Kluster empat Mac Studio, sekitar $40.000, terhubung kabel yang lebih murah dari makan malam, menjalankan Kimi K2 Thinking pada 25 token per detik dengan 120.000 token konteks.

Ketika weights Kimi K3 dirilis dengan proyeksi quantized 650GB–1TB, tidak ada kotak konsumen tunggal di planet ini yang menampungnya. Beberapa Mac Studio yang di-tether akan sanggup.

## Hyperscaling adalah taruhan, bukan hukum alam

Valuasi $5 triliun NVIDIA bukan taruhan pada GPU. Ini taruhan pada sebuah dunia di mana kecerdasan tetap terpusat selamanya, setiap query AI di Bumi melewati hyperscale datacenter, dan empat perusahaan teknologi terbesar tidak punya pilihan selain membayar Jensen $600 miliar per tahun selamanya.

Lihat angka di bawahnya. Lima hyperscaler besar memandu capex gabungan $635–690 miliar untuk 2026. Capex tumbuh 46% lebih cepat dari pendapatan yang seharusnya dihasilkannya. Moody mencatat sekitar $662 miliar sewa datacenter yang belum dimulai, di luar neraca. Amazon free cash flow diproyeksikan negatif tahun ini. Kurang dari 40% enterprise telah menskalakan AI melewati pilot.

Juni lalu, harga sewa B200 turun 31% dalam tiga minggu. Saham NVIDIA turun 18% dari puncak Mei sementara memposting pendapatan rekor. Ketika rekor tidak bisa menahan harga, pasar tidak lagi menilai pendapatan. Ia menilai cerita. Dan cerita itu bocor.

Setiap query yang berjalan di Mac di Cleveland adalah query yang tak pernah menyentuh hyperscale GPU. Tidak perlu semua query pindah lokal untuk merusak model. Cukup margin-nya. Infrastruktur yang dibangun untuk permintaan tak terbatas ditambah permintaan yang diam-diam keluar pintu. Itu bukan koreksi. Itu repricing.

## Tiga angin yang belum dihargai pasar

Pertama, perang memori. Kekurangan DRAM global begitu brutal sehingga Apple menarik konfigurasi 512GB dan 256GB Mac Studio musim ini. NVIDIA menaikkan harga flagship 55%. Apple sekarang sedang mengualifikasi DRAM dari CXMT, pembuat memori terbesar Tiongkok, yang lebih murah 10–30%, dan telah lobi Washington sejak Mei. M5 Ultra Mac Studio diharapkan dalam beberapa bulan, dengan rumor testing internal hingga 768GB unified memory. Apple tidak meninggalkan bisnis big-memory. Mereka pergi mencari amunisi.

Kedua, kepercayaan pada taruhan terpusat merosot. Ketidakpastian di atas AI frontier AS, aturan ekspor yang berbalik setiap kuartal, dan pertanyaan pembiayaan sirkular di sekitar lab besar adalah lingkungan di mana enterprise dan pemerintah mulai menginginkan AI yang mereka miliki, bukan yang mereka sewa. Studi MIT menemukan 95% pilot AI enterprise menghasilkan nol ROI. Yang mengubah kalkulus itu bukan tagihan API lebih besar. Melainkan kotak $10K satu kali yang menjalankan model berlisensi MIT pada data sendiri di balik firewall sendiri.

Ketiga, privasi arsitektural. Apple adalah perusahaan yang mengatakan tidak kepada FBI di pengadilan terbuka dan membuatnya berhasil. Lokal model di hardware Apple berarti prompt, dokumen, dan otak institusional perusahaan tidak pernah melintasi kabel. Tidak ada server untuk subpoena, tidak ada log yang bocor. Inference paling pribadi di dunia adalah query yang tak pernah meninggalkan rumah Anda.

## Apa yang Jensen salah pahami, dan apa yang tangannya sendiri katakan

Training tetap di datacenter. CUDA tetap moat nyata bagi peneliti. Lab akan terus membeli Blackwell per hektar. Semua itu bisa benar sementara tesis ini tetap berdiri, karena training adalah cost center dan inference adalah volume market.

Menjadi raja training sementara inference beralih ke lokal adalah menjadi raja dari bagian menyusut dari pasar yang dulu Anda miliki seluruhnya.

Bukti paling menarik: lihat apa yang NVIDIA jual sekarang. DGX Spark, personal AI supercomputer untuk meja Anda, adalah kotak kecil senyap dengan 128GB unified memory yang dibagi CPU dan GPU. Terdengar familiar? Itu Mac Studio. NVIDIA, perusahaan yang imperiumnya dibangun pada GPU diskrit dengan VRAM diskrit di rak terpusat, sekarang mengirim arsitektur Apple pada form factor Apple untuk use case Apple.

Raja datacenter sedang melakukan hedge ke dalam tesis ini dengan lini produknya sendiri.

## Kesimpulan

Model-model menjadi gratis, dan mereka menjadi lebih baik setiap tiga minggu. Satu-satunya hardware konsumen yang mampu menampungnya adalah arsitektur Apple, lebih murah per byte memori model dengan kelipatan, lebih murah untuk dijalankan dengan satu orde magnitudo, bisa di-kluster dengan kabel $69, pribadi secara arsitektur, dan akan menjadi jauh lebih besar pada memori jika langkah CXMT berhasil.

Build-out hyperscale yang membenarkan valuasi $5 triliun NVIDIA mengasumsikan tidak satu pun dari ini penting. Padahal ini adalah seluruh permainannya.

Sumber: [Apple Is the King of AI and Nobody Knows It](https://limitededitionjonathan.substack.com/p/apple-is-the-king-of-ai-and-nobody) oleh Limited Edition Jonathan, 17 Juli 2026.
