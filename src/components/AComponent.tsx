import React from 'react';
import { Link } from 'react-router-dom';

const AComponent = ({ message }: { message: string }) => {
  return (
    <div>
      <h1>AComponent Example</h1>
      <p>{message}</p>

      <Link to="/b">Go to BComponent</Link>
    </div>
  );
};

export default AComponent;
