
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Users, 
  Trophy, 
  Target, 
  Star, 
  Calendar,
  MapPin,
  Gift,
  Clock,
  ExternalLink
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
}

const CommunitySection = ({ onNavigateToEventsOpportunities }: CommunitySectionProps) => {
  const [activeTab, setActiveTab] = useState("logros");
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [shareType, setShareType] = useState<'logro' | 'apoyo' | 'pregunta'>('logro');
  const [shareContent, setShareContent] = useState("");
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

  const handleShare = () => {
    if (!shareContent.trim()) return;
    
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
    setShareDialogOpen(false);
    setActiveTab(shareType);
  };

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

  const renderPosts = (filterType: string) => {
    const filteredPosts = filterType === 'todos' ? posts : posts.filter(post => post.type === filterType);
    
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
    <div className="space-y-8">
      {/* Header con estadísticas */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center border-pink-200">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 text-pink-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-pink-600">2,847</div>
            <div className="text-sm text-gray-600">Exploradoras activas</div>
          </CardContent>
        </Card>
        <Card className="text-center border-purple-200">
          <CardContent className="pt-6">
            <Trophy className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">1,234</div>
            <div className="text-sm text-gray-600">Logros compartidos</div>
          </CardContent>
        </Card>
        <Card className="text-center border-teal-200">
          <CardContent className="pt-6">
            <Star className="h-8 w-8 text-teal-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-teal-600">987</div>
            <div className="text-sm text-gray-600">Metas alcanzadas</div>
          </CardContent>
        </Card>
      </div>

      {/* Botón Compartir */}
      <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">¡Comparte tu experiencia!</h3>
            <p className="text-gray-600 mb-4">
              Tu historia puede inspirar a otras chicas increíbles como tú
            </p>
            <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
              <DialogTrigger asChild>
                <Button className="text-white" style={{ backgroundColor: '#FF1493' }}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartir con la comunidad
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Comparte con tu Squad 💖</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">¿Qué quieres compartir?</label>
                    <Select value={shareType} onValueChange={(value: 'logro' | 'apoyo' | 'pregunta') => setShareType(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="logro">🏆 Logro - ¡Algo que lograste!</SelectItem>
                        <SelectItem value="apoyo">💖 Apoyo - Necesitas palabras de aliento</SelectItem>
                        <SelectItem value="pregunta">❓ Pregunta - Necesitas ayuda</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Cuéntanos tu historia</label>
                    <Textarea
                      value={shareContent}
                      onChange={(e) => setShareContent(e.target.value)}
                      placeholder="Escribe aquí lo que quieres compartir con tu squad..."
                      rows={4}
                    />
                  </div>
                  <Button 
                    onClick={handleShare}
                    className="w-full text-white"
                    style={{ backgroundColor: '#FF1493' }}
                    disabled={!shareContent.trim()}
                  >
                    Publicar en la comunidad
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Tabs principales */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="logros">🏆 Logros</TabsTrigger>
          <TabsTrigger value="apoyo">💖 Apoyo</TabsTrigger>
          <TabsTrigger value="preguntas">❓ Preguntas</TabsTrigger>
          <TabsTrigger value="eventos-oportunidades">🎯 Eventos y Oportunidades</TabsTrigger>
        </TabsList>

        <TabsContent value="logros" className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Celebremos juntas cada victoria 🎉</h3>
            {renderPosts('logro')}
          </div>
        </TabsContent>

        <TabsContent value="apoyo" className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Aquí estamos para apoyarnos 💝</h3>
            {renderPosts('apoyo')}
          </div>
        </TabsContent>

        <TabsContent value="preguntas" className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ninguna pregunta es tonta 🤓</h3>
            {renderPosts('pregunta')}
          </div>
        </TabsContent>

        <TabsContent value="eventos-oportunidades" className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Oportunidades épicas esperándote 🚀</h3>
            
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
    </div>
  );
};

export default CommunitySection;
