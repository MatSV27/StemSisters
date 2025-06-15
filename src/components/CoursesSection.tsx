
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Star, Play, Users, Trophy } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  category: string;
  progress: number;
  isCompleted: boolean;
  participants: number;
  rating: number;
}

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const courses: Course[] = [
    {
      id: '1',
      title: 'Crea tu primera app móvil',
      description: 'Aprende los fundamentos de desarrollo móvil con herramientas sencillas',
      duration: '45 min',
      difficulty: 'Principiante',
      category: 'Programación',
      progress: 0,
      isCompleted: false,
      participants: 234,
      rating: 4.8
    },
    {
      id: '2',
      title: 'Experimentos científicos caseros',
      description: 'Descubre la química y física con experimentos que puedes hacer en casa',
      duration: '30 min',
      difficulty: 'Principiante',
      category: 'Ciencias',
      progress: 100,
      isCompleted: true,
      participants: 189,
      rating: 4.9
    },
    {
      id: '3',
      title: 'Diseño de videojuegos',
      description: 'Crea tu primer videojuego usando herramientas visuales',
      duration: '60 min',
      difficulty: 'Intermedio',
      category: 'Tecnología',
      progress: 65,
      isCompleted: false,
      participants: 156,
      rating: 4.7
    },
    {
      id: '4',
      title: 'Robótica con Arduino',
      description: 'Construye y programa tu primer robot con Arduino',
      duration: '90 min',
      difficulty: 'Intermedio',
      category: 'Ingeniería',
      progress: 0,
      isCompleted: false,
      participants: 98,
      rating: 4.9
    },
    {
      id: '5',
      title: 'Matemáticas en la vida real',
      description: 'Descubre cómo las matemáticas están en todo lo que nos rodea',
      duration: '25 min',
      difficulty: 'Principiante',
      category: 'Matemáticas',
      progress: 30,
      isCompleted: false,
      participants: 267,
      rating: 4.6
    }
  ];

  const categories = ['Todos', 'Programación', 'Ciencias', 'Tecnología', 'Ingeniería', 'Matemáticas'];

  const filteredCourses = selectedCategory === 'Todos' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Principiante': return 'bg-green-100 text-green-800';
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800';
      case 'Avanzado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Microcursos diseñados para ti 🎯
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Aprende a tu ritmo con contenido personalizado según tus intereses. 
          Cada curso está diseñado para que descubras algo nuevo sobre STEM.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "text-white" : ""}
            style={selectedCategory === category ? { backgroundColor: '#7E4EFF' } : {}}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Courses grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge className={getDifficultyColor(course.difficulty)}>
                  {course.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {course.rating}
                </div>
              </div>
              <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">{course.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {course.participants}
                </div>
              </div>

              {course.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progreso</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              )}

              <Button 
                className="w-full text-white"
                style={{ backgroundColor: course.isCompleted ? '#10B981' : '#7E4EFF' }}
              >
                {course.isCompleted ? (
                  <>
                    <Trophy className="h-4 w-4 mr-2" />
                    Completado
                  </>
                ) : course.progress > 0 ? (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Continuar
                  </>
                ) : (
                  <>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Empezar ahora
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
