
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
  onNavigateToEventsOpportunities?: () => void;
}

const CommunitySection = ({ onNavigateToEventsOpportunities }: CommunityProps) => {
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
    { id: "oportunidades", label: "Eventos y Oportunidades", icon: Rocket },
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
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Existen más exploradoras que aprenden contigo 🌟
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conecta con chicas geniales como tú, comparte tus logros épicos y encuentra el apoyo que mereces para conquistar el mundo STEM
        </p>
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
                onClick={() => {
                  if (category.id === "oportunidades") {
                    onNavigateToEventsOpportunities?.();
                  } else {
                    setSelectedCategory(category.id);
                  }
                }}
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
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-center gap-2 text-lg">
                <Users className="h-5 w-5 text-pink-500" />
                Exploradoras Activas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
                onClick={onNavigateToEventsOpportunities}
              >
                Ver todos los eventos
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
