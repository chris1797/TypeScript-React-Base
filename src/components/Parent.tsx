import React, { useState } from 'react';

function AComponent({ message }: { message: string }) {
  return <div>{message}</div>;
}

function BComponent() {
  return <div>B 컴포넌트입니다.</div>;
}

const Parent: React.FC = () => {
  const [showA, setShowA] = useState(true);

  return (
    <div>
      <button onClick={() => setShowA(!showA)}>
        {showA ? 'B 컴포넌트 보기' : 'A 컴포넌트 보기'}
      </button>
      {showA ? <AComponent message="Hello from AComponent!" /> : <BComponent />}
    </div>
  );
};

export default Parent;
