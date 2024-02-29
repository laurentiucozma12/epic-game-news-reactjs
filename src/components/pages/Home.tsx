import Header from '../Header';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import arthas from '../../assets/images/transparent-background/arthas.png';

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div
          className=" mx-auto max-w-7xl
                      px-6 lg:px-4 xl:grid xl:grid-cols-12 xl:gap-6 2xl:px-0"
        >
          <section id="news" className="xl:col-start-1 xl:col-end-9">
            <h1 className="text-5xl ">NEWS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem itaque nesciunt fugiat maxime earum quisquam? Enim,
              asperiores tenetur accusamus accusantium iusto nemo ducimus
              delectus impedit temporibus, modi odio, ad voluptas. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Voluptatem itaque
              nesciunt fugiat maxime earum quisquam? Enim, asperiores tenetur
              accusamus accusantium iusto nemo ducimus delectus impedit
              temporibus, modi odio, ad voluptas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatem itaque nesciunt fugiat
              maxime earum quisquam? Enim, asperiores tenetur accusamus
              accusantium iusto nemo ducimus delectus impedit temporibus, modi
              odio, ad voluptas. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem itaque nesciunt fugiat maxime earum
              quisquam? Enim, asperiores tenetur accusamus accusantium iusto
              nemo ducimus delectus impedit temporibus, modi odio, ad voluptas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem itaque nesciunt fugiat maxime earum quisquam? Enim,
              asperiores tenetur accusamus accusantium iusto nemo ducimus
              delectus impedit temporibus, modi odio, ad voluptas. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Voluptatem itaque
              nesciunt fugiat maxime earum quisquam? Enim, asperiores tenetur
              accusamus accusantium iusto nemo ducimus delectus impedit
              temporibus, modi odio, ad voluptas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatem itaque nesciunt fugiat
              maxime earum quisquam? Enim, asperiores tenetur accusamus
              accusantium iusto nemo ducimus delectus impedit temporibus, modi
              odio, ad voluptas. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem itaque nesciunt fugiat maxime earum
              quisquam? Enim, asperiores tenetur accusamus accusantium iusto
              nemo ducimus delectus impedit temporibus, modi odio, ad voluptas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem itaque nesciunt fugiat maxime earum quisquam? Enim,
              asperiores tenetur accusamus accusantium iusto nemo ducimus
              delectus impedit temporibus, modi odio, ad voluptas. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Voluptatem itaque
              nesciunt fugiat maxime earum quisquam? Enim, asperiores tenetur
              accusamus accusantium iusto nemo ducimus delectus impedit
              temporibus, modi odio, ad voluptas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatem itaque nesciunt fugiat
              maxime earum quisquam? Enim, asperiores tenetur accusamus
              accusantium iusto nemo ducimus delectus impedit temporibus, modi
              odio, ad voluptas. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem itaque nesciunt fugiat maxime earum
              quisquam? Enim, asperiores tenetur accusamus accusantium iusto
              nemo ducimus delectus impedit temporibus, modi odio, ad voluptas.
            </p>
          </section>
          <section id="youtube" className="xl:col-start-9 xl:col-end-13">
            <h1>youtube</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem itaque nesciunt fugiat maxime earum quisquam? Enim,
              asperiores tenetur accusamus accusantium iusto nemo ducimus
              delectus impedit temporibus, modi odio, ad voluptas. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Voluptatem itaque
              nesciunt fugiat maxime earum quisquam? Enim, asperiores tenetur
              accusamus accusantium iusto nemo ducimus delectus impedit
              temporibus, modi odio, ad voluptas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatem itaque nesciunt fugiat
              maxime earum quisquam? Enim, asperiores tenetur accusamus
              accusantium iusto nemo ducimus delectus impedit temporibus, modi
              odio, ad voluptas. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem itaque nesciunt fugiat maxime earum
              quisquam? Enim, asperiores tenetur accusamus accusantium iusto
              nemo ducimus delectus impedit temporibus, modi odio, ad voluptas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem itaque nesciunt fugiat maxime earum quisquam? Enim,
              asperiores tenetur accusamus accusantium iusto nemo ducimus
              delectus impedit temporibus, modi odio, ad voluptas. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Voluptatem itaque
              nesciunt fugiat maxime earum quisquam? Enim, asperiores tenetur
              accusamus accusantium iusto nemo ducimus delectus impedit
            </p>
          </section>
        </div>
        {/* <Parallax
          pages={4}
          style={{ top: '0', left: '0' }}
          className="w-full object-contain"
        >
          <ParallaxLayer offset={2} speed={0} factor={1}>
            <img className="absolute bottom-0 right-0 w-[40vw]" src={arthas} />
          </ParallaxLayer>
        </Parallax> */}
      </main>
      <Footer />
    </>
  );
}

export default Home;
