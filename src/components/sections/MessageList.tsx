import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Message } from "@/lib/storage";

interface MessageListProps {
    messages: Message[];
    onClear: () => void;
}

export function MessageList({ messages, onClear }: MessageListProps) {
    if (messages.length === 0) {
        return (
            <div className="text-center py-8 text-muted-foreground border border-dashed rounded-lg">
                No messages yet.
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Inbox ({messages.length})</h3>
                <Button variant="ghost" size="sm" onClick={onClear} className="text-destructive hover:text-destructive">
                    <Trash2 size={16} className="mr-2" /> Clear All
                </Button>
            </div>
            <div className="space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-semibold">{msg.name}</h4>
                                <p className="text-sm text-muted-foreground">{msg.email}</p>
                            </div>
                            <span className="text-xs text-muted-foreground">{msg.date}</span>
                        </div>
                        <p className="text-sm border-t pt-2 mt-2">{msg.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
