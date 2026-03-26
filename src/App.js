import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePages from './myPages/profilePages';
import NaufalProfile from './myPages/naufalProfile';
import NadaProfile from './myPages/nadaProfile';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/azriel" element={<ProfilePages />} />
       <Route path="/naufal" element={<NaufalProfile />} />
       <Route path="/nada" element={<NadaProfile />} />
      </Routes>
    </Router>
  );
}

export default App;