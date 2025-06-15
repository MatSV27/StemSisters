
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Users, Trophy, Share2, Star, Heart, MessageCircle, Award, Target, Zap } from "lucide-react";
import AchievementsSection from "@/components/AchievementsSection";
import ChallengeShare from "@/components/ChallengeShare";
import RecognitionSection from "@/components/RecognitionSection";

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Programación para Principiantes",
      description: "Aprende a crear tu primera aplicación web con HTML, CSS y JavaScript básico.",
      duration: "4 semanas",
      level: "Principiante",
      category: "programming",
      enrolled: 234,
      rating: 4.8,
      color: "bg-purple-500",
      progress: 0
    },
    {
      id: 2,
      title: "Robótica Creativa",
      description: "Construye y programa robots usando Arduino. Proyectos divertidos y educativos.",
      duration: "3 semanas", 
      level: "Intermedio",
      category: "robotics",
      enrolled: 189,
      rating: 4.9,
      color: "bg-teal-500",
      progress: 65
    },
    {
      id: 3,
      title: "Química en la Cocina",
      description: "Descubre los secretos químicos detrás de la cocina y crea experimentos seguros.",
      duration: "2 semanas",
      level: "Principiante", 
      category: "science",
      enrolled: 156,
      rating: 4.7,
      color: "bg-pink-500",
      progress: 0
    },
    {
      id: 4,
      title: "Diseño de Videojuegos",
      description: "Crea tu propio videojuego desde cero usando herramientas visuales fáciles.",
      duration: "5 semanas",
      level: "Intermedio",
      category: "programming",
      enrolled: 298,
      rating: 4.8,
      color: "bg-indigo-500",
      progress: 30
    },
    {
      id: 5,
      title: "Inteligencia Artificial Básica",
      description: "Entiende cómo funciona la IA y crea tu primer chatbot simple.",
      duration: "3 semanas",
      level: "Avanzado",
      category: "ai",
      enrolled: 167,
      rating: 4.9,
      color: "bg-orange-500",
      progress: 0
    },
    {
      id: 6,
      title: "Bioingeniería del Futuro",
      description: "Explora cómo la ingeniería está revolucionando la medicina y la biología.",
      duration: "4 semanas",
      level: "Intermedio",
      category: "science",
      enrolled: 134,
      rating: 4.6,
      color: "bg-green-500",
      progress: 0
    }
  ];

  const categories = [
    { id: "all", name: "Todos", count: courses.length },
    { id: "programming", name: "Programación", count: courses.filter(c => c.category === "programming").length },
    { id: "robotics", name: "Robótica", count: courses.filter(c => c.category === "robotics").length },
    { id: "science", name: "Ciencias", count: courses.filter(c => c.category === "science").length },
    { id: "ai", name: "Inteligencia Artificial", count: courses.filter(c => c.category === "ai").length }
  ];

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const communityPosts = [
    {
      id: 1,
      author: "María López",
      age: 16,
      avatar: "👩‍💻",
      time: "2 horas",
      content: "¡Acabo de terminar mi primer proyecto de programación! 🎉 Era una calculadora simple pero me siento súper orgullosa. Sofia me ayudó cuando me quedé atascada con los condicionales.",
      likes: 12,
      comments: 5,
      achievement: "Programadora Novata"
    },
    {
      id: 2,
      author: "Ana García", 
      age: 15,
      avatar: "👩‍🔬",
      time: "5 horas",
      content: "¿Alguien más se siente nerviosa por el hackathon del próximo mes? 😅 Es mi primera vez participando en algo así. ¡Pero estoy emocionada!",
      likes: 8,
      comments: 12,
      achievement: "Científica Curiosa"
    },
    {
      id: 3,
      author: "Sofia Chen",
      age: 17, 
      avatar: "👩‍⚕️",
      time: "1 día",
      content: "Terminé el curso de bioingeniería y WOW 🤯 Nunca pensé que podría combinar mi amor por la medicina con la tecnología. ¡Ya sé qué quiero estudiar!",
      likes: 15,
      comments: 8,
      achievement: "Mentora Comunitaria"
    }
  ];

  const activeUsers = [
    { name: "Sofía R.", avatar: "👩‍🎨", activity: "Diseñando apps", status: "online" },
    { name: "Carmen M.", avatar: "👩‍⚕️", activity: "Explorando medicina", status: "online" },
    { name: "Luna P.", avatar: "👩‍🚀", activity: "Estudiando astronomía", status: "online" },
    { name: "Valeria K.", avatar: "👩‍💻", activity: "Programando", status: "away" },
    { name: "Isabella F.", avatar: "👩‍🔬", activity: "Experimentando", status: "online" }
  ];

  const upcomingEvents = [
    { name: "Hackathon StemSisters", date: "15 de Julio", type: "Competencia" },
    { name: "Taller de Robótica", date: "22 de Julio", type: "Taller" },
    { name: "Charla: Mujeres en Tech", date: "29 de Julio", type: "Conferencia" },
    { name: "Mentoría Grupal", date: "5 de Agosto", type: "Mentoría" }
  ];

  return (
    <div className="space-y-8">
      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="courses">
            <BookOpen className="h-4 w-4 mr-2" />
            Microcursos
          </TabsTrigger>
          <TabsTrigger value="community">
            <Users className="h-4 w-4 mr-2" />
            Comunidad
          </TabsTrigger>
          <TabsTrigger value="achievements">
            <Trophy className="h-4 w-4 mr-2" />
            Logros
          </TabsTrigger>
          <TabsTrigger value="recognition">
            <Award className="h-4 w-4 mr-2" />
            Top Chicas
          </TabsTrigger>
          <TabsTrigger value="share">
            <Share2 className="h-4 w-4 mr-2" />
            Compartir
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Microcursos STEM 📚
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aprende a tu ritmo con contenido diseñado especialmente para ti. 
              Cada curso es una aventura que te acerca más a descubrir tu pasión en STEM.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "text-white" : ""}
                style={selectedCategory === category.id ? { backgroundColor: '#7E4EFF' } : {}}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${course.color} flex items-center justify-center mb-3`}>
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{course.description}</p>
                  
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{course.duration}</span>
                    </div>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{course.enrolled} chicas</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {course.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Tu progreso</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}

                  <Button 
                    className="w-full text-white"
                    style={{ backgroundColor: '#7E4EFF' }}
                  >
                    {course.progress > 0 ? 'Continuar' : 'Empezar curso'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comunidad StemSisters 💜
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conecta con chicas increíbles, comparte tus experiencias y encuentra la inspiración que necesitas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Posts de la comunidad */}
            <div className="lg:col-span-2 space-y-6">
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
                        </div>
                        <div className="text-sm text-gray-500">Hace {post.time}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{post.content}</p>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {post.comments}
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
                  <CardTitle>Próximos eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border-l-4 border-purple-500 pl-3">
                        <div className="font-medium text-sm">{event.name}</div>
                        <div className="text-xs text-gray-500">{event.date} • {event.type}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <AchievementsSection />
        </TabsContent>

        <TabsContent value="recognition">
          <RecognitionSection />
        </TabsContent>

        <TabsContent value="share">
          <ChallengeShare />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CoursesSection;
