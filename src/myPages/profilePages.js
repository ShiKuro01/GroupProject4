import React from 'react';

const ProfilePages = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
        {/* Bagian Foto */}
        <div className="md:shrink-0 bg-indigo-500 flex items-center justify-center p-8">
          <img 
            className="h-48 w-48 object-cover rounded-full border-4 border-white shadow-lg" 
            src="https://via.placeholder.com/150" 
            alt="Profile" 
          />
        </div>

        {/* Bagian Detail */}
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Profil Mahasiswa</div>
          <h1 className="mt-1 text-3xl font-extrabold text-gray-900">Moch Azriel AP</h1>
          
          <div className="mt-4 grid grid-cols-1 gap-2 text-gray-600">
            <p><span className="font-bold">Kelas:</span> [Isi Kelas Kamu]</p>
            <p><span className="font-bold">Jurusan:</span> Teknik Informatika / Ilmu Komputer</p>
            <p><span className="font-bold">Domisili:</span> [Isi Kota Kamu]</p>
          </div>

          <hr className="my-6 border-t border-gray-100" />

          {/* Deskripsi Min 100 Kata */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">Tentang Diri</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Halo! Saya Azriel, seorang mahasiswa Ilmu Komputer yang sangat antusias dengan dunia pengembangan perangkat lunak dan desain digital. Saat ini, saya sedang mendalami ReactJS dan Tailwind CSS untuk membangun antarmuka web yang responsif dan estetik. Selain fokus pada perkuliahan, saya juga aktif mengelola **SKRO Studio**, sebuah toko digital di Booth.pm yang berfokus pada pembuatan tekstur 3D untuk avatar VRChat, seperti lini produk **Velum**. Pengalaman ini membantu saya mengasah kreativitas dan pemahaman teknis secara bersamaan. Saya percaya bahwa kombinasi antara logika pemrograman dan estetika desain adalah kunci untuk menciptakan pengalaman pengguna yang luar biasa di masa depan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePages;