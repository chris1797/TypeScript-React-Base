import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="토지" numOfPage={300} />
            <Book name="어린왕자" numOfPage={400} />
            <Book name="종의 기원" numOfPage={500} />
        </div>
    );
}

export default Library;