import { useLoaderData, useParams } from "react-router-dom";
import { addSoterReadList } from "../../utlity/addToStoreReadList";
import { addSoterWishList } from "../../utlity/Wishlist";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  console.log(typeof id);

  const book = data.find((book) => book.bookId === id);
  console.log(book);

  const {
    bookId: currentBookId,
    bookName,
    author,
    image,
    tags,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    addSoterReadList(id);
  };

  const handleWishList = (id) => {
    addSoterWishList(id);
  };
  return (
    <div className="hero ">
      <div className="md:flex gap-5 mt-5 ">
        <img
          src={image}
          className="rounded-lg shadow-2xl md:w-2/5 bg-base-200 px-10 py-5"
        />
        <div className="md:w-3/5 px-10 mt-5">
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <h3 className="text-[#131313CC] text-xl font-bold mt-2">
            by: {author}
          </h3>
          <p className="font-bold text-lg">Fiction</p>
          <p className="py-6 text-[#131313B3]">
            <span className="font-bold"> Review:</span>
            {review}
          </p>
          <div className="flex items-center gap-5 text-lg">
            <p className="font-bold">Tag: </p>
            {tags.map((tag, index) => (
              <p
                key={index}
                className="btn btn-xs bg-[#23BE0A0D] text-[#23BE0A]"
              >
                {tags}
              </p>
            ))}
          </div>
          <div className="space-y-2 mt-3">
            <p>
              <span className="font-bold mr-5">Number of Pages:</span>
              {totalPages}
            </p>
            <p>
              <span className="font-bold mr-5">Publisher:</span>
              {publisher}
            </p>
            <p>
              <span className="font-bold mr-5">Year of Publishing:</span>
              {yearOfPublishing}
            </p>
            <p>
              <span className="font-bold mr-5">Rating:</span>
              {rating}
            </p>
          </div>
          <div className="flex mt-3 gap-3">
            <button onClick={() => handleMarkAsRead(bookId)} className="btn">
              Mark as Read
            </button>
            <button
              onClick={() => handleWishList(bookId)}
              className="btn text-white font-bold bg-[#50B1C9]"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
