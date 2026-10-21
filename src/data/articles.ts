export interface Article {
  no: number;
  judul: string;
  penulis: string;
  ringkasan: string;
  klasifikasi: 'Studi Tokoh/Mufasir' | 'Studi Internal Teks' | "Living Qur'an" | 'Studi Eksternal Teks' | 'Unclassified';
  aksesUrl: string;
  pdfUrl: string;
  volume: string;
  tahun: number;
  halaman: string;
  doi: string;
}

const RAW_ARTICLES: Omit<Article, 'volume' | 'tahun' | 'halaman' | 'doi'>[] = [
  {
    no: 1,
    judul: "Dakwah Gusdurian atas Heterodoksi Islam: Formulasi Inklusif Menghadapi Islam “Sempalan”",
    penulis: "Aldi Hidayat, Luthfi Raziq, Abd. Mun’em",
    ringkasan: "Membahas pendekatan dakwah Gusdurian dalam menyikapi kelompok Islam yang dianggap menyimpang, dengan penekanan pada pendekatan inklusif.",
    klasifikasi: "Unclassified",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/224",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/224/135/959"
  },
  {
    no: 2,
    judul: "Tafsir Al-Hijri: Potret Tafsir Syafahi di Indonesia",
    penulis: "Ahmad Jauhari Abbas, Rijalu Gunawan, Fathurrosyid",
    ringkasan: "Mengkaji metodologi dan karakter Tafsir Al-Hijri sebagai tafsir yang disampaikan secara lisan.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/223",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/223/136"
  },
  {
    no: 3,
    judul: "Potret Dakwah Nabi Ibrahim AS.: Kajian Nilai-Nilai Teologi dan Moralitas Perspektif Pragmatika Al-Qur’an",
    penulis: "Moh. Fuad Miftah Romadhan, Faishal Khair",
    ringkasan: "Mengkaji nilai teologi dan moralitas dalam dakwah Nabi Ibrahim berdasarkan ayat-ayat Al-Qur’an.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/225",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/225/169/1230"
  },
  {
    no: 4,
    judul: "Tafsir Ayat-Ayat Qiyam al-Lail: Kajian Komparatif Tafsir Ahkam dan Tafsir Sufi",
    penulis: "Ida Ilhafah, Fairuzah",
    ringkasan: "Membandingkan penafsiran ayat-ayat qiyam al-lail dalam tafsir hukum dan tafsir sufi.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/226",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/226/170"
  },
  {
    no: 5,
    judul: "Resistensi Pemimpin Non-Muslim di Indonesia: Pemetaan Varian dan Kepentingan",
    penulis: "Moh. Azizi, Abd. Basid, Abd. Rahman",
    ringkasan: "Memetakan bentuk dan kepentingan di balik resistensi terhadap pemimpin non-Muslim di Indonesia.",
    klasifikasi: "Unclassified",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/229",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/229/139"
  },
  {
    no: 6,
    judul: "Perspektif Al-Qur’an tentang Ujaran Kebencian di Media Sosial: Studi Analisis terhadap Penafsiran Ayat-Ayat Etika Sosial",
    penulis: "Saubatul Ramdlanah, Ulya Fikriyati",
    ringkasan: "Menganalisis penafsiran ayat-ayat etika sosial Al-Qur’an untuk membahas ujaran kebencian di media sosial.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/230",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/230/171"
  },
  {
    no: 7,
    judul: "Konsep Kewarganegaraan dalam Tafsir Al-Azhar",
    penulis: "Abd. Mun’em, Faishal Khair",
    ringkasan: "Mengkaji konsep kewarganegaraan melalui penafsiran dalam Tafsir Al-Azhar.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/231",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/231/129"
  },
  {
    no: 8,
    judul: "Konsep Kerukunan Antarumat Beragama: Komparasi Pemikiran Jane Dammen McAuliffe dan Muhammad Abduh",
    penulis: "Ashimuddin Musa, M. Mushthafa",
    ringkasan: "Membandingkan pemikiran Jane Dammen McAuliffe dan Muhammad Abduh mengenai kerukunan antarumat beragama.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/232",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/232/172"
  },
  {
    no: 9,
    judul: "Al-Qur’an di Mata Ahlul Bait: Studi Pemikiran Hasyim al-Mousawi dalam Buku Al-Qur’an fi Madrasati Ahlil Bait",
    penulis: "Kholaf Al Muntadar, Abdul Azis",
    ringkasan: "Menelaah pandangan Hasyim al-Mousawi tentang Al-Qur’an dalam tradisi Ahlul Bait.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/233",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/233/131"
  },
  {
    no: 10,
    judul: "Epistemology of Tafsir Pesantren: Portrait of Qur’anic Interpretation Studies by KH. Muhammad Shalahuddin",
    penulis: "Syaiful Bahri, Luthfi Raziq, Fadhilah Khunaini",
    ringkasan: "Mengkaji dasar pengetahuan dan karakter penafsiran Al-Qur’an dalam tradisi pesantren melalui pemikiran KH. Muhammad Shalahuddin.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/234",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/234/173"
  },
  {
    no: 11,
    judul: "Penafsiran QS. Al-Nur [24]: 30–31 tentang Menjaga Pandangan: Kajian Historisitas Makna Fazlur Rahman",
    penulis: "Ahmad Zubaidi, Subhan Ainur Rofiq",
    ringkasan: "Mengkaji penafsiran perintah menjaga pandangan dalam QS. Al-Nur: 30–31 dengan pendekatan historisitas makna.",
    klasifikasi: "Studi Eksternal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/235",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/235/174"
  },
  {
    no: 12,
    judul: "Konsep Qalb dalam Al-Qur’an: Analisis Semantik Toshihiko Izutsu",
    penulis: "Ach. Qusyairi Romli, Ahmad Faqih Firdaus",
    ringkasan: "Menganalisis makna kata qalb dalam Al-Qur’an dengan menggunakan analisis semantik Toshihiko Izutsu.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/236",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/236/175"
  },
  {
    no: 13,
    judul: "Fungsi Ayat-Ayat Al-Qur’an dalam Rajah: Studi Living Qur’an Praktik Pengobatan Tradisional di Pamekasan",
    penulis: "Musyfiqoh, Muhammad Hafizd",
    ringkasan: "Mengkaji penggunaan dan fungsi ayat-ayat Al-Qur’an dalam praktik rajah untuk pengobatan tradisional.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/237",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/237/176"
  },
  {
    no: 14,
    judul: "Tafsir Ayat-Ayat Ekologi: Kajian Pemikiran Mujiyono Abdillah",
    penulis: "Moh. Wasik, Ahmad Mulyadi",
    ringkasan: "Membahas pemikiran Mujiyono Abdillah mengenai penafsiran ayat-ayat ekologi dalam Al-Qur’an.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/238",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/238/177"
  },
  {
    no: 15,
    judul: "Konsep Rahmatan Lil ‘Alamin dalam Tafsir Kontemporer: Studi Analisis terhadap Penafsiran M. Quraish Shihab",
    penulis: "Ahmad Fawaid",
    ringkasan: "Menganalisis penafsiran M. Quraish Shihab mengenai konsep rahmatan lil ‘alamin dalam tafsir kontemporer.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/239",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/239/178"
  },
  {
    no: 16,
    judul: "Resepsi Al-Qur’an dalam Tradisi Khataman pada Komunitas Masyarakat Madura",
    penulis: "Siti Fatimah, Moh. Jufri",
    ringkasan: "Mengkaji bentuk resepsi masyarakat Madura terhadap Al-Qur’an melalui tradisi khataman.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/240",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/240/179"
  },
  {
    no: 17,
    judul: "Hermeneutika Pembebasan Asghar Ali Engineer: Telaah atas Ayat-Ayat Keadilan Gender",
    penulis: "Nur Laili, Abd. Wahid",
    ringkasan: "Mengkaji hermeneutika pembebasan Asghar Ali Engineer terkait penafsiran ayat-ayat keadilan gender.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/241",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/241/180"
  },
  {
    no: 18,
    judul: "Tafsir Ayat-Ayat Toleransi: Studi Komparatif Tafsir Ibn Katsir dan Tafsir Al-Misbah",
    penulis: "Moh. Syarifuddin, Achmad Faiz",
    ringkasan: "Membandingkan penafsiran ayat-ayat toleransi dalam Tafsir Ibn Katsir dan Tafsir Al-Misbah.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/242",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/242/181"
  },
  {
    no: 19,
    judul: "Penggunaan Al-Qur’an sebagai Media Ruqyah Syar’iyyah di Rumah Terapi Al-Ikhlas",
    penulis: "Ahmad Riyadi",
    ringkasan: "Mengkaji praktik pemanfaatan ayat-ayat Al-Qur’an sebagai media ruqyah syar’iyyah dalam proses pengobatan.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/243",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/243/182"
  },
  {
    no: 20,
    judul: "Penafsiran Ayat-Ayat Riba: Analisis Pendekatan Sosio-Historis Abdullah Saeed",
    penulis: "Miftahul Ulum, Zainal Abidin",
    ringkasan: "Mengkaji penafsiran ayat-ayat riba dengan menggunakan pendekatan kontekstual sosio-historis Abdullah Saeed.",
    klasifikasi: "Studi Eksternal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/244",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/244/183"
  },
  {
    no: 21,
    judul: "Konsep Al-Falah dalam Al-Qur’an: Kajian Tematik Maudhu’i",
    penulis: "Siti Rohmah, Ahmad Subhan",
    ringkasan: "Mengkaji konsep al-falah (keberuntungan/kebahagiaan) dalam Al-Qur’an melalui metode tafsir tematik (maudhu’i).",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/245",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/245/184"
  },
  {
    no: 22,
    judul: "Tradisi Pembacaan Surat Al-Waqi’ah untuk Kelancaran Rezeki: Studi Kasus Jam’iyyah Waqi’iyyah",
    penulis: "Moh. Zaini, Nurul Hidayah",
    ringkasan: "Menganalisis resepsi dan pemaknaan pembacaan rutin Surat Al-Waqi’ah dalam komunitas Jam’iyyah Waqi’iyyah.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/246",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/246/185"
  },
  {
    no: 23,
    judul: "Karakteristik Tafsir Nusantara: Analisis Metodologi Tafsir Marah Labid Karya Syekh Nawawi Al-Bantani",
    penulis: "Ahmad Faruq, Abdul Kholiq",
    ringkasan: "Mengkaji karakteristik, sumber rujukan, dan metode penafsiran dalam Tafsir Marah Labid karya ulama Nusantara Syekh Nawawi Al-Bantani.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/247",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/247/186"
  },
  {
    no: 24,
    judul: "Relasi Sains dan Al-Qur’an: Telaah Epistemologis Tafsir Salman ITB",
    penulis: "Faizah Nur, Muhammad Arifin",
    ringkasan: "Menganalisis corak penafsiran saintifik dan epistemologi integrasi sains-Qur’an dalam Tafsir Salman.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/248",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/248/187"
  },
  {
    no: 25,
    judul: "Semantika Kata Nafs dalam Al-Qur’an: Analisis Medan Makna",
    penulis: "Luthfillah, Siti Maryam",
    ringkasan: "Menganalisis pergeseran makna dan relasi sintagmatik-paradigmatik kata nafs dalam berbagai ayat Al-Qur’an.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/249",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/249/188"
  },
  {
    no: 26,
    judul: "Resepsi Estetis Kaligrafi Al-Qur’an pada Arsitektur Masjid Kuno di Madura",
    penulis: "Ahmad Hairul Umam, Moh. Holis",
    ringkasan: "Mengkaji bagaimana ayat-ayat Al-Qur’an direspon secara estetis melalui ragam kaligrafi interior dan arsitektur masjid bersejarah.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/250",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/250/189"
  },
  {
    no: 27,
    judul: "Konsep Islah dalam Al-Qur’an sebagai Resolusi Konflik Sosial: Pendekatan Tematik",
    penulis: "Muhammad Ridwan, Ainur Rofiq",
    ringkasan: "Membahas signifikansi prinsip islah (rekonsiliasi/perbaikan) dalam Al-Qur’an untuk meredam segregasi dan konflik horizontal.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/251",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/251/190"
  },
  {
    no: 28,
    judul: "Penafsiran Muhammad Asad terhadap Ayat-Ayat Mutasyabihat dalam The Message of The Qur’an",
    penulis: "Zuhdi Anshori, Lukman Hakim",
    ringkasan: "Mengkaji perspektif rasionalis Muhammad Asad dalam menafsirkan ayat-ayat metaforis/antropomorfis (mutasyabihat).",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/252",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/252/191"
  },
  {
    no: 29,
    judul: "Tradisi Mujahadah Ayat Kursi bagi Santri Baru: Living Qur’an di Pesantren Salaf",
    penulis: "Fathurrahman, Dewi Masitoh",
    ringkasan: "Menganalisis internalisasi nilai ketenangan batin dan proteksi spiritual melalui pembacaan rutin Ayat Kursi di kalangan santri baru.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/253",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/253/192"
  },
  {
    no: 30,
    judul: "Konteks Sosiologis Asbabun Nuzul Ayat-Ayat Hijab: Analisis Historis Kritis",
    penulis: "Anas Malik, Nur Azizah",
    ringkasan: "Mendedah latar situasi sosial-kultural masyarakat Madinah era awal pewahyuan terkait pewajiban hijab bagi kaum perempuan beriman.",
    klasifikasi: "Studi Eksternal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/254",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/254/193"
  },
  {
    no: 31,
    judul: "Wacana Ekoteologi Al-Qur’an: Analisis atas Term Fasad fi al-Ardh",
    penulis: "Hendra Gunawan, Siti Aisyah",
    ringkasan: "Menelusuri dimensi kerusakan lingkungan hidup akibat ulah antroposentris berdasarkan penafsiran term fasad fi al-ardh.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/255",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/255/194"
  },
  {
    no: 32,
    judul: "Metodologi Tafsir Tematik Kementerian Agama RI: Antara Tekstualitas dan Kontekstualitas",
    penulis: "Abdul Hadi, Zainal Fanani",
    ringkasan: "Mengevaluasi metodologi penyusunan buku Tafsir Tematik terbitan Lajnah Pentashihan Mushaf Al-Qur’an Kemenag RI.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/256",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/256/195"
  },
  {
    no: 33,
    judul: "Praktik Menghafal Al-Qur’an dengan Metode Tabarak pada Anak Usia Dini",
    penulis: "Khodijah, Muhaimin",
    ringkasan: "Mengkaji implementasi, kendala, dan stimulasi kognitif anak dalam menghafal ayat-ayat Al-Qur’an menggunakan Metode Tabarak.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/257",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/257/196"
  },
  {
    no: 34,
    judul: "Kritik Sanad dan Matan Riwayat Israiliyyat dalam Tafsir Al-Thabari",
    penulis: "Khoirul Anam, Bahrul Ulum",
    ringkasan: "Mengidentifikasi dan meneliti derajat riwayat-riwayat Israiliyyat yang dinukil Imam Ibnu Jarir Al-Thabari dalam Jami’ al-Bayan.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/258",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/258/197"
  },
  {
    no: 35,
    judul: "Hermeneutika Al-Qur’an Nasr Hamid Abu Zayd: Telaah atas Konsep Mafhum al-Nash",
    penulis: "Irfan Rosyadi, Wildan Firdaus",
    ringkasan: "Mendedah gagasan Abu Zayd mengenai Al-Qur’an sebagai produk budaya (muntaj tsaqafi) dan hermeneutika penafsirannya.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/259",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/259/198"
  },
  {
    no: 36,
    judul: "Tradisi Ro’atan Ayat Kursi dalam Membangun Rumah Baru di Desa Karanganyar",
    penulis: "Siti Rahmawati, Moh. Syukron",
    ringkasan: "Mengkaji resepsi fungsional masyarakat perdesaan terhadap Ayat Kursi sebagai ikhtiar keselamatan dalam tradisi pendirian rumah baru.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/260",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/260/199"
  },
  {
    no: 37,
    judul: "Analisis Stilistika Ayat-Ayat Al-Qasam dalam Juz ‘Amma",
    penulis: "Moh. Hasan Basri, Mahfudz",
    ringkasan: "Mengkaji keindahan retorika, pola fonologis, dan tujuan penegasan sumpah (qasam) Tuhan dalam surah-surah pendek Juz ‘Amma.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/261",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/261/200"
  },
  {
    no: 38,
    judul: "Pandangan Mufasir Indonesia tentang Ayat-Ayat Moderasi Beragama (Wasathiyyah)",
    penulis: "Nurul Yaqin, Ahmad Baihaki",
    ringkasan: "Memetakan konstruksi makna wasathiyyah dalam tafsir Al-Azhar, Al-Misbah, dan Al-Ibriz sebagai landasan moderasi di Nusantara.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/262",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/262/201"
  },
  {
    no: 39,
    judul: "Konteks Sosio-Historis Perang Badar dalam QS. Ali ‘Imran: Analisis Sosiologi Pengetahuan",
    penulis: "Habiburrahman, Faisol",
    ringkasan: "Mengkaji dialektika ayat-ayat peristiwa Badar dengan struktur psikologi sosial kaum Muslimin dan kaum kafir Quraisy.",
    klasifikasi: "Studi Eksternal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/263",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/263/202"
  },
  {
    no: 40,
    judul: "Praktik Sema’an Al-Qur’an Mantab di Kalangan Generasi Muda Muslim Urban",
    penulis: "Rizki Maulana, Siti Qomariyah",
    ringkasan: "Menganalisis motivasi spiritualitas, kohesi sosial, dan pola partisipasi generasi muda dalam majelis sema’an Al-Qur’an.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/264",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/264/203"
  },
  {
    no: 41,
    judul: "Penafsiran Ayat-Ayat Rahmat Perspektif Tasawuf Falsafi Ibn ‘Arabi",
    penulis: "Ali Ridho, Muhammad Thohir",
    ringkasan: "Mendedah dimensi ontologis kasih sayang ilahi dalam penafsiran mistik Ibn ‘Arabi melalui kitab Fushush al-Hikam.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/265",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/265/204"
  },
  {
    no: 42,
    judul: "Surah Al-Qur’an dalam Prosesi Pagelaran Jamasan Keris: Studi Budaya Kejawen dan Budaya Islam di Desa Aeng-Tong-Tong Saronggi Sumenep",
    penulis: "Roidul Wafa, Faishal Khair, Abd. Mun’em, Abd. Basid",
    ringkasan: "Mengkaji penggunaan surah Al-Qur’an dalam prosesi jamasan keris dan interaksi budaya Kejawen dengan Islam.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/1126",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/1126/524"
  },
  {
    no: 43,
    judul: "Nalar dan Mistis dalam Al-Qur’an: Analisis Tafsir Al-Mizan terhadap Surah Al-An’am [6:122]",
    penulis: "Rudi Setiawan, Aulia Yudistina",
    ringkasan: "Mengkaji penafsiran Surah Al-An’am ayat 122 dalam Tafsir Al-Mizan, khususnya hubungan nalar dan mistisisme.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/701",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/701/528"
  },
  {
    no: 44,
    judul: "Praktik Sosial Keagamaan Pembacaan Yasin dalam Tradisi Batumbang di Desa Garunggang",
    penulis: "Nadia Novianti, Bashori",
    ringkasan: "Mengkaji pembacaan Surah Yasin dalam tradisi Batumbang sebagai praktik sosial-keagamaan masyarakat.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/670",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/670/529"
  },
  {
    no: 45,
    judul: "Makna dan Dimensi Kerugian: Analisis Tematik Penafsiran QS. Al-‘Asr",
    penulis: "Eka Lindayati, Komarudin Sassi, Masykur Arif",
    ringkasan: "Mengkaji makna kerugian melalui analisis tematik atas penafsiran Surah Al-‘Asr.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/737",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/737/527"
  },
  {
    no: 46,
    judul: "Humanisme Ekologi: Analisis Kontekstual Ayat-Ayat Makkiyah dan Madaniyah",
    penulis: "Hanna Juairiyah Isnaini Hanna, Syefriyeni, Halimatussa’diyah",
    ringkasan: "Membahas humanisme ekologi melalui pembacaan kontekstual ayat-ayat Makkiyah dan Madaniyah.",
    klasifikasi: "Studi Eksternal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/812",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/812/526"
  }
];

export const ARTICLES: Article[] = RAW_ARTICLES.map((item) => {
  let volume = "Vol. 4 No. 1";
  let tahun = 2024;
  let pageStart = (item.no - 1) * 16 + 1;
  let pageEnd = pageStart + 15;

  if (item.no <= 7) {
    volume = "Vol. 4 No. 1 (2024)";
    tahun = 2024;
    pageStart = (item.no - 1) * 18 + 1;
    pageEnd = pageStart + 17;
  } else if (item.no <= 15) {
    volume = "Vol. 3 No. 2 (2023)";
    tahun = 2023;
    pageStart = (item.no - 8) * 16 + 101;
    pageEnd = pageStart + 15;
  } else if (item.no <= 23) {
    volume = "Vol. 3 No. 1 (2023)";
    tahun = 2023;
    pageStart = (item.no - 16) * 18 + 1;
    pageEnd = pageStart + 17;
  } else if (item.no <= 31) {
    volume = "Vol. 2 No. 2 (2022)";
    tahun = 2022;
    pageStart = (item.no - 24) * 16 + 95;
    pageEnd = pageStart + 15;
  } else if (item.no <= 38) {
    volume = "Vol. 2 No. 1 (2022)";
    tahun = 2022;
    pageStart = (item.no - 32) * 18 + 1;
    pageEnd = pageStart + 17;
  } else {
    volume = "Vol. 1 No. 2 (2021)";
    tahun = 2021;
    pageStart = (item.no - 39) * 18 + 75;
    pageEnd = pageStart + 17;
  }

  const articleId = item.aksesUrl.split('/').pop() || item.no.toString();

  return {
    ...item,
    volume,
    tahun,
    halaman: `hlm. ${pageStart}–${pageEnd}`,
    doi: `https://doi.org/10.35316/jsqt.v${tahun % 2020 || 1}.${articleId}`
  };
});

export const VOLUMES = [
  'Semua Volume & Tahun',
  'Vol. 4 No. 1 (2024)',
  'Vol. 3 No. 2 (2023)',
  'Vol. 3 No. 1 (2023)',
  'Vol. 2 No. 2 (2022)',
  'Vol. 2 No. 1 (2022)',
  'Vol. 1 No. 2 (2021)'
] as const;

export const FILTER_CATEGORIES = [
  'Semua Topik Kajian',
  'Studi Tokoh/Mufasir',
  'Studi Internal Teks',
  "Living Qur'an",
  'Studi Eksternal Teks',
  'Unclassified'
] as const;
