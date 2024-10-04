import React, { useState } from 'react';
import { chatBotData } from '../data/chatBotData';
import { Api } from '../utils/Api';

export default function ChatBot({ chatBot, setChatBot }) {
    return (
        <>
            {chatBot && (
                <div className="chatBot">
                    <iframe
                        width="350"
                        height="430"
                        allow="microphone;"
                        src="https://console.dialogflow.com/api-client/demo/embedded/6fc80e6d-796b-4adc-84d8-34c95b0c7941"
                    ></iframe>
                </div>
            )}
        </>
    );
}
