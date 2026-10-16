import React, { useState, useMemo } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Download, 
  Search, 
  X, 
  Layers, 
  User, 
  Info, 
  Check, 
  Copy, 
  Globe, 
  ArrowRight,
  Table as TableIcon,
  LayoutGrid,
  Sparkles,
  Quote,
  GraduationCap
} from 'lucide-react';
import { Article, ARTICLES } from './data/articles';

type TabType = 'home' | 'articles' | 'about';
type ViewMode = 'table' | 'grid';

const CATEGORIES = [
  'Semua',
  'Studi Tokoh/Mufasir',
  'Studi Internal Teks',
  "Living Qur'an",
  'Studi Eksternal Teks',
  'Unclassified'
] as const;

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<ViewMode>('table');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Filtered Articles
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchCat =
        selectedCategory === 'Semua' ||
        (selectedCategory === 'Unclassified'
          ? article.klasifikasi === 'Unclassified'
          : article.klasifikasi === selectedCategory);

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        article.judul.toLowerCase().includes(q) ||
        article.penulis.toLowerCase().includes(q) ||
        article.ringkasan.toLowerCase().includes(q) ||
        article.klasifikasi.toLowerCase().includes(q) ||
        article.no.toString() === q;

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      Semua: ARTICLES.length,
      'Studi Tokoh/Mufasir': 0,
      'Studi Internal Teks': 0,
      "Living Qur'an": 0,
      'Studi Eksternal Teks': 0,
      Unclassified: 0
    };
    ARTICLES.forEach((a) => {
      if (counts[a.klasifikasi] !== undefined) {
        counts[a.klasifikasi]++;
      }
    });
    return counts;
  }, []);

  // Featured sample articles for Home Dashboard
  const featuredArticles = useMemo(() => {
    return [
      ARTICLES[0],  // Dakwah Gusdurian
      ARTICLES[1],  // Tafsir Al-Hijri (Tokoh)
      ARTICLES[2],  // Dakwah Nabi Ibrahim (Internal Teks)
      ARTICLES[8],  // Surat Al-Ikhlas (Living Qur'an)
      ARTICLES[10], // QS. Al-Nur: 30-31 (Eksternal Teks)
      ARTICLES[6],  // Kewarganegaraan Tafsir Al-Azhar (Tokoh)
    ];
  }, []);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Studi Tokoh/Mufasir':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'Studi Internal Teks':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case "Living Qur'an":
        return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
      case 'Studi Eksternal Teks':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      default:
        return 'bg-slate-700/40 text-slate-400 border-slate-600/40';
    }
  };

  const copyCitation = (article: Article, style: 'apa' | 'chicago') => {
    let citation = '';
    if (style === 'apa') {
      citation = `${article.penulis}. "${article.judul}". Jurnal Studi Al-Qur'an dan Tafsir (JSQT) Universitas Annuqayah. ${article.aksesUrl}`;
    } else {
      citation = `${article.penulis}, "${article.judul}," Jurnal Studi Al-Qur'an dan Tafsir (JSQT) Universitas Annuqayah, diakses dari ${article.aksesUrl}.`;
    }
    navigator.clipboard.writeText(citation).then(() => {
      setCopiedType(style);
      showToast(`Sitasi format ${style.toUpperCase()} berhasil disalin!`);
      setTimeout(() => setCopiedType(null), 2000);
    });
  };

  return (
    <div className="bg-[#0b0f19] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white pb-20 md:pb-6 font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-2.5 bg-blue-600/95 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-2xl backdrop-blur-md border border-blue-400/30 animate-in fade-in slide-in-from-top duration-200">
          <Check className="w-4 h-4 text-emerald-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP NAVBAR (Writely Glassmorphism Style) */}
      <header className="sticky top-0 z-40 bg-[#131b2e]/85 backdrop-blur-md border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer select-none"
            onClick={() => setActiveTab('home')}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20 ring-1 ring-white/10">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">JSQT</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 uppercase tracking-wider">
                  Arsip IAT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium -mt-0.5">Universitas Annuqayah</p>
            </div>
          </div>

          {/* Desktop Navigation Menu (Dashboard, Semua Artikel, Tentang) */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-900/60 p-1 rounded-xl border border-[#1e293b]/70">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'home'
                  ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'articles'
                  ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Semua Artikel
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'about'
                  ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              Tentang
            </button>
          </nav>

          {/* Right Action: External Journal Link */}
          <div className="flex items-center space-x-2">
            <a
              href="https://journal.ua.ac.id/index.php/jsqt/issue/archive"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition flex items-center gap-1.5 border border-[#1e293b] hover:border-slate-600 shadow-sm"
              title="Portal Resmi Jurnal JSQT Universitas Annuqayah"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Portal OJS</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">

        {/* =========================================================
            VIEW 1: DASHBOARD (HOME)
            ========================================================= */}
        {activeTab === 'home' && (
          <section className="space-y-6 animate-in fade-in duration-200">
            
            {/* Welcome Hero Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#131b2e] to-blue-950/40 border border-[#1e293b] p-6 sm:p-8 shadow-xl">
              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 max-w-3xl space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Arsip Riset IAT • Universitas Annuqayah
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    Journal of Qur'anic Studies & Tafsir (JSQT)
                  </span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Direktori Riset Ilmu Al-Qur'an & Tafsir
                </h1>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Sarana eksplorasi riset dosen & civitas akademika Program Studi Ilmu Al-Qur'an dan Tafsir (IAT) Universitas Annuqayah. Memetakan 46 naskah ilmiah berdasarkan 4 Objek Penelitian IAT (Studi Internal Teks, Studi Eksternal Teks, Studi Tokoh/Mufasir, dan Living Qur'an).
                </p>
                
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveTab('articles')}
                    className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition flex items-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95"
                  >
                    <BookOpen className="w-4 h-4" />
                    Buka Arsip Lengkap
                  </button>
                  <button
                    onClick={() => setActiveTab('about')}
                    className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-semibold transition flex items-center gap-2 border border-[#1e293b] active:scale-95"
                  >
                    <Info className="w-4 h-4 text-blue-400" />
                    4 Objek Penelitian IAT
                  </button>
                </div>
              </div>
            </div>

            {/* Real-Time Stats Grid (4 Metrics) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              
              {/* Stat 1: Total Artikel */}
              <div className="bg-[#131b2e] border border-[#1e293b] p-5 rounded-2xl flex flex-col justify-between space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-semibold uppercase tracking-wider">Total Artikel</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs">
                    <BookOpen className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">46</h3>
                  <p className="text-[11px] text-slate-400 mt-1">Naskah Terpublikasi & Terindeks</p>
                </div>
              </div>

              {/* Stat 2: Objek Kajian IAT */}
              <div className="bg-[#131b2e] border border-[#1e293b] p-5 rounded-2xl flex flex-col justify-between space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-semibold uppercase tracking-wider">Objek Kajian IAT</span>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">4 Pilar</h3>
                  <p className="text-[11px] text-slate-400 mt-1">Klasifikasi Objek Penelitian IAT</p>
                </div>
              </div>

              {/* Stat 3: Akses Dokumen */}
              <div className="bg-[#131b2e] border border-[#1e293b] p-5 rounded-2xl flex flex-col justify-between space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-semibold uppercase tracking-wider">Akses Terbuka</span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs">
                    <Download className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</h3>
                  <p className="text-[11px] text-slate-400 mt-1">Open Access & PDF Lengkap</p>
                </div>
              </div>

              {/* Stat 4: Basis Repositori */}
              <div className="bg-[#131b2e] border border-[#1e293b] p-5 rounded-2xl flex flex-col justify-between space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-semibold uppercase tracking-wider">Sumber Portal</span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs">
                    <Globe className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">OJS UA</h3>
                  <p className="text-[11px] text-slate-400 mt-1">Universitas Annuqayah</p>
                </div>
              </div>

            </div>

            {/* Featured Sample Articles Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">Sorotan Naskah Pilihan</h2>
                  <p className="text-xs text-slate-400">Sampel kajian metodologis dan tematik tafsir terkini</p>
                </div>
                <button
                  onClick={() => setActiveTab('articles')}
                  className="text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1 group"
                >
                  Lihat Semua Arsip (46)
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredArticles.map((article, index) => (
                  <div
                    key={article.no}
                    className="bg-[#131b2e] hover:bg-[#18223a] border border-[#1e293b] hover:border-blue-500/40 p-5 rounded-2xl transition duration-200 flex flex-col justify-between space-y-4 group shadow-sm"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-300 font-mono bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700">
                            {index + 1}
                          </span>
                          <span className="font-mono text-[10px] font-bold text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                            ID #{String(article.no).padStart(2, '0')}
                          </span>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getCategoryBadgeClass(article.klasifikasi)}`}>
                          {article.klasifikasi}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-white text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-blue-300 transition">
                        {article.judul}
                      </h3>
                      
                      <div className="flex items-center text-xs text-slate-400 gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                        <span className="truncate">{article.penulis}</span>
                      </div>
                      
                      <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                        {article.ringkasan}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#1e293b] flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition"
                      >
                        Detail
                      </button>
                      <div className="flex items-center gap-1.5">
                        <a
                          href={article.aksesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs font-semibold transition flex items-center gap-1 border border-blue-500/30"
                          title="Buka Naskah OJS"
                        >
                          <span>OJS</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href={article.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold transition flex items-center gap-1 border border-emerald-500/30"
                          title="Unduh PDF Langsung"
                        >
                          <span>PDF</span>
                          <Download className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* =========================================================
            VIEW 2: SEMUA ARTIKEL (TABLE & SIDEBAR KATEGORI)
            ========================================================= */}
        {activeTab === 'articles' && (
          <section className="space-y-6 animate-in fade-in duration-200">
            
            {/* Section Header with Search & Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#131b2e] border border-[#1e293b] p-5 rounded-2xl shadow-sm">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white">Semua Naskah</h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                    {filteredArticles.length} / 46
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Daftar seluruh 46 naskah riset dosen & civitas akademika IAT Universitas Annuqayah
                </p>
              </div>

              {/* Search Bar & View Mode Toggle */}
              <div className="flex items-center gap-2.5 w-full md:w-auto">
                <div className="w-full md:w-80 relative">
                  <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari judul, penulis, ringkasan..."
                    className="w-full bg-slate-900 border border-[#1e293b] rounded-xl pl-9 pr-8 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* View Mode Toggle (Table / Grid) */}
                <div className="hidden sm:flex items-center bg-slate-900 border border-[#1e293b] p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode('table')}
                    className={`p-1.5 rounded-lg text-xs transition ${
                      viewMode === 'table' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Tampilan Tabel"
                  >
                    <TableIcon className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg text-xs transition ${
                      viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Tampilan Kartu"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Category Dropdown */}
            <div className="block lg:hidden">
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Pilih Objek Kajian IAT:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#131b2e] border border-[#1e293b] text-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:border-blue-500"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat} ({categoryCounts[cat] ?? 0})
                  </option>
                ))}
              </select>
            </div>

            {/* Layout: Sidebar (Desktop) + Main Articles (Table or Grid) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Sidebar Menu (Desktop) */}
              <aside className="hidden lg:block lg:col-span-3 bg-[#131b2e] border border-[#1e293b] rounded-2xl p-4 sticky top-24 space-y-3 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[#1e293b]/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Objek Penelitian IAT
                  </span>
                  {(selectedCategory !== 'Semua' || searchQuery) && (
                    <button
                      onClick={() => {
                        setSelectedCategory('Semua');
                        setSearchQuery('');
                      }}
                      className="text-[11px] text-blue-400 hover:underline"
                    >
                      Reset
                    </button>
                  )}
                </div>

                <div className="space-y-1">
                  {CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition text-left ${
                          isSelected
                            ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30 font-semibold'
                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                        }`}
                      >
                        <span className="truncate pr-2">{cat}</span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold ${
                            isSelected
                              ? 'bg-blue-500/30 text-blue-300'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {categoryCounts[cat]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Right Main Content */}
              <div className="lg:col-span-9">
                {filteredArticles.length === 0 ? (
                  <div className="bg-[#131b2e] border border-[#1e293b] rounded-2xl p-12 text-center space-y-3 shadow-sm">
                    <BookOpen className="w-10 h-10 text-slate-500 mx-auto" />
                    <h3 className="font-bold text-white text-base">Tidak ada naskah yang cocok</h3>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Coba ubah kata kunci pencarian atau pilih objek penelitian lain untuk menampilkan naskah.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory('Semua');
                        setSearchQuery('');
                      }}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition"
                    >
                      Reset Pencarian & Kategori
                    </button>
                  </div>
                ) : viewMode === 'table' ? (
                  /* TABLE VIEW: Nomor Dinamis (index + 1) & Badge ID Naskah */
                  <div className="bg-[#131b2e] border border-[#1e293b] rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-[#1e293b] bg-slate-900/70 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                            <th className="p-4 w-14 text-center">No</th>
                            <th className="p-4 w-36">Objek Kajian</th>
                            <th className="p-4">Judul Artikel & Penulis</th>
                            <th className="p-4 min-w-[260px]">Inti Kajian / Abstrak</th>
                            <th className="p-4 w-36 text-center">Aksi Naskah</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1e293b]/60">
                          {filteredArticles.map((article, index) => (
                            <tr
                              key={article.no}
                              className="hover:bg-[#18223a]/70 transition group"
                            >
                              {/* 1. PENOMORAN DINAMIS: index + 1 */}
                              <td className="p-4 text-center font-mono text-xs font-bold text-slate-300">
                                {index + 1}
                              </td>

                              <td className="p-4">
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${getCategoryBadgeClass(article.klasifikasi)}`}>
                                  {article.klasifikasi}
                                </span>
                              </td>

                              <td className="p-4">
                                {/* 2. PINDAHKAN ID ASLI ARTIKEL MENJADI BADGE ID */}
                                <div className="flex items-center gap-1.5 mb-1.5">
                                  <span className="font-mono text-[10px] font-bold text-blue-400/90 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                                    ID #{String(article.no).padStart(2, '0')}
                                  </span>
                                </div>

                                <button
                                  onClick={() => setSelectedArticle(article)}
                                  className="text-left font-bold text-sm text-slate-100 group-hover:text-blue-300 transition line-clamp-2 block"
                                >
                                  {article.judul}
                                </button>
                                <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                                  <User className="w-3 h-3 text-slate-500 flex-shrink-0" />
                                  <span className="truncate">{article.penulis}</span>
                                </div>
                              </td>

                              <td className="p-4 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                                {article.ringkasan}
                              </td>

                              <td className="p-4 text-center">
                                <div className="flex items-center justify-center gap-1.5">
                                  <button
                                    onClick={() => setSelectedArticle(article)}
                                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition"
                                    title="Detail Lengkap"
                                  >
                                    <BookOpen className="w-3.5 h-3.5" />
                                  </button>
                                  <a
                                    href={article.aksesUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs font-semibold transition flex items-center gap-1 border border-blue-500/30"
                                    title="Akses OJS"
                                  >
                                    <span>OJS</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                  <a
                                    href={article.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold transition flex items-center gap-1 border border-emerald-500/30"
                                    title="Download PDF"
                                  >
                                    <Download className="w-3.5 h-3.5" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  /* CARD GRID VIEW: Nomor Dinamis (index + 1) & Badge ID Naskah */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredArticles.map((article, index) => (
                      <div
                        key={article.no}
                        className="bg-[#131b2e] hover:bg-[#18223a] border border-[#1e293b] hover:border-blue-500/40 p-5 rounded-2xl transition duration-200 flex flex-col justify-between space-y-4 group shadow-sm"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5">
                              {/* Nomor Dinamis */}
                              <span className="font-mono text-xs font-bold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700">
                                {index + 1}
                              </span>
                              {/* Badge ID Naskah */}
                              <span className="font-mono text-[10px] font-bold text-blue-400/90 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                                ID #{String(article.no).padStart(2, '0')}
                              </span>
                            </div>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getCategoryBadgeClass(article.klasifikasi)}`}>
                              {article.klasifikasi}
                            </span>
                          </div>

                          <h3
                            onClick={() => setSelectedArticle(article)}
                            className="font-bold text-white text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-blue-300 transition cursor-pointer"
                          >
                            {article.judul}
                          </h3>

                          <div className="flex items-center text-xs text-slate-400 gap-1.5">
                            <User className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                            <span className="truncate">{article.penulis}</span>
                          </div>

                          <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                            {article.ringkasan}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#1e293b] flex items-center justify-between gap-2">
                          <button
                            onClick={() => setSelectedArticle(article)}
                            className="text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition"
                          >
                            Detail Naskah
                          </button>
                          <div className="flex items-center gap-1.5">
                            <a
                              href={article.aksesUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs font-semibold transition flex items-center gap-1 border border-blue-500/30"
                            >
                              <span>OJS</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                            <a
                              href={article.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold transition flex items-center gap-1 border border-emerald-500/30"
                            >
                              <span>PDF</span>
                              <Download className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </section>
        )}

        {/* =========================================================
            VIEW 3: TENTANG (ABOUT & 4 OBJEK PENELITIAN IAT)
            ========================================================= */}
        {activeTab === 'about' && (
          <section className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-[#131b2e] border border-[#1e293b] p-6 sm:p-10 rounded-3xl max-w-3xl mx-auto space-y-8 shadow-xl">
              
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 border-b border-[#1e293b] pb-8 text-center sm:text-left">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-3xl font-bold shadow-inner flex-shrink-0">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-2xl font-extrabold text-white">
                    Direktori & Arsip Jurnal Studi Al-Qur'an dan Tafsir (JSQT)
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-blue-400">
                    Program Studi Ilmu Al-Qur'an dan Tafsir (IAT) • Universitas Annuqayah • 2026
                  </p>
                  <p className="text-xs text-slate-400">
                    Platform penelusuran naskah ilmiah berbasis 4 Objek Penelitian IAT sebagai sarana eksplorasi riset dosen & civitas akademika
                  </p>
                </div>
              </div>

              {/* Narrative Content: 4 Objek Penelitian IAT */}
              <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                
                <p>
                  <strong className="text-white">Direktori & Arsip JSQT</strong> dirancang sebagai sarana eksplorasi riset dosen & civitas akademika Program Studi Ilmu Al-Qur'an dan Tafsir (IAT) Universitas Annuqayah dalam memetakan, meneliti, dan mengembangkan khazanah keilmuan Al-Qur’an secara terstruktur, komprehensif, dan terbuka.
                </p>

                {/* 4 Pilar Objek Penelitian IAT (Sesuai Dokumen Resmi) */}
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-[#1e293b] space-y-4">
                  <div className="flex items-center justify-between border-b border-[#1e293b] pb-3">
                    <h3 className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-400" />
                      4 Objek Penelitian Ilmu Al-Qur’an dan Tafsir (IAT)
                    </h3>
                    <span className="text-[11px] text-blue-400 font-mono font-semibold">Objek Riset IAT</span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    {/* 1. Studi Internal Teks */}
                    <div className="p-3.5 rounded-xl bg-[#131b2e]/60 border border-emerald-500/20 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-2">
                          <span>1. Studi Internal Teks</span>
                          <span className="text-slate-400 font-serif italic text-xs">(دراسة ما في القرآن نفسه)</span>
                        </h4>
                      </div>
                      <p className="text-slate-300">
                        Penelitian yang berfokus langsung pada ayat Al-Qur’an. Ayat Al-Qur'an menjadi objek kajian secara langsung.
                      </p>
                      <p className="text-[11px] text-slate-400 font-mono bg-slate-900/60 p-2 rounded-lg">
                        <strong>Alur Penelitian:</strong> Membaca ayat Al-Qur’an → Memahami ayat → Mencari penafsiran dari berbagai kitab tafsir → Membandingkan penafsiran → Menyusun tesis/argumentasi → Menarik kesimpulan.
                      </p>
                    </div>

                    {/* 2. Studi Eksternal Teks */}
                    <div className="p-3.5 rounded-xl bg-[#131b2e]/60 border border-amber-500/20 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-amber-400 text-sm flex items-center gap-2">
                          <span>2. Studi Eksternal Teks</span>
                          <span className="text-slate-400 font-serif italic text-xs">(دراسة ما حول القرآن)</span>
                        </h4>
                      </div>
                      <p className="text-slate-300">
                        Penelitian yang berfokus pada ilmu-ilmu yang berkaitan dengan Al-Qur’an atau ilmu-ilmu yang menjadi alat untuk memahami Al-Qur’an. Fokus utamanya adalah <em>Ulumul Qur’an</em> (علوم القرآن).
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Contohnya kajian <em>asbāb al-nuzūl</em> (sebab-sebab turunnya ayat), dengan kitab rujukan utama seperti <em>Lubāb al-Nuqūl fī Asbāb al-Nuzūl</em> karya Imam Jalaluddin as-Suyuthi.
                      </p>
                    </div>

                    {/* 3. Studi Tokoh */}
                    <div className="p-3.5 rounded-xl bg-[#131b2e]/60 border border-blue-500/20 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-blue-400 text-sm flex items-center gap-2">
                          <span>3. Studi Tokoh / Mufasir</span>
                          <span className="text-slate-400 font-serif italic text-xs">(دراسة مفسر القرآن)</span>
                        </h4>
                      </div>
                      <p className="text-slate-300">
                        Penelitian yang berfokus pada pendapat, pandangan, atau pernyataan seorang tokoh, khususnya mufasir Al-Qur’an, yang mencakup dua aspek:
                      </p>
                      <ul className="text-slate-400 text-xs list-disc list-inside space-y-1 pl-1">
                        <li><strong className="text-slate-200">Internal teks:</strong> Pendapat atau pandangan tokoh dalam menafsirkan ayat-ayat Al-Qur’an.</li>
                        <li><strong className="text-slate-200">Eksternal teks:</strong> Latar belakang tokoh, lingkungan, pendidikan, serta hal-hal yang memengaruhi pemikirannya.</li>
                      </ul>
                    </div>

                    {/* 4. Studi Living Qur'an */}
                    <div className="p-3.5 rounded-xl bg-[#131b2e]/60 border border-purple-500/20 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-purple-400 text-sm flex items-center gap-2">
                          <span>4. Studi Living Qur’an</span>
                          <span className="text-slate-400 font-serif italic text-xs">(دراسة القرآن الحي)</span>
                        </h4>
                      </div>
                      <p className="text-slate-300">
                        Kajian tentang bagaimana Al-Qur’an diterima, diperlakukan, dipahami, dan dipraktikkan dalam kehidupan masyarakat (المعايشة / interaksi sehari-hari bersama Al-Qur'an), mencakup 3 bentuk resepsi:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
                        <div className="bg-slate-900/60 p-2 rounded-lg">
                          <strong className="text-purple-300 block">a. Resepsi Eksegesis</strong>
                          Pemahaman, pengajaran, dan penafsiran ayat dalam pembelajaran atau pengajian.
                        </div>
                        <div className="bg-slate-900/60 p-2 rounded-lg">
                          <strong className="text-purple-300 block">b. Resepsi Estetis</strong>
                          Aspek keindahan bacaan (seni tilawah) dan seni kaligrafi ayat Al-Qur’an.
                        </div>
                        <div className="bg-slate-900/60 p-2 rounded-lg">
                          <strong className="text-purple-300 block">c. Resepsi Fungsional</strong>
                          Praktik pembacaan ayat/surat tertentu untuk tujuan fungsional, kemanfaatan, atau perlindungan.
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Open Access Commitment */}
                <p>
                  Seluruh 46 naskah ilmiah dalam arsip ini disajikan secara terbuka (*Open Access*) dengan tautan naskah utuh langsung ke sistem resmi OJS dan berkas PDF orisinal, mendorong diseminasi riset ilmiah Al-Qur'an dan Tafsir di Nusantara.
                </p>

              </div>

              {/* Attribution Banner in About */}
              <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/30 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-blue-400 uppercase tracking-wider block">Sumber Repositori Resmi:</span>
                <p>
                  Seluruh naskah ilmiah bersumber dari portal resmi Jurnal Studi Al-Qur'an dan Tafsir (JSQT) Universitas Annuqayah:{' '}
                  <a
                    href="https://journal.ua.ac.id/index.php/jsqt/issue/archive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline font-semibold break-all"
                  >
                    https://journal.ua.ac.id/index.php/jsqt/issue/archive
                  </a>
                </p>
              </div>

              {/* Signature Footer */}
              <div className="pt-6 border-t border-[#1e293b]/80 text-center space-y-1">
                <p className="text-base font-extrabold tracking-wide text-white italic">
                  "Iqra' bismi Rabbikalladzi khalaq"
                </p>
                <p className="text-xs text-slate-400">
                  Civitas Akademika Ilmu Al-Qur'an dan Tafsir (IAT) • Universitas Annuqayah
                </p>
              </div>

            </div>
          </section>
        )}

        {/* =========================================================
            GLOBAL FOOTER (ATRIBUSI RESMI SUMBER JSQT UNIVERSITAS ANNUQAYAH)
            ========================================================= */}
        <footer className="pt-8 pb-4 border-t border-[#1e293b] text-center space-y-2">
          <p className="text-xs text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Seluruh naskah ilmiah bersumber dari portal resmi Jurnal Studi Al-Qur'an dan Tafsir (JSQT) Universitas Annuqayah:{' '}
            <a
              href="https://journal.ua.ac.id/index.php/jsqt/issue/archive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline font-medium inline-flex items-center gap-1"
            >
              <span>https://journal.ua.ac.id/index.php/jsqt/issue/archive</span>
              <ExternalLink className="w-3 h-3 inline" />
            </a>
          </p>
          <p className="text-[11px] text-slate-500">
            Direktori Riset & Repositori Digital Civitas Akademika Ilmu Al-Qur'an dan Tafsir (IAT) Universitas Annuqayah • 2026
          </p>
        </footer>

      </main>

      {/* ARTICLE DETAIL MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#131b2e] border border-[#1e293b] rounded-3xl max-w-xl w-full p-6 sm:p-7 space-y-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            <div className="flex justify-between items-start border-b border-[#1e293b] pb-4">
              <div className="space-y-1 pr-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-blue-400/90 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20">
                    Badge ID #{String(selectedArticle.no).padStart(2, '0')}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getCategoryBadgeClass(selectedArticle.klasifikasi)}`}>
                    {selectedArticle.klasifikasi}
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white leading-snug pt-1">
                  {selectedArticle.judul}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Penulis Naskah:
                </span>
                <p className="text-white font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-400" />
                  {selectedArticle.penulis}
                </p>
              </div>

              <div>
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Ringkasan / Abstrak Naskah:
                </span>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-[#1e293b] text-slate-200 leading-relaxed text-xs sm:text-sm">
                  {selectedArticle.ringkasan}
                </div>
              </div>

              <div>
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  Salin Sitasi Cepat:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyCitation(selectedArticle, 'apa')}
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium transition flex items-center justify-center gap-1.5 border border-[#1e293b]"
                  >
                    {copiedType === 'apa' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
                    <span>Format APA</span>
                  </button>
                  <button
                    onClick={() => copyCitation(selectedArticle, 'chicago')}
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium transition flex items-center justify-center gap-1.5 border border-[#1e293b]"
                  >
                    {copiedType === 'chicago' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
                    <span>Format Chicago</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-end gap-2.5">
              <a
                href={selectedArticle.aksesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-200 rounded-xl transition flex items-center justify-center gap-2 border border-[#1e293b]"
              >
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <span>Buka Laman OJS</span>
              </a>
              <a
                href={selectedArticle.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2 bg-blue-600 hover:bg-blue-500 text-xs sm:text-sm font-semibold text-white rounded-xl transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Unduh PDF Naskah</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* MOBILE BOTTOM NAVIGATION BAR (Writely Style: Dashboard, Artikel, Tentang) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#131b2e]/90 backdrop-blur-md border-t border-[#1e293b] z-40 px-3 py-2 flex justify-around items-center">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center p-1 transition ${
            activeTab === 'home' ? 'text-blue-400 font-semibold' : 'text-slate-400 font-normal hover:text-slate-200'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-[10px] mt-1">Dashboard</span>
        </button>
        <button
          onClick={() => setActiveTab('articles')}
          className={`flex flex-col items-center p-1 transition ${
            activeTab === 'articles' ? 'text-blue-400 font-semibold' : 'text-slate-400 font-normal hover:text-slate-200'
          }`}
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] mt-1">Artikel</span>
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={`flex flex-col items-center p-1 transition ${
            activeTab === 'about' ? 'text-blue-400 font-semibold' : 'text-slate-400 font-normal hover:text-slate-200'
          }`}
        >
          <Info className="w-5 h-5" />
          <span className="text-[10px] mt-1">Tentang</span>
        </button>
      </nav>

    </div>
  );
}
