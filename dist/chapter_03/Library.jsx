import React from "react";
import Book from "./Book";
function Library() {
    return (<div>
            <Book title="토지" numOfPage={300}/>
            <Book title="어린왕자" numOfPage={400}/>
            <Book title="종의 기원" numOfPage={500}/>
        </div>);
}
export default Library;
