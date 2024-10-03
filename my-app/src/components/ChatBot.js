import React, { useState } from 'react';
import { chatBotData } from '../data/chatBotData';
import { Api } from '../utils/Api';

export default function ChatBot({ chatBot, setChatBot }) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = async () => {
        chatBotData.forEach((msg) => {
            console.log(msg);
        });

        setMessages([...messages, { message, sender: 'client' }]);
        setMessage('');

        chatBotResponse();
    };

    const chatBotResponse = async () => {
        const { statusCode, data } = await Api.postRequest('/api/chatbot', { message });
        console.log(data);
    };

    return (
        <>
            {chatBot && (
                <div className="chatBot">
                    <div className="chatBot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender}>
                                {msg.sender === 'client' ? 'Client: ' : 'ChatBot: '}
                                {msg.message}
                            </div>
                        ))}
                    </div>
                    <div className="chatBot-input">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here..."
                            maxLength={160}
                            rows={4}
                            cols={30}
                        />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            )}
        </>
    );
}
