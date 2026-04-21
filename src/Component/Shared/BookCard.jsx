import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
                         <Link to={`/bookdetails/${book.bookId}`} key={book.bookId} className="max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300">
        
        {/* Book Image */}
        <div className="flex justify-center -mt-12 mb-4">
          <img
            src={book.image}
            alt="Book Cover"
            className="w-28 h-40 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Tags */}
       <div className='flex items-center gap-4'>
         {
            book.tags.map(tag => (
                <span key={tag} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tag}
                </span>
            ))
        }
       </div>

        {/* Title */}
        <h2 className="text-xl font-serif font-bold text-center text-gray-900 mb-2">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-center text-gray-500 text-sm mb-4">
          {book.author}
        </p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 mb-4"></div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span className="font-medium">{book.category}</span>

          <div className="flex items-center gap-1">
            <span className="font-semibold">{book.rating.toFixed(2)}</span>
            <span className="text-yellow-400">★</span>
          </div>
        </div>
      </div>
    </Link>
    );
};

export default BookCard;