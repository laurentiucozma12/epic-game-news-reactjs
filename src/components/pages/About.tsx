import berserk200x233 from '../../assets/images/youtube/berserk200x233.webp';
import berserk500x430 from '../../assets/images/youtube/berserk500x430.webp';
import Header from '../Header';
import Footer from '../Footer';

function About() {
  return (
    <>
      <Header />
      <main
        className=" mx-auto mt-10 block max-w-7xl px-6 py-2
                    sm:mt-16
                    lg:px-4 
                    xl:grid xl:grid-cols-12 xl:gap-6
                    2xl:px-0"
      >
        <section
          id="about-us"
          className=" rounded-xl bg-[#3a393a] px-8 py-4
                      xl:col-start-1 xl:col-end-9"
        >
          <div>
            <h3
              className=" mb-1 cursor-pointer text-2xl font-bold duration-700 hover:text-[#b545ff]
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
                Programmer". Back then, I did not know if I will be good enough
                in this field or if I will like it. After being consistent for
                some time, I started liking it more and more.
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
              className=" mb-0 cursor-pointer text-xl font-bold duration-700 hover:text-[#b545ff]
                      sm:text-3xl "
            >
              Our mission
            </h3>
            <p className="mb-3 text-base sm:mb-5 sm:text-xl">
              My mission is to grow as a Gamer and Developer and I want to have
              a fun journey.
            </p>
            <h3
              className=" mb-0 cursor-pointer text-xl font-bold duration-700 hover:text-[#b545ff]
                      sm:text-3xl "
            >
              Our Vission
            </h3>
            <p className="mb-3 text-base sm:mb-5 sm:text-xl">
              I aspire one day to become a Game Developer and create funny video
              games.
            </p>
          </div>
        </section>
        <section
          id="youtube"
          className=" rounded-xl bg-[#3a393a] px-8 py-4
                      xl:col-start-9 xl:col-end-13"
        >
          <a
            href="https://www.youtube.com/@hymerrathebarbarian?sub_confirmation=1"
            target="_blank"
          >
            <h4 className="text-center font-bold duration-700 hover:text-[#ff0000]">
              <span className="text-[30px] xl:text-[39px]">Check out my</span>
              <br />
              <span className="text-[23.5px] xl:text-[30px]">
                YouTube Channel
              </span>
              <br />
              <span className="text-[18px] xl:text-[22.5px]">
                Hymerra the Barbarian
              </span>
            </h4>
            <picture className="flex justify-center">
              <source srcSet={berserk500x430} media="(min-width: 1280px)" />
              <source srcSet={berserk200x233} media="(min-width: 0px)" />
              <img
                src={berserk500x430}
                alt="A-Berserker-Cometh-By-Samwise-Didier"
              />
            </picture>
            <figcaption className="text-center font-bold duration-700 hover:text-[#0EF1FF]">
              <a
                href="https://www.artstation.com/artwork/aR6AJL"
                target="_blank"
              >
                <span className="text-[20px] xl:text-[25px]">
                  A Berserker Cometh
                </span>
                <br />
                <span className="text-[22.5px] xl:text-[27.5px]">
                  By Samwise Didier
                </span>
              </a>
            </figcaption>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
