const Book = ({ book }) => {
  const { bookName, author, image } = book;
  return (
    <div className="card bg-base-100  shadow-xl px-6 py-3 border-2 mt-5">
      <figure className="bg-[#F3F3F3] px-10 py-5">
        <img src={image} className="h-[166px] " />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{bookName}</h2>
        <h3 className="text-[#131313CC]">by: {author}</h3>
        <div className="justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
