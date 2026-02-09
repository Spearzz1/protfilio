export interface Message {
    id: string;
    name: string;
    email: string;
    message: string;
    date: string;
}

const STORAGE_KEY = "portfolio_messages";

export const storage = {
    getMessages: (): Message[] => {
        if (typeof window === "undefined") return [];
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    },

    saveMessage: (message: Message) => {
        const messages = storage.getMessages();
        const newMessages = [message, ...messages];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newMessages));
        return newMessages;
    },

    clearMessages: () => {
        localStorage.removeItem(STORAGE_KEY);
        return [];
    }
};
