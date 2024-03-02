import berserk200x233 from '../assets/images/youtube/berserk200x233.webp';
import berserk500x430 from '../assets/images/youtube/berserk500x430.webp';

function YouTube() {
  return (
    <>
      <section
        id="youtube"
        className=" mx-auto mt-2 flex w-fit flex-col justify-center rounded-xl border-4 border-solid border-[#551b7c] bg-[#0f100fe6] px-2 py-2
                    sm:px-8 sm:py-4
                    xl:col-start-9 xl:col-end-13 xl:mt-0"
      >
        <div>
          <a
            href="https://www.youtube.com/@hymerrathebarbarian?sub_confirmation=1"
            target="_blank"
          >
            <h4 className="text-center font-bold duration-700 hover:text-[#ff0000]">
              <span className="sm:text-[30px] xl:text-[39px]">
                Check out my
              </span>
              <br />
              <span className="sm:text-[23.5px] xl:text-[30px]">
                YouTube Channel
              </span>
              <br />
              <span className="sm:text-[18px] xl:text-[22.5px]">
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
          </a>
          <figcaption className="text-center font-bold duration-700 hover:text-[#0EF1FF]">
            <a href="https://www.artstation.com/artwork/aR6AJL" target="_blank">
              <span className="sm:text-[20px] xl:text-[25px]">
                A Berserker Cometh
              </span>
              <br />
              <span className="sm:text-[22.5px] xl:text-[27.5px]">
                By Samwise Didier
              </span>
            </a>
          </figcaption>
        </div>
      </section>
    </>
  );
}

export default YouTube;
