import React from 'react';
import profilePicture from '../assets/pp_azriel.JPG';

const ProfilePages = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 font-sans">
      {/* Main Container */}
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Banner */}
        <div className="h-32 bg-teal-500 relative">
          {/* Profile Picture (Absolute Position) */}
          <div className="absolute -bottom-12 left-8 w-28 h-28 bg-white rounded-2xl border-4 border-white shadow-sm overflow-hidden flex items-center justify-center">
            <img 
              src={profilePicture} 
              alt="Moch Azriel AP" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header */}
        <div className="pt-16 px-8 pb-6 flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-gray-100">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Moch Azriel Allyandra Permana</h1>
            <p className="text-teal-600 font-medium mt-1">Web Developer & Illustrator</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-lg font-medium transition-colors text-sm">
              Contact me
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2 rounded-lg font-medium transition-colors text-sm">
              Save Profile
            </button>
          </div>
        </div>

        {/* bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          
          {/* Left Column: Info & Skill */}
          <div className="col-span-1 space-y-6">
            
            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 text-lg">📍</span>
                  Karawang, Indonesia
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 text-lg">📧</span>
                  mochazriel1406@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 text-lg">🏛️</span>
                  Universitas Brawijaya
                </li>
              </ul>
            </div>

            {/* Skill & Tools */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Skill & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['ReactJS', 'Tailwind CSS', 'JavaScript', 'Clip Studio Paint', 'Unity', 'Git/GitHub'].map((skill) => (
                  <span key={skill} className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-md font-medium shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* about me and education tabs */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            
            {/* about me */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">About me</h2>
              <p className="text-gray-600 text-sm leading-relaxed text-justify mb-3 italic font-medium">
                "Hello! I'm Azriel, a Computer Science student with a great passion for bridging programming logic with digital visual aesthetics."
              </p>
              <p className="text-gray-600 text-sm leading-relaxed text-justify mb-3">
                Currently, I am focusing on mastering front-end development using ReactJS and Tailwind CSS to create responsive and intuitive web interfaces. My journey in the world of technology is not just about writing code, but also involves creativity in the world of digital art. I manage SKRO Studio, a digital goods shop on the Booth.pm platform, where I design high-quality textures for 3D avatars.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Managing this independent project has trained me to understand user needs, pay attention to design details, and deliver products that are both functional and appealing. By combining my academic background in information technology and practical experience in digital design, I aspire to continue innovating in solving real-world problems through technology.
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
              <div className="border-l-4 border-teal-500 pl-4 py-1">
                <h4 className="text-gray-900 font-bold">Universitas Brawijaya</h4>
                <p className="text-gray-500 text-xs mt-1">D3 Teknologi Informasi • 2025 - now</p>
                <p className="text-gray-600 text-sm mt-2">
                  Focusing on software engineering, data structures, and web application development.
                </p>
              </div>
            </section>

            {/* Social Media */}
            <div className="bg-teal-50/50 rounded-xl p-6 border border-teal-100 mt-8 flex justify-center gap-12">
              {[
                { name: 'GitHub', url: 'https://github.com/ShiKuro01', icon: 'G' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/moch-azriel-allyandra-permana-01ab83377/', icon: 'L' },
                { name: 'SKRO Studio', url: 'https://skrostudio.booth.pm/', icon: 'S' }
              ].map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group cursor-pointer outline-none">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-gray-700 shadow-sm border border-gray-200 group-hover:border-teal-500 group-hover:text-teal-500 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-500 group-hover:text-teal-600 transition-colors duration-300">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePages;