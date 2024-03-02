import Header from '../Header';
import Footer from '../Footer';
import YouTube from '../YouTube';
import { useLocation } from 'react-router-dom';

function Post() {
  const { state } = useLocation();
  const post = state.post;

  return (
    <>
      <Header />
      <main className="h-max overflow-hidden">
        <div
          className=" mx-2 mb-2 mt-11 block max-w-7xl
                      sm:mt-16
                      xl:mx-auto xl:mb-6 xl:mt-24 xl:grid xl:grid-cols-12 xl:gap-6"
        >
          <div className="xl:col-start-1 xl:col-end-9">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <h4>{post.excerpt}</h4>
            <img className="py-2 xl:py-3" src={post.img} alt={post.alt} />
            <p>{post.description}</p>
          </div>
          <YouTube />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Post;
