const Blogs = () => {
  return (
    <section className="px-24 py-16">
      <h2 className="text-3xl font-bold text-center">Latest Blogs</h2>
      <p className="text-xl text-gray-400 text-center py-4">
        Blessing welcomed ladyship she met humoured sir breeding her. Six <br />{" "}
        curiosity day assurance bed necessary.
      </p>
      <div className="flex items-center space-x-5 justify-between">
        <Blog img="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <Blog img="https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
    </section>
  );
};

const Blog = ({ img }) => (
  <article className="relative ">
    <img
      className="max-h-[400px] rounded-2xl  w-[800px] object-cover opacity-90"
      src={img}
    />
    <div className="absolute bottom-10 left-[25%]">
      <h2 className="text-white text-center font-bold text-3xl">
        Unleash your Creativity
      </h2>
      <p className="text-white text-center ">
        Nine for Mortal Men, doomed to die, One for
      </p>
    </div>
  </article>
);

export default Blogs;
