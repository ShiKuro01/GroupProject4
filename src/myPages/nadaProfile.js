import React from 'react';
import nada from '../assets/pp_nada.jpg';

const NadaProfile = () => {
  const learningFocus = [
    'Dasar Pemrograman PHP', 
    'HTML5 & CSS3', 
    'React Dasar', 
    'UI/UX Design Dasar', 
    'Logika Algoritma'
  ];

  return (
    <div className="min-h-screen bg-rose-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Container Utama */}
      <div className="max-w-[80%] mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header / Banner Area */}
        <div className="relative h-48 bg-gradient-to-r from-rose-400 to-pink-500">
          <div className="absolute -bottom-16 left-8">
            <img 
              className="h-32 w-32 object-cover rounded-2xl border-4 border-white shadow-xl bg-white" 
              src={nada} 
              alt="Profile Nada" 
            />
          </div>
        </div>

        {/* Info Area */}
        <div className="pt-20 pb-10 px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">Nada Arina</h1>
              <p className="text-rose-600 font-medium text-lg mt-1">Information Technology Student</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <button className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition duration-300 shadow-lg shadow-rose-200">
                Hubungi Saya
              </button>
              <button className="px-5 py-2.5 border-2 border-slate-200 hover:border-slate-300 text-slate-600 font-bold rounded-xl transition duration-300">
                Simpan Profil
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar Details */}
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Informasi Kontak</h3>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">📍</span>
                    <span>Malang, Indonesia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">📧</span>
                    <span>nadaarina@student.ub.ac.id</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">🏛️</span>
                    <span>Universitas Brawijaya</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Fokus Belajar</h3>
                <div className="flex flex-wrap gap-2">
                  {learningFocus.map((item) => (
                    <span key={item} className="px-3 py-1 bg-white border border-slate-200 text-rose-700 text-xs font-bold rounded-lg shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Details */}
            <div className="md:col-span-2 space-y-10">
              {/* Tentang Saya */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-rose-500 w-fit pb-1">Tentang Saya</h2>
                <p className="text-gray-600 leading-relaxed text-lg italic text-justify">
                  "Halo! Saya Nada, mahasiswi Teknologi Informasi semester 2 di Universitas Brawijaya. Saya memiliki ketertarikan besar dalam mengeksplorasi dunia pengembangan web dan desain antarmuka pengguna."
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed text-justify">
                  Perjalanan saya di dunia teknologi dimulai dengan rasa ingin tahu tentang bagaimana sebuah website dapat dibuat menarik sekaligus fungsional. Saat ini, saya sedang fokus mempelajari dasar-dasar pemrograman mulai dari algoritma, HTML/CSS, hingga mulai menyelami ekosistem ReactJS. Saya percaya bahwa kombinasi antara logika yang kuat dan estetika desain adalah kunci untuk menciptakan pengalaman digital yang luar biasa.
                </p>
              </section>

              {/* Pendidikan */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-rose-500 w-fit pb-1">Pendidikan</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1.5 bg-rose-500 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Universitas Brawijaya</h4>
                      <p className="text-sm text-slate-500">D3 Teknologi Informasi • 2025 - Sekarang</p>
                      <p className="mt-1 text-slate-600 text-sm">Sedang menempuh pendidikan dengan fokus pada dasar-dasar IT, pengembangan web, dan manajemen data.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Social Media Link */}
              <section className="bg-rose-50 p-8 rounded-3xl border border-rose-100">
                <div className="flex justify-around items-center gap-4">
                  <a href="#" className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      <span className="text-xl font-bold">G</span>
                    </div>
                    <span className="text-xs mt-2 font-bold text-rose-700">GitHub</span>
                  </a>
                  <a href="#" className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      <span className="text-xl font-bold">L</span>
                    </div>
                    <span className="text-xs mt-2 font-bold text-rose-700">LinkedIn</span>
                  </a>
                  <a href="#" className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                      <span className="text-xl font-bold">I</span>
                    </div>
                    <span className="text-xs mt-2 font-bold text-rose-700">Instagram</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer minimalis */}
      <footer className="mt-12 text-center text-slate-400 text-sm font-medium">
        &copy; 2026 Nada Arina • Dibuat dengan React & Tailwind
      </footer>
    </div>
  );
};

export default NadaProfile;