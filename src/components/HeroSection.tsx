import video2 from '../assets/videos/video-2.mp4';

function HeroSection() {
  return (
    <div
      className=" mt-10 flex h-[calc(100vh-16px)] w-full flex-col items-center object-contain
                  sm:mt-14"
    >
      <video
        src={video2}
        autoPlay
        loop
        muted
        className="h-[calc(100%-40px)] w-full object-cover"
      />
      {/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div>
        <button>Get Started</button>
        <button>Watch Trailer</button>
      </div> */}
    </div>
  );
}

export default HeroSection;
