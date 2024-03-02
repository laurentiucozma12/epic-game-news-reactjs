import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import img3 from '../../assets/images/img-3.jpg';
import img4 from '../../assets/images/img-4.jpg';
import img5 from '../../assets/images/img-5.jpg';
import img6 from '../../assets/images/img-6.jpg';
import img7 from '../../assets/images/img-7.jpg';
import img8 from '../../assets/images/img-8.jpg';
import img9 from '../../assets/images/img-9.jpg';
import { Link } from 'react-router-dom';

function Posts() {
  const posts = [
    {
      id: 1,
      img: img1,
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
      img: img2,
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
      img: img3,
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
      img: img4,
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
      img: img5,
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
      img: img6,
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
      img: img7,
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
      img: img8,
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
      img: img9,
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
          <img
            src={post.img}
            alt={post.alt}
            className=" rounded-t-lg
                    sm:col-start-1 sm:col-end-5 sm:w-full sm:rounded-l-lg"
          />
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
