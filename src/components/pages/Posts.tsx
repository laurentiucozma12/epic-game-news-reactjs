import Post from './Post';
import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import img3 from '../../assets/images/img-3.jpg';
import img4 from '../../assets/images/img-4.jpg';
import img5 from '../../assets/images/img-5.jpg';
import img6 from '../../assets/images/img-6.jpg';
import img7 from '../../assets/images/img-7.jpg';
import img8 from '../../assets/images/img-8.jpg';
import img9 from '../../assets/images/img-9.jpg';

function Posts() {
  const posts = [
    {
      id: 1,
      img: img1,
      alt: 'img1',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
    },
    {
      id: 2,
      img: img2,
      alt: 'img2',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
    },
    {
      id: 3,
      img: img3,
      alt: 'img3',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
    },
    {
      id: 4,
      img: img4,
      alt: 'img4',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
    },
    {
      id: 5,
      img: img5,
      alt: 'img5',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
    },
    {
      id: 6,
      img: img6,
      alt: 'img6',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
    },
    {
      id: 7,
      img: img7,
      alt: 'img7',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
    },
    {
      id: 8,
      img: img8,
      alt: 'img8',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
    },
    {
      id: 9,
      img: img9,
      alt: 'img9',
      title: 'Title: Lorem ipsum dolor sit amet consectetur!',
      excerpt:
        'Excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam delectus aperiam alias neque optio sapiente eum vero ipsam. Et commodi obcaecati repellendus magnam modi deserunt. Hic ducimus iusto perferendis!',
    },
  ];

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          img={post.img}
          alt={post.alt}
          title={post.title}
          excerpt={post.excerpt}
        />
      ))}
    </>
  );
}

export default Posts;
