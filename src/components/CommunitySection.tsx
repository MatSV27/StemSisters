import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Users, 
  Trophy, 
  Target, 
  Star, 
  Clock,
  ExternalLink,
  TrendingUp
} from "lucide-react";

interface CommunityPost {
  id: number;
  author: string;
  avatar: string;
  content: string;
  type: 'logro' | 'apoyo' | 'pregunta';
  timestamp: string;
  likes: number;
  comments: number;
}

interface CommunitySectionProps {
  onNavigateToEventsOpportunities?: () => void;
  onNavigateToCourses?: () => void;
}

const CommunitySection = ({ onNavigateToEventsOpportunities, onNavigateToCourses }: CommunitySectionProps) => {
  const [activeTab, setActiveTab] = useState("logro");
  const [shareContent, setShareContent] = useState("");
  const [shareType, setShareType] = useState<'logro' | 'apoyo' | 'pregunta' | ''>('');
  const [showMoreExplorers, setShowMoreExplorers] = useState(false);
  const [posts, setPosts] = useState<CommunityPost[]>([
    {
      id: 1,
      author: "Sofía M.",
      avatar: "👩‍💻",
      content: "¡Acabo de completar mi primer programa en Python! 🐍 Era súper complicado al principio pero MaYA me ayudó paso a paso. ¡Me siento IMPARABLE!",
      type: 'logro',
      timestamp: "hace 2 horas",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      author: "Valentina R.",
      avatar: "👩‍🔬",
      content: "Chicas, ¿alguien sabe cómo resolver ecuaciones cuadráticas de forma más fácil? Tengo examen mañana y estoy un poco perdida 😅",
      type: 'pregunta',
      timestamp: "hace 4 horas",
      likes: 12,
      comments: 15
    },
    {
      id: 3,
      author: "Isabella L.",
      avatar: "👩‍🚀",
      content: "Me siento súper desanimada... Reprobé mi examen de física y siento que no soy buena para las ciencias 😔",
      type: 'apoyo',
      timestamp: "hace 6 horas",
      likes: 31,
      comments: 22
    }
  ]);

  const topExplorers = [
    {
      name: "Ana L.",
      field: "AI & Data",
      points: 1250,
      avatar: "👩‍💻",
      message: "¿Necesitas ayuda? ¡Pregúntame! 💖"
    },
    {
      name: "Valentina S.",
      field: "Web Dev",
      points: 1180,
      avatar: "👩‍💻",
      message: ""
    },
    {
      name: "Isabella M.",
      field: "Biotecnología",
      points: 985,
      avatar: "👩‍🔬",
      message: ""
    },
    {
      name: "Carla P.",
      field: "Robótica",
      points: 920,
      avatar: "🤖",
      message: ""
    },
    {
      name: "Lucía R.",
      field: "Química",
      points: 890,
      avatar: "🧪",
      message: ""
    }
  ];

  const eventsOpportunities = [
    {
      title: "Beca Google para Exploradoras STEM",
      type: "Beca",
      deadline: "15 Dic 2024",
      amount: "$5,000 USD",
      description: "Beca completa para chicas destacadas en tecnología. Incluye mentoría personalizada, acceso a cursos premium y networking con profesionales de Google.",
      requirements: "Promedio mínimo 8.5, ensayo motivacional, proyecto tecnológico",
      icon: "💰",
      country: "Internacional"
    },
    {
      title: "Hackathon Chicas Tech México",
      type: "Evento",
      deadline: "20 Nov 2024",
      amount: "Gratis",
      description: "48 horas creando soluciones tecnológicas para problemas sociales. Mentores de Microsoft, premios de $10,000 MXN y oportunidades de internship.",
      requirements: "Edad 16-25 años, conocimientos básicos de programación",
      icon: "💻",
      country: "México"
    },
    {
      title: "Programa de Mentoring STEM",
      type: "Programa",
      deadline: "30 Nov 2024", 
      amount: "Gratuito",
      description: "Conecta con mentoras exitosas en STEM por 6 meses. Sesiones semanales personalizadas y acceso a red profesional.",
      requirements: "Estudiante de bachillerato interesada en STEM",
      icon: "🌟",
      country: "España"
    }
  ];

  const handleShare = () => {
    if (!shareContent.trim() || !shareType) return;
    
    const newPost: CommunityPost = {
      id: posts.length + 1,
      author: "Tú",
      avatar: "👤",
      content: shareContent,
      type: shareType,
      timestamp: "ahora",
      likes: 0,
      comments: 0
    };

    setPosts([newPost, ...posts]);
    setShareContent("");
    setShareType('');
    setActiveTab(shareType);
  };

  const renderPosts = (filterType: string) => {
    const filteredPosts = posts.filter(post => post.type === filterType);
    
    return filteredPosts.map(post => (
      <Card key={post.id} className="mb-4 border-pink-200 hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{post.avatar}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-800">{post.author}</span>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    post.type === 'logro' ? 'border-yellow-200 text-yellow-600' :
                    post.type === 'apoyo' ? 'border-pink-200 text-pink-600' :
                    'border-purple-200 text-purple-600'
                  }`}
                >
                  {post.type === 'logro' ? '🏆 Logro' : 
                   post.type === 'apoyo' ? '💖 Apoyo' : '❓ Pregunta'}
                </Badge>
              </div>
              <span className="text-xs text-gray-500">{post.timestamp}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <button className="flex items-center gap-1 hover:text-pink-500">
              <Heart className="h-4 w-4" />
              {post.likes}
            </button>
            <button className="flex items-center gap-1 hover:text-purple-500">
              <MessageCircle className="h-4 w-4" />
              {post.comments}
            </button>
          </div>
        </CardContent>
      </Card>
    ));
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Existen más exploradoras que aprenden contigo ✨
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conecta con chicas geniales como tú, comparte tus logros épicos y encuentra el apoyo que 
            mereces para conquistar el mundo STEM
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-3 space-y-6">
          {/* Share Section */}
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-600">
                <Star className="h-5 w-5" />
                ¿Qué quieres compartir con las exploradoras?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  value={shareContent}
                  onChange={(e) => setShareContent(e.target.value)}
                  placeholder="Comparte tu logro épico, pide apoyo, o cuenta qué estás aprendiendo... ✨"
                  rows={3}
                  className="border-pink-200 focus:border-pink-400"
                />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Button
                      variant={shareType === 'logro' ? 'default' : 'outline'}
                      onClick={() => setShareType('logro')}
                      size="sm"
                      className={shareType === 'logro' ? 'text-white' : 'border-yellow-200 text-yellow-600'}
                      style={shareType === 'logro' ? { backgroundColor: '#FF1493' } : {}}
                    >
                      🏆 Logros
                    </Button>
                    <Button
                      variant={shareType === 'apoyo' ? 'default' : 'outline'}
                      onClick={() => setShareType('apoyo')}
                      size="sm"
                      className={shareType === 'apoyo' ? 'text-white' : 'border-pink-200 text-pink-600'}
                      style={shareType === 'apoyo' ? { backgroundColor: '#FF1493' } : {}}
                    >
                      💖 Apoyo
                    </Button>
                    <Button
                      variant={shareType === 'pregunta' ? 'default' : 'outline'}
                      onClick={() => setShareType('pregunta')}
                      size="sm"
                      className={shareType === 'pregunta' ? 'text-white' : 'border-purple-200 text-purple-600'}
                      style={shareType === 'pregunta' ? { backgroundColor: '#FF1493' } : {}}
                    >
                      ❓ Preguntas
                    </Button>
                  </div>
                  <Button 
                    className="text-white font-bold"
                    style={{ backgroundColor: '#FF1493' }}
                    onClick={handleShare}
                    disabled={!shareContent.trim() || !shareType}
                  >
                    Compartir ✨
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 bg-white border-2 border-pink-200">
              <TabsTrigger value="logro" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                🏆 Logros
              </TabsTrigger>
              <TabsTrigger value="apoyo" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                💖 Apoyo
              </TabsTrigger>
              <TabsTrigger value="pregunta" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                ❓ Preguntas
              </TabsTrigger>
              <TabsTrigger value="eventos" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                🚀 Eventos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="logro" className="space-y-4 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Celebremos juntas cada victoria 🎉</h3>
                {renderPosts('logro')}
              </div>
            </TabsContent>

            <TabsContent value="apoyo" className="space-y-4 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Aquí estamos para apoyarnos 💝</h3>
                {renderPosts('apoyo')}
              </div>
            </TabsContent>

            <TabsContent value="pregunta" className="space-y-4 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Ninguna pregunta es tonta 🤓</h3>
                {renderPosts('pregunta')}
              </div>
            </TabsContent>

            <TabsContent value="eventos" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Oportunidades geniales esperándote 🚀</h3>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {eventsOpportunities.map((opportunity, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-purple-200 rounded-lg">
                      <AccordionTrigger className="px-4 py-3 hover:no-underline">
                        <div className="flex items-center gap-3 w-full">
                          <div className="text-2xl">{opportunity.icon}</div>
                          <div className="flex-1 text-left">
                            <div className="font-semibold text-gray-800">{opportunity.title}</div>
                            <div className="flex gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {opportunity.type}
                              </Badge>
                              <Badge variant="outline" className="text-xs border-green-200 text-green-600">
                                {opportunity.country}
                              </Badge>
                              <Badge variant="outline" className="text-xs border-red-200 text-red-600">
                                <Clock className="h-3 w-3 mr-1" />
                                {opportunity.deadline}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-purple-600">{opportunity.amount}</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <div className="space-y-3">
                          <p className="text-gray-600">{opportunity.description}</p>
                          <div>
                            <h5 className="font-semibold text-sm text-gray-800 mb-1">Requisitos:</h5>
                            <p className="text-sm text-gray-600">{opportunity.requirements}</p>
                          </div>
                          <Button size="sm" className="w-full text-white" style={{ backgroundColor: '#8B5CF6' }}>
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Ver detalles y aplicar
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>

          {/* Decorative section for MaYA */}
          <div className="py-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl">
            <div className="text-center px-4">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  ¿Lista para escribir tu propia historia de éxito? 💫
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Cada gran científica, ingeniera o matemática empezó con un solo paso. 
                  Tu momento de brillar es AHORA.
                </p>
                <Button 
                  size="lg"
                  onClick={onNavigateToCourses}
                  className="text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: '#FF1493' }}
                >
                  ¡Comenzar mi aventura STEM! 🚀
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Exploradoras Activas */}
          <Card className="border-pink-200">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-pink-600">
                <Users className="h-5 w-5" />
                Exploradoras Activas
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div>
                <div className="text-3xl font-bold text-pink-600">2,847</div>
                <div className="text-sm text-gray-600">exploradoras conectadas</div>
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <div className="font-bold text-purple-600">156</div>
                  <div className="text-gray-600">logros compartidos</div>
                </div>
                <div>
                  <div className="font-bold text-teal-600">423</div>
                  <div className="text-gray-600">metas alcanzadas</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Exploradoras */}
          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-600">
                <Trophy className="h-5 w-5" />
                Top Exploradoras
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topExplorers.slice(0, showMoreExplorers ? 5 : 3).map((explorer, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-2xl">{explorer.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">{explorer.name}</div>
                    <div className="text-sm text-gray-600">{explorer.field}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-600">{explorer.points}</div>
                    <div className="text-xs text-gray-500">puntos</div>
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-yellow-600 border-yellow-200"
                onClick={() => setShowMoreExplorers(!showMoreExplorers)}
              >
                {showMoreExplorers ? 'Ver menos' : 'Ver más'}
              </Button>
            </CardContent>
          </Card>

          {/* MaYA Call to Action */}
          <Card className="bg-gradient-to-r from-pink-500 to-purple-600 border-none text-white">
            <CardContent className="p-6 text-center">
              <div className="text-2xl mb-3">🤖💖</div>
              <h3 className="text-lg font-bold mb-2">
                ¿Tienes dudas o necesitas apoyo?
              </h3>
              <p className="text-pink-100 text-sm mb-4">
                MaYA está aquí para ti. Conversa conmigo sobre cualquier tema STEM
              </p>
              <Button 
                size="sm"
                className="bg-white text-pink-600 hover:bg-pink-50 font-bold"
              >
                Conversar con MaYA 💬
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
