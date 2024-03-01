import Header from '../Header';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import belf from '../../assets/images/transparent-background/belf.png';
import arthas from '../../assets/images/transparent-background/arthas.png';
import Posts from './Posts';

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div
          className=" mx-auto max-w-7xl
                      px-6 
                      lg:px-4 
                      xl:grid xl:grid-cols-12 xl:gap-6 xl:pt-8
                      2xl:px-0"
        >
          <section id="news" className="xl:col-start-1 xl:col-end-9">
            <Posts />
            <Posts />
            <Posts />
            <Posts />
          </section>
          <section
            id="youtube"
            className="hidden xl:col-start-9 xl:col-end-13 xl:block"
          >
            <div className="flex flex-col">
              <div className="m-auto flex h-full w-full">
                <img
                  src={belf}
                  alt="blood elf"
                  className="mb-auto max-h-full max-w-full"
                />
              </div>
              <div className="m-auto flex h-full w-full">
                <img
                  src={arthas}
                  alt="arthas"
                  className="mt-auto max-h-full max-w-full"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
