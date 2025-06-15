
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Search, Filter, Star, Users, Clock, Play, BookOpen, Atom, Calculator, Cpu, Microscope } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  image: string;
  category: string;
  progress?: number;
}

interface CoursesSectionProps {
  onNavigateToCommunity?: () => void;
}

const CoursesSection = ({ onNavigateToCommunity }: CoursesSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const categories = [
    { id: "all", label: "Todos", icon: BookOpen, color: "text-gray-600" },
    { id: "ciencia", label: "Ciencia", icon: Microscope, color: "text-blue-600" },
    { id: "tecnologia", label: "Tecnología", icon: Cpu, color: "text-green-600" },
    { id: "ingenieria", label: "Ingeniería", icon: Atom, color: "text-purple-600" },
    { id: "matematicas", label: "Matemáticas", icon: Calculator, color: "text-orange-600" }
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: "Programación para Exploradoras",
      description: "Aprende los fundamentos de programación creando tu primera app que puede cambiar vidas",
      instructor: "María González",
      duration: "6 semanas",
      level: "Principiante",
      students: 1247,
      rating: 4.9,
      image: "💻",
      category: "tecnologia",
      progress: 0
    },
    {
      id: 2,
      title: "Laboratorio de Química Épica",
      description: "Experimenta con reacciones súper cool y descubre cómo la química puede salvar el mundo",
      instructor: "Dra. Carmen Ruiz",
      duration: "4 semanas",
      level: "Principiante",
      students: 856,
      rating: 4.8,
      image: "🧪",
      category: "ciencia"
    },
    {
      id: 3,
      title: "Diseño de Videojuegos que Inspiran",
      description: "Crea tu primer videojuego con mensaje social y aprende desarrollo de games",
      instructor: "Sofía Martín",
      duration: "8 semanas",
      level: "Intermedio",
      students: 1593,
      rating: 4.9,
      image: "🎮",
      category: "tecnologia",
      progress: 35
    },
    {
      id: 4,
      title: "Matemáticas que Cambian el Mundo",
      description: "Descubre cómo los números pueden resolver problemas reales y crear impacto social",
      instructor: "Prof. Ana López",
      duration: "5 semanas",
      level: "Principiante",
      students: 724,
      rating: 4.7,
      image: "📊",
      category: "matematicas"
    },
    {
      id: 5,
      title: "Ingeniería Biomédica para Genias",
      description: "Diseña dispositivos médicos que pueden salvar vidas y mejorar la salud",
      instructor: "Dra. Laura Herrera",
      duration: "10 semanas",
      level: "Avanzado",
      students: 432,
      rating: 4.8,
      image: "⚕️",
      category: "ingenieria"
    },
    {
      id: 6,
      title: "Robótica e IA para el Futuro",
      description: "Construye robots inteligentes y aprende sobre inteligencia artificial",
      instructor: "Ing. Patricia Vega",
      duration: "7 semanas",
      level: "Intermedio",
      students: 967,
      rating: 4.9,
      image: "🤖",
      category: "ingenieria"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const handleEnrollCourse = (courseId: number) => {
    console.log(`Inscribiéndose al curso ${courseId}`);
    // Aquí se manejaría la inscripción al curso
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Cursos STEM que van a volar tu mente 🚀
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Aprende ciencia, tecnología, ingeniería y matemáticas de manera súper cool. 
          Cada curso está diseñado para que descubras tu superpoder y cambies el mundo.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Busca tu curso perfecto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-pink-200 focus:border-pink-400"
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-4 py-2 border border-pink-200 rounded-md focus:border-pink-400 focus:outline-none"
          >
            <option value="all">Todos los niveles</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 ${
              selectedCategory === category.id 
                ? "text-white" 
                : `border-pink-200 ${category.color} hover:bg-pink-50`
            }`}
            style={selectedCategory === category.id ? { backgroundColor: '#FF1493' } : {}}
          >
            <category.icon className="h-4 w-4" />
            {category.label}
          </Button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="border-pink-200 hover:shadow-xl transition-all hover:scale-105">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="text-4xl">{course.image}</div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{course.rating}</span>
                </div>
              </div>
              <CardTitle className="text-lg text-gray-800">{course.title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {course.students}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                {course.description}
              </CardDescription>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Por {course.instructor}</span>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${course.level === 'Principiante' ? 'border-green-200 text-green-600' : ''}
                      ${course.level === 'Intermedio' ? 'border-yellow-200 text-yellow-600' : ''}
                      ${course.level === 'Avanzado' ? 'border-red-200 text-red-600' : ''}
                    `}
                  >
                    {course.level}
                  </Badge>
                </div>
                
                {course.progress !== undefined && course.progress > 0 && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progreso</span>
                      <span className="text-pink-600 font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}
                
                <Button
                  onClick={() => handleEnrollCourse(course.id)}
                  className="w-full text-white font-medium"
                  style={{ backgroundColor: '#FF1493' }}
                >
                  {course.progress !== undefined && course.progress > 0 ? (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Continuar curso
                    </>
                  ) : (
                    "¡Empezar ahora!"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            No encontramos cursos con esos filtros
          </h3>
          <p className="text-gray-600 mb-4">
            Prueba ajustando los filtros o busca algo diferente
          </p>
          <Button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
              setSelectedLevel("all");
            }}
            variant="outline"
            className="border-pink-200 text-pink-600 hover:bg-pink-50"
          >
            Limpiar filtros
          </Button>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-xl border-2 border-pink-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          ¿No encuentras lo que buscas? 💖
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Únete a nuestra comunidad y descubre más cursos, comparte ideas con otras exploradoras 
          y encuentra mentoras increíbles que te ayudarán en tu camino STEM.
        </p>
        <Button
          onClick={onNavigateToCommunity}
          size="lg"
          className="text-white font-bold px-8 py-3"
          style={{ backgroundColor: '#FF1493' }}
        >
          Explorar comunidad 🌟
        </Button>
      </div>
    </div>
  );
};

export default CoursesSection;
