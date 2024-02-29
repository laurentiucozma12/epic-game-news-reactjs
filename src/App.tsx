import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Route path="/epic-game-news-reactjs/" element={<Home />} />
          <Route path="/epic-game-news-reactjs/home" element={<Home />} />
          <Route
            path="/epic-game-news-reactjs/video-games"
            element={<VideoGames />}
          />
          <Route
            path="/epic-game-news-reactjs/categories"
            element={<Categories />}
          />
          <Route
            path="/epic-game-news-reactjs/platforms"
            element={<Platforms />}
          />
          <Route path="/epic-game-news-reactjs/about" element={<About />} />
          <Route path="/epic-game-news-reactjs/contact" element={<Contact />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
