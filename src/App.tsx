import React from 'react';
import Chat from './components/Chat';
import Parent from './components/Parent';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import BComponent from './components/BComponent';
import AComponent from './components/AComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/b" element={<BComponent />} />
        <Route
          path="/a"
          element={<AComponent message="Hello from AComponent!" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
