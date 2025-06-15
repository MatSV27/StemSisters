
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Users, BookOpen, Award, MessageCircle, Sparkles, Heart, Target, Bot, Zap, Shield } from "lucide-react";
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

  const appFeatures = [
    {
      icon: Bot,
      title: "Sofia, tu hermana mayor digital",
      description: "Un chatbot inteligente que te conoce, te escucha y te acompaña en cada paso de tu camino STEM",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Target,
      title: "Microcursos personalizados",
      description: "Contenido diseñado especialmente para ti: videos, experimentos, retos y más según tu estilo de aprendizaje",
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    },
    {
      icon: Users,
      title: "Comunidad de chicas increíbles",
      description: "Conecta con otras StemSisters, comparte tus logros y encuentra el apoyo que necesitas",
      color: "text-pink-500",
      bgColor: "bg-pink-100"
    },
    {
      icon: Award,
      title: "Sistema de logros y reconocimiento",
      description: "Gana badges, celebra tus avances y forma parte del Top Chicas de nuestra comunidad",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    }
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
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <Bot className="h-4 w-4 text-purple-500" />
              <span>Sofia está esperándote</span>
            </div>
            <Button 
              onClick={handleGetStarted}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold"
              style={{ backgroundColor: '#7E4EFF' }}
            >
              {isRegistered ? 'Continuar mi camino' : 'Conocer a Sofia 💜'}
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Welcome Section */}
        <WelcomeSection onGetStarted={handleGetStarted} />

        {/* Chat Bot Teaser Section */}
        <section className="py-16 bg-gradient-to-r from-purple-100 to-teal-100">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-200">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bot className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  ¡Hola! Soy Sofia, tu hermana mayor digital 💜
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Estoy aquí para conocerte, escucharte y acompañarte en cada paso de tu camino STEM. 
                  <span className="text-pink-500 font-semibold" style={{ color: '#FF6B9D' }}> 
                    ¡No estás sola en esta aventura!
                  </span>
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Heart className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Te escucho</h4>
                    <p className="text-sm text-gray-600">Sin juicios, con comprensión</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Te guío</h4>
                    <p className="text-sm text-gray-600">Contenido personalizado para ti</p>
                  </div>
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Te inspiro</h4>
                    <p className="text-sm text-gray-600">Con historias reales de éxito</p>
                  </div>
                </div>
                <Button 
                  onClick={handleGetStarted}
                  size="lg"
                  className="text-white px-8 py-4 text-lg font-semibold rounded-full"
                  style={{ backgroundColor: '#7E4EFF' }}
                >
                  Quiero conocer a Sofia 🚀
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              ¿Cómo funciona StemSisters?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Una plataforma diseñada especialmente para chicas como tú, donde cada funcionalidad 
              está pensada para que te sientas cómoda, inspirada y acompañada.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {appFeatures.map((feature, index) => (
                <Card key={index} className="border-purple-100 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-3`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Métricas de Impacto */}
        <section className="py-16" style={{ backgroundColor: '#F8F5FF' }}>
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
        <section className="py-16 bg-white">
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

        {/* Safety and Privacy */}
        <section className="py-16" style={{ backgroundColor: '#F8F5FF' }}>
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Shield className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Un espacio seguro para ti
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tu privacidad y seguridad son nuestra prioridad. StemSisters es un ambiente 
                protegido donde puedes explorar, aprender y crecer sin presiones.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-semibold text-purple-600 mb-2">Contenido apropiado</div>
                  <div className="text-gray-600">Todo revisado por educadoras</div>
                </div>
                <div>
                  <div className="font-semibold text-teal-600 mb-2">Consentimiento parental</div>
                  <div className="text-gray-600">Requerido para menores de edad</div>
                </div>
                <div>
                  <div className="font-semibold text-pink-500 mb-2">Datos protegidos</div>
                  <div className="text-gray-600">Nunca compartidos con terceros</div>
                </div>
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
              Sofia está esperándote para comenzar esta increíble aventura. 
              Tu futuro brillante en ciencia y tecnología empieza aquí.
            </p>
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-full"
            >
              ¡Conocer a Sofia ahora! 💜
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
