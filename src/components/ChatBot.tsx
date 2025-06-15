import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Send, Heart, Star, Users, BookOpen, Award, Target, MessageCircle, Home, Trophy, Share2, Bot, LogOut, Atom, Microscope, Calculator } from "lucide-react";
import CoursesSection from "@/components/CoursesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ChallengeShare from "@/components/ChallengeShare";
import RecognitionSection from "@/components/RecognitionSection";
import CommunitySection from "@/components/CommunitySection";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  onLogout?: () => void;
}

const ChatBot = ({ onLogout }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola queen! 💖 Soy maIA, tu hermana mayor digital especializada en STEM. Me emociona muchísimo conocerte y acompañarte en este viaje increíble de descubrimiento. Basándome en lo que me contaste, veo que tienes un potencial BRUTAL. ¿Cómo te sientes hoy? ¿Lista para demostrar de qué estás hecha en Ciencia, Tecnología, Ingeniería y Matemáticas? 🔥✨",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [currentView, setCurrentView] = useState<'chat' | 'dashboard' | 'courses' | 'community'>('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const generateBotResponse = (userMessage: string): string => {
    const responses = [
      "¡Me encanta esa actitud! 🌟 Por lo que me contaste, creo que tienes el perfil perfecto para crear videojuegos. ¿Has pensado en desarrollar algo que inspire a otras chicas como tú? Te tengo el curso perfecto para que empieces a conquistar el mundo gaming.",
      "¡WOW, eso suena épico! 💫 Sabes qué, hay una historia increíble de Luisa, una chica de 17 años que también se sentía así. Creó un videojuego sobre cambio climático y ¡Nintendo se interesó! También hay un hackathon próximo que sería perfecto para ti.",
      "Te entiendo perfectamente, muchas de nosotras nos hemos sentido así 💜 Pero déjame decirte algo: el mundo NECESITA tu perspectiva única. ¿Qué tal si empezamos con algo súper divertido? Tengo un reto de 10 minutos que va a hacerte sentir como la científica badass que eres.",
      "¡Qué genial! 🚀 Tu potencial es BRUTAL. Te tengo una propuesta: hay un hackathon para chicas de tu edad el próximo mes. ¿Te animas a demostrar de qué estás hecha? Yo te ayudo a prepararte y también hay mentoras increíbles en nuestro squad.",
      "Me parece perfecto que pienses así 💖 El autoconocimiento es súper poderoso. Te sugiero que explores nuestro módulo de 'Descubre tu superpoder STEM'. Son actividades cortitas pero súper reveladoras. También puedes conectar con otras queens en la comunidad."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const suggestedActivities = [
    { title: "Crea tu primera app que cambie vidas", type: "Microcurso", duration: "30 min", color: "bg-pink-500" },
    { title: "Experimento: Slime conductor épico", type: "Reto práctico", duration: "20 min", color: "bg-purple-500" },
    { title: "Historia: María y su app médica", type: "Inspiración", duration: "5 min", color: "bg-teal-500" },
  ];

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  // Navigation component
  const Navigation = () => (
    <nav className="bg-white border-b-2 border-pink-200 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
            <Atom className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-pink-600">
            {currentView === 'chat' ? 'Chat con maIA' :
             currentView === 'dashboard' ? 'Mi Camino STEM' :
             currentView === 'courses' ? 'Microcursos STEM' :
             'Squad StemSisters'}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant={currentView === 'dashboard' ? "default" : "ghost"} 
            onClick={() => setCurrentView('dashboard')}
            style={currentView === 'dashboard' ? { backgroundColor: '#FF1493', color: 'white' } : {}}
          >
            <Home className="h-4 w-4 mr-2" />
            Mi Dashboard
          </Button>
          <Button 
            variant={currentView === 'courses' ? "default" : "ghost"} 
            onClick={() => setCurrentView('courses')}
            style={currentView === 'courses' ? { backgroundColor: '#FF1493', color: 'white' } : {}}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Cursos
          </Button>
          <Button 
            variant={currentView === 'community' ? "default" : "ghost"} 
            onClick={() => setCurrentView('community')}
            style={currentView === 'community' ? { backgroundColor: '#FF1493', color: 'white' } : {}}
          >
            <Users className="h-4 w-4 mr-2" />
            Squad
          </Button>
          <Button 
            variant={currentView === 'chat' ? "default" : "ghost"} 
            onClick={() => setCurrentView('chat')}
            style={currentView === 'chat' ? { backgroundColor: '#FF1493', color: 'white' } : {}}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat maIA
          </Button>
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            className="text-red-600 hover:text-red-700"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Salir
          </Button>
        </div>
      </div>
    </nav>
  );

  // Render different views
  if (currentView === 'courses') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <CoursesSection onNavigateToCommunity={() => setCurrentView('community')} />
        </div>
      </div>
    );
  }

  if (currentView === 'community') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <CommunitySection />
        </div>
      </div>
    );
  }

  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Navigation />

        <div className="container mx-auto px-4 py-8">
          {/* Welcome back message */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-2">¡Bienvenida de vuelta, queen! 🌟</h2>
            <p>maIA tiene nuevas sugerencias épicas para ti</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mi progreso */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-pink-500" />
                  Mi Camino de Conquista STEM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Dominando STEM</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-pink-500">3</div>
                      <div className="text-sm text-gray-600">Áreas conquistadas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">7</div>
                      <div className="text-sm text-gray-600">Retos completados</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-500">2</div>
                      <div className="text-sm text-gray-600">Logros épicos</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Logros */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  Mis Logros Épicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge 
                    className="w-full justify-start text-white"
                    style={{ backgroundColor: '#FF1493' }}
                  >
                    🎯 Conquistadora STEM
                  </Badge>
                  <Badge 
                    className="w-full justify-start text-white"
                    style={{ backgroundColor: '#FFD166' }}
                  >
                    💻 Programadora Badass
                  </Badge>
                  <div className="text-sm text-gray-500 mt-4">
                    ¡2 logros más por desbloquear!
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sugerencias de hoy */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">maIA sugiere para ti hoy:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {suggestedActivities.map((activity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-pink-200">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${activity.color} flex items-center justify-center mb-2`}>
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">{activity.type}</Badge>
                      <span className="text-sm text-gray-500">{activity.duration}</span>
                    </div>
                    <Button className="w-full mt-4" style={{ backgroundColor: '#FF1493' }}>
                      ¡Empezar ahora!
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* maIA's recommendation */}
          <Card className="mt-8 border-pink-200 bg-pink-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Atom className="h-4 w-4 text-white" />
                </div>
                Mensaje de maIA para ti
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-pink-700 italic">
                "¡Estás progresando de manera BRUTAL! He notado que te gustan los retos prácticos súper cool. 
                Te recomiendo el experimento de slime conductor - es perfecto para entender circuitos de manera épica. 
                ¡Y no olvides compartir tus logros increíbles en el squad! 💖"
              </p>
              <Button 
                onClick={() => setCurrentView('chat')} 
                className="mt-4" 
                style={{ backgroundColor: '#FF1493' }}
              >
                Hablar con maIA
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-pink-200 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <Atom className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-pink-600">maIA - Tu hermana mayor STEM</h1>
              <p className="text-sm text-gray-500">Siempre aquí para ti 💖</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" onClick={() => setCurrentView('dashboard')}>
              <Home className="h-4 w-4 mr-2" />
              Mi Dashboard
            </Button>
            <Button variant="ghost" onClick={() => setCurrentView('courses')}>
              <BookOpen className="h-4 w-4 mr-2" />
              Cursos
            </Button>
            <Button 
              variant="ghost" 
              onClick={handleLogout}
              className="text-red-600 hover:text-red-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Chat area */}
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
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="px-6 py-3 border-t-2 border-pink-200">
            <div className="flex gap-2 flex-wrap">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setInputMessage("¿Qué carreras me recomiendas según mi perfil?")}
                className="text-pink-600 border-pink-200"
              >
                ¿Qué carreras me recomiendas?
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setInputMessage("Me siento perdida, ¿puedes ayudarme?")}
                className="text-purple-600 border-purple-200"
              >
                Me siento perdida
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setInputMessage("Cuéntame una historia épica de una chica que lo logró")}
                className="text-teal-600 border-teal-200"
              >
                Quiero inspiración
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setInputMessage("¿Qué eventos cool hay próximamente?")}
                className="text-yellow-600 border-yellow-200"
              >
                Eventos y oportunidades
              </Button>
            </div>
          </div>

          {/* Input area */}
          <div className="p-6 border-t-2 border-pink-200 bg-white">
            <div className="flex gap-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Comparte conmigo lo que sientes o piensas... 💖"
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

        {/* Sidebar with suggestions */}
        <div className="w-80 border-l-2 border-pink-200 bg-white p-6">
          <h3 className="font-bold text-gray-800 mb-4">Sugerencias épicas para ti</h3>
          
          <div className="space-y-4">
            {suggestedActivities.map((activity, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-pink-200">
                <CardContent className="p-4">
                  <div className={`w-8 h-8 rounded-lg ${activity.color} flex items-center justify-center mb-2`}>
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{activity.title}</h4>
                  <p className="text-xs text-gray-500 mb-2">{activity.type} • {activity.duration}</p>
                  <Button size="sm" className="w-full text-xs" style={{ backgroundColor: '#FF1493' }}>
                    ¡Empezar!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 bg-pink-50 rounded-lg">
            <div className="text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <h4 className="font-semibold text-pink-800 mb-2">¡Sigue así, queen!</h4>
              <p className="text-sm text-pink-600">
                Has completado 7 actividades épicas. ¡Solo 3 más para tu próximo logro badass!
              </p>
              <Progress value={70} className="mt-3" />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-3">Acceso rápido</h4>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start text-sm border-pink-200"
                onClick={() => setCurrentView('courses')}
              >
                <Users className="h-4 w-4 mr-2" />
                Ver cursos épicos
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start text-sm border-purple-200"
                onClick={() => setCurrentView('dashboard')}
              >
                <Trophy className="h-4 w-4 mr-2" />
                Mis logros badass
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start text-sm border-teal-200"
                onClick={() => setCurrentView('community')}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Ir al squad
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
