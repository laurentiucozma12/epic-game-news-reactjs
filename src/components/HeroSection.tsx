import video2 from '../assets/videos/video-2.mp4';
import imgHome from '../assets/images/img-home.jpg';

function HeroSection() {
  return (
    <div
      className="flex h-screen w-full flex-col items-center object-contain"
      style={{
        background: `url(${imgHome}) center center/cover no-repeat`,
      }}
    >
      <video
        src={video2}
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div>
        <button>Get Started</button>
        <button>Watch Trailer</button>
      </div>
    </div>
  );
}

export default HeroSection;
