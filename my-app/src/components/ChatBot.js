import React, { useState } from 'react';

export default function ChatBot({ chatBot, setChatBot }) {
    return (
        <>
            {chatBot && (
                <div className="chatBot">
                    <iframe
                        width="350"
                        height="430"
                        allow="microphone;"
                        src="https://console.dialogflow.com/api-client/demo/embedded/0217c1c3-3d24-44ff-8896-0272ff4d374f"
                    ></iframe>
                </div>
            )}
        </>
    );
}
