import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from "./chapter_04/Clock";

import CommentList from "./chapter_05/CommentList";

    ReactDOM.render(
        <React.StrictMode>
            <CommentList />
        </React.StrictMode>,
        document.getElementById('root')
    );
reportWebVitals();
