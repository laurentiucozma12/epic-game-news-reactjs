import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import VideoGames from './components/pages/VideoGames';
import Categories from './components/pages/Categories';
import Platforms from './components/pages/Platforms';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NoPage from './components/pages/NoPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/epic-game-news-reactjs/*"
            element={<Navigate to="/home" />}
          />
          <Route path="/video-games" element={<VideoGames />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
