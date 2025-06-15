
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, X, MessageCircle, Bot, HelpCircle, MoreHorizontal } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FloatingMaYAProps {
  onNavigate?: (section: string) => void;
  onNavigateToCourses?: () => void;
}

const FloatingMaYA = ({ onNavigate, onNavigateToCourses }: FloatingMaYAProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola, bienvenida a StemSisters! Me llamo MaYA y estoy aquí para acompañarte a descubrir tus talentos. ✨ Antes de empezar... ¿cómo te sientes hoy al pensar en carreras de ciencia, tecnología o matemáticas?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [showCourses, setShowCourses] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const predefinedMessages = [
    {
      text: "No sé si soy buena en esto",
      color: "bg-pink-500",
      response: "Es completamente normal sentirse así al principio. 💜 Recuerda que cada gran científica y programadora empezó exactamente donde tú estás ahora. ¿Te gustaría que te muestre algunos recursos para empezar paso a paso?"
    },
    {
      text: "¿Qué me recomiendas?",
      color: "bg-purple-500",
      response: "¡Perfecto! Te recomiendo empezar explorando nuestros cursos. Tenemos desde 'Crea tu primer proyecto STEAM' hasta 'Robótica fácil para chicas'. ¿Hay algún área que te llame más la atención?"
    },
    {
      text: "Quiero historias inspiradoras",
      color: "bg-teal-500",
      response: "¡Me encanta esa actitud! 🌟 Te voy a contar sobre María, que a los 16 años creó una app para ayudar a su abuela con diabetes. Ahora estudia medicina y su app se usa en 3 hospitales. ¿Te gustaría conocer más historias como esta?"
    },
    {
      text: "¿Qué cursos hay?",
      color: "bg-orange-500",
      response: "¡Tenemos cursos increíbles! Desde 'Experimentos épicos para chicas curiosas' hasta 'Diseño UX/UI para apps que importan'. Todos están diseñados para que descubras tu superpoder. Aquí tienes algunos recomendados especialmente para ti:"
    }
  ];

  const conversationHistory = [
    { id: 1, title: "Primeros pasos en STEM", time: "2:50 PM" },
    { id: 2, title: "Cursos recomendados", time: "3:01 PM" },
    { id: 3, title: "Dudas sobre programación", time: "3:01 PM" }
  ];

  const recommendedCourses = [
    {
      title: "Crea tu primer proyecto STEAM",
      level: "Principiante",
      duration: "6 semanas",
      icon: "📱"
    },
    {
      title: "Química súper divertida",
      level: "Principiante", 
      duration: "4 semanas",
      icon: "🧪"
    },
    {
      title: "Robótica fácil para chicas",
      level: "Intermedio",
      duration: "8 semanas", 
      icon: "🤖"
    }
  ];

  const helpOptions = [
    "💬 Puedo ayudarte a encontrar cursos perfectos para ti",
    "🌟 Te cuento historias inspiradoras de mujeres en STEM",
    "🎯 Te recomiendo tu próximo paso según tus intereses",
    "💖 Te apoyo cuando sientes dudas o inseguridades",
    "📚 Te explico conceptos STEM de forma súper fácil",
    "🚀 Te motivo a perseguir tus sueños más grandes"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    
    // Check if user asks about courses
    if (inputMessage.toLowerCase().includes('curso')) {
      setShowCourses(true);
    }
    
    setInputMessage("");

    // Simular respuesta de MaYA
    setTimeout(() => {
      const botResponse = generateMaYAResponse(inputMessage);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const handlePredefinedMessage = (message: any) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: message.text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Si es "¿Qué cursos hay?" mostrar cursos
    if (message.text === "¿Qué cursos hay?") {
      setShowCourses(true);
    }

    // Respuesta automática
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: message.response,
        isBot: true,
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const handleViewCourse = () => {
    setIsOpen(false);
    if (onNavigateToCourses) {
      onNavigateToCourses();
    }
  };

  const handleShowHelp = () => {
    setShowHelp(!showHelp);
  };

  const generateMaYAResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('curso') || lowerMessage.includes('estudiar') || lowerMessage.includes('aprender')) {
      setShowCourses(true);
      return "¡Tenemos cursos increíbles! Desde 'Experimentos épicos para chicas curiosas' hasta 'Diseño UX/UI para apps que importan'. Todos están diseñados para que descubras tu superpoder. Aquí tienes algunos recomendados especialmente para ti:";
    }
    
    if (lowerMessage.includes('difícil') || lowerMessage.includes('complicado') || lowerMessage.includes('no sé')) {
      return "Es completamente normal sentirse así al principio. 💜 Recuerda que cada gran científica y programadora empezó exactamente donde tú estás ahora. ¿Te gustaría que te muestre algunos recursos para empezar paso a paso?";
    }
    
    const responses = [
      "¡Me encanta esa actitud! 🌟 Estoy aquí para apoyarte en lo que necesites. ¿Hay algo específico en lo que te gustaría que te ayude?",
      "¡Qué genial tenerte aquí! 💫 ¿Te gustaría explorar algunas áreas de STEM que podrían interesarte?",
      "¡Eres increíble por estar aquí! 🚀 ¿En qué área te gustaría enfocarte hoy?",
      "¡Perfecto! 💜 Siempre es emocionante ayudar a chicas curiosas como tú. ¿Qué te gustaría descubrir?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full shadow-lg text-white border-4 border-white hover:scale-105 transition-all animate-pulse"
          style={{ backgroundColor: '#FF1493' }}
        >
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/a2105dde-07d8-4f7c-a95a-327a43979b79.png" 
              alt="MaYA" 
              className="h-6 w-6 object-contain"
            />
            <span className="text-xs">MaYA</span>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 z-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-pink-200 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/a2105dde-07d8-4f7c-a95a-327a43979b79.png" 
                alt="MaYA" 
                className="h-6 w-6 object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-pink-600">MaYA - Tu mentora STEM personal</h1>
              <p className="text-sm text-gray-500">Siempre aquí para ti 💖</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600"
              onClick={handleShowHelp}
            >
              <HelpCircle className="h-4 w-4" />
              Ayuda
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-gray-600"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Show Help Options */}
      {showHelp && (
        <div className="bg-purple-50 border-b border-purple-200 p-4">
          <h3 className="font-semibold text-purple-800 mb-3">¿En qué puedo ayudarte? 💜</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {helpOptions.map((option, index) => (
              <div key={index} className="text-sm text-purple-700 bg-white p-2 rounded-lg shadow-sm">
                {option}
              </div>
            ))}
          </div>
          <Button
            onClick={() => setShowHelp(false)}
            size="sm"
            className="mt-3 text-white"
            style={{ backgroundColor: '#FF1493' }}
          >
            ¡Entendido!
          </Button>
        </div>
      )}

      {/* Main content */}
      <div className="flex h-[calc(100vh-80px)] max-w-7xl mx-auto">
        {/* Left Sidebar - Conversation History */}
        <div className="w-80 bg-white border-r-2 border-pink-200 p-4">
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-3">Conversaciones</h3>
            <Button
              className="w-full text-white mb-4"
              style={{ backgroundColor: '#FF1493' }}
            >
              + Nueva conversación
            </Button>
          </div>
          
          <div className="space-y-2">
            {conversationHistory.map((conv) => (
              <div
                key={conv.id}
                className="p-3 rounded-lg hover:bg-pink-50 cursor-pointer border border-pink-100"
              >
                <div className="font-medium text-sm text-gray-800 truncate">
                  {conv.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {conv.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
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
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}

            {/* Show courses if requested */}
            {showCourses && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {recommendedCourses.map((course, index) => (
                  <Card key={index} className="border-pink-200 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{course.icon}</span>
                        <div>
                          <CardTitle className="text-sm">{course.title}</CardTitle>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">{course.level}</Badge>
                            <Badge variant="outline" className="text-xs">{course.duration}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button 
                        size="sm" 
                        className="w-full text-white text-xs"
                        style={{ backgroundColor: '#FF1493' }}
                        onClick={handleViewCourse}
                      >
                        Ver curso
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Predefined Message Buttons */}
          <div className="p-4 border-t border-pink-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              {predefinedMessages.map((msg, index) => (
                <Button
                  key={index}
                  onClick={() => handlePredefinedMessage(msg)}
                  className={`text-white text-xs p-2 h-auto ${msg.color} hover:opacity-90`}
                  size="sm"
                >
                  {msg.text}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-6 border-t-2 border-pink-200 bg-white">
            <div className="flex gap-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Juntas conquistemos el mundo, pregúntame... 💖"
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
};

export default FloatingMaYA;
