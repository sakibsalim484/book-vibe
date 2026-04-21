import React, { useContext } from 'react';
import Bookcontext, { Bookcontexts } from '../Component/Context/Bookcontext';

const Books = () => {
    const { sortedBooks } = useContext(Bookcontexts);
    console.log(sortedBooks)
    return (
        <div>
            listed books
        </div>
    );
};

export default Books;