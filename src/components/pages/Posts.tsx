import img1 from '../../assets/images/900x506/img-1.webp';
import img2 from '../../assets/images/900x506/img-2.webp';
import img3 from '../../assets/images/900x506/img-3.webp';
import img4 from '../../assets/images/900x506/img-4.webp';
import img5 from '../../assets/images/900x506/img-5.webp';
import img6 from '../../assets/images/900x506/img-6.webp';
import img7 from '../../assets/images/900x506/img-7.webp';
import img8 from '../../assets/images/900x506/img-8.webp';
import img9 from '../../assets/images/900x506/img-9.webp';
import img1_450x254 from '../../assets/images/450x254/img-1.webp';
import img2_450x254 from '../../assets/images/450x254/img-2.webp';
import img3_450x254 from '../../assets/images/450x254/img-3.webp';
import img4_450x254 from '../../assets/images/450x254/img-4.webp';
import img5_450x254 from '../../assets/images/450x254/img-5.webp';
import img6_450x254 from '../../assets/images/450x254/img-6.webp';
import img7_450x254 from '../../assets/images/450x254/img-7.webp';
import img8_450x254 from '../../assets/images/450x254/img-8.webp';
import img9_450x254 from '../../assets/images/450x254/img-9.webp';
import { Link } from 'react-router-dom';

function Posts() {
  const posts = [
    {
      id: 1,
      img_900x506: img1,
      img_450x254: img1_450x254,
      alt: 'img1',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      slug: '1title-lorem-ipsum-dolor-sit-amet-consectetur',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
      description:
        'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam delectus explicabo facere perferendis tenetur aliquid, eveniet impedit at quos fugit doloribus? Sequi dolorem nesciunt enim eius explicabo omnis dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quod, accusamus eum eius labore veniam est consequatur quae ut quibusdam. Mollitia, ex repudiandae accusantium ipsa debitis veritatis rem ad minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus ea voluptas fugiat veniam magni ex, obcaecati suscipit expedita quaerat corporis enim, sint accusamus aliquid omnis debitis ad dolorem? Mollitia.',
    },
    {
      id: 2,
      img_900x506: img2,
      img_450x254: img2_450x254,
      alt: 'img2',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      slug: '2title-lorem-ipsum-dolor-sit-amet-consectetur',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
      description:
        'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam delectus explicabo facere perferendis tenetur aliquid, eveniet impedit at quos fugit doloribus? Sequi dolorem nesciunt enim eius explicabo omnis dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quod, accusamus eum eius labore veniam est consequatur quae ut quibusdam. Mollitia, ex repudiandae accusantium ipsa debitis veritatis rem ad minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus ea voluptas fugiat veniam magni ex, obcaecati suscipit expedita quaerat corporis enim, sint accusamus aliquid omnis debitis ad dolorem? Mollitia.',
    },
    {
      id: 3,
      img_900x506: img3,
      img_450x254: img3_450x254,
      alt: 'img3',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      slug: '3title-lorem-ipsum-dolor-sit-amet-consectetur',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
      description:
        'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam delectus explicabo facere perferendis tenetur aliquid, eveniet impedit at quos fugit doloribus? Sequi dolorem nesciunt enim eius explicabo omnis dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quod, accusamus eum eius labore veniam est consequatur quae ut quibusdam. Mollitia, ex repudiandae accusantium ipsa debitis veritatis rem ad minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus ea voluptas fugiat veniam magni ex, obcaecati suscipit expedita quaerat corporis enim, sint accusamus aliquid omnis debitis ad dolorem? Mollitia.',
    },
    {
      id: 4,
      img_900x506: img4,
      img_450x254: img4_450x254,
      alt: 'img4',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      slug: '4title-lorem-ipsum-dolor-sit-amet-consectetur',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
      description:
        'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam delectus explicabo facere perferendis tenetur aliquid, eveniet impedit at quos fugit doloribus? Sequi dolorem nesciunt enim eius explicabo omnis dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quod, accusamus eum eius labore veniam est consequatur quae ut quibusdam. Mollitia, ex repudiandae accusantium ipsa debitis veritatis rem ad minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus ea voluptas fugiat veniam magni ex, obcaecati suscipit expedita quaerat corporis enim, sint accusamus aliquid omnis debitis ad dolorem? Mollitia.',
    },
    {
      id: 5,
      img_900x506: img5,
      img_450x254: img5_450x254,
      alt: 'img5',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      slug: '5title-lorem-ipsum-dolor-sit-amet-consectetur',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
      description:
        'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam delectus explicabo facere perferendis tenetur aliquid, eveniet impedit at quos fugit doloribus? Sequi dolorem nesciunt enim eius explicabo omnis dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quod, accusamus eum eius labore veniam est consequatur quae ut quibusdam. Mollitia, ex repudiandae accusantium ipsa debitis veritatis rem ad minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus ea voluptas fugiat veniam magni ex, obcaecati suscipit expedita quaerat corporis enim, sint accusamus aliquid omnis debitis ad dolorem? Mollitia.',
    },
    {
      id: 6,
      img_900x506: img6,
      img_450x254: img6_450x254,
      alt: 'img6',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      slug: '6title-lorem-ipsum-dolor-sit-amet-consectetur',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
      description:
        'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam delectus explicabo facere perferendis tenetur aliquid, eveniet impedit at quos fugit doloribus? Sequi dolorem nesciunt enim eius explicabo omnis dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quod, accusamus eum eius labore veniam est consequatur quae ut quibusdam. Mollitia, ex repudiandae accusantium ipsa debitis veritatis rem ad minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus ea voluptas fugiat veniam magni ex, obcaecati suscipit expedita quaerat corporis enim, sint accusamus aliquid omnis debitis ad dolorem? Mollitia.',
    },
    {
      id: 7,
      img_900x506: img7,
      img_450x254: img7_450x254,
      alt: 'img7',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      slug: '7title-lorem-ipsum-dolor-sit-amet-consectetur',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
      description:
        'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam delectus explicabo facere perferendis tenetur aliquid, eveniet impedit at quos fugit doloribus? Sequi dolorem nesciunt enim eius explicabo omnis dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quod, accusamus eum eius labore veniam est consequatur quae ut quibusdam. Mollitia, ex repudiandae accusantium ipsa debitis veritatis rem ad minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus ea voluptas fugiat veniam magni ex, obcaecati suscipit expedita quaerat corporis enim, sint accusamus aliquid omnis debitis ad dolorem? Mollitia.',
    },
    {
      id: 8,
      img_900x506: img8,
      img_450x254: img8_450x254,
      alt: 'img8',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      slug: '8title-lorem-ipsum-dolor-sit-amet-consectetur',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
      description:
        'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam delectus explicabo facere perferendis tenetur aliquid, eveniet impedit at quos fugit doloribus? Sequi dolorem nesciunt enim eius explicabo omnis dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quod, accusamus eum eius labore veniam est consequatur quae ut quibusdam. Mollitia, ex repudiandae accusantium ipsa debitis veritatis rem ad minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus ea voluptas fugiat veniam magni ex, obcaecati suscipit expedita quaerat corporis enim, sint accusamus aliquid omnis debitis ad dolorem? Mollitia.',
    },
    {
      id: 9,
      img_900x506: img9,
      img_450x254: img9_450x254,
      alt: 'img9',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      slug: '9title-lorem-ipsum-dolor-sit-amet-consectetur',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
      description:
        'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam delectus explicabo facere perferendis tenetur aliquid, eveniet impedit at quos fugit doloribus? Sequi dolorem nesciunt enim eius explicabo omnis dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quod, accusamus eum eius labore veniam est consequatur quae ut quibusdam. Mollitia, ex repudiandae accusantium ipsa debitis veritatis rem ad minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus ea voluptas fugiat veniam magni ex, obcaecati suscipit expedita quaerat corporis enim, sint accusamus aliquid omnis debitis ad dolorem? Mollitia.',
    },
  ];

  const maxLength = 200;

  return (
    <>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/epic-game-news-reactjs/${post.slug}`}
          state={{ post }}
          className='className=" lg:mb-8" mb-6 block 
                 rounded-lg bg-[#0f100fe6] sm:mb-6 sm:grid sm:grid-cols-12
                  sm:rounded-lg'
        >
          <picture className="rounded-t-lg sm:col-start-1 sm:col-end-5 sm:w-full sm:rounded-l-lg">
            <source srcSet={post.img_900x506} media="(min-width: 1280px)" />
            <source srcSet={post.img_450x254} media="(min-width: 0px)" />
            <img src={post.img_900x506} alt={post.alt} />
          </picture>
          <div
            className=" p-3
                    sm:col-start-5 sm:col-end-13 sm:px-2 sm:py-1
                    lg:px-4 lg:py-1 
                    2xl:py-2"
          >
            <h3
              className=" text-lg font-bold
                      sm:mb-1 sm:text-sm sm:font-semibold
                      md:text-lg
                      lg:text-lg lg:font-bold
                      xl:text-xl"
            >
              {post.title}
            </h3>
            <h4
              className=" sm:text-sm
                      md:text-base
                      lg:text-base
                      xl:text-lg"
            >
              {post.excerpt.length > maxLength
                ? `${post.excerpt.substring(0, maxLength)}...`
                : post.excerpt}
            </h4>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Posts;
