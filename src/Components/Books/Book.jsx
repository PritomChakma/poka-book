import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100  shadow-xl px-6 py-3 border-2 mt-5">
        <figure className="bg-[#F3F3F3] px-10 py-5">
          <img src={image} className="h-[166px] " />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-[#23BE0A0D] text-[#23BE0A]"
              >
                {tags}
              </button>
            ))}
          </div>
          <h2 className="card-title font-bold">{bookName}</h2>
          <h3 className="text-[#131313CC]">by: {author}</h3>
          <div className="divider w-full"></div>
          <div className="justify-end flex justify-between">
            <div className="text-[#131313CC] font-bold">
              <p>Fiction</p>
            </div>
            <div className="flex gap-2 items-center">
              <p>{rating}</p>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
