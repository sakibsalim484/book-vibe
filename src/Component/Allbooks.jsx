import React, { use } from 'react';
import BookCard from './Shared/BookCard';

const bookpromise =fetch('/booksData.json').then(res=>res.json())
const Allbooks = () => {
    const books =use(bookpromise)
    console.log('books',books)
    return (
        <div className='my-10 container mx-auto'>
            <h2 className='font-bold text-center text-2xl'>Books</h2>
<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                books.map((book, index)=>{
                    return(
      <BookCard key={index} book={book}/>
                    )
                }
                    
                )
            }
</div>
            
        </div>
    );
};

export default Allbooks;