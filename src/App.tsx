import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  X, 
  Download, 
  ExternalLink, 
  User, 
  Check, 
  Copy, 
  FileCheck2, 
  ChevronRight,
  ChevronDown,
  BookOpen,
  ArrowUpRight,
  Menu,
  RotateCcw,
  BookMarked,
  Filter,
  GraduationCap,
  Sparkles,
  Calendar,
  FileText
} from 'lucide-react';
import { Article, ARTICLES, VOLUMES, FILTER_CATEGORIES } from './data/articles';

type PageTab = 'naskah' | 'tentang' | 'petunjuk';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('naskah');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Topik Kajian');
  const [selectedVolume, setSelectedVolume] = useState<string>('Semua Volume & Tahun');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<number, boolean>>({});

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleTabChange = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAbstract = (no: number) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [no]: !prev[no]
    }));
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'Semua Topik Kajian': ARTICLES.length
    };
    ARTICLES.forEach(a => {
      counts[a.klasifikasi] = (counts[a.klasifikasi] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter logic
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchVolume =
        selectedVolume === 'Semua Volume & Tahun' || article.volume === selectedVolume;

      const matchCategory =
        selectedCategory === 'Semua Topik Kajian' ||
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
        article.doi.toLowerCase().includes(q) ||
        article.volume.toLowerCase().includes(q) ||
        article.no.toString() === q;

      return matchVolume && matchCategory && matchSearch;
    });
  }, [selectedVolume, selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('Semua Topik Kajian');
    setSelectedVolume('Semua Volume & Tahun');
    setSearchQuery('');
  };

  const isFiltered = selectedCategory !== 'Semua Topik Kajian' || selectedVolume !== 'Semua Volume & Tahun' || searchQuery.trim().length > 0;

  // Citation generator
  const copyCitation = (article: Article, format: 'apa' | 'chicago' | 'harvard' | 'bibtex') => {
    let text = '';
    const volNum = article.volume.split('(')[0].trim();
    if (format === 'apa') {
      text = `${article.penulis}. (${article.tahun}). ${article.judul}. Jurnal Studi Al-Qur'an dan Tafsir (JSQT), ${volNum}, ${article.halaman}. ${article.doi}`;
    } else if (format === 'chicago') {
      text = `${article.penulis}, "${article.judul}," Jurnal Studi Al-Qur'an dan Tafsir (JSQT) ${volNum} (${article.tahun}): ${article.halaman.replace('hlm. ', '')}. ${article.doi}`;
    } else if (format === 'harvard') {
      text = `${article.penulis}, ${article.tahun}. ${article.judul}. Jurnal Studi Al-Qur'an dan Tafsir (JSQT), ${volNum}, pp.${article.halaman.replace('hlm. ', '')}.`;
    } else {
      const citeKey = `${article.penulis.split(' ')[0].toLowerCase()}${article.tahun}`;
      text = `@article{${citeKey},
  author = {${article.penulis}},
  title = {${article.judul}},
  journal = {Jurnal Studi Al-Qur'an dan Tafsir},
  volume = {${volNum}},
  year = {${article.tahun}},
  pages = {${article.halaman.replace('hlm. ', '')}},
  doi = {${article.doi}}
}`;
    }

    navigator.clipboard.writeText(text).then(() => {
      setCopiedFormat(format);
      showToast(`Sitasi format ${format.toUpperCase()} berhasil disalin!`);
      setTimeout(() => setCopiedFormat(null), 2000);
    });
  };

  const getCategoryBadgeClass = (klasifikasi: string) => {
    switch (klasifikasi) {
      case 'Studi Internal Teks':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/80';
      case 'Studi Tokoh/Mufasir':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200/80';
      case "Living Qur'an":
        return 'bg-teal-50 text-teal-800 border-teal-200/80';
      case 'Studi Eksternal Teks':
        return 'bg-sky-50 text-sky-800 border-sky-200/80';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  useEffect(() => {
    if (mobileMenuOpen || selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, selectedArticle]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1E293B] flex flex-col font-sans selection:bg-[#0F382C]/15 selection:text-[#0F382C]">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 bg-[#0F382C] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium shadow-xl border border-emerald-600/30 animate-in fade-in slide-in-from-bottom duration-200">
          <Check className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =========================================================
          1. HEADER (BRANDING RINGKAS & SELARAS)
          [Ikon Buku/Logo] JSQT [Badge: OPEN ACCESS] | Universitas Annuqayah
          ========================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-15 sm:h-16 flex items-center justify-between gap-3">
          
          {/* Brand Logo & Title Lockup */}
          <div 
            onClick={() => handleTabChange('naskah')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none py-1"
          >
            {/* Elegant Emblem Logo: Open Qur'an / Academic Book with Emerald Shield */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[#0F382C] via-[#144838] to-[#0A261E] text-white flex items-center justify-center shadow-2xs border border-emerald-700/40 shrink-0 group-hover:scale-105 transition-transform">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-100" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                <path d="M6 8h2" />
                <path d="M6 12h2" />
                <path d="M16 8h2" />
                <path d="M16 12h2" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400 ring-1.5 ring-white"></span>
            </div>

            {/* Typography Lockup: [Ikon] JSQT [Badge: OPEN ACCESS] | Universitas Annuqayah */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-serif font-extrabold text-lg sm:text-xl text-[#0F382C] tracking-tight leading-none group-hover:text-[#185240] transition">
                JSQT
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-1.5 py-0.5 rounded leading-none">
                Open Access
              </span>
              <span className="text-slate-300 font-light hidden xs:inline text-xs sm:text-sm">|</span>
              <span className="text-xs sm:text-sm text-slate-600 font-medium hidden xs:inline leading-none">
                Universitas Annuqayah
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 text-xs sm:text-sm font-medium">
            <button
              onClick={() => handleTabChange('naskah')}
              className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
                activeTab === 'naskah'
                  ? 'text-[#0F382C] font-semibold bg-emerald-50/80 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Daftar Naskah</span>
            </button>
            <button
              onClick={() => handleTabChange('tentang')}
              className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
                activeTab === 'tentang'
                  ? 'text-[#0F382C] font-semibold bg-emerald-50/80 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Tentang Jurnal</span>
            </button>
            <button
              onClick={() => handleTabChange('petunjuk')}
              className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
                activeTab === 'petunjuk'
                  ? 'text-[#0F382C] font-semibold bg-emerald-50/80 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Petunjuk Penulis</span>
            </button>
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-2">
            <a
              href="https://journal.ua.ac.id/index.php/jsqt/submission/wizard"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[38px] sm:min-h-[40px] px-3 sm:px-3.5 py-1.5 rounded-lg bg-[#0F382C] hover:bg-[#185240] text-white text-xs font-semibold tracking-wide transition shadow-2xs flex items-center gap-1.5 active:scale-95"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-200" />
              <span className="hidden xs:inline">Kirim Naskah</span>
              <span className="xs:hidden">Submit</span>
            </a>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition active:scale-95"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-slate-900" /> : <Menu className="w-4 h-4 text-slate-900" />}
            </button>
          </div>

        </div>
      </header>

      {/* =========================================================
          MOBILE DRAWER / SHEET
          ========================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
          />

          <div className="relative bg-white rounded-t-2xl border-t border-slate-200 p-5 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto z-10 animate-in slide-in-from-bottom duration-200">
            <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto -mt-1 mb-1" />

            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base text-[#0F382C]">JSQT Navigation</span>
                <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">Menu</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1">
              <button
                onClick={() => handleTabChange('naskah')}
                className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'naskah' 
                    ? 'bg-emerald-50 text-[#0F382C]' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  <span>Daftar Naskah Jurnal</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-600">46 Naskah</span>
              </button>

              <button
                onClick={() => handleTabChange('tentang')}
                className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'tentang' 
                    ? 'bg-emerald-50 text-[#0F382C]' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-emerald-700" />
                  <span>Tentang Jurnal & 4 Objek IAT</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => handleTabChange('petunjuk')}
                className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'petunjuk' 
                    ? 'bg-emerald-50 text-[#0F382C]' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span>Petunjuk Penulis</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <a
                href="https://journal.ua.ac.id/index.php/jsqt/submission/wizard"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[42px] rounded-lg bg-[#0F382C] text-white flex items-center justify-center gap-2 font-semibold text-xs shadow-2xs"
              >
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-200" />
                <span>Kirim Naskah (Portal OJS)</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          MAIN CONTAINER (FOCUSED & DECLUTTERED)
          ========================================================= */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        
        {/* =========================================================
            TAB 1: DAFTAR NASKAH (SEARCH, FILTER & 2-COLUMN GRID)
            ========================================================= */}
        {activeTab === 'naskah' && (
          <div className="space-y-6">
            
            {/* HERO / SEARCH BAR SECTION: Compact & Space-Efficient */}
            <section className="space-y-3 max-w-3xl mx-auto text-center pt-1">
              
              <div className="space-y-1">
                <h1 className="font-serif font-extrabold text-xl sm:text-2xl md:text-3xl text-slate-900 tracking-tight leading-tight">
                  Arsip Naskah Jurnal Studi Al-Qur'an dan Tafsir
                </h1>
                <p className="text-xs text-slate-500 max-w-lg mx-auto">
                  Direktori 46 naskah riset Al-Qur'an, tafsir, living Qur'an, dan mufasir Universitas Annuqayah.
                </p>
              </div>

              {/* Search Bar */}
              <div className="pt-1 max-w-xl mx-auto w-full">
                <div className="relative group">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0F382C] transition" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari judul artikel, penulis, atau kata kunci..."
                    className="w-full bg-white border border-slate-200 group-hover:border-slate-300 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0F382C] focus:ring-3 focus:ring-[#0F382C]/10 transition shadow-2xs font-sans min-h-[42px]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
                      aria-label="Bersihkan pencarian"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Search Meta & Reset */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1.5 px-1">
                  <span>
                    Menampilkan <strong className="text-slate-800">{filteredArticles.length}</strong> naskah
                    {searchQuery && <span> untuk "<span className="text-[#0F382C] font-semibold">{searchQuery}</span>"</span>}
                  </span>
                  {isFiltered && (
                    <button
                      onClick={resetFilters}
                      className="text-[#0F382C] hover:text-[#185240] font-semibold flex items-center gap-1 hover:underline"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset Filter</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Horizontal Scrollable Category Pills on Mobile */}
              <div className="pt-1">
                <div className="flex items-center overflow-x-auto no-scrollbar gap-1.5 pb-1 px-0.5 sm:flex-wrap sm:justify-center">
                  {FILTER_CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    const count = categoryCounts[cat] || 0;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`shrink-0 px-3 py-1.5 rounded-lg transition text-[11px] font-medium flex items-center gap-1.5 active:scale-95 cursor-pointer ${
                          isSelected
                            ? 'bg-[#0F382C] text-white shadow-2xs ring-1 ring-[#0F382C]/15 font-semibold'
                            : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <span>{cat}</span>
                        <span 
                          className={`text-[9px] px-1 py-0.2 rounded-full font-mono ${
                            isSelected 
                              ? 'bg-white/20 text-white' 
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Volume Filter Dropdown */}
              <div className="flex items-center justify-center gap-2 pt-0.5 text-xs text-slate-600">
                <span className="flex items-center gap-1 text-[11px] text-slate-500">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>Edisi Terbitan:</span>
                </span>
                <select
                  value={selectedVolume}
                  onChange={(e) => setSelectedVolume(e.target.value)}
                  className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-800 hover:border-slate-300 focus:outline-none focus:border-[#0F382C] shadow-2xs cursor-pointer"
                >
                  {VOLUMES.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

            </section>

            {/* =========================================================
                ARTICLE GRID (2 COLUMNS DESKTOP, 1 COLUMN MOBILE)
                ========================================================= */}
            <section className="pt-2">
              {filteredArticles.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 text-center space-y-2 shadow-2xs">
                  <h3 className="font-serif font-bold text-base text-slate-900">
                    Tidak ditemukan naskah yang cocok
                  </h3>
                  <p className="text-xs text-slate-500">
                    Silakan ubah filter atau kata kunci pencarian.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0F382C] text-white text-xs font-semibold rounded-lg hover:bg-[#185240] transition shadow-2xs"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Tampilkan Semua Naskah</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                  {filteredArticles.map((article, idx) => {
                    const isExpanded = !!expandedAbstracts[article.no];
                    return (
                      <article
                        key={article.no}
                        className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-4.5 transition-all duration-200 hover:border-emerald-600/40 hover:shadow-md flex flex-col justify-between group space-y-2.5"
                      >
                        <div className="space-y-2">
                          {/* Header Card: Category Badge + Vol/No & Halaman */}
                          <div className="flex items-center justify-between gap-1.5 text-xs">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="font-mono font-bold text-[11px] px-1.5 py-0.2 rounded bg-slate-900 text-white shadow-2xs">
                                #{idx + 1}
                              </span>
                              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getCategoryBadgeClass(article.klasifikasi)}`}>
                                {article.klasifikasi}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-500 shrink-0">
                              {article.volume.split('(')[0].trim()} · {article.halaman}
                            </span>
                          </div>

                          {/* Judul Artikel: Serif Font, ringkas & tegas, max 2-3 baris */}
                          <h2
                            onClick={() => setSelectedArticle(article)}
                            className="font-serif font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0F382C] transition-colors leading-snug line-clamp-2 sm:line-clamp-3 cursor-pointer pt-0.5"
                            title={article.judul}
                          >
                            {article.judul}
                          </h2>

                          {/* Nama Penulis: Muted text */}
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                            <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">{article.penulis}</span>
                          </div>

                          {/* Ringkasan/Abstrak: 1 baris singkat dengan opsi toggle accordion */}
                          <div className="text-xs text-slate-600 leading-relaxed bg-slate-50/70 p-2.5 rounded-lg border border-slate-100">
                            <p className={isExpanded ? '' : 'line-clamp-1'}>
                              {article.ringkasan}
                            </p>
                            <button
                              onClick={() => toggleAbstract(article.no)}
                              className="text-[10px] font-semibold text-[#0F382C] mt-1 hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                            >
                              <span>{isExpanded ? 'Tutup Abstrak' : 'Tampilkan Abstrak'}</span>
                              <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>
                          </div>
                        </div>

                        {/* Footer Card: Tombol 'Unduh PDF' (Aksen Hijau) & 'Detail / OJS' (Outlined/Text) */}
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-xs mt-auto">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => setSelectedArticle(article)}
                              className="px-2.5 py-1.5 font-semibold text-[#0F382C] hover:bg-emerald-50 rounded-lg transition flex items-center gap-1"
                            >
                              <span>Detail & Sitasi</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                            <a
                              href={article.aksesUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1.5 text-slate-500 hover:text-slate-800 rounded-lg transition hover:bg-slate-50 flex items-center gap-1"
                              title="Buka naskah di OJS"
                            >
                              <span>OJS</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          </div>

                          <a
                            href={article.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-[#0F382C] hover:bg-[#185240] text-white font-medium flex items-center gap-1.5 transition shadow-2xs active:scale-95"
                            title="Unduh PDF"
                          >
                            <Download className="w-3.5 h-3.5 text-emerald-200" />
                            <span>Unduh PDF</span>
                          </a>
                        </div>

                      </article>
                    );
                  })}
                </div>
              )}
            </section>

          </div>
        )}

        {/* =========================================================
            TAB 2: TENTANG JURNAL & 4 OBJEK PENELITIAN IAT
            ========================================================= */}
        {activeTab === 'tentang' && (
          <div className="space-y-6 animate-in fade-in duration-150 max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-5 shadow-2xs">
              <div className="space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                  Profil Jurnal
                </span>
                <h1 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 pt-1">
                  Tentang Jurnal Studi Al-Qur'an dan Tafsir (JSQT)
                </h1>
                <p className="text-xs text-slate-500 font-medium">
                  Program Studi Ilmu Al-Qur'an dan Tafsir (IAT) · Universitas Annuqayah
                </p>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 border-t border-slate-100 pt-4">
                <p>
                  <strong>Jurnal Studi Al-Qur'an dan Tafsir (JSQT)</strong> adalah media publikasi ilmiah berkala peer-reviewed yang memuat naskah orisinal riset Al-Qur'an dan Tafsir.
                </p>

                <div className="space-y-2.5 pt-1">
                  <h2 className="font-serif font-bold text-sm text-[#0F382C] flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-700" />
                    <span>4 Objek Penelitian Utama IAT:</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-lg border border-emerald-100 bg-emerald-50/40 space-y-1">
                      <strong className="block text-xs font-semibold text-emerald-900">
                        1. Studi Internal Teks
                      </strong>
                      <p className="text-slate-600 text-xs">
                        Kajian redaksi ayat, semantika bahasa, dan tafsir tematik (maudhu'i).
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-sky-100 bg-sky-50/40 space-y-1">
                      <strong className="block text-xs font-semibold text-sky-900">
                        2. Studi Eksternal Teks
                      </strong>
                      <p className="text-slate-600 text-xs">
                        Konteks historis wahyu, asbāb an-nuzūl, qira'at, dan Ulumul Qur'an.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-indigo-100 bg-indigo-50/40 space-y-1">
                      <strong className="block text-xs font-semibold text-indigo-900">
                        3. Studi Tokoh / Mufasir
                      </strong>
                      <p className="text-slate-600 text-xs">
                        Biografi, corak, epistemologi, dan metodologi kitab-kitab tafsir.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-teal-100 bg-teal-50/40 space-y-1">
                      <strong className="block text-xs font-semibold text-teal-900">
                        4. Studi Living Qur'an
                      </strong>
                      <p className="text-slate-600 text-xs">
                        Resepsi dan praktik sosial Al-Qur'an dalam kehidupan masyarakat.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium text-[11px]">ISSN Resmi:</span>
                    <p className="font-semibold text-slate-800">p-ISSN: 2775-4383 | e-ISSN: 2775-4391</p>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium text-[11px]">Penerbit:</span>
                    <p className="text-slate-800">Universitas Annuqayah, Sumenep, Madura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            TAB 3: PETUNJUK PENULIS (GUIDELINES)
            ========================================================= */}
        {activeTab === 'petunjuk' && (
          <div className="space-y-6 animate-in fade-in duration-150 max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-5 shadow-2xs">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                  Panduan Naskah
                </span>
                <h1 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 pt-1">
                  Petunjuk Penulisan Naskah
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pedoman ringkas submit artikel ke JSQT Universitas Annuqayah
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
                <p>1. Naskah merupakan hasil penelitian orisinal yang belum pernah dipublikasikan.</p>
                <p>2. Panjang artikel berkisar antara 5.000–8.000 kata termasuk abstrak dan referensi.</p>
                <p>3. Format rujukan menggunakan Footnote berstandar <em>Chicago Manual of Style 17th Edition</em>.</p>

                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 font-medium">
                  <strong>Bebas Biaya Publikasi:</strong> JSQT tidak mengenakan biaya pendaftaran naskah maupun penerbitan (APC Free).
                </div>

                <div className="pt-2">
                  <a
                    href="https://journal.ua.ac.id/index.php/jsqt/submission/wizard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0F382C] text-white text-xs font-semibold hover:bg-[#185240] transition shadow-2xs active:scale-95"
                  >
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-200" />
                    <span>Submit Naskah di Portal OJS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* =========================================================
          ARTICLE DETAIL & CITATION MODAL
          ========================================================= */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-5 sm:p-6 space-y-4 shadow-2xl max-h-[88vh] overflow-y-auto animate-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-3 gap-2">
              <div className="space-y-1 pr-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getCategoryBadgeClass(selectedArticle.klasifikasi)}`}>
                    {selectedArticle.klasifikasi}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                    {selectedArticle.volume}
                  </span>
                </div>
                <h2 className="font-serif font-bold text-base sm:text-lg text-slate-900 leading-snug pt-1">
                  {selectedArticle.judul}
                </h2>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition shrink-0"
                aria-label="Tutup Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Penulis:
                </span>
                <p className="font-semibold text-slate-800 mt-0.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                  <span>{selectedArticle.penulis}</span>
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Abstrak / Ringkasan:
                </span>
                <div className="text-slate-700 leading-relaxed mt-1 text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">
                  {selectedArticle.ringkasan}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">Halaman & Terbitan</span>
                  <p className="font-medium text-slate-800 text-xs mt-0.5">{selectedArticle.volume.split('(')[0]} · {selectedArticle.halaman}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">Identifier / DOI</span>
                  <p className="font-mono text-emerald-800 text-xs mt-0.5 truncate">{selectedArticle.doi}</p>
                </div>
              </div>

              {/* 1-Click Citation */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Salin Sitasi Cepat:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  <button
                    onClick={() => copyCitation(selectedArticle, 'apa')}
                    className="min-h-[36px] px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition flex items-center justify-center gap-1 active:scale-95"
                  >
                    {copiedFormat === 'apa' ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3 text-slate-500" />}
                    <span>APA 7th</span>
                  </button>

                  <button
                    onClick={() => copyCitation(selectedArticle, 'chicago')}
                    className="min-h-[36px] px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition flex items-center justify-center gap-1 active:scale-95"
                  >
                    {copiedFormat === 'chicago' ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3 text-slate-500" />}
                    <span>Chicago</span>
                  </button>

                  <button
                    onClick={() => copyCitation(selectedArticle, 'harvard')}
                    className="min-h-[36px] px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition flex items-center justify-center gap-1 active:scale-95"
                  >
                    {copiedFormat === 'harvard' ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3 text-slate-500" />}
                    <span>Harvard</span>
                  </button>

                  <button
                    onClick={() => copyCitation(selectedArticle, 'bibtex')}
                    className="min-h-[36px] px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition flex items-center justify-center gap-1 active:scale-95"
                  >
                    {copiedFormat === 'bibtex' ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3 text-slate-500" />}
                    <span>BibTeX</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2 text-xs">
              <a
                href={selectedArticle.aksesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[38px] px-3.5 py-1.5 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg font-medium flex items-center gap-1.5 transition"
              >
                <span>Buka di OJS</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={selectedArticle.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[38px] px-4 py-1.5 bg-[#0F382C] hover:bg-[#185240] text-white rounded-lg font-semibold flex items-center gap-1.5 shadow-2xs transition active:scale-95"
              >
                <Download className="w-3.5 h-3.5 text-emerald-200" />
                <span>Unduh PDF</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* =========================================================
          2. FOOTER (MINIMALIS 2 BARIS SESUAI SPESIFIKASI)
          Logo + JSQT | ISSN: 2775-4383 (p) / 2775-4391 (e) | Portal Resmi OJS
          Hak Cipta © 2026 Moh. Fadhailurrahman (Fadhail). All rights reserved.
          ========================================================= */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-xs text-slate-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center space-y-2 text-center">
          
          {/* Baris 1: Logo + JSQT | ISSN: 2775-4383 (p) / 2775-4391 (e) | Portal Resmi OJS */}
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="relative w-5 h-5 rounded bg-gradient-to-br from-[#0F382C] to-[#0A261E] text-white flex items-center justify-center border border-emerald-700/40 shrink-0">
                <svg className="w-3 h-3 text-emerald-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <span className="font-serif font-bold text-slate-900 tracking-tight">JSQT</span>
            </div>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">
              ISSN: <strong className="text-slate-800 font-mono">2775-4383</strong> (p) / <strong className="text-slate-800 font-mono">2775-4391</strong> (e)
            </span>
            <span className="text-slate-300">|</span>
            <a 
              href="https://journal.ua.ac.id/index.php/jsqt/issue/archive" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#0F382C] hover:text-[#185240] font-semibold underline underline-offset-2 flex items-center gap-1"
            >
              <span>Portal Resmi OJS</span>
              <ExternalLink className="w-3 h-3 text-[#0F382C]" />
            </a>
          </div>

          {/* Baris 2: Hak Cipta */}
          <p className="text-[11px] text-slate-400">
            Hak Cipta © 2026 Moh. Fadhailurrahman (Fadhail). All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}
