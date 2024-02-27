import video2 from '../assets/videos/video-2.mp4';
import Anchor from './Anchor';

function HeroSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center object-contain">
      <video
        src={video2}
        autoPlay
        loop
        muted
        className="h-screen w-full object-cover"
      />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="absolute flex">
        <Anchor
          to="/home"
          name={'News'}
          className="mr-2 w-[150px] bg-[#a335ee] text-lg font-bold"
        />
        <Anchor
          to="/home"
          name={'YouTube'}
          className="ml-2 w-[150px] bg-[#f00] text-lg font-bold"
        />
      </div>
    </div>
  );
}

export default HeroSection;
