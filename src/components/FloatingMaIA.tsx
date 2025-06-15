
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, X, MessageCircle, Bot, Menu, Sidebar, PanelLeftClose, PanelLeftOpen, BookOpen, Play, Home, RotateCcw, HelpCircle } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatHistory {
  id: number;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

interface FloatingMaYAProps {
  onNavigate?: (section: string) => void;
}

const FloatingMaYA = ({ onNavigate }: FloatingMaYAProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola, bienvenida a StemSisters! Me llamo MaYA y estoy aquí para acompañarte a descubrir tus talentos. 🌟 ¿En qué puedo ayudarte hoy?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatHistory] = useState<ChatHistory[]>([
    {
      id: 1,
      title: "Mi primer chat con MaYA",
      lastMessage: "¡Hola, bienvenida a StemSisters!",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000)
    },
    {
      id: 2,
      title: "Preguntas sobre programación",
      lastMessage: "¿Qué lenguaje me recomiendas para empezar?",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
      id: 3,
      title: "Dudas sobre carreras STEM",
      lastMessage: "No sé si soy buena para esto...",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    }
  ]);

  const [suggestedCourses] = useState([
    {
      id: 1,
      title: "Crea tu primer proyecto STEAM",
      description: "Perfecto para principiantes",
      duration: "6 semanas",
      students: "2,847",
      icon: "💻",
      color: "bg-pink-500"
    },
    {
      id: 2,
      title: "Experimentos épicos para chicas curiosas",
      description: "Descubre la belleza de las ciencias",
      duration: "8 semanas", 
      students: "1,956",
      icon: "🧪",
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Robótica fácil para chicas",
      description: "Construye tu primer robot",
      duration: "12 semanas",
      students: "1,893",
      icon: "🤖",
      color: "bg-yellow-500"
    }
  ]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    
    // Detectar si pregunta sobre cursos
    if (inputMessage.toLowerCase().includes('curso') || inputMessage.toLowerCase().includes('estudiar') || inputMessage.toLowerCase().includes('aprender')) {
      setRightPanelOpen(true);
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

  const generateMaYAResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('curso') || lowerMessage.includes('estudiar') || lowerMessage.includes('aprender')) {
      return "¡Perfecto! He encontrado algunos cursos súper cool que podrían interesarte. Revisa las sugerencias en el panel de la derecha. ¿Hay alguno que te llame la atención? 💫";
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

  const handleCourseClick = (courseId: number) => {
    onNavigate?.('courses');
    setIsOpen(false);
  };

  const handleNewTopic = () => {
    setMessages([{
      id: 1,
      text: "¡Hola! ¿En qué puedo ayudarte hoy? 🌟",
      isBot: true,
      timestamp: new Date()
    }]);
    setRightPanelOpen(false);
  };

  const handleHelp = () => {
    const helpMessage = {
      id: messages.length + 1,
      text: "¡Estoy aquí para ayudarte! Puedes preguntarme sobre:\n• Cursos y carreras STEM\n• Dudas sobre programación o ciencias\n• Consejos de estudio\n• Motivación y apoyo\n\n¿En qué te gustaría que te ayude? 💖",
      isBot: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, helpMessage]);
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
              onClick={() => setLeftPanelOpen(!leftPanelOpen)}
              className="text-gray-600"
            >
              {leftPanelOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
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

      {/* Main content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - Chat History */}
        {leftPanelOpen && (
          <div className="w-64 border-r-2 border-pink-200 bg-white p-4 overflow-y-auto">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Historial de chats
            </h3>
            <div className="space-y-2">
              {chatHistory.map((chat) => (
                <div key={chat.id} className="p-3 rounded-lg hover:bg-pink-50 cursor-pointer border border-pink-100">
                  <div className="font-medium text-sm text-gray-800 truncate">
                    {chat.title}
                  </div>
                  <div className="text-xs text-gray-500 truncate mt-1">
                    {chat.lastMessage}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {chat.timestamp.toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Center Panel - Chat */}
        <div className="flex-1 flex flex-col">
          {/* Quick Action Buttons */}
          <div className="p-4 bg-white border-b border-pink-200">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleNewTopic}
                className="border-pink-200 text-pink-600 hover:bg-pink-50"
              >
                <Home className="h-4 w-4 mr-1" />
                Nuevo tema
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLeftPanelOpen(!leftPanelOpen)}
                className="border-purple-200 text-purple-600 hover:bg-purple-50"
              >
                <RotateCcw className="h-4 w-4 mr-1" />
                Ver historial
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleHelp}
                className="border-teal-200 text-teal-600 hover:bg-teal-50"
              >
                <HelpCircle className="h-4 w-4 mr-1" />
                Ayuda
              </Button>
            </div>
          </div>

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
          </div>

          {/* Input */}
          <div className="p-6 border-t-2 border-pink-200 bg-white">
            <div className="flex gap-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Escribe tu pregunta aquí... 💖"
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

        {/* Right Panel - Course Suggestions (conditional) */}
        {rightPanelOpen && (
          <div className="w-80 border-l-2 border-pink-200 bg-white p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">Cursos sugeridos para ti</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setRightPanelOpen(false)}
                className="text-gray-600"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {suggestedCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-md transition-shadow cursor-pointer border-pink-200">
                  <CardContent className="p-4">
                    <div className={`w-8 h-8 rounded-lg ${course.color} flex items-center justify-center mb-2`}>
                      <span className="text-white">{course.icon}</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{course.title}</h4>
                    <p className="text-xs text-gray-600 mb-2">{course.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                      <span>{course.duration}</span>
                      <span>{course.students} estudiantes</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full text-xs text-white" 
                      style={{ backgroundColor: '#FF1493' }}
                      onClick={() => handleCourseClick(course.id)}
                    >
                      <Play className="h-3 w-3 mr-1" />
                      Empezar curso
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-pink-50 rounded-lg">
              <div className="text-center">
                <BookOpen className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                <h4 className="font-semibold text-pink-800 mb-1">¿Necesitas más opciones?</h4>
                <p className="text-xs text-pink-600 mb-3">
                  Explora todos nuestros cursos épicos
                </p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-xs border-pink-200 text-pink-600"
                  onClick={() => onNavigate?.('courses')}
                >
                  Ver todos los cursos
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingMaYA;
