export interface Article {
  no: number;
  judul: string;
  penulis: string;
  ringkasan: string;
  klasifikasi: 'Studi Tokoh/Mufasir' | 'Studi Internal Teks' | "Living Qur'an" | 'Studi Eksternal Teks' | 'Unclassified';
  aksesUrl: string;
  pdfUrl: string;
}

export const ARTICLES: Article[] = [
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
    judul: "Konstruksi Metodologis Kitab Syajaratu al-Ma’arif: Analisis Pemikiran Izzuddin bin Abd al-Salam",
    penulis: "Wahyu Afifurrahman, Fathurrosyid",
    ringkasan: "Menganalisis metodologi kitab Syajaratu al-Ma’arif dan pemikiran Izzuddin bin Abd al-Salam.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/236",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/236/134"
  },
  {
    no: 12,
    judul: "Nalar Ayat-Ayat Politik Kebangsaan: Studi Kritis atas Kontekstualisasi Penafsiran Gus Baha’",
    penulis: "Uzlifatul Laily, Abd. Rahman",
    ringkasan: "Mengkaji kontekstualisasi penafsiran Gus Baha’ terhadap ayat-ayat politik dan kebangsaan.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/235",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/235/174"
  },
  {
    no: 13,
    judul: "Resepsi Al-Qur’an dalam Tradisi Slametan Toron Parao Masyarakat Pesisir Madura: Kajian Living Qur’an di Kepulauan Masalembu",
    penulis: "Abd. Muhaimin, Faishal Khair, Abd. Mun’em",
    ringkasan: "Meneliti bentuk resepsi dan penggunaan Al-Qur’an dalam tradisi slametan Toron Parao di masyarakat pesisir Madura.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/237",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/237/147"
  },
  {
    no: 14,
    judul: "Relevansi Ayat-Ayat Ruqyah Jamiyah Ruqyah Aswaja dengan Tafsir Mafatihul Ghaib Fakhruddin ar-Razi",
    penulis: "Abd. Warits, Fathurrosyid",
    ringkasan: "Mengkaji hubungan ayat-ayat yang digunakan dalam ruqyah dengan penafsiran Fakhruddin ar-Razi.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/238",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/238/148"
  },
  {
    no: 15,
    judul: "Tadarus Al-Qur’an Bulan Ramadan: Studi Living Qur’an di Musala Al-Huda Desa Janti Jogoroto Jombang",
    penulis: "Fikri Fanani, Luthfi Raziq",
    ringkasan: "Mengkaji praktik tadarus selama Ramadan dan maknanya dalam kehidupan keagamaan masyarakat.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/239",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/239/149"
  },
  {
    no: 16,
    judul: "Dinamisitas Pendekatan Sufisme dalam Wacana Penafsiran Al-Qur’an",
    penulis: "Musyfiqur Rosyi, Abd. Basid, Moh. Asy’ari Muthhar",
    ringkasan: "Membahas dinamika pendekatan sufisme dalam tradisi penafsiran Al-Qur’an.",
    klasifikasi: "Studi Eksternal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/240",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/240/175"
  },
  {
    no: 17,
    judul: "Menghafal Al-Qur’an via Daring: Studi Living Qur’an pada Akun Instagram",
    penulis: "Musdalifah, Fairuzah",
    ringkasan: "Mengkaji praktik menghafal Al-Qur’an melalui media daring, khususnya Instagram.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/241",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/241/151"
  },
  {
    no: 18,
    judul: "Perempuan dalam Teks-Teks Keislaman: Jalan Terjal Menuju Kesetaraan",
    penulis: "Aldi Hidayat, Nur Fadiah Anisah, Ahmad Faaza Hudzaifah, Agustari",
    ringkasan: "Membahas persoalan perempuan dan kesetaraan dalam teks-teks keislaman; fokus khusus pada tafsir Al-Qur’an belum dapat dipastikan dari judul saja.",
    klasifikasi: "Unclassified",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/269",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/269/153"
  },
  {
    no: 19,
    judul: "Menggagas Naskh Tawfīqī: Kritik dan Rekonsiliasi atas Teori-Teori Naskh",
    penulis: "Aldi Hidayat, Abd. Mun’em",
    ringkasan: "Mengkritisi teori-teori naskh dan menawarkan gagasan naskh tawfīqī sebagai pendekatan rekonsiliasi.",
    klasifikasi: "Studi Eksternal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/242",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/242/154"
  },
  {
    no: 20,
    judul: "Hermeneutika Dialogis: Tanggapan Mehdi Azaiez atas Perkembangan Studi Al-Qur’an Kontemporer",
    penulis: "Alfan Shidqon, Fathurrosyid",
    ringkasan: "Mengkaji hermeneutika dialogis dan tanggapan Mehdi Azaiez terhadap perkembangan studi Al-Qur’an kontemporer.",
    klasifikasi: "Studi Eksternal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/243",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/243/155"
  },
  {
    no: 21,
    judul: "Meluruskan Kisah Cinta Yusuf-Zulaikha: Analisis Riwayat Israiliyat dalam Kitab Jāmi’ al-Bayān Karya Imam al-Thabari",
    penulis: "Fairuz Zabadi, Abd. Basid",
    ringkasan: "Menelaah riwayat Israiliyat dalam penafsiran kisah Yusuf dan Zulaikha pada kitab Jāmi’ al-Bayān.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/244",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/244/156"
  },
  {
    no: 22,
    judul: "Teori Visual Kisah Al-Qur’an Perspektif Psikologi",
    penulis: "Hari Bima Laksono, Faishal Khair",
    ringkasan: "Membahas kisah-kisah Al-Qur’an melalui teori visual dan perspektif psikologi.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/245",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/245/157"
  },
  {
    no: 23,
    judul: "After Amin: Hijab in Egyptian Feminists Exegesis",
    penulis: "Nur Fadiah Anisah, Ahmad Fauzi, Luthfi Raziq",
    ringkasan: "Mengkaji penafsiran feminis Mesir mengenai hijab.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/246",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/246/158"
  },
  {
    no: 24,
    judul: "Kajian Leksikon atas Terjemah Al-Qur’an Bersajak Shawkat M. Toorawa: Metode, Lexical Echo, dan Hapax",
    penulis: "Nur Fiatin Hafidh, Fairuzah",
    ringkasan: "Menganalisis pilihan leksikal dalam terjemahan Al-Qur’an bersajak karya Shawkat M. Toorawa.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/247",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/247/159"
  },
  {
    no: 25,
    judul: "Relevansi Kisah Potre Koneng dengan Siti Maryam dalam Al-Qur’an",
    penulis: "Moh. Ainul Yaqin, Abd. Basid, Masykur Arif",
    ringkasan: "Mengkaji hubungan kisah Potre Koneng dalam tradisi lokal dengan kisah Siti Maryam dalam Al-Qur’an.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/537",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/537/362"
  },
  {
    no: 26,
    judul: "Tafsir Ayat-Ayat Vegetarian",
    penulis: "Immamah, Luthfi Raziq",
    ringkasan: "Mengkaji ayat-ayat Al-Qur’an yang berkaitan dengan vegetarian dan pola konsumsi.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/541",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/541/368"
  },
  {
    no: 27,
    judul: "Kitab At-Tafsir li asy-Syaikh Ahmad Basyir AS.: Kajian Metodologi Tafsir dan Konten Ayat",
    penulis: "Mukhlish, Mahmudi",
    ringkasan: "Menelaah metodologi penafsiran dan kandungan ayat dalam kitab tafsir karya Syekh Ahmad Basyir AS.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/536",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/536/369"
  },
  {
    no: 28,
    judul: "Teologi Bencana Perspektif Al-Qur’an",
    penulis: "Ana Fithrotul Jannah, Fathurrosyid",
    ringkasan: "Membahas persoalan teologis mengenai bencana berdasarkan perspektif Al-Qur’an.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/538",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/538/370"
  },
  {
    no: 29,
    judul: "Tradisi Pembacaan Al-Qur’an Surah-Surah Pilihan: Kajian Living Qur’an terhadap Pengasuh PP. Annuqayah Daerah Lubangsa Guluk-guluk Sumenep",
    penulis: "Ahmad Fuad Hikam, Abd. Mun’em",
    ringkasan: "Mengkaji tradisi membaca surah-surah pilihan dalam lingkungan pesantren Annuqayah.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/559",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/559/363"
  },
  {
    no: 30,
    judul: "Qur’an in Daily Life: Studi Visualisasi Mushaf Al-Qur’an di Era Post-Modernisme",
    penulis: "Rohimatus Sholihah, Fathurrosyid, Abd. Basid",
    ringkasan: "Mengkaji visualisasi mushaf Al-Qur’an dalam kehidupan kontemporer dan budaya postmodernisme.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/539",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/539/364"
  },
  {
    no: 31,
    judul: "Konsistensi Aplikasi Tafsir Tradisionalis dalam Pemerintahan A. Busyro Karim",
    penulis: "Fadhilatul Aini, Ulya Fikriyati",
    ringkasan: "Membahas penerapan pemikiran tafsir tradisionalis dalam konteks pemerintahan A. Busyro Karim.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/529",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/529/365"
  },
  {
    no: 32,
    judul: "Tafsir Ayat-Ayat Kauniyah: Studi Komparasi Pemikiran Dr. Zakir Naik dan Dr. Maurice Bucaille",
    penulis: "M. Rifaki, Luthfi Raziq, Abdul Azis",
    ringkasan: "Membandingkan pemikiran Zakir Naik dan Maurice Bucaille dalam memahami ayat-ayat kauniyah.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/540",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/540/366"
  },
  {
    no: 33,
    judul: "Anak Angkat Perspektif Kitab Al-Qur’an dan Tafsirnya (Edisi yang Disempurnakan)",
    penulis: "Lulu Khairunnisa",
    ringkasan: "Mengkaji persoalan anak angkat berdasarkan penafsiran dalam kitab Al-Qur’an dan Tafsirnya.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/521",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/521/367"
  },
  {
    no: 34,
    judul: "Genderisasi Mushaf Al-Qur’an: Studi Living Qur’an terhadap Desain Mushaf Wanita Muslimah",
    penulis: "Kamilatus Sholehah Mila, Rozi El Umam, Abd. Rahman",
    ringkasan: "Menelaah desain mushaf yang ditujukan bagi perempuan sebagai bentuk interaksi sosial-budaya dengan Al-Qur’an.",
    klasifikasi: "Living Qur'an",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/532",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/532/361"
  },
  {
    no: 35,
    judul: "Penafsiran Al-Qur’an tentang Resiliensi Spiritual Generasi Z dalam Krisis Identitas Keagamaan Digital",
    penulis: "Muhammad Zaki Hidayat, Bashori",
    ringkasan: "Mengkaji penafsiran Al-Qur’an yang relevan dengan ketahanan spiritual generasi Z di ruang digital.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/659",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/659/342"
  },
  {
    no: 36,
    judul: "Validitas Riwayat Tafsir Abdullah ibn Abbas pada Kitab Tafsir Al-Qur’ān al-‘Adhīm Karya Ibn Katsir",
    penulis: "Lutfiya Nurmayanti, Abdul Kholid",
    ringkasan: "Mengkaji validitas riwayat penafsiran yang dinisbatkan kepada Abdullah ibn Abbas dalam kitab tafsir Ibn Katsir.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/633",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/633/343"
  },
  {
    no: 37,
    judul: "Menjelajahi Retorika Tafsir QS. Ar-Rahman Perspektif al-Qurthubi",
    penulis: "Komarudin, Komarudin Sassi",
    ringkasan: "Menganalisis aspek retorika dalam penafsiran Surah Ar-Rahman menurut al-Qurthubi.",
    klasifikasi: "Studi Tokoh/Mufasir",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/661",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/661/340"
  },
  {
    no: 38,
    judul: "QS. Al-‘Ashr Perspektif Teori Double Movement Fazlur Rahman dalam Menanggapi Fenomena Brain Rot",
    penulis: "M. Hafiz Mauluddin Hazmi",
    ringkasan: "Menerapkan teori double movement Fazlur Rahman untuk membaca Surah Al-‘Ashr dalam konteks fenomena brain rot.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/672",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/672/339"
  },
  {
    no: 39,
    judul: "Larangan Mencampuradukkan Agama dengan Politik dalam Pemilu: Telaah QS. Al-Baqarah Ayat 41",
    penulis: "Naila Khafwa Nur",
    ringkasan: "Mengkaji QS. Al-Baqarah ayat 41 dan relevansinya dengan isu agama dan politik dalam pemilu.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/679",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/679/338"
  },
  {
    no: 40,
    judul: "Teori Makroekonomi Islam Berkeadilan: Prinsip Anti Riba dalam QS. Al-Baqarah 278–279 sebagai Fondasi Sistem Ekonomi Syariah",
    penulis: "Achmad Fikri Saefullah",
    ringkasan: "Mengkaji prinsip antiriba dalam QS. Al-Baqarah ayat 278–279 sebagai landasan ekonomi syariah.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/671",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/671/341"
  },
  {
    no: 41,
    judul: "Dialektika al-Jannah dan al-Nār dalam Al-Qur’an serta Implikasi dan Relevansinya untuk Kehidupan Kontemporer",
    penulis: "Riv’atul Mahmudah, Alfi Julizun Azwar, Halimatussa’diyah",
    ringkasan: "Membahas konsep surga dan neraka dalam Al-Qur’an serta relevansinya bagi kehidupan masa kini.",
    klasifikasi: "Studi Internal Teks",
    aksesUrl: "https://journal.ua.ac.id/index.php/jsqt/article/view/1026",
    pdfUrl: "https://journal.ua.ac.id/index.php/jsqt/article/download/1026/525"
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

export const FILTER_CATEGORIES = [
  { id: 'Semua', label: 'Semua', count: 46 },
  { id: 'Studi Tokoh/Mufasir', label: 'Studi Tokoh/Mufasir', count: 17 },
  { id: 'Studi Internal Teks', label: 'Studi Internal Teks', count: 14 },
  { id: "Living Qur'an", label: "Living Qur'an", count: 8 },
  { id: 'Studi Eksternal Teks', label: 'Studi Eksternal Teks', count: 4 },
  { id: 'Unclassified', label: 'Unclassified', count: 3 }
] as const;
