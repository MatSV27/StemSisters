
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, X, Maximize2, Minimize2, Heart, Star, Sparkles, Atom, BookOpen, Users, Trophy, Target, MessageCircle, Bot } from "lucide-react";

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
      text: "¡Hola exploradora! 💖 Soy maIA, tu mentora STEM personal. Me emociona conocerte y acompañarte en este viaje increíble. ¿En qué puedo ayudarte hoy? ¿Quieres explorar cursos, ver tu progreso, o necesitas inspiración? 🌟",
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
    { 
      text: "¿Qué me recomiendas aprender?", 
      action: () => setInputMessage("¿Qué me recomiendas aprender según mi perfil?"),
      color: "bg-gradient-to-r from-pink-400 to-pink-600"
    },
    { 
      text: "Me siento perdida", 
      action: () => setInputMessage("Me siento perdida, ¿puedes ayudarme a encontrar mi camino?"),
      color: "bg-gradient-to-r from-purple-400 to-purple-600"
    },
    { 
      text: "Quiero inspiración", 
      action: () => setInputMessage("Cuéntame historias de exploradoras que lo lograron"),
      color: "bg-gradient-to-r from-teal-400 to-teal-600"
    },
    { 
      text: "Oportunidades", 
      action: () => setInputMessage("¿Qué talleres y mentorías hay disponibles?"),
      color: "bg-gradient-to-r from-yellow-400 to-orange-500"
    }
  ];

  const suggestedCourses = [
    { title: "Programación para principiantes", students: "1,247", color: "bg-pink-500" },
    { title: "Ciencias de datos", students: "856", color: "bg-purple-500" },
    { title: "Desarrollo de videojuegos", students: "1,593", color: "bg-teal-500" }
  ];

  const stats = [
    { label: "exploradoras estudiando programación", value: "2,847" },
    { label: "chicas en ingeniería", value: "1,234" },
    { label: "futuras científicas", value: "987" }
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* Mensaje encima del botón */}
        <div className="absolute -top-14 -left-32 bg-white rounded-lg shadow-lg p-3 border-2 border-pink-200 max-w-xs mb-2">
          <p className="text-sm text-gray-700 font-medium">
            ¿Necesitas ayuda? ¡Pregúntame! 💖
          </p>
        </div>
        
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
                <h1 className="font-bold text-pink-600">maIA - Tu mentora STEM</h1>
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

            {/* Quick actions */}
            <div className="px-6 py-3 border-t border-pink-200">
              <div className="flex gap-2 flex-wrap">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    size="sm"
                    onClick={action.action}
                    className={`text-white hover:scale-105 transition-transform ${action.color}`}
                  >
                    {action.text}
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

          {/* Sidebar con sugerencias */}
          <div className="w-80 border-l-2 border-pink-200 bg-white p-6 overflow-y-auto">
            <h3 className="font-bold text-gray-800 mb-4">Sugerencias para ti</h3>
            
            <div className="space-y-4 mb-6">
              {suggestedCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-pink-200">
                  <CardContent className="p-4">
                    <div className={`w-8 h-8 rounded-lg ${course.color} flex items-center justify-center mb-2`}>
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{course.title}</h4>
                    <p className="text-xs text-gray-500 mb-2">{course.students} exploradoras estudiando</p>
                    <Button size="sm" className="w-full text-xs" style={{ backgroundColor: '#FF1493' }}>
                      ¡Empezar!
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Exploradoras activas</h4>
              <div className="space-y-2">
                {stats.map((stat, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{stat.value}</span>
                      <span className="text-pink-600 font-medium">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-pink-50 rounded-lg">
              <div className="text-center">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <h4 className="font-semibold text-pink-800 mb-2">¡Sigue así, genia!</h4>
                <p className="text-sm text-pink-600">
                  Eres parte de las 2,847 exploradoras cambiando el mundo
                </p>
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
                <p className="text-xs text-gray-500">Tu mentora STEM</p>
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
                size="sm"
                onClick={action.action}
                className={`text-xs text-white hover:scale-105 transition-transform ${action.color}`}
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
