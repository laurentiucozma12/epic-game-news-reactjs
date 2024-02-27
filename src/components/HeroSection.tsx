import video from '../assets/videos/dragonflight-video.mp4';
import Anchor from './Anchor';

function HeroSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center object-contain">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="h-screen w-full object-cover"
      />
      <div className="absolute rounded-lg bg-[#0f100fe6] p-8">
        <h1
          className=" mb-2 text-center text-xl font-semibold
                      sm:mb-3 sm:text-4xl sm:font-extrabold"
        >
          ADVENTURE AWAITS
        </h1>
        <p
          className=" mb-2 text-center text-base font-medium
                      sm:mb-3 sm:text-3xl sm:font-bold"
        >
          What are you waiting for?
        </p>
        <div className="flex">
          <Anchor
            to="/home"
            name={'News'}
            className=" mr-2 w-[95px] border-4 border-solid border-[#551b7c] bg-[#a335ee] text-sm font-bold hover:border-[#682197] hover:bg-[#b545ff]
                        sm:mr-4 sm:w-[175px] sm:py-4 sm:text-2xl"
          />
          <Anchor
            to="/home"
            name={'YouTube'}
            className=" ml-2 w-[95px] border-4 border-solid border-[#8f0000] bg-[#ff0000] text-sm font-bold hover:border-[#ad0000] hover:bg-[#ff0e0e] 
                        sm:ml-4 sm:w-[175px] sm:py-4 sm:text-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
