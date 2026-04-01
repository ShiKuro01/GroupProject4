import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfilePages from './myPages/profilePages';
import NaufalProfile from './myPages/naufalProfile';
import NadaProfile from './myPages/nadaProfile';

// home page
const Home = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col items-center justify-center p-6">
      
      {/* Header Section */}
      <h1 className="text-white text-4xl md:text-5xl font-extrabold p-8 bg-black/90 rounded-2xl text-center mb-12 shadow-2xl border-b-4 border-blue-400">
        Group 4 Task
        <span className="block text-xl md:text-2xl text-blue-400 mt-3 font-medium">
          Completed with tailwind!
        </span>
      </h1>
      
      {/* Navigation Buttons (Hanya muncul di halaman utama) */}
      <div className="flex flex-col md:flex-row gap-6">
        <Link 
          to="/azriel" 
          className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 transition-transform duration-300 text-xl text-center border-2 border-transparent hover:border-blue-300"
        >
          Azriel Profile
        </Link>
        <Link 
          to="/naufal" 
          className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 transition-transform duration-300 text-xl text-center border-2 border-transparent hover:border-blue-300"
        >
          Naufal Profile
        </Link>
        <Link 
          to="/nada" 
          className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 transition-transform duration-300 text-xl text-center border-2 border-transparent hover:border-blue-300"
        >
          Nada Profile
        </Link>
      </div>

    </div>
  );
};

// main app
function App() {
  return (
    <Router>
      <Routes>
        {/* Rute Utama memanggil komponen Home di atas */}
        <Route path="/" element={<Home />} />
        
        {/* Rute Profil langsung memanggil halamannya secara penuh */}
        <Route path="/azriel" element={<ProfilePages />} />
        <Route path="/naufal" element={<NaufalProfile />} />
        <Route path="/nada" element={<NadaProfile />} />
      </Routes>
    </Router>
  );
}

export default App;