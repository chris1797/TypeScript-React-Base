import React, { useState, useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const SOCKET_URL = 'http://localhost:8080/ws/chat'; // 서버 WebSocket 엔드포인트
const TOPIC = '/topic/messages'; // 구독할 STOMP 채널
const SEND_ENDPOINT = '/app/chat/send'; // 메시지 전송 엔드포인트

const Chat: React.FC = () => {
  const [client, setClient] = useState<Client | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  // @ts-ignore
  useEffect(() => {
    const socket = new SockJS(SOCKET_URL);
    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        console.log('Connected');
        stompClient.subscribe(TOPIC, (msg) => {
          setMessages((prev) => [...prev, JSON.parse(msg.body).content]);
        });
      },
      onStompError: (frame) => {
        console.error('STOMP Error', frame);
      },
    });

    stompClient.activate();
    setClient(stompClient);

    return () => stompClient.deactivate();
  }, []);

  const sendMessage = () => {
    if (client && client.connected) {
      client.publish({
        destination: SEND_ENDPOINT,
        body: JSON.stringify({ content: message }),
      });
      setMessage('');
    }
  };

  return (
    <div>
      <h2>STOMP Chat</h2>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
