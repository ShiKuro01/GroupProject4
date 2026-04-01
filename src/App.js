import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePages from './myPages/profilePages';
import NaufalProfile from './myPages/naufalProfile';
import NadaProfile from './myPages/nadaProfile';

function App() {
  return (
  <Router>
    
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold p-10 bg-black rounded-lg">
        Tugas Kelompok 4 - Berhasil Pakai Tailwind!
      </h1>
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
