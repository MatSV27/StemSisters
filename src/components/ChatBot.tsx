
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Send, Heart, Star, Users, BookOpen, Award, Target, MessageCircle, Home } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola hermosa! 💜 Soy Sofia, tu hermana mayor digital. Me emociona mucho conocerte y acompañarte en este increíble viaje de descubrimiento. ¿Cómo te sientes hoy? ¿Estás lista para explorar juntas el mundo de STEM?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [currentView, setCurrentView] = useState<'chat' | 'dashboard' | 'community' | 'courses'>('chat');
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
      "¡Me encanta tu curiosidad! 🌟 Basándome en lo que me contaste, creo que te podría interesar explorar el mundo de la programación. ¿Has pensado alguna vez en crear tu propia app?",
      "Wow, eso suena súper emocionante! 💫 Sabes qué, hay una historia increíble de María, una chica de 16 años que también se sentía así. Empezó con un curso de robótica y ahora está creando proyectos increíbles. ¿Te gustaría que te cuente más?",
      "Te entiendo perfectamente, muchas chicas se sienten así al principio 💜 Pero déjame decirte algo: la ciencia necesita tu perspectiva única. ¿Qué tal si empezamos con algo súper divertido? Tengo un micro-reto de 10 minutos que seguro te va a gustar.",
      "¡Qué genial! 🚀 Veo que tienes mucho potencial. Te tengo una propuesta: hay un hackathon para chicas de tu edad el próximo mes. ¿Te animas a participar? Yo te ayudo a prepararte.",
      "Me parece perfecto que pienses así 💖 El autoconocimiento es súper importante. Te sugiero que explores nuestro módulo de 'Descubre tu superpoder STEM'. Son actividades cortitas pero muy reveladoras."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const suggestedActivities = [
    { title: "Crea tu primera app", type: "Microcurso", duration: "30 min", color: "bg-purple-500" },
    { title: "Experimento: Slime conductor", type: "Reto práctico", duration: "20 min", color: "bg-teal-500" },
    { title: "Historia: Ana y la NASA", type: "Inspiración", duration: "5 min", color: "bg-pink-500" },
  ];

  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
        {/* Navigation */}
        <nav className="bg-white border-b border-purple-100 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-purple-600">Mi Camino STEM</h1>
            <div className="flex space-x-2">
              <Button variant="ghost" onClick={() => setCurrentView('chat')}>
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat con Sofia
              </Button>
              <Button variant="ghost" onClick={() => setCurrentView('community')}>
                <Users className="h-4 w-4 mr-2" />
                Comunidad
              </Button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8">
          {/* Welcome back message */}
          <div className="bg-gradient-to-r from-purple-500 to-teal-500 text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-2">¡Bienvenida de vuelta! 🌟</h2>
            <p>Sofia tiene nuevas sugerencias personalizadas para ti</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mi progreso */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-500" />
                  Mi Camino Actual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Exploración STEM</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">3</div>
                      <div className="text-sm text-gray-600">Áreas exploradas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600">7</div>
                      <div className="text-sm text-gray-600">Retos completados</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-500">2</div>
                      <div className="text-sm text-gray-600">Logros obtenidos</div>
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
                  Mis Logros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge 
                    className="w-full justify-start text-white"
                    style={{ backgroundColor: '#FF6B9D' }}
                  >
                    🎯 Primera exploradora
                  </Badge>
                  <Badge 
                    className="w-full justify-start text-white"
                    style={{ backgroundColor: '#FFD166' }}
                  >
                    💻 Programadora novata
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
            <h3 className="text-xl font-bold mb-4">Sofia sugiere para ti hoy:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {suggestedActivities.map((activity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
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
                    <Button className="w-full mt-4" style={{ backgroundColor: '#7E4EFF' }}>
                      Empezar ahora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'community') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
        {/* Navigation */}
        <nav className="bg-white border-b border-purple-100 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-purple-600">Comunidad StemSisters</h1>
            <div className="flex space-x-2">
              <Button variant="ghost" onClick={() => setCurrentView('dashboard')}>
                <Home className="h-4 w-4 mr-2" />
                Mi Dashboard
              </Button>
              <Button variant="ghost" onClick={() => setCurrentView('chat')}>
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat con Sofia
              </Button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Posts de la comunidad */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      👩‍💻
                    </div>
                    <div>
                      <div className="font-semibold">María, 16 años</div>
                      <div className="text-sm text-gray-500">Hace 2 horas</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">¡Acabo de terminar mi primer proyecto de programación! 🎉 Era una calculadora simple pero me siento súper orgullosa. Sofia me ayudó cuando me quedé atascada.</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">💜 12</Button>
                    <Button size="sm" variant="outline">💬 5</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      👩‍🔬
                    </div>
                    <div>
                      <div className="font-semibold">Ana, 15 años</div>
                      <div className="text-sm text-gray-500">Hace 5 horas</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">¿Alguien más se siente nerviosa por el hackathon del próximo mes? 😅 Es mi primera vez participando en algo así.</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">💜 8</Button>
                    <Button size="sm" variant="outline">💬 12</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar de comunidad */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Chicas activas hoy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-sm">👩‍🎨</div>
                      <div>
                        <div className="font-medium text-sm">Sofía</div>
                        <div className="text-xs text-gray-500">Diseñando apps</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm">👩‍⚕️</div>
                      <div>
                        <div className="font-medium text-sm">Carmen</div>
                        <div className="text-xs text-gray-500">Explorando medicina</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm">👩‍🚀</div>
                      <div>
                        <div className="font-medium text-sm">Luna</div>
                        <div className="text-xs text-gray-500">Estudiando astronomía</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Próximos eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium">Hackathon StemSisters</div>
                      <div className="text-gray-500">15 de Julio</div>
                    </div>
                    <div>
                      <div className="font-medium">Taller de Robótica</div>
                      <div className="text-gray-500">22 de Julio</div>
                    </div>
                    <div>
                      <div className="font-medium">Charla: Mujeres en Tech</div>
                      <div className="text-gray-500">29 de Julio</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white border-b border-purple-100 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-purple-600">Sofia - Tu hermana mayor</h1>
              <p className="text-sm text-gray-500">Siempre aquí para ti 💜</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" onClick={() => setCurrentView('dashboard')}>
              <Home className="h-4 w-4 mr-2" />
              Mi Dashboard
            </Button>
            <Button variant="ghost" onClick={() => setCurrentView('community')}>
              <Users className="h-4 w-4 mr-2" />
              Comunidad
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
                      ? 'bg-teal-100 text-teal-800 rounded-tl-sm'
                      : 'bg-purple-100 text-purple-800 rounded-tr-sm'
                  }`}
                  style={{
                    backgroundColor: message.isBot ? '#E6FFFA' : '#F3E8FF'
                  }}
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
          <div className="px-6 py-3 border-t border-purple-100">
            <div className="flex gap-2 flex-wrap">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setInputMessage("¿Qué carreras me recomiendas?")}
                className="text-purple-600 border-purple-200"
              >
                ¿Qué carreras me recomiendas?
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setInputMessage("Me siento perdida, ¿me ayudas?")}
                className="text-teal-600 border-teal-200"
              >
                Me siento perdida, ¿me ayudas?
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setInputMessage("Cuéntame una historia inspiradora")}
                className="text-pink-600 border-pink-200"
              >
                Cuéntame una historia inspiradora
              </Button>
            </div>
          </div>

          {/* Input area */}
          <div className="p-6 border-t border-purple-100 bg-white">
            <div className="flex gap-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Escribe tu mensaje aquí... 💜"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 border-purple-200 focus:border-purple-400"
              />
              <Button
                onClick={handleSendMessage}
                className="text-white"
                style={{ backgroundColor: '#7E4EFF' }}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar with suggestions */}
        <div className="w-80 border-l border-purple-100 bg-white p-6">
          <h3 className="font-bold text-gray-800 mb-4">Sugerencias para ti</h3>
          
          <div className="space-y-4">
            {suggestedActivities.map((activity, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className={`w-8 h-8 rounded-lg ${activity.color} flex items-center justify-center mb-2`}>
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{activity.title}</h4>
                  <p className="text-xs text-gray-500 mb-2">{activity.type} • {activity.duration}</p>
                  <Button size="sm" className="w-full text-xs" style={{ backgroundColor: '#7E4EFF' }}>
                    Empezar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 bg-purple-50 rounded-lg">
            <div className="text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <h4 className="font-semibold text-purple-800 mb-2">¡Sigue así!</h4>
              <p className="text-sm text-purple-600">
                Has completado 7 actividades. ¡Solo 3 más para tu próximo logro!
              </p>
              <Progress value={70} className="mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
