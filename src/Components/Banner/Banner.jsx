import bannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} />
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
