import React from 'react';
import profilePicture from '../assets/pp_naufal.jpg';

const NaufalProfile = () => {
  const skills = ['ReactJS', 'Tailwind CSS', 'Kotlin', 'PostgreSQL', 'Laravel', 'Docker'];

  return (
    <div className="min-h-screen bg-slate-100 py-2 sm:px-6 lg:px-8">
      {/* Container Utama */}
      <div className="max-w-[80%] mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header / Banner Area */}
        <div className="relative h-48 bg-gradient-to-r from-indigo-600 to-violet-700">
          <div className="absolute -bottom-16 left-8">
            <img 
              className="h-32 w-32 object-cover rounded-2xl border-4 border-white shadow-xl bg-white" 
              src={profilePicture} 
              alt="Profile Naufal" 
            />
          </div>
        </div>

        {/* Info Area */}
        <div className="pt-20 pb-10 px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">Naufal Rakha Putra</h1>
              <p className="text-indigo-600 font-medium text-lg mt-1">Full Stack, Game, & Mobile Developer</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition duration-300 shadow-lg shadow-indigo-200">
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
                    <span>Bukittinggi, Indonesia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">📧</span>
                    <span>naufalrakha2712@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">🏛️</span>
                    <span>Universitas Brawijaya</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Skill & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-lg shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Details */}
            <div className="md:col-span-2 space-y-10">
              {/* Tentang Diri */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-indigo-500 w-fit pb-1">Tentang Diri</h2>
                <p className="text-gray-600 leading-relaxed text-justify text-lg italic">
                  "Halo! Saya Naufal, mahasiswa Teknologi Informasi yang memiliki passion dalam membangun ekosistem digital mulai dari Web, Game, hingga Mobile (Android Studio & Kotlin)."
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed text-justify">
                  Saya memiliki ketertarikan mendalam dalam eksplorasi teknologi digital modern. Saat ini saya sedang berfokus untuk menguasai Full Stack Development, pengembangan mobile menggunakan Kotlin, serta eksplorasi dalam industri game. Perjalanan saya di dunia teknologi dimulai dengan rasa penasaran terhadap bagaimana aplikasi dapat menyelesaikan masalah nyata. Saya menggabungkan logika teknis dan kreativitas untuk menciptakan pengalaman pengguna yang mulus di berbagai platform.
                </p>
              </section>

              {/* Pendidikan */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-indigo-500 w-fit pb-1">Pendidikan</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1.5 bg-indigo-500 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Universitas Brawijaya</h4>
                      <p className="text-sm text-slate-500">D3 Teknologi Informasi • 2025 - Sekarang</p>
                      <p className="mt-1 text-slate-600 text-sm">Berfokus pada pengembangan aplikasi web, manajemen basis data, dan teknologi.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Social Media Link */}
              <section className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                <div className="flex justify-around items-center gap-4">
                  <a href="https://github.com/sternnaufal" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      <span className="text-xl font-bold">G</span>
                    </div>
                    <span className="text-xs mt-2 font-bold text-indigo-700">GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/naufal-rakha-putra-a0130332a" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      <span className="text-xl font-bold">L</span>
                    </div>
                    <span className="text-xs mt-2 font-bold text-indigo-700">LinkedIn</span>
                  </a>
                  <a href="https://naufalrakha.my.id" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      <span className="text-xl font-bold">W</span>
                    </div>
                    <span className="text-xs mt-2 font-bold text-indigo-700">Website</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer minimalis */}
      <footer className="mt-12 text-center text-slate-400 text-sm font-medium">
        &copy; 2026 Naufal Rakha Putra • Dibuat dengan React & Tailwind
      </footer>
    </div>
  );
};

export default NaufalProfile;
