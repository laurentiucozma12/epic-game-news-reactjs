import Header from '../Header';
import Footer from '../Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';

function Contact() {
  return (
    <>
      <Header />
      <main className="mx-auto mt-10 max-w-7xl px-6 py-2 sm:mt-14 lg:px-4 2xl:px-0">
        <Parallax pages={4}>
          <ParallaxLayer
            offset={1}
            speed={1}
            factor={1}
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: 'cover',
            }}
          >
            content1
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={2}
            factor={2}
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: 'cover',
            }}
          >
            content1
          </ParallaxLayer>
        </Parallax>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
