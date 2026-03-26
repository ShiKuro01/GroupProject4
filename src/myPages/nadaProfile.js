import React from 'react';

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
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative h-48 bg-gradient-to-r from-rose-400 to-pink-500">
          <div className="absolute -bottom-16 left-8">
            <img 
              className="h-32 w-32 object-cover rounded-2xl border-4 border-white shadow-xl bg-white" 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nada&gender=female" 
              alt="Profile Nada" 
            />
          </div>
        </div>
        <div className="pt-20 pb-10 px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">Nada Arina</h1>
              <p className="text-rose-600 font-medium text-lg mt-1">Information Technology Student</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Fokus Belajar</h3>
                <div className="flex flex-wrap gap-2">
                  {learningFocus.map((item) => (
                    <span key={item} className="px-3 py-1 bg-white border border-slate-200 text-rose-700 text-xs font-bold rounded-lg shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-rose-500 w-fit pb-1">Tentang Saya</h2>
                <p className="text-gray-600 leading-relaxed">
                  Halo! Saya Nada, mahasiswi Teknologi Informasi semester 2. Saya sedang semangat mempelajari dasar pengembangan web.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NadaProfile;