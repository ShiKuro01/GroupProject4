import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePages from './myPages/profilePages';

function App() {
  return (
    <Router>
      <Routes>
       {<Route path="/azriel" element={<ProfilePages />} />}
      </Routes>
    </Router>
  );
}

export default App;