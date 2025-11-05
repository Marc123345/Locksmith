import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Phone, Mail, MapPin, Wrench } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { CONTACT } from '@/utils/contact';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
  options?: string[];
}

interface ConversationState {
  step: 'welcome' | 'name' | 'service' | 'location' | 'contact' | 'email' | 'phone' | 'complete';
  name?: string;
  service?: string;
  location?: string;
  email?: string;
  phone?: string;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [state, setState] = useState<ConversationState>({ step: 'welcome' });
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => addBotMessage(
        "👋 Hi! I'm your virtual assistant from A Secure Annapolis Locksmith. I'm here to help you find the right locksmith service quickly.\n\nWhat's your name?",
        'name'
      ), 500);
    }
  }, [isOpen]);

  const addBotMessage = async (text: string, nextStep?: ConversationState['step'], options?: string[]) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      type: 'bot',
      text,
      timestamp: new Date(),
      options
    };

    setMessages(prev => [...prev, newMessage]);
    setIsTyping(false);

    if (nextStep) {
      setState(prev => ({ ...prev, step: nextStep }));
    }

    // Save to database
    if (state.name || state.service) {
      await saveMessageToDb('bot', text);
    }
  };

  const addUserMessage = async (text: string) => {
    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      type: 'user',
      text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    await saveMessageToDb('user', text);
    await processUserInput(text);
  };

  const saveMessageToDb = async (messageType: 'bot' | 'user', messageText: string) => {
    try {
      // Get or create conversation
      const { data: conversation } = await supabase
        .from('chatbot_conversations')
        .select('id')
        .eq('session_id', sessionId)
        .maybeSingle();

      let conversationId = conversation?.id;

      if (!conversationId) {
        const { data: newConv } = await supabase
          .from('chatbot_conversations')
          .insert({
            session_id: sessionId,
            visitor_name: state.name,
            visitor_email: state.email,
            visitor_phone: state.phone,
            service_interest: state.service,
            location_preference: state.location
          })
          .select('id')
          .single();
        conversationId = newConv?.id;
      } else {
        // Update existing conversation
        await supabase
          .from('chatbot_conversations')
          .update({
            visitor_name: state.name,
            visitor_email: state.email,
            visitor_phone: state.phone,
            service_interest: state.service,
            location_preference: state.location,
            lead_score: calculateLeadScore()
          })
          .eq('id', conversationId);
      }

      // Insert message
      if (conversationId) {
        await supabase
          .from('chatbot_messages')
          .insert({
            conversation_id: conversationId,
            message_type: messageType,
            message_text: messageText
          });
      }
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

  const calculateLeadScore = (): number => {
    let score = 0;
    if (state.name) score += 20;
    if (state.email) score += 30;
    if (state.phone) score += 30;
    if (state.service) score += 10;
    if (state.location) score += 10;
    return score;
  };

  const processUserInput = async (input: string) => {
    const trimmedInput = input.trim();

    switch (state.step) {
      case 'name':
        setState(prev => ({ ...prev, name: trimmedInput }));
        await addBotMessage(
          `Great to meet you, ${trimmedInput}! 👋\n\nWhat type of locksmith service do you need help with today?`,
          'service',
          ['Emergency Lockout', 'Lock Installation', 'Lock Rekey', 'Car Key Service', 'Smart Locks', 'Other']
        );
        break;

      case 'service':
        setState(prev => ({ ...prev, service: trimmedInput }));
        await addBotMessage(
          `Perfect! ${trimmedInput} is one of our specialties.\n\nWhich area are you located in?`,
          'location',
          ['Annapolis', 'Severna Park', 'Arnold', 'Edgewater', 'Other Area']
        );
        break;

      case 'location':
        setState(prev => ({ ...prev, location: trimmedInput }));
        await addBotMessage(
          `Excellent! We serve ${trimmedInput} with fast response times.\n\nTo help you better, could you share your email address?`,
          'email'
        );
        break;

      case 'email':
        if (validateEmail(trimmedInput)) {
          setState(prev => ({ ...prev, email: trimmedInput }));
          await addBotMessage(
            'Thank you! And what\'s the best phone number to reach you?',
            'phone'
          );
        } else {
          await addBotMessage(
            'Hmm, that doesn\'t look like a valid email. Could you please check and re-enter your email address?',
            'email'
          );
        }
        break;

      case 'phone':
        if (validatePhone(trimmedInput)) {
          setState(prev => ({ ...prev, phone: trimmedInput }));
          await completeConversation();
        } else {
          await addBotMessage(
            'That doesn\'t appear to be a valid phone number. Please enter your phone number (e.g., 410-849-6069)',
            'phone'
          );
        }
        break;

      case 'complete':
        await addBotMessage(
          'Thanks for your message! A team member will review this and get back to you soon.'
        );
        break;
    }
  };

  const completeConversation = async () => {
    const leadScore = calculateLeadScore();

    // Update conversation as completed
    await supabase
      .from('chatbot_conversations')
      .update({
        completed_at: new Date().toISOString(),
        lead_status: leadScore >= 70 ? 'qualified' : 'new',
        lead_score: leadScore
      })
      .eq('session_id', sessionId);

    await addBotMessage(
      `Perfect! ✅ I've got all your information:\n\n👤 Name: ${state.name}\n📧 Email: ${state.email}\n📞 Phone: ${state.phone}\n🔧 Service: ${state.service}\n📍 Location: ${state.location}\n\nOur team will contact you within the hour, or you can call us right now at ${CONTACT.PHONE_DISPLAY} for immediate assistance!\n\nIs there anything else I can help you with?`,
      'complete'
    );
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    return /^[\d\s\-\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const handleQuickAction = async (action: string) => {
    await addUserMessage(action);
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold">Locksmith Assistant</div>
                  <div className="text-xs text-blue-100">Usually replies instantly</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-2 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'bot' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.type === 'bot' ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                    </div>
                    <div>
                      <div className={`rounded-2xl px-4 py-3 ${
                        message.type === 'bot'
                          ? 'bg-white text-gray-800 shadow-sm'
                          : 'bg-blue-600 text-white'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>
                      {message.options && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {message.options.map((option, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleQuickAction(option)}
                              className="text-xs px-3 py-1.5 bg-white border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-medium"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (inputValue.trim()) {
                    addUserMessage(inputValue);
                  }
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>

              {/* Quick Actions */}
              {state.step === 'welcome' && messages.length === 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={`tel:${CONTACT.PHONE}`} className="text-xs px-3 py-1.5 bg-green-50 border border-green-600 text-green-700 rounded-full hover:bg-green-600 hover:text-white transition-colors flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    Call Now
                  </a>
                  <a href={`mailto:${CONTACT.EMAIL}`} className="text-xs px-3 py-1.5 bg-blue-50 border border-blue-600 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    Email Us
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
