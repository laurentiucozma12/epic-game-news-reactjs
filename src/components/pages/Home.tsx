import Header from '../Header';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import belf from '../../assets/images/transparent-background/belf.png';
import arthas from '../../assets/images/transparent-background/arthas.png';
import Posts from './Posts';
import YouTube from '../YouTube';

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
          <section id="news" className="xl:col-start-1 xl:col-end-9">
            <Posts />
          </section>
          <section
            id="youtube"
            className="ml-6 hidden xl:col-start-9 xl:col-end-13 xl:flex xl:flex-col xl:justify-between"
          >
            <div className="rounded-xl border-4 border-solid border-[#EA6A2E] bg-[#0f100fe6] px-2 pb-2">
              <img src={belf} alt="blood elf" />
            </div>
            <div className="hidden xl:block">
              <YouTube />
            </div>
            <div className="rounded-xl border-4 border-solid border-[#44CDE2] bg-[#0f100fe6] px-2 pt-2">
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
