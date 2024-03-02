import React from 'react';

interface PostProps {
  img: string;
  alt: string;
  title: string;
  excerpt: string;
}

const Post: React.FC<PostProps> = ({ img, alt, title, excerpt }) => {
  const maxLength = 200;

  const truncatedExcerpt =
    excerpt.length > maxLength
      ? `${excerpt.substring(0, maxLength)}...`
      : excerpt;

  return (
    <div
      className=" mb-6 rounded-lg bg-[#0f100fe6] 
                  sm:mb-6 sm:grid sm:grid-cols-12 sm:rounded-lg
                  lg:mb-8"
    >
      <img
        src={img}
        alt={alt}
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
          {title}
        </h3>
        <h4
          className=" sm:text-sm
                      md:text-base
                      lg:text-base
                      xl:text-lg"
        >
          {truncatedExcerpt}
        </h4>
      </div>
    </div>
  );
};

export default Post;
