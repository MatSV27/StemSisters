
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Users, Star, Trophy, Target, Search, Play, Award } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  progress?: number;
  category: string;
  instructor: string;
  completed?: boolean;
  icon: string;
}

interface CoursesSectionProps {
  onNavigateToCommunity?: () => void;
}

const CoursesSection = ({ onNavigateToCommunity }: CoursesSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todo");
  const [searchTerm, setSearchTerm] = useState("");

  const courses: Course[] = [
    {
      id: 1,
      title: "Crea tu primer proyecto STEAM",
      description: "Aprende los fundamentos mientras creas una app que puede cambiar vidas. Perfecto para empezar tu aventura tech.",
      duration: "6 semanas",
      level: "Principiante",
      students: 1247,
      rating: 4.8,
      progress: 35,
      category: "Tecnología",
      instructor: "María González",
      icon: "📱"
    },
    {
      id: 2,
      title: "Química súper divertida",
      description: "Química súper divertida con experimentos que puedes hacer en casa. ¡Descubre la magia de la ciencia!",
      duration: "4 semanas",
      level: "Principiante",
      students: 856,
      rating: 4.9,
      category: "Ciencias",
      instructor: "Dra. Carmen Ruiz",
      icon: "🧪"
    },
    {
      id: 3,
      title: "Robótica fácil para chicas",
      description: "Construye tu primer robot paso a paso. Sin experiencia previa necesaria, solo ganas de crear algo increíble.",
      duration: "8 semanas",
      level: "Intermedio",
      students: 1593,
      rating: 4.7,
      progress: 100,
      category: "Ingeniería",
      instructor: "Sofía Martín",
      completed: true,
      icon: "🤖"
    },
    {
      id: 4,
      title: "Matemáticas para resolver problemas reales",
      description: "Descubre cómo los números pueden cambiar el mundo. Desde estadísticas hasta algoritmos, todo súper fácil.",
      duration: "5 semanas",
      level: "Principiante",
      students: 724,
      rating: 4.7,
      category: "Matemáticas",
      instructor: "Prof. Ana López",
      icon: "📊"
    },
    {
      id: 5,
      title: "Diseña dispositivos que salvan vidas",
      description: "Ingeniería biomédica para principiantes. Aprende a crear soluciones tecnológicas para la salud.",
      duration: "10 semanas",
      level: "Avanzado",
      students: 432,
      rating: 4.8,
      category: "Ingeniería",
      instructor: "Dra. Laura Herrera",
      icon: "💗"
    },
    {
      id: 6,
      title: "Ciencias divertidas para el día a día",
      description: "Física y química aplicada a situaciones cotidianas. Entiende el mundo que te rodea de forma genial.",
      duration: "7 semanas",
      level: "Intermedio",
      students: 967,
      rating: 4.9,
      category: "Ciencias",
      instructor: "Ing. Patricia Vega",
      icon: "🔬"
    },
    {
      id: 7,
      title: "Biología molecular para futuras científicas",
      description: "Desde el ADN hasta las células. Descubre los secretos de la vida de manera súper accesible.",
      duration: "6 semanas",
      level: "Intermedio",
      students: 543,
      rating: 4.8,
      category: "Biología",
      instructor: "Dra. Elena Vargas",
      icon: "🧬"
    },
    {
      id: 8,
      title: "Diseño UX/UI para apps que importan",
      description: "Aprende a diseñar aplicaciones que la gente ama usar. Combina creatividad con tecnología.",
      duration: "8 semanas",
      level: "Principiante",
      students: 892,
      rating: 4.9,
      progress: 20,
      category: "Diseño",
      instructor: "Carla Mendoza",
      icon: "🎨"
    }
  ];

  const categories = [
    { id: "todo", name: "Todos los cursos", icon: "✨", count: courses.length },
    { id: "Ciencias", name: "Ciencias", icon: "🔬", count: courses.filter(c => c.category === "Ciencias").length },
    { id: "Tecnología", name: "Tecnología", icon: "💻", count: courses.filter(c => c.category === "Tecnología").length },
    { id: "Ingeniería", name: "Ingeniería", icon: "⚙️", count: courses.filter(c => c.category === "Ingeniería").length },
    { id: "Matemáticas", name: "Matemáticas", icon: "📊", count: courses.filter(c => c.category === "Matemáticas").length },
    { id: "Biología", name: "Biología", icon: "🧬", count: courses.filter(c => c.category === "Biología").length },
    { id: "Diseño", name: "Diseño", icon: "🎨", count: courses.filter(c => c.category === "Diseño").length }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "todo" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const inProgressCourses = courses.filter(course => course.progress && course.progress > 0 && !course.completed);
  const completedCourses = courses.filter(course => course.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Microcursos STEM que van a cambiar tu vida 🚀
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contenido genial diseñado por mujeres increíbles para chicas como tú. 
            Cada curso es una aventura hacia tu futuro genial en ciencia y tecnología.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="explorar" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 bg-white border-2 border-pink-200 max-w-md mx-auto">
            <TabsTrigger value="explorar" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              🔍 Explorar
            </TabsTrigger>
            <TabsTrigger value="progreso" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              📚 Mi Progreso
            </TabsTrigger>
            <TabsTrigger value="completados" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              🏆 Completados
            </TabsTrigger>
          </TabsList>

          <TabsContent value="explorar" className="space-y-8">
            {/* Search */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="relative w-full max-w-4xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Busca tu próxima aventura..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 px-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`h-auto p-3 flex flex-col items-center gap-2 ${
                    selectedCategory === category.id 
                      ? "text-white" 
                      : "border-pink-200 text-gray-700 hover:bg-pink-50"
                  }`}
                  style={selectedCategory === category.id ? { backgroundColor: '#FF1493' } : {}}
                >
                  <span className="text-lg">{category.icon}</span>
                  <div className="text-center">
                    <div className="font-semibold text-xs">{category.name}</div>
                    <div className="text-xs opacity-70">{category.count} cursos</div>
                  </div>
                </Button>
              ))}
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="border-pink-200 hover:shadow-xl transition-all hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-3xl">{course.icon}</div>
                      <Badge 
                        variant="outline" 
                        className={`${
                          course.level === 'Principiante' ? 'border-green-200 text-green-600' :
                          course.level === 'Intermedio' ? 'border-yellow-200 text-yellow-600' :
                          'border-red-200 text-red-600'
                        }`}
                      >
                        {course.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-gray-800 mb-2">{course.title}</CardTitle>
                    <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {course.students}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        {course.rating}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600">
                        Por <span className="font-semibold">{course.instructor}</span>
                      </div>
                      
                      {course.progress && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progreso</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}
                      
                      <div className="flex gap-2 flex-col">
                        {course.progress && course.progress < 100 ? (
                          <Button className="w-full text-white" style={{ backgroundColor: '#FF1493' }}>
                            <Play className="h-4 w-4 mr-2" />
                            🚀 Continuar aventura
                          </Button>
                        ) : course.completed ? (
                          <>
                            <div className="flex gap-2">
                              <Button variant="outline" className="flex-1 border-yellow-200 text-yellow-600">
                                <Award className="h-4 w-4 mr-1" />
                                Ver Certificado
                              </Button>
                              <Button variant="outline" className="flex-1 border-purple-200 text-purple-600">
                                Ver Curso
                              </Button>
                            </div>
                          </>
                        ) : (
                          <Button className="w-full text-white" style={{ backgroundColor: '#FF1493' }}>
                            <Play className="h-4 w-4 mr-2" />
                            🚀 ¡Empezar ahora!
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progreso" className="space-y-6">
            {/* Search also in Mi Progreso */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="relative w-full max-w-4xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Busca en tus cursos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu progreso genial 📈</h2>
              <p className="text-gray-600">Sigue así, estás conquistando el mundo STEM paso a paso</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 px-8">
              {inProgressCourses.map((course) => (
                <Card key={course.id} className="border-purple-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{course.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <p className="text-sm text-gray-600">{course.instructor}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progreso</span>
                          <span className="font-bold text-purple-600">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-3" />
                      </div>
                      <Button className="w-full text-white" style={{ backgroundColor: '#FF1493' }}>
                        <Play className="h-4 w-4 mr-2" />
                        🚀 Continuar aventura
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completados" className="space-y-6">
            {/* Search also in Completados */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="relative w-full max-w-4xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Busca en tus cursos completados..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Logros geniales desbloqueados! 🏆</h2>
              <p className="text-gray-600">Cada curso completado es un paso más hacia tu futuro genial</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 px-8">
              {completedCourses.map((course) => (
                <Card key={course.id} className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{course.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <p className="text-sm text-gray-600">{course.instructor}</p>
                      </div>
                      <Trophy className="h-6 w-6 text-yellow-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Badge className="w-full justify-center text-white font-bold" style={{ backgroundColor: '#FF1493' }}>
                        ✨ COMPLETADO ✨
                      </Badge>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 border-yellow-200 text-yellow-600">
                          <Award className="h-4 w-4 mr-2" />
                          Ver Certificado
                        </Button>
                        <Button variant="outline" className="flex-1 border-purple-200 text-purple-600">
                          Ver Curso
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CoursesSection;
