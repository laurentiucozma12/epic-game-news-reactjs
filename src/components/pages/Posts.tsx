import img1 from '../../assets/images/img-1.jpg';
function Posts() {
  return (
    <>
      <div className="mb-8 grid grid-cols-12 rounded-lg bg-[#0f100fe6]">
        <img
          src={img1}
          alt="orc"
          className="col-start-1 col-end-5 w-full rounded-l-lg"
        />
        <div className="col-start-5 col-end-13 p-4">
          <h3 className="mb-1 text-xl font-bold">
            Post Title Lorem ipsum dolor sit amet consectetur!
          </h3>
          <h4>
            Post Excerpt Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Architecto, eum minus, aperiam tenetur, a soluta quasi aliquam
            error maxime excepturi tempora ea. Deserunt saepe ipsum quas, natus
            at quasi veritatis.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Posts;
