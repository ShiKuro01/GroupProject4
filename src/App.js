import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePages from './myPages/profilePages';
import NaufalProfile from './myPages/naufalProfile';
import NadaProfile from './myPages/nadaProfile';

function App() {
  return (
  <Router>
    
    <div className="bg-blue-500 min-h-screen flex flex-col items-center justify-center space-y-8">
      <h1 className="text-white text-4xl font-bold p-10 bg-black rounded-lg text-center">
        Tugas Kelompok 4 - Berhasil Pakai Tailwind!
      </h1>
      <div className="flex space-x-6">
        <Link to="/azriel" className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-200 text-lg">Azriel</Link>
        <Link to="/naufal" className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-200 text-lg">Naufal</Link>
        <Link to="/nada" className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-200 text-lg">Nada</Link>
      </div>
    </div>
    
      <Routes>
       <Route path="/azriel" element={<ProfilePages />} />
       <Route path="/naufal" element={<NaufalProfile />} />
       <Route path="/nada" element={<NadaProfile />} />
      </Routes>
    </Router>


  );
}

export default App;
