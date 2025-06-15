import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Users, BookOpen, Award, MessageCircle, Sparkles, Heart, Target, Bot, Zap, Shield, Atom, User, LogOut, Crown } from "lucide-react";
import WelcomeSection from "@/components/WelcomeSection";
import AuthModal from "@/components/AuthModal";
import InitialSurvey from "@/components/InitialSurvey";
import FloatingMaYA from "@/components/FloatingMaIA";
import ImprovedCoursesSection from "@/components/ImprovedCoursesSection";
import AchievementsSection from "@/components/AchievementsSection";
import CommunitySection from "@/components/CommunitySection";
import AchievementsPage from "@/components/AchievementsPage";
import SuccessProfilesSection from "@/components/SuccessProfilesSection";
import EventsOpportunitiesSection from "@/components/EventsOpportunitiesSection";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showSurvey, setShowSurvey] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [currentView, setCurrentView] = useState<'home' | 'courses' | 'dashboard' | 'community' | 'success-stories' | 'events-opportunities'>('community');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleAuthComplete = (data: any) => {
    setUserData(data);
    setIsAuthenticated(true);
    setShowAuth(false);
    // Solo mostrar survey si es registro
    if (authMode === 'register') {
      setShowSurvey(true);
    } else {
      setCurrentView('community');
    }
  };

  const handleSurveyComplete = () => {
    setShowSurvey(false);
    setCurrentView('community');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    setCurrentView('home');
    setShowUserMenu(false);
  };

  const handleNavigation = (view: string) => {
    setCurrentView(view as any);
  };

  const handleLoginClick = () => {
    setAuthMode('login');
    setShowAuth(true);
  };

  const handleRegisterClick = () => {
    setAuthMode('register');
    setShowAuth(true);
  };

  // Show survey if authenticated but hasn't completed it
  if (isAuthenticated && showSurvey) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* Header visible during survey */}
        <header className="bg-white/90 backdrop-blur-sm border-b-2 border-pink-200 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a2105dde-07d8-4f7c-a95a-327a43979b79.png" 
                alt="StemSisters Logo" 
                className="h-8 w-8 object-contain"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                StemSisters
              </h1>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <SuccessProfilesSection />
        </main>

        <InitialSurvey onComplete={handleSurveyComplete} />
        <FloatingMaYA onNavigate={handleNavigation} />
      </div>
    );
  }

  // Show main app if authenticated
  if (isAuthenticated && currentView !== 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm border-b-2 border-pink-200 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a2105dde-07d8-4f7c-a95a-327a43979b79.png" 
                alt="StemSisters Logo" 
                className="h-8 w-8 object-contain"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                StemSisters
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-4">
              <Button 
                variant={currentView === 'community' ? "default" : "ghost"}
                onClick={() => setCurrentView('community')}
                style={currentView === 'community' ? { backgroundColor: '#FF1493', color: 'white' } : {}}
              >
                Comunidad
              </Button>
              <Button 
                variant={currentView === 'courses' ? "default" : "ghost"}
                onClick={() => setCurrentView('courses')}
                style={currentView === 'courses' ? { backgroundColor: '#FF1493', color: 'white' } : {}}
              >
                Cursos
              </Button>
              <Button 
                variant={currentView === 'dashboard' ? "default" : "ghost"}
                onClick={() => setCurrentView('dashboard')}
                style={currentView === 'dashboard' ? { backgroundColor: '#FF1493', color: 'white' } : {}}
              >
                Mi Seguimiento
              </Button>
              <Button 
                variant={currentView === 'success-stories' ? "default" : "ghost"}
                onClick={() => setCurrentView('success-stories')}
                style={currentView === 'success-stories' ? { backgroundColor: '#FF1493', color: 'white' } : {}}
                className="flex items-center gap-2"
              >
                <Crown className="h-4 w-4" />
                Reinas de la Ciencia ✨
              </Button>
              <Button 
                variant={currentView === 'events-opportunities' ? "default" : "ghost"}
                onClick={() => setCurrentView('events-opportunities')}
                style={currentView === 'events-opportunities' ? { backgroundColor: '#FF1493', color: 'white' } : {}}
                className="flex items-center gap-2"
              >
                <Target className="h-4 w-4" />
                Eventos y Oportunidades
              </Button>
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  <span>{userData?.name}</span>
                </Button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-pink-200 z-50">
                    <div className="p-3 border-b border-pink-100">
                      <p className="font-medium text-gray-800">{userData?.name}</p>
                      <p className="text-sm text-gray-500">{userData?.email}</p>
                    </div>
                    <div className="p-1">
                      <Button
                        variant="ghost"
                        onClick={handleLogout}
                        className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Cerrar sesión
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {currentView === 'community' && (
            <CommunitySection onNavigateToEventsOpportunities={() => setCurrentView('events-opportunities')} />
          )}
          {currentView === 'courses' && <ImprovedCoursesSection onNavigateToCommunity={() => setCurrentView('community')} />}
          {currentView === 'dashboard' && <AchievementsSection />}
          {currentView === 'success-stories' && <SuccessProfilesSection />}
          {currentView === 'events-opportunities' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Eventos y Oportunidades 🚀
              </h1>
              <EventsOpportunitiesSection />
            </div>
          )}
        </main>

        <FloatingMaYA onNavigate={handleNavigation} />
      </div>
    );
  }

  // Show welcome page
  const successStories = [
    {
      name: "María González",
      age: 16,
      story: "Desarrolló una app para ayudar a su abuela con diabetes. Ahora estudia medicina y su app se usa en 3 hospitales.",
      achievement: "Innovadora Médica",
      avatar: "👩‍⚕️"
    },
    {
      name: "Luisa Martínez",
      age: 17,
      story: "Creó un videojuego sobre el cambio climático. ¡Nintendo se interesó y ahora trabaja con su equipo!",
      achievement: "Game Developer",
      avatar: "👩‍💻"
    },
    {
      name: "Sofía Ramírez",
      age: 16,
      story: "Inventó un filtro de agua usando nanotecnología. Su diseño ganó la feria de ciencias nacional.",
      achievement: "Ingeniera del Futuro",
      avatar: "👩‍🔬"
    }
  ];

  const metrics = [
    { icon: Users, value: "2,847", label: "Exploradoras empoderadas", color: "text-pink-500" },
    { icon: BookOpen, value: "156", label: "Sueños cumplidos", color: "text-purple-600" },
    { icon: Award, value: "89%", label: "Ahora aman STEM", color: "text-teal-600" },
    { icon: Star, value: "4.9/5", label: "¡Se sienten poderosas!", color: "text-yellow-500" }
  ];

  const appFeatures = [
    {
      icon: Bot,
      title: "maIA, tu mentora STEM personal",
      description: "Una asistente súper cool que te entiende, te escucha sin juzgar y te ayuda a descubrir tu superpoder en Ciencia, Tecnología, Ingeniería y Matemáticas",
      color: "text-pink-500",
      bgColor: "bg-pink-100"
    },
    {
      icon: Target,
      title: "Contenido que te va a encantar",
      description: "Videos, experimentos locos, retos súper cool y proyectos diseñados para que TÚ brilles y demuestres de qué estás hecha",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Users,
      title: "Tu comunidad de exploradoras genias",
      description: "Conecta con chicas increíbles como tú, comparte tus logros épicos y encuentra el apoyo que mereces para conquistar el mundo",
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    },
    {
      icon: Award,
      title: "Reconocimiento que te mereces",
      description: "Gana insignias súper cool, celebra cada pequeña victoria y forma parte del Top de chicas que están cambiando el mundo",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50" style={{ backgroundColor: '#FFF0F8' }}>
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b-2 border-pink-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/a2105dde-07d8-4f7c-a95a-327a43979b79.png" 
              alt="StemSisters Logo" 
              className="h-8 w-8 object-contain"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              StemSisters
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleLoginClick}
              variant="outline"
              className="px-6 py-2 rounded-full font-bold border-2 text-pink-600 hover:bg-pink-50 transition-all"
              style={{ borderColor: '#FF1493' }}
            >
              Ingresar
            </Button>
            <Button 
              onClick={handleRegisterClick}
              className="text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#FF1493' }}
            >
              Registrarme
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Welcome Section */}
        <WelcomeSection onGetStarted={handleRegisterClick} />

        {/* MaYA Teaser Section actualizada */}
        <section className="py-16 bg-gradient-to-r from-pink-100 to-purple-100">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-200">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                    <img 
                      src="/lovable-uploads/a2105dde-07d8-4f7c-a95a-327a43979b79.png" 
                      alt="MaYA Logo" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  ¡Hola genia! Soy MaYA, tu mentora STEM personal 💖
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Estoy aquí para acompañarte a descubrir tus talentos en Ciencia, Tecnología, Ingeniería y Matemáticas. 
                  <span className="text-pink-500 font-bold"> 
                    ¡Juntas vamos a demostrar de qué estamos hechas!
                  </span>
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Heart className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                    <h4 className="font-bold text-gray-800">Te entiendo sin juzgar</h4>
                    <p className="text-sm text-gray-600">Como tu mejor amiga que siempre está ahí</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="font-bold text-gray-800">Te guío paso a paso</h4>
                    <p className="text-sm text-gray-600">Contenido súper cool diseñado para ti</p>
                  </div>
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                    <h4 className="font-bold text-gray-800">Te empodero siempre</h4>
                    <p className="text-sm text-gray-600">Con historias de chicas que lo lograron</p>
                  </div>
                </div>
                <Button 
                  onClick={handleRegisterClick}
                  size="lg"
                  className="text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: '#FF1493' }}
                >
                  ¡Quiero conocer a MaYA! 🚀✨
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              ¿Cómo StemSisters va a cambiar tu vida?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Una plataforma diseñada por chicas, para chicas como tú. Donde cada funcionalidad 
              está pensada para que te sientas poderosa, inspirada y acompañada.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {appFeatures.map((feature, index) => (
                <Card key={index} className="border-pink-200 hover:shadow-xl transition-all hover:scale-105">
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

        {/* Success Profiles Section */}
        <SuccessProfilesSection />

        {/* Métricas de Impacto */}
        <section className="py-16" style={{ backgroundColor: '#FFF0F8' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Chicas como tú que ya están cambiando el mundo 🌟
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <metric.icon className={`h-12 w-12 mx-auto mb-4 ${metric.color}`} />
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
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
              Chicas reales que lo están logrando 🔥
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Cada una empezó donde tú estás ahora. Con dudas, pero con ganas de demostrar que sí podemos. 
              <span className="text-pink-500 font-bold"> ¡Tu historia será la próxima!</span>
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 hover:shadow-xl transition-all hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{story.avatar}</div>
                    <CardTitle className="text-lg text-gray-800">{story.name}, {story.age} años</CardTitle>
                    <Badge 
                      className="text-white font-bold"
                      style={{ backgroundColor: '#FF1493' }}
                    >
                      {story.achievement}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-center font-medium">
                      "{story.story}"
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety and Privacy */}
        <section className="py-16" style={{ backgroundColor: '#FFF0F8' }}>
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Shield className="h-16 w-16 text-pink-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Tu espacio seguro para brillar ✨
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tu privacidad y seguridad son nuestra prioridad. StemSisters es tu lugar seguro 
                donde puedes explorar, aprender y brillar sin presiones ni juicios.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-bold text-pink-500 mb-2">Contenido apropiado</div>
                  <div className="text-gray-600">Todo revisado por educadoras expertas</div>
                </div>
                <div>
                  <div className="font-bold text-purple-600 mb-2">Consentimiento familiar</div>
                  <div className="text-gray-600">Requerido para menores de edad</div>
                </div>
                <div>
                  <div className="font-bold text-teal-600 mb-2">Datos súper protegidos</div>
                  <div className="text-gray-600">Nunca compartidos con nadie</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Lista para demostrar de qué estás hecha? 🔥
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              MaYA está esperándote para comenzar esta aventura épica. 
              Tu momento de brillar en ciencia y tecnología empieza AHORA.
            </p>
            <Button 
              onClick={handleRegisterClick}
              size="lg"
              className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              ¡Conocer a MaYA AHORA! 💖🚀
            </Button>
          </div>
        </section>
      </main>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        onAuthComplete={handleAuthComplete}
        mode={authMode}
      />
    </div>
  );
};

export default Index;
