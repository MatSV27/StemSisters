
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Users, Trophy, Share2, Star, Heart, MessageCircle, Award, Target, Zap } from "lucide-react";
import AchievementsSection from "@/components/AchievementsSection";
import RecognitionSection from "@/components/RecognitionSection";

interface CoursesSectionProps {
  onNavigateToCommunity: () => void;
}

const CoursesSection = ({ onNavigateToCommunity }: CoursesSectionProps) => {
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

  return (
    <div className="space-y-8">
      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="courses">
            <BookOpen className="h-4 w-4 mr-2" />
            Microcursos
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
            Compartir Reto
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Microcursos STEAM 📚
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aprende a tu ritmo con contenido diseñado especialmente para ti. 
              Cada curso es una aventura que te acerca más a descubrir tu pasión en STEAM.
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

        <TabsContent value="achievements">
          <AchievementsSection />
        </TabsContent>

        <TabsContent value="recognition">
          <RecognitionSection />
        </TabsContent>

        <TabsContent value="share">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¡Comparte tu reto! 🚀
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              ¿Completaste un proyecto increíble? ¡Compártelo con la comunidad StemSisters 
              y motiva a otras chicas a seguir explorando STEAM!
            </p>
            
            <Card className="max-w-md mx-auto border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                  Conectar con la Comunidad
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-purple-700">
                  Al compartir tu reto, te conectarás con otras StemSisters increíbles que 
                  pueden darte feedback, motivación y apoyo en tu camino.
                </p>
                <Button 
                  onClick={onNavigateToCommunity}
                  className="w-full text-white"
                  style={{ backgroundColor: '#7E4EFF' }}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Ir a la Comunidad
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Heart className="h-12 w-12 text-pink-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Motiva a otras</h4>
                <p className="text-sm text-gray-600">
                  Tus logros pueden inspirar a otras chicas a seguir adelante
                </p>
              </div>
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Recibe feedback</h4>
                <p className="text-sm text-gray-600">
                  Obtén comentarios constructivos de mentoras y compañeras
                </p>
              </div>
              <div className="text-center">
                <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Gana reconocimiento</h4>
                <p className="text-sm text-gray-600">
                  Los mejores proyectos aparecen en el Top Chicas
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CoursesSection;
