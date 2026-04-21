import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bookcontexts } from '../Component/Context/Bookcontext';

const BookDetails = () => {
    const { bookid } = useParams();
    console.log(bookid, "book ID");

    const books = useLoaderData();
    console.log(books, "book details");
    const expextedBook = books.find((book) => book.bookId === Number(bookid));
    console.log(expextedBook, "expected book");
    const { bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating, image } = expextedBook;
    
    const { handlebookmarksread } = useContext(Bookcontexts);
    console.log("bookcontext")
    return (
 <div className="max-w-5xl mx-auto bg-[#f5e3e0] p-6 rounded-2xl">
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Image */}
        <div className="bg-[#edd1cc] rounded-xl p-6 flex justify-center">
          <img
            src={image}
            alt="Book"
            className="w-60 object-cover drop-shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Title */}
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
           {bookName}
          </h1>

          {/* Author */}
          <p className="text-gray-600 mb-4">
            <span className="font-medium">By :</span> {author}
          </p>

          {/* Category */}
          <p className="text-gray-700 mb-4">{category}</p>

          <hr className="mb-4" />

          {/* Review */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            <span className="font-semibold">Review :</span> {review}
          </p>

          {/* Tags */}
          <div className="flex gap-3 mb-4">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
             {tags[0]}
            </span>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                {tags[1]}
            </span>
          </div>

          <hr className="mb-4" />

          {/* Info */}
          <div className="space-y-2 text-sm text-gray-700 mb-6">
            <p>
              <span className="font-medium">Number of Pages:</span> {totalPages}
            </p>
            <p>
              <span className="font-medium">Publisher:</span> {publisher}
            </p>
            <p>
              <span className="font-medium">Year of Publishing:</span> {yearOfPublishing}
            </p>
            <p>
              <span className="font-medium">Rating:</span> {rating.toFixed(2)}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button onClick={()=>handlebookmarksread(expextedBook)} className="border border-gray-400 px-5 py-2 rounded-lg hover:bg-gray-100">
              Read
            </button>
            <button className="bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BookDetails;