
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Search, Star, Users, Clock, Play, Heart, Zap, Sparkles, Trophy, Target } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  emoji: string;
  category: string;
  progress?: number;
  highlights: string[];
  price: string;
}

interface ImprovedCoursesSectionProps {
  onNavigateToCommunity?: () => void;
}

const ImprovedCoursesSection = ({ onNavigateToCommunity }: ImprovedCoursesSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todos 🌟", color: "text-gray-600" },
    { id: "tech", label: "Tech 💻", color: "text-blue-600" },
    { id: "creative", label: "Creativo 🎨", color: "text-purple-600" },
    { id: "science", label: "Ciencia 🔬", color: "text-green-600" },
    { id: "math", label: "Matemáticas 📊", color: "text-orange-600" }
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: "Crea tu Primera App que Cambie Vidas 📱✨",
      description: "Diseña una app súper cool que resuelva problemas reales. ¡Desde la idea hasta la tienda de apps!",
      instructor: "María González (19 años)",
      duration: "3 semanas",
      level: "Principiante",
      students: 2847,
      rating: 4.9,
      emoji: "📱",
      category: "tech",
      progress: 0,
      highlights: ["Sin experiencia previa", "Proyecto real", "Mentoría 1:1"],
      price: "Gratis"
    },
    {
      id: 2,
      title: "Química Épica: Experimentos que Vuelan la Mente 🧪🔥",
      description: "Crea slime conductor, volcanes coloridos y experimentos súper cool para TikTok",
      instructor: "Dra. Carmen Ruiz",
      duration: "2 semanas",
      level: "Principiante",
      students: 1935,
      rating: 4.8,
      emoji: "🧪",
      category: "science",
      highlights: ["Kit de experimentos gratis", "Videos virales", "Certificado cool"],
      price: "Gratis"
    },
    {
      id: 3,
      title: "Diseño de Videojuegos: Crea tu Mundo Digital 🎮👑",
      description: "Desarrolla tu primer videojuego con personajes femeninos poderosos y mensaje inspirador",
      instructor: "Sofía Martín (Game Dev)",
      duration: "4 semanas",
      level: "Intermedio",
      students: 3241,
      rating: 4.9,
      emoji: "🎮",
      category: "creative",
      progress: 35,
      highlights: ["Crea tu personaje", "Publica en Steam", "Comunidad gamer"],
      price: "Gratis"
    },
    {
      id: 4,
      title: "IA para Principiantes: Tu Asistente Personal 🤖💖",
      description: "Construye tu propia IA que te ayude con tareas del cole y proyectos personales",
      instructor: "Ana López (AI Engineer)",
      duration: "3 semanas",
      level: "Principiante",
      students: 1642,
      rating: 4.7,
      emoji: "🤖",
      category: "tech",
      highlights: ["Crea tu ChatBot", "Sin programación", "Proyectos virales"],
      price: "Gratis"
    },
    {
      id: 5,
      title: "Robótica + Moda: Diseña Tech Wearables 👗⚡",
      description: "Combina moda y tecnología creando accesorios inteligentes súper fashionistas",
      instructor: "Laura Herrera (Fashion Tech)",
      duration: "5 semanas",
      level: "Intermedio",
      students: 892,
      rating: 4.8,
      emoji: "👗",
      category: "creative",
      highlights: ["Kit de robótica", "Desfile final", "Conexión con marcas"],
      price: "Gratis"
    },
    {
      id: 6,
      title: "Matemáticas para Influencers: Stats & Analytics 📊🌟",
      description: "Aprende matemáticas analizando tu contenido en redes y creciendo tu audiencia",
      instructor: "Patricia Vega (Data Scientist)",
      duration: "2 semanas",
      level: "Principiante",
      students: 2156,
      rating: 4.9,
      emoji: "📊",
      category: "math",
      highlights: ["Crece en redes", "Análisis real", "Tools profesionales"],
      price: "Gratis"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleEnrollCourse = (courseId: number) => {
    console.log(`Inscribiéndose al curso ${courseId}`);
    // Aquí se manejaría la inscripción al curso
  };

  return (
    <div className="space-y-8">
      {/* Header súper atractivo */}
      <div className="text-center bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Cursos STEM que van a volar tu mente 🚀✨
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Aprende ciencia, tecnología, ingeniería y matemáticas de manera súper cool y divertida. 
          Cada curso está diseñado para que descubras tu superpoder y cambies el mundo. 
          <span className="font-bold text-pink-600">¡Todo gratis y con certificados geniales!</span>
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <Badge className="bg-pink-500 text-white">✨ 8,500+ chicas ya inscritas</Badge>
          <Badge className="bg-purple-500 text-white">🏆 Certificados reconocidos</Badge>
          <Badge className="bg-teal-500 text-white">💖 Comunidad súper cool</Badge>
        </div>
      </div>

      {/* Search y filtros mejorados */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Busca tu curso perfecto... ✨"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-pink-200 focus:border-pink-400 text-lg py-3"
          />
        </div>
      </div>

      {/* Categories súper atractivas */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 text-lg py-3 px-6 rounded-full ${
              selectedCategory === category.id 
                ? "text-white shadow-lg" 
                : `border-2 border-pink-200 ${category.color} hover:bg-pink-50`
            }`}
            style={selectedCategory === category.id ? { backgroundColor: '#FF1493' } : {}}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Courses Grid súper atractivo */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="border-2 border-pink-200 hover:shadow-2xl transition-all hover:scale-105 bg-gradient-to-br from-white to-pink-25">
            <CardHeader className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="text-5xl">{course.emoji}</div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold">{course.rating}</span>
                  </div>
                  <Badge className="bg-green-500 text-white font-bold">
                    {course.price}
                  </Badge>
                </div>
              </div>
              
              <CardTitle className="text-xl text-gray-800 leading-tight">
                {course.title}
              </CardTitle>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span className="font-semibold">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <CardDescription className="text-gray-700 font-medium leading-relaxed">
                {course.description}
              </CardDescription>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Por {course.instructor}</span>
                  <Badge 
                    variant="outline" 
                    className={`font-bold
                      ${course.level === 'Principiante' ? 'border-green-300 text-green-700 bg-green-50' : ''}
                      ${course.level === 'Intermedio' ? 'border-yellow-300 text-yellow-700 bg-yellow-50' : ''}
                    `}
                  >
                    {course.level}
                  </Badge>
                </div>
                
                {/* Highlights súper atractivos */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-600">Lo que vas a lograr:</p>
                  <div className="grid grid-cols-1 gap-1">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <Sparkles className="h-3 w-3 text-pink-500" />
                        <span className="text-gray-600 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {course.progress !== undefined && course.progress > 0 && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tu progreso</span>
                      <span className="text-pink-600 font-bold">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-3" />
                  </div>
                )}
                
                <Button
                  onClick={() => handleEnrollCourse(course.id)}
                  className="w-full text-white font-bold text-lg py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: '#FF1493' }}
                >
                  {course.progress !== undefined && course.progress > 0 ? (
                    <>
                      <Play className="h-5 w-5 mr-2" />
                      ¡Continuar aventura! 🚀
                    </>
                  ) : (
                    <>
                      <Heart className="h-5 w-5 mr-2" />
                      ¡Empezar ahora! ✨
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-16">
          <div className="text-8xl mb-6">🔍✨</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ¡Ups! No encontramos cursos con esos filtros
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Pero no te preocupes, tenemos muchas opciones geniales esperándote
          </p>
          <Button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="bg-pink-500 text-white px-8 py-3 text-lg font-bold rounded-full hover:bg-pink-600"
          >
            Ver todos los cursos 🌟
          </Button>
        </div>
      )}

      {/* Call to Action mejorado */}
      <div className="text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white p-12 rounded-xl">
        <h3 className="text-3xl font-bold mb-4">
          ¿Lista para cambiar el mundo? 💖🚀
        </h3>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Únete a nuestra comunidad de 8,500+ chicas increíbles, comparte tus proyectos épicos 
          y encuentra mentoras que te van a inspirar a conquistar STEM.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onNavigateToCommunity}
            size="lg"
            className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-bold rounded-full shadow-lg"
          >
            <Users className="h-5 w-5 mr-2" />
            Explorar comunidad 🌟
          </Button>
          <Button
            size="lg"
            className="bg-yellow-500 text-gray-800 hover:bg-yellow-400 px-8 py-4 text-lg font-bold rounded-full shadow-lg"
          >
            <Trophy className="h-5 w-5 mr-2" />
            Ver logros épicos 🏆
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImprovedCoursesSection;
