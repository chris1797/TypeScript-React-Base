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
                {' '}
                {showA ? 'B 컴포넌트 보기' : 'A 컴포넌트 보기'}
            </button>

            <p>
                {showA ? (
                    <AComponent message="Hello from AComponent!" />
                ) : (
                    <BComponent />
                )}
            </p>

            <p
                style={{
                    border: '1px solid black',
                }}
            ></p>

            <h2> Flex 연습 </h2>
            <div
                style={{
                    backgroundColor: 'yellow',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'end',
                }}
            >
                <div style={{ backgroundColor: 'lightblue' }}>
                    <h2>스타일이 적용된 div</h2>
                </div>
                <div style={{ backgroundColor: 'lightgreen' }}>
                    <h2>스타일이 적용된 div2</h2>
                </div>
            </div>
        </div>
    );
};

export default Parent;
