import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NoPage from './components/pages/NoPage';
import Post from './components/pages/Post';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/epic-game-news-reactjs/" element={<Home />} />
          <Route path="/epic-game-news-reactjs/home" element={<Home />} />
          <Route path="/epic-game-news-reactjs/about" element={<About />} />
          <Route path="/epic-game-news-reactjs/contact" element={<Contact />} />
          <Route path="/epic-game-news-reactjs/:slug" element={<Post />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
