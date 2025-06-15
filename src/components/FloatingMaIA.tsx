
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, X, Maximize2, Minimize2, Heart, Star, Sparkles, Atom } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FloatingMaIAProps {
  onNavigate?: (section: string) => void;
}

const FloatingMaIA = ({ onNavigate }: FloatingMaIAProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola exploradora! 💖 Soy maIA, tu asistente personal en este increíble viaje STEM. ¿En qué puedo ayudarte hoy? ¿Quieres explorar cursos, ver tu progreso, o simplemente platicar sobre tus sueños? 🌟",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");

    // Simular respuesta de maIA
    setTimeout(() => {
      const responses = [
        "¡Me encanta esa actitud, genia! 🔥 Te veo súper motivada. ¿Te gustaría que te recomiende algunos cursos perfectos para tu perfil?",
        "¡Qué pregunta tan genial! 💜 Basándome en lo que me cuentas, creo que tienes el potencial para crear cosas increíbles. ¿Quieres que exploremos juntas algunas opciones?",
        "¡WOW! Me encanta cómo piensas 🌟 Hay tantas exploradoras como tú que han logrado cosas épicas. ¿Te cuento algunas historias inspiradoras?",
        "¡Eres increíble! 💫 Tu curiosidad me emociona mucho. ¿Qué tal si revisamos tu progreso o exploramos la comunidad de exploradoras?"
      ];
      
      const botResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const quickActions = [
    { text: "Ver mis cursos", action: () => onNavigate?.('courses') },
    { text: "Mi seguimiento", action: () => onNavigate?.('dashboard') },
    { text: "Comunidad", action: () => onNavigate?.('community') },
    { text: "Necesito inspiración", action: () => setInputMessage("Cuéntame una historia inspiradora") }
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full shadow-lg text-white border-4 border-white hover:scale-105 transition-all animate-pulse"
          style={{ backgroundColor: '#FF1493' }}
        >
          <div className="flex flex-col items-center">
            <Atom className="h-6 w-6" />
            <span className="text-xs">maIA</span>
          </div>
        </Button>
        <div className="absolute -top-2 -left-32 bg-white rounded-lg shadow-lg p-2 border border-pink-200 max-w-xs">
          <p className="text-sm text-gray-700 font-medium">
            ¿Necesitas ayuda? ¡Pregúntame! 💖
          </p>
        </div>
      </div>
    );
  }

  if (isExpanded) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 z-50">
        {/* Header con navegación */}
        <header className="bg-white border-b-2 border-pink-200 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Atom className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-pink-600">maIA - Tu asistente STEM</h1>
                <p className="text-sm text-gray-500">Siempre aquí para ti 💖</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" onClick={() => onNavigate?.('home')}>
                Home
              </Button>
              <Button variant="ghost" onClick={() => onNavigate?.('courses')}>
                Cursos
              </Button>
              <Button variant="ghost" onClick={() => onNavigate?.('dashboard')}>
                Mi Seguimiento
              </Button>
              <Button variant="ghost" onClick={() => onNavigate?.('community')}>
                Comunidad
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsExpanded(false)}
                className="text-gray-600"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Chat expandido */}
        <div className="flex h-[calc(100vh-80px)]">
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[70%] p-4 rounded-2xl ${
                      message.isBot
                        ? 'bg-pink-100 text-pink-800 rounded-tl-sm'
                        : 'bg-purple-100 text-purple-800 rounded-tr-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-6 border-t-2 border-pink-200 bg-white">
              <div className="flex gap-3">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Comparte conmigo lo que necesitas... 💖"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 border-pink-200 focus:border-pink-400"
                />
                <Button
                  onClick={handleSendMessage}
                  className="text-white"
                  style={{ backgroundColor: '#FF1493' }}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 border-2 border-pink-200 shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Atom className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-sm text-pink-600">maIA</CardTitle>
                <p className="text-xs text-gray-500">Tu asistente STEM</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(true)}
                className="h-6 w-6 p-0"
              >
                <Maximize2 className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Quick actions */}
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={action.action}
                className="text-xs border-pink-200 hover:bg-pink-50"
              >
                {action.text}
              </Button>
            ))}
          </div>

          {/* Latest message */}
          <div className="bg-pink-50 p-3 rounded-lg border border-pink-200">
            <p className="text-sm text-pink-800">
              {messages[messages.length - 1]?.text.substring(0, 100)}
              {messages[messages.length - 1]?.text.length > 100 ? '...' : ''}
            </p>
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe aquí..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 text-sm border-pink-200"
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="text-white"
              style={{ backgroundColor: '#FF1493' }}
            >
              <Send className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FloatingMaIA;
