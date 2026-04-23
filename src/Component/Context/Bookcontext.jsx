import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const Bookcontexts = createContext();

const Bookcontext = ({ children }) => {
    const [sortedBooks, setSortedBooks] = useState([]);
    const [wishList, setWishList] = useState([]);
    const handlebookmarksread = (currentBook) => {
        const isExist = sortedBooks.find((book) => book.bookid === currentBook.bookid);
            if(isExist){
                toast.error('this book is  already exist')
            }else{
                setSortedBooks([...sortedBooks, currentBook]);
                toast.success(`${currentBook.bookName} is added to booklist`)
            }
console.log("book", currentBook,sortedBooks)
    }
    const data={
        sortedBooks,
        setSortedBooks,
        handlebookmarksread
    }
    return (
        <Bookcontexts.Provider value={data}>
            {children}
        </Bookcontexts.Provider>
    );
};

export default Bookcontext;