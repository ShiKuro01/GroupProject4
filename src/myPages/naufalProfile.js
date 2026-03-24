import React from 'react';

const NaufalProfile = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
        {/* Bagian Foto */}
        <div className="md:shrink-0 bg-teal-500 flex items-center justify-center p-8">
          <img 
            className="h-48 w-48 object-cover rounded-full border-4 border-white shadow-lg" 
            src="https://via.placeholder.com/150" 
            alt="Profile Naufal" 
          />
        </div>

        {/* Bagian Detail */}
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-teal-600 font-semibold">Profil Mahasiswa</div>
          <h1 className="mt-1 text-3xl font-extrabold text-gray-900">Muhammad Naufal</h1>
          
          <div className="mt-4 grid grid-cols-1 gap-2 text-gray-600">
            <p><span className="font-bold">Kelas:</span> [Isi Kelas Kamu]</p>
            <p><span className="font-bold">Jurusan:</span> Teknik Informatika / Ilmu Komputer</p>
            <p><span className="font-bold">Domisili:</span> [Isi Kota Kamu]</p>
          </div>

          <hr className="my-6 border-t border-gray-100" />

          {/* Deskripsi */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">Tentang Diri</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Halo! Saya Naufal, mahasiswa Teknik Informatika yang memiliki semangat tinggi dalam mempelajari pengembangan website dan solusi teknologi modern. Saya sangat tertarik mengeksplorasi ekosistem web khususnya penggunaan framework React dan library Tailwind CSS untuk menciptakan interface yang fungsional dan menarik secara visual. Selain kegiatan akademik, saya juga gemar mengeksplorasi berbagai tren terbaru di bidang teknologi informasi untuk terus memperluas wawasan dan mengasah kemampuan problem solving saya. Saya percaya bahwa inovasi lahir dari kemauan untuk terus mencoba dan konsistensi dalam berkarya. Proyek ini merupakan salah satu sarana bagi saya untuk terus belajar dan berkolaborasi dalam menghasilkan karya digital yang berkualitas di masa depan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NaufalProfile;
