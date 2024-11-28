import React from "react";
import Book from "./Book";
function Library() {
    return (React.createElement("div", null,
        React.createElement(Book, { title: "\uD1A0\uC9C0", numOfPage: 300 }),
        React.createElement(Book, { title: "\uC5B4\uB9B0\uC655\uC790", numOfPage: 400 }),
        React.createElement(Book, { title: "\uC885\uC758 \uAE30\uC6D0", numOfPage: 500 })));
}
export default Library;
