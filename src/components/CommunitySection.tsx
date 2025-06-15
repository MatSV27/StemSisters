
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Share2, Trophy, Star, Send, Image, Award } from "lucide-react";

const CommunitySection = () => {
  const [newPost, setNewPost] = useState("");
  const [showPostForm, setShowPostForm] = useState(false);

  const successStories = [
    {
      id: 1,
      name: "Ana García",
      age: 16,
      story: "No me gustaba la física, pero descubrí la robótica y ahora estoy en un proyecto NASA!",
      achievement: "Ganadora Hackathon 2024",
      avatar: "👩‍💻",
      likes: 45,
      comments: 12,
      time: "2 días"
    },
    {
      id: 2,
      name: "María López",
      age: 17,
      story: "Pensé que programar era muy difícil, pero con los microcursos ahora creo mis propias apps!",
      achievement: "Becaria Google Code",
      avatar: "👩‍🔬",
      likes: 38,
      comments: 8,
      time: "1 semana"
    },
    {
      id: 3,
      name: "Sofia Chen",
      age: 15,
      story: "Siempre quise ser doctora, pero descubrí la bioingeniería y es mi pasión!",
      achievement: "Mentora Comunitaria",
      avatar: "👩‍⚕️",
      likes: 52,
      comments: 15,
      time: "3 días"
    }
  ];

  const communityPosts = [
    {
      id: 1,
      author: "Valentina M.",
      age: 16,
      avatar: "👩‍💻",
      time: "2 horas",
      content: "¡Acabo de terminar mi primer proyecto de programación! 🎉 Era una calculadora simple pero me siento súper orgullosa. MaIA me ayudó cuando me quedé atascada con los condicionales.",
      likes: 12,
      comments: 5,
      achievement: "Programadora Novata",
      project: "Calculadora Interactiva",
      isChallenge: true
    },
    {
      id: 2,
      author: "Camila R.", 
      age: 15,
      avatar: "👩‍🔬",
      time: "5 horas",
      content: "¿Alguien más se siente nerviosa por el hackathon del próximo mes? 😅 Es mi primera vez participando en algo así. ¡Pero estoy emocionada! ¿Quién más va a participar?",
      likes: 8,
      comments: 12,
      achievement: "Científica Curiosa",
      project: null,
      isChallenge: false
    },
    {
      id: 3,
      author: "Isabella F.",
      age: 17, 
      avatar: "👩‍⚕️",
      time: "1 día",
      content: "Terminé el curso de bioingeniería y WOW 🤯 Nunca pensé que podría combinar mi amor por la medicina con la tecnología. ¡Ya sé qué quiero estudiar! Aquí mi proyecto final sobre prótesis inteligentes.",
      likes: 15,
      comments: 8,
      achievement: "Mentora Comunitaria",
      project: "Prótesis Inteligente",
      isChallenge: true
    },
    {
      id: 4,
      author: "Lucia S.",
      age: 14,
      avatar: "👩‍🎨",
      time: "2 días",
      content: "Hice mi primer robot que dibuja! 🤖✏️ Al principio no entendía nada de Arduino, pero después de varios intentos... ¡FUNCIONA! No puedo creer que yo hice esto.",
      likes: 23,
      comments: 9,
      achievement: "Robótica Creativa",
      project: "Robot Artista",
      isChallenge: true
    }
  ];

  const activeUsers = [
    { name: "Sofía R.", avatar: "👩‍🎨", activity: "Diseñando apps", status: "online" },
    { name: "Carmen M.", avatar: "👩‍⚕️", activity: "Explorando medicina", status: "online" },
    { name: "Luna P.", avatar: "👩‍🚀", activity: "Estudiando astronomía", status: "online" },
    { name: "Valeria K.", avatar: "👩‍💻", activity: "Programando", status: "away" },
    { name: "Isabella F.", avatar: "👩‍🔬", activity: "Experimentando", status: "online" }
  ];

  const motivationalComments = [
    "¡Increíble trabajo! 🌟 Me inspiras a intentar algo así",
    "¡Eres una genía! 💜 Esto se ve súper profesional",
    "Wow, no puedo creer que tengas mi edad y hagas esto 🤯",
    "¡Te quedó espectacular! ¿Podrías compartir algunos tips?",
    "¡Eres mi inspiración! 🚀 Definitivamente voy a intentar este reto"
  ];

  const handleSubmitPost = () => {
    if (newPost.trim()) {
      // Aquí se agregaría la lógica para enviar el post
      setNewPost("");
      setShowPostForm(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Comunidad StemSisters 💜
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conecta con chicas increíbles, comparte tus experiencias y encuentra la inspiración que necesitas.
        </p>
      </div>

      {/* Historias de Éxito Destacadas */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Historias de Éxito que Inspiran ⭐
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story) => (
            <Card key={story.id} className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
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
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-center italic">"{story.story}"</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{story.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{story.comments}</span>
                  </div>
                  <span>hace {story.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Posts de la comunidad */}
        <div className="lg:col-span-2 space-y-6">
          {/* Botón para compartir proyecto */}
          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-6">
              <div className="text-center">
                <Share2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-purple-800 mb-2">
                  ¡Comparte tu proyecto con la comunidad!
                </h4>
                <p className="text-purple-600 mb-4">
                  ¿Terminaste un reto? ¡Motiva a otras chicas mostrando tu increíble trabajo!
                </p>
                <Button 
                  onClick={() => setShowPostForm(!showPostForm)}
                  style={{ backgroundColor: '#7E4EFF' }}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  {showPostForm ? 'Cancelar' : 'Compartir mi proyecto'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Formulario para nuevo post */}
          {showPostForm && (
            <Card className="border-teal-200">
              <CardHeader>
                <CardTitle>Comparte tu proyecto 🚀</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Título de tu proyecto" />
                <Textarea 
                  placeholder="Cuéntanos sobre tu proyecto... ¿Qué aprendiste? ¿Qué fue lo más difícil? ¡Motiva a otras chicas!"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  rows={4}
                />
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Image className="h-4 w-4 mr-2" />
                    Agregar imagen
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleSubmitPost}
                    style={{ backgroundColor: '#7E4EFF' }}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Publicar
                  </Button>
                  <Button variant="outline" onClick={() => setShowPostForm(false)}>
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Posts existentes */}
          {communityPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-lg">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">{post.author}, {post.age} años</div>
                      <Badge 
                        className="text-xs text-white"
                        style={{ backgroundColor: '#FF6B9D' }}
                      >
                        {post.achievement}
                      </Badge>
                      {post.isChallenge && (
                        <Badge 
                          className="text-xs text-white"
                          style={{ backgroundColor: '#FFD166' }}
                        >
                          🏆 Proyecto
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      Hace {post.time}
                      {post.project && <span> • Proyecto: {post.project}</span>}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{post.content}</p>
                
                {/* Comentarios motivacionales */}
                {post.isChallenge && (
                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <h5 className="font-semibold text-green-800 mb-2">Comentarios de apoyo:</h5>
                    <div className="space-y-2">
                      {motivationalComments.slice(0, 2).map((comment, index) => (
                        <div key={index} className="text-sm text-green-700 italic">
                          "🌟 {comment}"
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {post.likes}
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    {post.comments}
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Trophy className="h-4 w-4" />
                    ¡Increíble!
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar de comunidad */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Chicas activas ahora</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activeUsers.map((user, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm">
                        {user.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frases motivacionales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-700 italic text-sm">
                    "No tienes que ser perfecta, solo tienes que ser valiente para empezar." 💜
                  </p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-700 italic text-sm">
                    "Cada experta fue una vez una principiante. ¡Tú puedes!" 🌟
                  </p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-pink-700 italic text-sm">
                    "El futuro pertenece a las chicas que se atreven a soñar en grande." 🚀
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reconocimiento semanal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-3">
                <Award className="h-12 w-12 text-yellow-500 mx-auto" />
                <h4 className="font-bold text-gray-800">StemSister de la Semana</h4>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="text-2xl mb-1">👩‍💻</div>
                  <div className="font-semibold">Ana García</div>
                  <div className="text-sm text-gray-600">Por su proyecto NASA</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
