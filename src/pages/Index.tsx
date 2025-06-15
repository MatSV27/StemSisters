
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Users, BookOpen, Award, MessageCircle, Sparkles, Heart, Target } from "lucide-react";
import WelcomeSection from "@/components/WelcomeSection";
import ChatBot from "@/components/ChatBot";
import RegistrationModal from "@/components/RegistrationModal";

const Index = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const successStories = [
    {
      name: "Ana García",
      age: 16,
      story: "No me gustaba la física, pero descubrí la robótica y ahora estoy en un proyecto NASA!",
      achievement: "Ganadora Hackathon 2024",
      avatar: "👩‍💻"
    },
    {
      name: "María López",
      age: 17,
      story: "Pensé que programar era muy difícil, pero con los microcursos ahora creo mis propias apps!",
      achievement: "Becaria Google Code",
      avatar: "👩‍🔬"
    },
    {
      name: "Sofia Chen",
      age: 15,
      story: "Siempre quise ser doctora, pero descubrí la bioingeniería y es mi pasión!",
      achievement: "Mentora Comunitaria",
      avatar: "👩‍⚕️"
    }
  ];

  const metrics = [
    { icon: Users, value: "2,847", label: "Chicas inspiradas", color: "text-purple-600" },
    { icon: BookOpen, value: "156", label: "Microcursos completados", color: "text-teal-600" },
    { icon: Award, value: "89%", label: "Encontraron su pasión", color: "text-pink-500" },
    { icon: Star, value: "4.9/5", label: "Satisfacción", color: "text-yellow-500" }
  ];

  const handleGetStarted = () => {
    if (!isRegistered) {
      setShowRegistration(true);
    } else {
      setShowChatBot(true);
    }
  };

  const handleRegistrationComplete = () => {
    setIsRegistered(true);
    setShowRegistration(false);
    setShowChatBot(true);
  };

  if (showChatBot && isRegistered) {
    return <ChatBot />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50" style={{ backgroundColor: '#F8F5FF' }}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              StemSisters
            </h1>
          </div>
          <Button 
            onClick={handleGetStarted}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold"
            style={{ backgroundColor: '#7E4EFF' }}
          >
            {isRegistered ? 'Continuar mi camino' : 'Comenzar ahora'}
          </Button>
        </div>
      </header>

      <main>
        {/* Welcome Section */}
        <WelcomeSection onGetStarted={handleGetStarted} />

        {/* Métricas de Impacto */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Transformando el futuro de las chicas en STEM
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <metric.icon className={`h-12 w-12 mx-auto mb-4 ${metric.color}`} />
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Historias de Éxito */}
        <section className="py-16" style={{ backgroundColor: '#F8F5FF' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Chicas como tú que encontraron su camino
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Cada una empezó con dudas, pero descubrió que STEM puede ser increíble. 
              <span className="text-pink-500 font-semibold" style={{ color: '#FF6B9D' }}> ¡Tú también puedes!</span>
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="bg-white border-purple-100 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{story.avatar}</div>
                    <CardTitle className="text-lg text-gray-800">{story.name}, {story.age} años</CardTitle>
                    <Badge 
                      className="text-white font-medium"
                      style={{ backgroundColor: '#FF6B9D' }}
                    >
                      {story.achievement}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center italic">
                      "{story.story}"
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Tu hermana mayor digital te acompañará
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Te conocemos</h3>
                <p className="text-gray-600">
                  Nuestro chatbot te hará preguntas para entender tus intereses y cómo te sientes con STEM
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Exploramos juntas</h3>
                <p className="text-gray-600">
                  Microcursos, retos y actividades diseñadas especialmente para tu perfil y forma de aprender
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Comunidad que inspira</h3>
                <p className="text-gray-600">
                  Conecta con otras chicas, comparte logros y encuentra mentoras que te motiven
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Lista para descubrir tu superpoder en STEM?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Miles de chicas ya encontraron su pasión. Tu aventura en ciencia y tecnología empieza aquí.
            </p>
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-full"
            >
              ¡Empezar mi camino ahora! 🚀
            </Button>
          </div>
        </section>
      </main>

      {/* Registration Modal */}
      {showRegistration && (
        <RegistrationModal 
          onClose={() => setShowRegistration(false)}
          onComplete={handleRegistrationComplete}
        />
      )}
    </div>
  );
};

export default Index;
