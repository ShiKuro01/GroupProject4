import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePages from './myPages/profilePages';
import NaufalProfile from './myPages/naufalProfile';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/azriel" element={<ProfilePages />} />
       <Route path="/naufal" element={<NaufalProfile />} />
      </Routes>
    </Router>
  );
}

export default App;