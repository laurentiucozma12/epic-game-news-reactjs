import Header from '../Header';
import Footer from '../Footer';
import YouTube from '../YouTube';

function About() {
  return (
    <>
      <Header />
      <main className="h-max overflow-hidden">
        <div
          className=" mx-2 mb-2 mt-14 block max-w-7xl
                      sm:mt-16
                      xl:mx-auto xl:mb-6 xl:mt-24 xl:grid xl:grid-cols-12 xl:gap-6"
        >
          <section
            id="about-us"
            className=" rounded-xl border-4 border-solid border-[#551b7c] bg-[#0f100fe6]  px-2 py-2
                        sm:px-8 sm:py-4
                        xl:col-start-1 xl:col-end-9 xl:mt-0 xl:p-8"
          >
            <div>
              <h3
                className=" mb-1 w-fit text-2xl font-bold text-[#a335ee] duration-700 hover:text-[#b545ff]
                            sm:text-5xl"
              >
                Who are we?
              </h3>
              <h4 className="mb-1 text-base font-normal sm:mb-3 sm:text-xl">
                Hello, fellow Gamers! I'm a simple guy, with a passion for video
                games and programming.
              </h4>
              <ul className="mb-2 ms-5 sm:mb-5">
                <li className="mb-1 list-disc text-base sm:mb-3 sm:text-lg">
                  In November 2021 I started my journey as a "Self-Taught
                  Programmer". Back then, I did not know if I will be good
                  enough in this field or if I will like it. After being
                  consistent for some time, I started liking it more and more.
                </li>
                <li className="mb-1 list-disc text-base sm:mb-3 sm:text-lg">
                  In June 2023 I decided I should learn more about Web
                  Development, and I thought it's a good idea making something I
                  like. So I decided to create this blog where I'm writing about
                  the games I play or about the news in the Gaming Community.
                </li>
                <li className="mb-1 list-disc text-base sm:mb-3 sm:text-lg">
                  In November 2023 I decided to start my &nbsp;
                  <a
                    className="font-bold duration-700 hover:text-[#b545ff]"
                    target="_blank"
                    href="https://www.youtube.com/@hymerrathebarbarian?sub_confirmation=1"
                  >
                    Gaming Channel Hymerra the Barbarian
                  </a>
                  , where you can watch my Gameplays.
                </li>
              </ul>
              <h3
                className="mb-0 w-fit text-xl font-bold text-[#a335ee] duration-700 hover:text-[#b545ff]
                      sm:text-3xl "
              >
                Our mission
              </h3>
              <p className="mb-3 text-base sm:mb-5 sm:text-xl">
                My mission is to grow as a Gamer and Developer and I want to
                have a fun journey.
              </p>
              <h3
                className=" mb-0 w-fit text-xl font-bold text-[#a335ee] duration-700 hover:text-[#b545ff]
                      sm:text-3xl "
              >
                Our Vission
              </h3>
              <p className="text-base sm:text-xl">
                I aspire one day to become a Game Developer and create funny
                video games.
              </p>
            </div>
          </section>
          <YouTube />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
