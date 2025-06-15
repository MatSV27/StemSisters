import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Share2, Trophy, Star, Users, BookOpen, Lightbulb, Rocket, Target, Sparkles, Award, Calendar, ExternalLink, MapPin, Clock, Gift } from "lucide-react";

interface CommunityPost {
  id: number;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
  category: string;
  achievement?: string;
  postComments?: Array<{
    author: string;
    avatar: string;
    content: string;
  }>;
}

interface CommunityProps {
  onNavigateToAchievements?: () => void;
}

const CommunitySection = ({ onNavigateToAchievements }: CommunityProps) => {
  const [newPost, setNewPost] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showTopContributors, setShowTopContributors] = useState(false);

  const posts: CommunityPost[] = [
    {
      id: 1,
      author: "María G.",
      avatar: "👩‍💻",
      content: "¡Acabo de completar mi primera app! Se siente INCREÍBLE ver cómo funciona. gracias maIA por creer en mí cuando ni yo misma lo hacía 💖",
      likes: 47,
      comments: 12,
      timestamp: "Hace 2 horas",
      category: "logros",
      achievement: "Primera App Completada",
      postComments: [
        { author: "Sofía R.", avatar: "👩‍🔬", content: "¡Qué increíble María! Me inspiras a seguir con mi proyecto" },
        { author: "Luna M.", avatar: "👩‍⚕️", content: "¡Felicidades! Yo también quiero aprender a programar" }
      ]
    },
    {
      id: 2,
      author: "Sofía R.",
      avatar: "👩‍🔬",
      content: "¿Alguien más se siente súper nerviosa antes de presentar proyectos? Mañana presento mi experimento de química y necesito buenas vibras 🧪✨",
      likes: 23,
      comments: 8,
      timestamp: "Hace 4 horas",
      category: "apoyo",
      postComments: [
        { author: "María G.", avatar: "👩‍💻", content: "¡Tú puedes! Respira profundo y recuerda que eres genial" },
        { author: "Camila P.", avatar: "👩‍🚀", content: "Yo también me pongo nerviosa, pero siempre sale bien. ¡Mucha suerte!" }
      ]
    },
    {
      id: 3,
      author: "Luna M.",
      avatar: "👩‍⚕️",
      content: "Update: ¡Mi proyecto sobre salud mental en adolescentes fue seleccionado para la feria nacional! No puedo creer que hace 6 meses no sabía ni por dónde empezar 🎉",
      likes: 89,
      comments: 25,
      timestamp: "Ayer",
      category: "logros",
      achievement: "Proyecto Nacional"
    },
    {
      id: 4,
      author: "Camila P.",
      avatar: "👩‍🚀",
      content: "¿Quién más está aplicando al programa de NASA para jóvenes? Podríamos formar un grupo de estudio virtual y motivarnos juntas 🚀",
      likes: 34,
      comments: 15,
      timestamp: "Hace 1 día",
      category: "oportunidades",
      postComments: [
        { author: "Isabella M.", avatar: "👩‍🔬", content: "¡Yo también estoy aplicando! Me encantaría formar el grupo" },
        { author: "Valentina S.", avatar: "👩‍💼", content: "Encontré esta convocatoria súper útil para aplicar" }
      ]
    },
    {
      id: 5,
      author: "Ana L.",
      avatar: "👩‍💼",
      content: "¿Cómo puedo empezar en inteligencia artificial? Me parece súper interesante pero no sé por dónde comenzar",
      likes: 18,
      comments: 7,
      timestamp: "Hace 2 días",
      category: "preguntas",
      postComments: [
        { author: "María G.", avatar: "👩‍💻", content: "Te recomiendo empezar con Python! Hay cursos geniales aquí en la plataforma" }
      ]
    }
  ];

  const categories = [
    { id: "all", label: "Todo", icon: Sparkles },
    { id: "logros", label: "Logros", icon: Trophy },
    { id: "apoyo", label: "Apoyo", icon: Heart },
    { id: "oportunidades", label: "Oportunidades", icon: Rocket },
    { id: "preguntas", label: "Preguntas", icon: Lightbulb }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "logros": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "apoyo": return "bg-pink-100 text-pink-800 border-pink-200";
      case "oportunidades": return "bg-purple-100 text-purple-800 border-purple-200";
      case "preguntas": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "logros": return "🏆 Logro";
      case "apoyo": return "❤️ Apoyo";
      case "oportunidades": return "🚀 Oportunidad";
      case "preguntas": return "❓ Pregunta";
      default: return "📝 Post";
    }
  };

  const successStories = [
    {
      name: "María González",
      age: 16,
      story: "Desarrolló una app para ayudar a su abuela con diabetes. Ahora estudia medicina y su app se usa en 3 hospitales.",
      achievement: "Innovadora Médica",
      avatar: "👩‍⚕️",
      impact: "3,000+ usuarios ayudados"
    },
    {
      name: "Luisa Martínez", 
      age: 17,
      story: "Creó un videojuego sobre el cambio climático. ¡Nintendo se interesó y ahora trabaja con su equipo!",
      achievement: "Game Developer",
      avatar: "👩‍💻",
      impact: "50,000+ descargas"
    },
    {
      name: "Sofía Ramírez",
      age: 16, 
      story: "Inventó un filtro de agua usando nanotecnología. Su diseño ganó la feria de ciencias nacional.",
      achievement: "Ingeniera del Futuro",
      avatar: "👩‍🔬",
      impact: "Patente registrada"
    }
  ];

  const opportunities = [
    {
      title: "Beca Google para Exploradoras STEM",
      type: "Beca",
      deadline: "15 Dic 2024",
      amount: "$5,000 USD",
      description: "Beca completa para chicas destacadas en tecnología",
      icon: "💰",
      link: "#",
      country: "Internacional"
    },
    {
      title: "Hackathon Chicas Tech México",
      type: "Evento",
      deadline: "20 Nov 2024",
      amount: "Gratis",
      description: "48 horas creando soluciones tecnológicas para problemas sociales",
      icon: "💻",
      link: "#",
      country: "México"
    },
    {
      title: "Mentoría con Científicas de NASA",
      type: "Mentoría",
      deadline: "30 Nov 2024",
      amount: "Gratis",
      description: "Programa de 6 meses con científicas de la NASA",
      icon: "🚀",
      link: "#",
      country: "Estados Unidos"
    },
    {
      title: "Taller de Robótica MIT",
      type: "Taller",
      deadline: "10 Dic 2024",
      amount: "$200 USD",
      description: "Taller intensivo de robótica en el MIT",
      icon: "🤖",
      link: "#",
      country: "Estados Unidos"
    }
  ];

  const opportunityTestimonials = [
    {
      name: "Valentina S.",
      avatar: "👩‍💼",
      opportunity: "Beca Google 2023",
      testimonial: "¡He encontrado esta beca increíble! Gracias a la comunidad por compartir. Ya apliqué y estoy súper emocionada 💖"
    },
    {
      name: "Isabella M.",
      avatar: "👩‍🔬",
      opportunity: "Mentoría NASA",
      testimonial: "La mentoría cambió mi vida. Mi mentora me ayudó a entrar al programa de ciencias espaciales de mi universidad"
    }
  ];

  const events = [
    {
      title: "Hackathon Chicas Tech",
      date: "15 Oct",
      participants: "125 inscritas",
      color: "bg-pink-500"
    },
    {
      title: "Mentoring con Google",
      date: "22 Oct", 
      participants: "45 plazas",
      color: "bg-purple-500"
    },
    {
      title: "Workshop Arduino",
      date: "28 Oct",
      participants: "30 exploradoras",
      color: "bg-teal-500"
    }
  ];

  const topContributors = [
    { name: "Ana L.", points: 1250, avatar: "👩‍💼", specialty: "AI & Data" },
    { name: "Valentina S.", points: 1180, avatar: "👩‍💻", specialty: "Web Dev" },
    { name: "Isabella M.", points: 985, avatar: "👩‍🔬", specialty: "Biotecnología" }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const handlePost = () => {
    if (!newPost.trim()) return;
    // Aquí se manejaría la creación del post
    setNewPost("");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Existen más exploradoras que aprenden contigo 🌟
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conecta con chicas geniales como tú, comparte tus logros épicos y encuentra el apoyo que mereces para conquistar el mundo STEM
        </p>
        
        {/* Achievements Button */}
        <div className="absolute top-0 right-0">
          <Button
            onClick={onNavigateToAchievements}
            className="text-white font-bold"
            style={{ backgroundColor: '#FF1493' }}
          >
            <Trophy className="h-4 w-4 mr-2" />
            Mis Logros
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Create Post */}
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-pink-500" />
                ¿Qué quieres compartir con las exploradoras?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Comparte tu logro épico, pide apoyo, o cuenta qué estás aprendiendo... ✨"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="border-pink-200 focus:border-pink-400"
              />
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-pink-200 text-pink-600">
                    🏆 Logro
                  </Badge>
                  <Badge variant="outline" className="border-purple-200 text-purple-600">
                    ❤️ Apoyo
                  </Badge>
                  <Badge variant="outline" className="border-teal-200 text-teal-600">
                    💡 Pregunta
                  </Badge>
                </div>
                <Button 
                  onClick={handlePost}
                  className="text-white"
                  style={{ backgroundColor: '#FF1493' }}
                >
                  Compartir ✨
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "text-white" 
                  : "border-pink-200 text-pink-600 hover:bg-pink-50"
                }
                style={selectedCategory === category.id ? { backgroundColor: '#FF1493' } : {}}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>

          {/* Conditional Sections based on selected category */}
          {selectedCategory === "all" && (
            <>
              {/* Success Stories Section */}
              <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Historias de Éxito que Inspiran 🔥
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {successStories.map((story, index) => (
                      <Card key={index} className="border-pink-200 hover:shadow-lg transition-shadow">
                        <CardHeader className="text-center pb-3">
                          <div className="text-3xl mb-2">{story.avatar}</div>
                          <CardTitle className="text-sm">{story.name}, {story.age} años</CardTitle>
                          <Badge 
                            className="text-white text-xs"
                            style={{ backgroundColor: '#FF1493' }}
                          >
                            {story.achievement}
                          </Badge>
                        </CardHeader>
                        <CardContent className="pt-0 text-center">
                          <p className="text-xs text-gray-600 mb-3">"{story.story}"</p>
                          <Badge variant="outline" className="text-xs border-green-200 text-green-600">
                            {story.impact}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Opportunities Section */}
              <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-teal-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-purple-500" />
                    Oportunidades Épicas para Ti 🚀
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {opportunities.map((opportunity, index) => (
                      <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">{opportunity.icon}</div>
                            <div className="flex-1">
                              <CardTitle className="text-sm">{opportunity.title}</CardTitle>
                              <div className="flex gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {opportunity.type}
                                </Badge>
                                <Badge variant="outline" className="text-xs border-green-200 text-green-600">
                                  {opportunity.country}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-xs text-gray-600 mb-3">{opportunity.description}</p>
                          <div className="flex justify-between items-center text-xs mb-3">
                            <span className="text-gray-500">
                              <Clock className="h-3 w-3 inline mr-1" />
                              {opportunity.deadline}
                            </span>
                            <span className="font-bold text-purple-600">{opportunity.amount}</span>
                          </div>
                          <Button size="sm" className="w-full text-xs" style={{ backgroundColor: '#8B5CF6' }}>
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Ver detalles
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Testimonials */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 text-sm">Lo que dicen las exploradoras:</h4>
                    {opportunityTestimonials.map((testimonial, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">{testimonial.avatar}</span>
                          <div>
                            <span className="font-semibold text-xs text-gray-800">{testimonial.name}</span>
                            <span className="text-xs text-gray-500 ml-2">{testimonial.opportunity}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 italic">"{testimonial.testimonial}"</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Posts Feed */}
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="border-pink-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{post.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800">{post.author}</span>
                        {post.achievement && (
                          <Badge 
                            className="text-white text-xs"
                            style={{ backgroundColor: '#FF1493' }}
                          >
                            {post.achievement}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`text-xs ${getCategoryColor(post.category)}`}>
                          {getCategoryLabel(post.category)}
                        </Badge>
                        <span className="text-sm text-gray-500">{post.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
                  
                  {/* Comments section for apoyo, oportunidades posts */}
                  {(selectedCategory === "apoyo" || selectedCategory === "oportunidades" || selectedCategory === "preguntas") && post.postComments && (
                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                      <h4 className="font-semibold text-sm text-gray-800 mb-2">Comentarios de apoyo:</h4>
                      <div className="space-y-2">
                        {post.postComments.map((comment, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className="text-sm">{comment.avatar}</span>
                            <div>
                              <span className="font-semibold text-xs text-gray-800">{comment.author}</span>
                              <p className="text-xs text-gray-600">{comment.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <button className="flex items-center gap-2 hover:text-pink-600 transition-colors">
                      <Heart className="h-4 w-4" />
                      {post.likes}
                    </button>
                    <button className="flex items-center gap-2 hover:text-pink-600 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments}
                    </button>
                    <button className="flex items-center gap-2 hover:text-pink-600 transition-colors">
                      <Share2 className="h-4 w-4" />
                      Compartir
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Stats */}
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-pink-500" />
                Exploradoras Activas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">2,847</div>
                <div className="text-sm text-gray-600">exploradoras conectadas</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-purple-600">156</div>
                  <div className="text-gray-600">logros compartidos</div>
                </div>
                <div>
                  <div className="font-bold text-teal-600">423</div>
                  <div className="text-gray-600">proyectos activos</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Contributors */}
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Top Exploradoras
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topContributors.slice(0, showTopContributors ? topContributors.length : 3).map((contributor, index) => (
                <div key={contributor.name} className="flex items-center gap-3">
                  <div className="text-lg">{contributor.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">{contributor.name}</div>
                    <div className="text-xs text-gray-500">{contributor.specialty}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-pink-600">{contributor.points}</div>
                    <div className="text-xs text-gray-500">puntos</div>
                  </div>
                </div>
              ))}
              {!showTopContributors && (
                <Button
                  variant="outline"
                  onClick={() => setShowTopContributors(true)}
                  className="w-full border-pink-200 text-pink-600 hover:bg-pink-50"
                >
                  Ver más
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-purple-500" />
                Próximos Eventos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {events.map((event, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${event.color}`} />
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-gray-800">{event.title}</div>
                      <div className="text-xs text-gray-500">{event.date} • {event.participants}</div>
                    </div>
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                className="w-full border-pink-200 text-pink-600 hover:bg-pink-50"
              >
                Ver todos los eventos
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start border-pink-200 hover:bg-pink-50"
                onClick={() => window.location.href = '/courses'}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Explorar cursos
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-purple-200 hover:bg-purple-50"
                onClick={() => window.location.href = '/dashboard'}
              >
                <Target className="h-4 w-4 mr-2" />
                Ver mi progreso
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-teal-200 hover:bg-teal-50"
                onClick={onNavigateToAchievements}
              >
                <Award className="h-4 w-4 mr-2" />
                Mis logros
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
