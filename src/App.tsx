import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoGames from './pages/VideoGames';
import Categories from './pages/Categories';
import Platforms from './pages/Platforms';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/epic-game-news-reactjs/" element={<Home />} />
            <Route path="/video-games" element={<VideoGames />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
