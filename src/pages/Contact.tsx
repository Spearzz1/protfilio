import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, Lock } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { MessageList } from "@/components/sections/MessageList";
import { siteConfig } from "@/lib/data";
import { storage, Message } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Contact() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [showAdmin, setShowAdmin] = useState(false);

    useEffect(() => {
        setMessages(storage.getMessages());
    }, []);

    const handleMessageSent = (newMessage: Message) => {
        const updated = storage.saveMessage(newMessage);
        setMessages(updated);
    };

    const handleClearMessages = () => {
        if (confirm("Are you sure you want to delete all messages?")) {
            setMessages(storage.clearMessages());
            toast.success("Messages cleared");
        }
    };

    const toggleAdmin = () => {
        if (showAdmin) {
            setShowAdmin(false);
            return;
        }

        const password = prompt("Enter Admin Password:");
        if (password === "admin123") { // Simple password for now
            setShowAdmin(true);
            toast.success("Welcome back, Maamoun!");
        } else {
            toast.error("Incorrect password");
        }
    };

    return (
        <div className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
                            <p className="text-lg text-muted-foreground">
                                Currently available for freelance projects and open to full-time opportunities.
                                Have a project in mind? Let's discuss.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="p-3 rounded-full bg-secondary text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground">Email</h3>
                                    <a href={siteConfig.links.email} className="hover:text-primary transition-colors">
                                        b.maaamoun456@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="p-3 rounded-full bg-secondary text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground">Location</h3>
                                    <p>Tunisia Monastir</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="p-3 rounded-full bg-secondary text-primary">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground">LinkedIn</h3>
                                    <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-border">
                            <h3 className="font-medium mb-4">Follow me</h3>
                            <div className="flex gap-4">
                                <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="p-2 rounded-full border border-border hover:bg-accent transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full border border-border hover:bg-accent transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Admin / Messages Section Toggle */}
                        <div className="pt-8">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={toggleAdmin}
                                className="text-muted-foreground"
                            >
                                <Lock size={14} className="mr-2" />
                                {showAdmin ? "Hide Messages" : "View Messages (Admin)"}
                            </Button>
                        </div>
                    </div>

                    <div className="lg:pl-12">
                        <div className="p-8 border border-border rounded-xl bg-card shadow-sm mb-8">
                            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                            <ContactForm onMessageSent={handleMessageSent} />
                        </div>

                        {showAdmin && (
                            <div className="p-6 border border-border rounded-xl bg-secondary/20">
                                <h2 className="text-xl font-bold mb-4">Received Messages</h2>
                                <MessageList messages={messages} onClear={handleClearMessages} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
