import { useState, useEffect, useCallback } from 'react';
import { Message, Role } from '../types';

const CHAT_HISTORY_KEY = 'agrona-chat-history';

const initialWelcomeMessage: Message = {
  role: Role.MODEL,
  content: "Hello! It's a pleasure to assist you. I am Agrona, dedicated to helping you navigate the resources and information available from the U.S. Department of Agriculture (USDA).\n\nHow may I help you today? Are you looking for specific programs, data, news, or perhaps something else from the USDA?",
};

export const useChatHistory = (): [Message[], (messages: Message[]) => void] => {
  const [messages, setMessagesState] = useState<Message[]>(() => {
    try {
      const storedHistory = localStorage.getItem(CHAT_HISTORY_KEY);
      if (storedHistory) {
        const parsedHistory = JSON.parse(storedHistory);
        return parsedHistory.length > 0 ? parsedHistory : [initialWelcomeMessage];
      }
    } catch (error) {
      console.error("Error reading from localStorage", error);
    }
    return [initialWelcomeMessage];
  });

  const setMessages = useCallback((newMessages: Message[]) => {
    try {
      localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(newMessages));
      setMessagesState(newMessages);
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === CHAT_HISTORY_KEY && event.newValue) {
        try {
          const newHistory = JSON.parse(event.newValue);
          setMessagesState(newHistory);
        } catch (error) {
          console.error("Error parsing new history from storage event", error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return [messages, setMessages];
};