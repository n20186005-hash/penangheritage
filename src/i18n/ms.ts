import type { PageContent } from './ui';

// Bahasa Melayu — kandungan penuh
export const content: PageContent = {
  meta: {
    title: 'George Town UNESCO — Jejak Warisan',
    description: 'Panduan berjalan kaki ke tapak Warisan Dunia UNESCO George Town, Pulau Pinang — sejarah, pengangkutan, makanan dan laluan pilihan.',
    ogTitle: 'George Town UNESCO — Jejak Warisan',
    ogDescription: 'Satu bandar pelabuhan, banyak lapisan cerita.',
    jsonldName: 'George Town UNESCO Historic Site',
    jsonldDescription: 'Teras bersejarah George Town, Pulau Pinang, yang diiktiraf kerana seni bina dan landskap budayanya yang unik.'
  },
  header: {
    brandTop: 'JEJAK',
    brandBottom: 'WARISAN',
    nav: { cerita: 'Cerita', sejarah: 'Sejarah', laluan: 'Laluan', praktikal: 'Praktikal', galeri: 'Galeri' },
    savePlan: '＋ Simpan pelan'
  },
  hero: {
    eyebrow: 'PULAU PINANG · MALAYSIA',
    title1: 'Bandar pelabuhan,',
    title2: 'seribu lapis cerita.',
    lede: 'George Town UNESCO Historic Site bukan muzium yang beku. Ia ialah bandar yang masih bernafas — di antara kedai lama, rumah ibadat, gerai sarapan dan bayang petang.',
    ctaPrimary: 'Mulakan berjalan',
    ctaSecondary: '＋ Simpan laluan',
    noteNumber: '01',
    noteTitle: 'Tapak Warisan Dunia UNESCO sejak 2008',
    noteSub: 'Berjalan kaki adalah cara terbaik untuk membaca bandar ini.',
    stamp: 'GEORGE TOWN<br/>5°25′N · 100°20′E',
    imageAlt: 'Bangunan kedai warisan berwarna-warni di George Town'
  },
  intro: {
    kicker: '01 / CERITA TEMPAT',
    title1: 'Satu bandar.',
    title2: 'Banyak pertemuan.',
    bigCopy: 'Di sini, sejarah bukan sekadar tarikh. Ia hadir dalam bentuk pintu kayu, jubin encaustic, bunyi loceng kuil dan bau rempah yang keluar dari lorong sempit.',
    body: 'George Town berkembang sebagai pelabuhan entrepôt di Selat Melaka. Lapisan Melayu, Cina, India, Eropah dan komuniti peranakan membentuk sebuah landskap bandar yang sukar ditemui di tempat lain.',
    linkText: 'Baca tentang nilai sejagat luar biasa ↗',
    imageAlt: 'Suasana jalan bersejarah George Town'
  },
  feature: {
    eyebrow: 'SEKILAS PANDANG',
    quote: '“Sebuah contoh luar biasa bandar perdagangan pelbagai budaya di Asia Tenggara.”',
    body: 'Mulakan di Lebuh Chulia, biarkan kaki memilih simpang. Setiap blok membuka satu lagi bab: rumah kongsi, masjid, kuil, gereja dan kedai kopi yang masih menjadi sebahagian daripada kehidupan harian.',
    stat1Value: '4.4',
    stat1Line1: 'penilaian peta',
    stat1Line2: '13,491 ulasan',
    stat2Value: 'FREE',
    stat2Line1: 'akses kawasan',
    stat2Line2: 'warisan terbuka',
    imageAlt: 'Deretan shophouse warisan dengan tingkap hijau'
  },
  history: {
    kicker: '02 / SEJARAH & LEGENDA',
    items: [
      { title: '1786: Mutiara Timur', text: 'Pendaratan Kapten Light menyalakan fius pelabuhan bebas ini. Perdagangan bebas, pengecualian cukai dan kemasukan pendatang daripada pelbagai kaum dengan pantas menjadikan George Town entrepôt penting di Selat Melaka — dan punca watak pelbagai budaya yang kita lihat hari ini.' },
      { title: 'Simfoni lima kaum', text: 'Komuniti Melayu, Cina, India, Eropah dan peranakan mendiami blok yang sama bersebelahan. Masjid, rumah kongsi, gereja dan kuil terletak dalam jarak beberapa ratus meter antara satu sama lain — jajaran yang jarang ditemui dan menjadi teras nilai warisan dunianya.' },
      { title: 'Cerita rakyat & lagenda', text: 'Ribuan cerita beredar di jalan-jalan: ukiran di atas pintu lama menyimpan hajat keluarga, dan nama tempat sering datang daripada lagenda silam. Bangunan bukan sekadar bata dan mortar — ia wadah memori para pendatang, menunggu pembaca yang sabar untuk mentafsirnya.' }
    ],
    note: 'Sumber: naratif sejarah awam dan penulisan warisan George Town. Laman ini bukan sumber akademik rasmi; untuk rujukan terperinci, lihat pangkalan data UNESCO.'
  },
  routes: {
    kicker: '03 / LALUAN PILIHAN',
    title1: 'Tiga cara membaca',
    title2: 'George Town.',
    body: 'Jangan kejar semuanya. Pilih satu tema, berjalan perlahan, dan biarkan bandar memberi kejutan kecil.',
    cards: [
      { title: 'Clan Jetties', tag: 'Komuniti atas air', text: 'Masuki rumah kayu di atas laut dan pasang surut, rasakan skala harian komuniti pendatang Cina Pulau Pinang.', image: '/gallery/georgetown-unesco-historic-site-21.jpg' },
      { title: 'Kawasan mural', tag: 'Siar bandar', text: 'Sepanjang Lebuh Armenian dan lorong-lorong sekitarnya, cari mural besi tempa dan seni jalanan.', image: '/gallery/georgetown-unesco-historic-site-2.jpg' },
      { title: 'Khoo Kongsi', tag: 'Rumah kongsi', text: 'Ukiran kayu halus, daun emas dan memori klan membentuk salah satu ruang dalaman George Town yang paling dramatik.', image: '/gallery/georgetown-unesco-historic-site-8.jpg' }
    ],
    saveLabel: '＋ Simpan'
  },
  practical: {
    kicker: '04 / RANCANG DENGAN TENANG',
    title1: 'Butiran kecil',
    title2: 'yang membantu.',
    bigCopy: 'Datang dengan rasa ingin tahu, bukan senarai semak. Berikut asas untuk menjadikan hari anda lebih lancar.',
    items: [
      { title: 'Pengangkutan terperinci', html: '<p><strong>Lapangan Terbang Antarabangsa Pulau Pinang</strong><br/>Dari Bayan Lepas, ambil Rapid Penang 102 atau 401E ke pusat bandar; teksi dan e-hailing lebih terus. Anggarkan 35–60 minit bergantung trafik.</p><p><strong>Bas awam</strong><br/>Rapid Penang menghubungkan terminal KOMTAR dengan banyak kawasan bandar. Turun di sekitar Lebuh Chulia / KOMTAR dan sambung berjalan.</p><p><strong>Teksi & e-hailing</strong><br/>Minta turun di Lebuh Chulia atau KOMTAR. Jalan warisan mempunyai lorong sempit dan jalan sehala; berjalan kaki biasanya lebih cepat untuk jarak dekat.</p>' },
      { title: 'Tiket, kos & waktu', html: '<p>Kawasan warisan terbuka boleh diterokai secara percuma. Muzium, rumah kongsi dan tarikan berbayar mempunyai tiket sendiri. Waktu operasi berbeza; kebanyakan tempat dibuka setiap hari dan ada yang ditutup sekitar 17:00. Semak papan tanda di lokasi kerana waktu boleh berubah mengikut musim dan hari perayaan.</p>' },
      { title: 'Tempat letak kereta', html: '<p>Ruang parkir jalanan di pusat warisan adalah terhad dan banyak jalan sehala. Gunakan tempat letak kereta berbayar atau bangunan parkir sekitar KOMTAR dan kawasan persisiran, kemudian berjalan atau naik bas CAT percuma jika tersedia. Elakkan membawa kenderaan bersaiz besar ke lorong sempit.</p>' },
      { title: 'Kemudahan & tandas awam', html: '<p>Kawasan warisan melibatkan perjalanan kaki yang panjang; tandas awam tidak tersebar di setiap lorong. Tandas kemudahan awam biasanya terdapat di pusat beli-belah besar, stesen pengangkutan dan beberapa muzium. Cari papan tanda atau semak peta dalam talian sebelum berjalan jauh. Sebaiknya bawa bekalan air minuman sendiri — banyak jalan berteduh tetapi cuaca panas.</p>' },
      { title: 'Penginapan berdekatan', html: '<p>Terdapat pelbagai pilihan penginapan di dalam dan sekitar tapak warisan — dari asrama bajet, homestay, hotel butik, hingga hotel mewah. Penginapan di dalam kawasan bersejarah membolehkan anda menerokai kawasan itu pada awal pagi dan lewat petang apabila kurang sesak. Semak lokasi relatif kepada laluan anda, akses bas dan tahap bunyi di kawasan itu sebelum menempah.</p>' },
      { title: 'Makan & bekalan', html: '<p>Makanan jalanan, kedai kopi, restoran dan kedai serbaneka mudah ditemui. Banyak lorong dipenuhi gerai dan restoran tempatan yang sibuk dengan penduduk tempatan. Kedai serbaneka dan pasar mini mudah ditemui untuk bekalan air, makanan ringan dan barangan harian. Untuk pilihan yang lebih meluas, pergi ke kompleks beli-belah atau pasar basah berhampiran.</p>' },
      { title: 'Akses & kebolehcapaian', html: '<p>Jalan utama agak rata dan mudah dilalui dengan kerusi roda atau kereta sorong, tetapi sesetengah lorong lama, batu lorong dan ambang tinggi boleh menyukarkan. Banyak rumah ibadat dan rumah kongsi mempunyai anak tangga. Rancang laluan melalui jalan utama, gunakan laluan pejalan kaki dan minta bantuan jika perlu. Masa yang lebih panjang dan perhentian yang kerap disyorkan.</p>' },
      { title: 'Masa terbaik & tempoh', html: '<p>07:30–10:30 paling selesa untuk fasad dan fotografi; 16:00 hingga senja sesuai untuk lorong dan seni jalanan. Peruntukkan 3–4 jam untuk laluan ringkas, atau satu hari untuk menjelajah tanpa tergesa-gesa. Elakkan tengah hari jika sensitif terhadap panas.</p>' }
    ]
  },
  food: {
    kicker: '05 / MAKAN DI SEKITAR',
    title1: 'Warisan yang',
    title2: 'boleh dirasa.',
    body: 'Rancang satu hentian makan, bukan sekadar rehat. Cuba char kway teow, asam laksa, nasi kandar, cendol atau kuih-muih Nyonya di kedai dan gerai yang sibuk dengan penduduk tempatan.',
    tags: ['Char kway teow', 'Asam laksa', 'Nasi kandar', 'Cendol'],
    imageAlt: 'Hidangan jalanan Penang di atas meja'
  },
  nearby: {
    kicker: '06 / LANJUTKAN LANGKAH',
    title1: 'Selepas ini,',
    title2: 'ke mana?',
    body: 'Gunakan George Town sebagai titik mula. Tarikan berdekatan ini mudah digabungkan mengikut tenaga dan cuaca.',
    items: [
      { title: 'Fort Cornwallis', text: 'Kubu pesisir untuk memahami permulaan kolonial Pulau Pinang.' },
      { title: 'Clan Jetties', text: 'Komuniti rumah air dengan pemandangan Selat Melaka.' },
      { title: 'Little India', text: 'Rempah, tekstil, muzik dan kuil di jalan yang meriah.' }
    ],
    note: 'Jika masa mengizinkan, gabungkan dengan kaki bukit Penang atau pantai Batu Ferringhi untuk perjalanan sehari penuh.'
  },
  gallery: {
    kicker: '07 / GALERI',
    title1: 'Bingkai memori',
    title2: 'dari setiap sudut.',
    body: 'Sebuah pratinjau visual sebelum kaki anda mula melangkah.',
    imageAltPattern: 'George Town UNESCO — gambar {n}',
    lightboxAlt: 'Gambar besar',
    closeLabel: 'Tutup'
  },
  map: {
    kicker: '08 / BUKA PETA',
    title1: 'Mulakan di',
    title2: 'Lebuh Chulia.',
    body: 'Alamat rujukan: 159, Lebuh Chulia, 10200 George Town, Pulau Pinang.',
    button: 'Buka dalam Google Maps ↗',
    iframeTitle: 'Peta George Town UNESCO Historic Site'
  },
  faq: {
    kicker: '09 / SOALAN LAZIM',
    title1: 'Anda tanya,',
    title2: 'kami jawab.',
    items: [
      { q: 'Adakah tapak Warisan Dunia UNESCO George Town memerlukan tiket?', a: 'Kawasan bersejarah itu sendiri terbuka kepada pejalan kaki tanpa tiket bersatu. Sesetengah rumah kongsi, muzium dan tarikan berbayar menjual tiket berasingan — semak notis di lokasi sebelum pergi.' },
      { q: 'Bagaimana saya sampai ke sini dari Lapangan Terbang Antarabangsa Pulau Pinang?', a: 'Lapangan terbang berjarak kira-kira 18 km dari George Town. Naik bas Rapid Penang, atau gunakan teksi atau e-hailing; masa perjalanan berbeza mengikut trafik, jadi peruntukkan 35–60 minit.' },
      { q: 'Berapa lama masa yang perlu saya peruntukkan?', a: 'Pelawat kali pertama patut peruntukkan setengah hari hingga satu hari penuh. Jika mahu menikmati seni bina, makan jalanan dan sertakan laluan Clan Jetties, satu hari penuh lebih selesa.' },
      { q: 'Bilakah masa terbaik untuk berjalan kaki?', a: 'Awal pagi dan lewat petang menawarkan cahaya lembut dan suhu lebih selesa. Pada tengah hari, simpan masa untuk galeri dalaman, kafe atau hidangan Nyonya yang santai.' },
      { q: 'Adakah terdapat tandas awam dan kemudahan penjagaan bayi berdekatan?', a: 'Tandas awam, tandas pusat beli-belah dan pasar raya besar biasanya terdapat di sekitar kawasan komersial utama dan hab pengangkutan — bukan di setiap lorong lama. Sebelum keluar, tandakan satu atau dua tandas yang disahkan pada aplikasi peta; jika membawa bayi, utamakan bilik penjagaan bayi di pusat beli-belah besar dan muzium.' },
      { q: 'Bolehkah saya memandu masuk ke kawasan warisan?', a: 'Teras warisan berorientasikan pejalan kaki; jalan lama kebanyakannya sehala dan sempit, jadi memandu tidak disyorkan. Park di tempat letak kereta berbayar atau parkir pusat beli-belah berdekatan, kemudian masuk dengan berjalan kaki atau perkhidmatan ulang-alik percuma.' },
      { q: 'Adakah mudah diakses dengan kerusi roda atau kereta sorong?', a: 'Kaki lima di jalan utama agak rata, tetapi lorong batu, ambang dan lima kaki yang sempit di bahagian bandar lama tidak mesra kerusi roda. Pilih jalan utama dan bahagian baru dengan tanjakan; dalaman rumah kongsi selalunya ada anak tangga dan ambang. Rancang laluan yang lebih perlahan lebih awal dan peruntukkan masa tambahan.' },
      { q: 'Adakah terdapat pilihan penginapan berdekatan?', a: 'Di dalam dan sekitar kawasan warisan, pilihan terdiri daripada asrama bajet hingga hotel butik dan mewah. Kebanyakannya dalam jarak berjalan kaki dari tarikan utama, sesuai jika mahu menyebarkan lawatan ke awal pagi dan lewat petang. Kemudahan dan lokasi berbeza mengikut harga, jadi bandingkan mengikut bajet dan laluan anda.' },
      { q: 'Adakah makanan dan bekalan mudah didapati?', a: 'Sangat mudah. Pusat penjaja, kedai kopi, kedai serbaneka dan pasar raya padat, dengan banyak pilihan untuk hidangan penuh, makanan ringan dan snek jalanan. Untuk nilai terbaik, pusat penjaja dan gerai tepi jalan biasanya lebih menjimatkan; kedai serbaneka mudah ditemui untuk air dan keperluan harian.' },
      { q: 'Ada cadangan pakaian untuk berjalan kaki?', a: 'Pulau Pinang panas dan lembap sepanjang tahun. Pakai pakaian ringan, bernafas dan cepat kering dengan kasut berjalan yang selesa dan tidak licin, serta bawa air, pelindung matahari dan payung. Jika merancang memasuki rumah ibadat, berpakaian sopan, tutup bahu dan patuhi peraturan menanggalkan kasut.' }
    ]
  },
  plan: {
    kicker: 'PELAN SIMPANAN ANDA',
    title1: 'Jangan biarkan',
    title2: 'cerita berlalu.',
    body: 'Tekan “Simpan” pada tempat yang anda mahu lawati. Senarai ini hanya disimpan pada peranti anda — tiada akaun, tiada pelayan.',
    savedTitle: 'Tempat pilihan',
    savedSuffix: 'tempat',
    savedEmpty: 'Belum ada tempat disimpan.<br/>Pilih satu laluan di atas untuk bermula.',
    savedDone: '✓ Disimpan',
    removeLabel: 'Hapus',
    clearAll: 'Kosongkan senarai'
  },
  footer: {
    brand: 'JEJAK WARISAN',
    note: 'Laman ini ialah projek maklumat pelawat bebas bukan berasaskan keuntungan dan tidak bernaung di bawah mana-mana agensi kerajaan, organisasi rasmi atau pengendali komersial.',
    copyright: '© 2026 Jejak Warisan George Town. Hak cipta terpelihara.',
    legalKicker: '10 / PENGGUNAAN LAMAN',
    legalTitle1: 'Privasi, terma dan',
    legalTitle2: 'tetapan cookie.',
    lead: 'Maklumat tarikan di laman ini disusun dengan merujuk serta menyemak silang bahan awam daripada Majlis Bandaraya Pulau Pinang (MBPP), Penang Global Tourism dan Tourism Malaysia, tanpa sebarang cadangan berbentuk komersial.',
    privacyTitle: 'Dasar Privasi',
    privacyUpdated: 'Terakhir dikemas kini: Ogos 2026',
    privacyHtml: `<p>Kami hanya mengumpul data minimum yang diperlukan untuk menyediakan dan menambah baik laman ini. Ini mungkin termasuk data pelayaran seperti alamat IP, jenis pelayar dan halaman yang dilawati, cookie dan teknologi seumpamanya, serta maklumat yang anda berikan secara sukarela apabila menghubungi kami melalui e-mel atau saluran langsung lain.</p><p>Maklumat ini digunakan untuk menambah baik kandungan dan pengalaman pengguna, menganalisis trafik serta corak penggunaan, menjawab pertanyaan, dan mematuhi kewajipan undang-undang yang berkenaan.</p><p>Laman ini mungkin menggunakan perkhidmatan pihak ketiga seperti Google Maps untuk peta terbenam dan data lokasi, serta Google Analytics untuk pengukuran trafik. Jika perkhidmatan imej atau infrastruktur pihak ketiga lain ditambah pada masa hadapan, dasar privasi platform berkenaan juga akan terpakai.</p><p>Di bawah GDPR dan peraturan berkaitan, anda secara amnya mempunyai hak untuk mengakses data peribadi anda, meminta pembetulan atau pemadaman, membantah pemprosesan tertentu, dan membuat aduan kepada pihak berkuasa penyeliaan.</p><p>Hak imej: hak cipta dan hak berkaitan bagi imej yang dipaparkan di laman ini adalah milik jurugambar asal atau pemegang hak yang sah.</p>`,
    termsTitle: 'Terma Perkhidmatan',
    termsUpdated: 'Terakhir dikemas kini: Ogos 2026',
    termsHtml: `<p>Dengan mengakses dan menggunakan laman ini, anda bersetuju untuk terikat dengan terma ini. Semua kandungan disediakan untuk rujukan maklumat pelawat umum sahaja. Kami beroperasi sebagai projek maklumat pihak ketiga yang bebas dan tidak berafiliasi dengan tarikan, pihak berkuasa awam atau pengendali komersial di dalam Tapak Warisan Dunia UNESCO George Town.</p><p>Kami berusaha menyediakan maklumat yang tepat dan terkini, namun kami tidak dapat menjamin bahawa semua kandungan sentiasa lengkap, bebas ralat atau kekal semasa. Waktu operasi, pengangkutan, kerja penyelenggaraan, peraturan tiket dan keadaan di lokasi boleh berubah. Sila sahkan butiran penting melalui saluran rasmi sebelum berkunjung.</p><p>Reka bentuk laman, susunan editorial dan kandungan tulisan asli dilindungi oleh hak cipta. Imej pihak ketiga kekal milik jurugambar asal atau pemegang haknya. Penggunaan data Google Maps tertakluk kepada terma perkhidmatan Google sendiri.</p><p>Laman ini disediakan atas dasar “seadanya” tanpa sebarang jaminan. Kami tidak bertanggungjawab terhadap apa-apa kerugian langsung atau tidak langsung yang timbul daripada pergantungan pada maklumat yang diterbitkan di sini, termasuk keputusan perjalanan yang dibuat berdasarkan laman ini.</p>`,
    cookiesTitle: 'Tetapan Cookie',
    cookiesUpdated: 'Terakhir dikemas kini: Ogos 2026',
    cookiesIntro: 'Kami menggunakan cookie dan storan setempat untuk menambah baik pengalaman melayari. Anda boleh mengurus keutamaan di bawah; item penting sentiasa aktif, manakala pilihan lain hanya digunakan selepas anda menyimpannya.',
    cookieNecessaryTitle: 'Cookie perlu',
    cookieNecessaryBody: 'Item ini menyokong operasi teras dan keselamatan laman, seperti mengekalkan keadaan sesi asas atau melindungi perkhidmatan daripada permintaan yang tidak normal. Ia tidak boleh dimatikan.',
    cookieAnalyticsTitle: 'Cookie analitik',
    cookieAnalyticsBody: 'Ini membantu kami memahami cara pelawat menggunakan laman. Buat masa ini ia merujuk kepada Google Analytics, yang hanya dimuatkan selepas persetujuan anda.',
    cookiePreferencesTitle: 'Cookie keutamaan',
    cookiePreferencesBody: 'Ini mengingati tetapan laman dan pilihan bacaan setempat pada peranti anda supaya tindakan berulang dapat dikurangkan.',
    cookieMarketingTitle: 'Cookie pemasaran',
    cookieMarketingBody: 'Ini digunakan untuk pengiklanan diperibadikan dan pengukuran kempen. Laman ini tidak mengaktifkan fungsi sedemikian secara lalai, dan anda boleh terus membiarkannya dimatikan.',
    cookieAlwaysOn: 'Sentiasa aktif',
    cookieEnabled: 'Aktif',
    cookieDisabled: 'Dimatikan',
    cookieConsentNote: 'Anda boleh kembali ke sini pada bila-bila masa untuk menukar tetapan ini. Menyahaktifkan item pilihan mungkin menyebabkan sebahagian keutamaan bukan teras tidak diingati, tetapi tidak akan menjejaskan pelayaran asas.',
    savePreferences: 'Simpan keutamaan',
    rejectAll: 'Tolak semua pilihan',
    saveSuccess: 'Keutamaan cookie telah disimpan.'
  }
};
