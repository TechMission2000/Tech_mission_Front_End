"use client";

import React, { useState, useEffect, useRef, FC } from "react";
type Sender = "user" | "bot";

interface Message {
  text: string;
  sender: Sender;
}

// --- SVG Icon Components ---
const BotIcon: FC = () => (
  <div className="bg-gradient-to-r from-[#0E458E] via-[#2F82E8] to-[rgba(0,113,245,0.92)] text-white hover:opacity-90 rounded-full flex-shrink-0 flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect x="4" y="12" width="16" height="8" rx="2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M12 18v2" />
      <path d="M12 14v-2" />
    </svg>
  </div>
);

const ChatIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const SendIcon: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 2L11 13"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Main Chatbot Component ---
const Chatbot: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I am your AI Assistant. How can I help you find what you need today?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  // Automatically scroll to the bottom of the chat on new messages
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = { text: inputValue, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate a bot response with a typing indicator
    setTimeout(() => {
      const botResponse: Message = {
        text: `Thank you for your message: "${inputValue}". A representative will get back to you shortly.`,
        sender: "bot",
      };
      setIsTyping(false);
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 2000);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[999] flex flex-col items-end">
      {/* Chat Modal */}
      <div
        className={`
                    w-80 sm:w-96 h-[600px] flex flex-col bg-white rounded-2xl shadow-2xl transition-all duration-300 ease-in-out mb-4 origin-bottom-right
                    ${
                      isOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }
                `}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0E458E] via-[#2F82E8] to-[rgba(0,113,245,0.92)] text-white  p-4 flex justify-between items-center rounded-t-2xl">
          <div className="flex items-center gap-3">
            <BotIcon />
            <div>
              <h2 className="text-lg font-bold">AI Assistant</h2>
              <p className="text-xs text-indigo-200">Online</p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-2xl hover:text-indigo-200 transition-colors"
          >
            &times;
          </button>
        </div>

        {/* Messages Area */}
        <div
          ref={chatBodyRef}
          className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`
                                    max-w-[85%] py-2 px-4 rounded-2xl text-sm
                                    ${
                                      msg.sender === "user"
                                        ? "bg-blue-600 text-white rounded-br-lg"
                                        : "bg-gray-200 text-gray-800 rounded-bl-lg"
                                    }
                                `}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-500 rounded-2xl rounded-bl-lg py-2 px-4">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-gray-200 bg-white rounded-b-2xl">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 w-full px-4 py-2 text-sm bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Icon Button */}
      <button
        onClick={toggleChat}
        className={`
                    w-16 h-16 bg-gradient-to-r from-[#0E458E] via-[#2F82E8] to-[rgba(0,113,245,0.92)] text-white hover:opacity-90 rounded-full 
                    flex justify-center items-center shadow-2xl 
                    hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    transition-all transform duration-200
                `}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <ChatIcon />
        )}
      </button>
    </div>
  );
};

export default Chatbot;
