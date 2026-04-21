import React, { createContext, useState } from 'react';

export const Bookcontexts = createContext();

const Bookcontext = ({ children }) => {
    const [sortedBooks, setSortedBooks] = useState([]);
    const handlebookmarksread = (currentBook) => {
        const isExist = sortedBooks.find((book) => book.bookid === currentBook.bookid);
            if(isExist){
                alert('this book is  already exist')
            }else{
                setSortedBooks([...sortedBooks, currentBook])
            }
console.log("boodid", currentBook)
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