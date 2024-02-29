import video1280x720 from '../assets/videos/dragonflight-video1280x720.mp4';
import video640x480 from '../assets/videos/dragonflight-video640x480.mp4';
import Anchor from './Anchor';

function HeroSection() {
  let video;
  if (innerWidth > 640) {
    video = video1280x720;
  } else {
    video = video640x480;
  }
  return (
    <div className="flex w-full flex-col items-center justify-center object-contain">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="h-screen w-full object-cover"
      />
      <div className="absolute rounded-lg bg-[#0f100fe6] p-4 sm:p-6 xl:p-8">
        <h1
          className=" mb-1 text-center text-xl font-semibold
                      sm:mb-2 sm:text-3xl sm:font-bold
                      xl:mb-3 xl:text-4xl xl:font-extrabold"
        >
          ADVENTURE AWAITS
        </h1>
        <p
          className=" mb-1 text-center text-base font-medium
                      sm:mb-2 sm:text-2xl sm:font-semibold
                      xl:mb-3 xl:text-3xl xl:font-bold"
        >
          What are you waiting for?
        </p>
        <div className="flex justify-between">
          <Anchor
            to="#news"
            name={'News'}
            className=" mr-2 w-[95px] border-4 border-solid border-[#551b7c] bg-[#a335ee] text-sm font-bold hover:border-[#682197] hover:bg-[#b545ff]
                        sm:mr-3 sm:w-[145px] sm:py-3 sm:text-xl
                        xl:mr-4 xl:w-[175px] xl:py-4 xl:text-2xl"
          />
          <Anchor
            to="https://www.youtube.com/@hymerrathebarbarian?sub_confirmation=1"
            target={'_blank'}
            name={'YouTube'}
            className=" ml-2 w-[95px] border-4 border-solid border-[#8f0000] bg-[#ff0000] text-sm font-bold hover:border-[#ad0000] hover:bg-[#ff0e0e] 
                        sm:ml-3 sm:w-[145px] sm:py-3 sm:text-xl
                        xl:ml-4 xl:w-[175px] xl:py-4 xl:text-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
