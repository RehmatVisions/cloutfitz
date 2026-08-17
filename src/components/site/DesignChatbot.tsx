import { useState, useRef, useEffect } from "react";
import {
  Send,
  MessageCircle,
  X,
  Loader,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  helpful?: boolean;
}

const initialBotResponse = `Hey there! 👋 I'm Claude, CLOUTFITZ's design assistant. I'm here to help you understand our apparel design services. 

What would you like to know?`;

const quickQuestions = [
  "How does the monthly design package work?",
  "What's included in the 299 AED package?",
  "How many designs do I get per month?",
  "What file formats do you provide?",
  "Can I get unlimited revisions?",
  "How long does delivery take?",
];

const botResponses: Record<string, string> = {
  "How does the monthly design package work?":
    "Our monthly design package gives you access to regular fresh designs delivered on a schedule. You tell us your brand style and preferences, we create 20-30 unique designs tailored to your apparel brand every month. It's like having a personal design team on retainer. You get all files in every format, unlimited revisions, and dedicated support.",

  "What's included in the 399 AED package?":
    "The 399 AED package includes:\n• Logo & brand identity\n• 4-6 T-shirt designs monthly\n• 3-4 Hoodie/Sweater designs\n• Product mockups (T-shirts, hoodies, caps)\n• Brand guidelines & consistency\n• All files in PNG, PSD, and vector formats\n• Up to 2 revision rounds\n\nFor unlimited revisions and more designs, check our Premium (799 AED) and Elite (1,299 AED) packages.",

  "How many designs do I get per month?":
    "With CLOUTFITZ, you get 20-30 fresh designs every single month. That breaks down to:\n• 4-6 T-shirt designs\n• 3-4 Hoodie/Sweater designs\n• 8-10 Social media designs\n• Plus logo and branding variations\n\nAll tailored to your brand and delivered on schedule.",

  "What file formats do you provide?":
    "We deliver in all formats you need:\n• Print-ready PNG files (300 DPI)\n• Photoshop source files (PSD)\n• Vector files (AI/EPS)\n• Web-optimized JPGs\n• SVG for digital use\n\nEverything you need for manufacturing, e-commerce, and marketing.",

  "Can I get unlimited revisions?":
    "Yes! Unlimited revisions are included with our Premium (799 AED) and Elite (1,299 AED) packages. Even the Basic package includes 2 revision rounds. Our goal is to make sure you're 100% happy with every design.",

  "How long does delivery take?":
    "We deliver monthly on a set schedule. Once you book:\n• Week 1: We create your initial designs\n• Week 2: You review and provide feedback\n• Week 3: We refine based on your input\n• Week 4: Final delivery of all files\n\nThis repeats every month, so you always have fresh designs coming.",
};

export function DesignChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: initialBotResponse,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    // Check for exact match first
    if (botResponses[userMessage]) {
      return botResponses[userMessage];
    }

    // Check for keyword matches
    const message = userMessage.toLowerCase();

    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("aed")
    ) {
      return "We have flexible pricing:\n• 299 AED - Basic (4-6 T-shirts, 2 revisions)\n• 499 AED - Standard (up to 15 designs, 4 revisions)\n• 799 AED - Premium (20+ designs, unlimited revisions)\n• 1,299 AED - Elite (30+ designs, dedicated account manager)\n\nAll packages include worldwide delivery. Want to customize a package?";
    }

    if (
      message.includes("design") ||
      message.includes("what") ||
      message.includes("apparel")
    ) {
      return "CLOUTFITZ specializes in premium apparel designs. We create:\n• T-shirt graphics and prints\n• Hoodie and sweater designs\n• Social media content\n• Brand identity and logos\n\nEvery design is custom-made for your brand. Interested in any specific service?";
    }

    if (
      message.includes("country") ||
      message.includes("where") ||
      message.includes("ship") ||
      message.includes("deliver")
    ) {
      return "We serve 50+ countries worldwide! We deliver digitally (files are sent via email/cloud), so location doesn't matter. Whether you're in UAE, Pakistan, USA, UK, or anywhere else, we can work with you.";
    }

    if (message.includes("quality") || message.includes("professional")) {
      return "Quality is our priority. Every design is:\n✓ Pixel-perfect\n✓ Print-ready (300 DPI)\n✓ On-brand and consistent\n✓ Created by specialized apparel designers\n✓ Delivered with source files\n\nCheck our portfolio to see examples of our work!";
    }

    if (message.includes("how to book") || message.includes("booking")) {
      return "Booking is easy! Just scroll down to fill out our Premium Booking Form. Tell us about your brand, select your package, and our team will get back to you within 24 hours with a custom quote. No commitment needed!";
    }

    if (message.includes("contact") || message.includes("support")) {
      return "You can reach us through:\n📧 Email: hello@cloutfitz.com\n📱 WhatsApp: +92 3244646260\n🌐 Visit: www.cloutfitz.com\n📋 Use the booking form to schedule a call\n\nWe usually respond within 24 hours!";
    }

    // Default response
    return "That's a great question! 🤔 I might not have the specific answer right now, but our team definitely does. Would you like to:\n1. Check out our pricing plans?\n2. See our portfolio?\n3. Fill out the booking form to chat with our team?\n\nOr ask me about our design process, pricing, or what's included in our packages!";
  };

  const handleSendMessage = async (
    messageText: string = inputValue,
    isQuickQuestion: boolean = false
  ) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot thinking time
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Generate and add bot response
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      type: "bot",
      content: generateBotResponse(messageText),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botResponse]);
    setIsLoading(false);
  };

  const handleHelpful = (messageId: string, helpful: boolean) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, helpful } : msg
      )
    );
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 rounded-full bg-red-500 px-4 sm:px-6 py-3.5 text-white shadow-[0_10px_30px_rgba(239,68,68,0.30)] hover:bg-red-600 transition-all duration-200 hover:scale-105"
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        <span className="text-sm font-semibold hidden sm:inline">
          Design Assistant
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col w-[calc(100vw-32px)] sm:w-full max-w-md h-[500px] sm:h-[600px] max-h-[85vh] rounded-2xl bg-white border border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-black/[0.08] bg-gradient-to-r from-red-50 to-red-50/50">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-ink truncate">Design Assistant</h3>
            <p className="text-xs text-black/50 hidden sm:block">Always here to help</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 hover:bg-black/5 rounded-full transition-colors shrink-0"
        >
          <X className="h-5 w-5 text-black/70" />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="space-y-2">
            <div
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-lg text-sm ${
                  message.type === "user"
                    ? "bg-red-500 text-white rounded-br-none"
                    : "bg-black/5 text-ink rounded-bl-none"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>

            {/* Helpful buttons for bot messages */}
            {message.type === "bot" && message.id !== "1" && (
              <div className="flex items-center gap-2 px-4">
                <button
                  onClick={() => handleHelpful(message.id, true)}
                  className={`p-1 rounded transition-colors ${
                    message.helpful === true
                      ? "bg-green-100 text-green-600"
                      : "hover:bg-black/5 text-black/50"
                  }`}
                  title="This was helpful"
                >
                  <ThumbsUp className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleHelpful(message.id, false)}
                  className={`p-1 rounded transition-colors ${
                    message.helpful === false
                      ? "bg-red-100 text-red-600"
                      : "hover:bg-black/5 text-black/50"
                  }`}
                  title="Not helpful"
                >
                  <ThumbsDown className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-black/5 text-ink px-4 py-3 rounded-lg rounded-bl-none flex items-center gap-2">
              <Loader className="h-4 w-4 animate-spin" />
              <span className="text-sm">Thinking...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {messages.length <= 2 && (
        <div className="px-3 sm:px-4 py-3 border-t border-black/[0.08] max-h-40 overflow-y-auto">
          <p className="text-xs font-semibold text-black/70 mb-2">
            Quick questions:
          </p>
          <div className="space-y-2">
            {quickQuestions.slice(0, 3).map((question) => (
              <button
                key={question}
                onClick={() => handleSendMessage(question, true)}
                className="w-full text-left text-xs p-2 rounded bg-black/[0.03] hover:bg-red-50 text-black/80 hover:text-red-600 transition-colors border border-transparent hover:border-red-200 line-clamp-2"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="px-3 sm:px-4 py-3 border-t border-black/[0.08] bg-white">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !isLoading) {
                handleSendMessage();
              }
            }}
            placeholder="Ask me..."
            className="flex-1 bg-black/[0.03] border border-black/[0.08] rounded-full px-4 py-2 text-sm placeholder:text-black/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
            disabled={isLoading}
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={isLoading || !inputValue.trim()}
            className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
