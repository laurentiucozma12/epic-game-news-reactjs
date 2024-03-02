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
          className=" mx-auto max-w-7xl px-3 pt-6
                      sm:px-6 sm:pt-6
                      lg:px-8 lg:pt-8
                      xl:grid xl:grid-cols-12
                      2xl:px-0"
        >
          <section id="news" className="xl:col-span-8">
            <Posts />
          </section>
          <section
            id="youtube"
            className="hidden flex-col xl:col-span-4 xl:flex"
          >
            <div className="flex-1 lg:pt-[6.5rem]">
              <img src={belf} alt="blood elf" />
            </div>
            <div className="flex-initial">
              <img src={arthas} alt="arthas" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
