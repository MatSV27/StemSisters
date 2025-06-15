
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Play, 
  CheckCircle2, 
  Zap,
  Target,
  Award,
  Heart
} from "lucide-react";

interface ImprovedCoursesSectionProps {
  onNavigateToCommunity?: () => void;
}

const ImprovedCoursesSection = ({ onNavigateToCommunity }: ImprovedCoursesSectionProps) => {
  const courses = [
    {
      id: 1,
      title: "Programación desde Cero con Python",
      description: "Aprende a programar paso a paso con el lenguaje más amigable. Perfecto para principiantes que quieren crear sus primeras aplicaciones.",
      duration: "6 semanas",
      level: "Principiante",
      students: "2,847",
      rating: 4.9,
      progress: 65,
      completed: false,
      topics: ["Variables y tipos de datos", "Estructuras de control", "Funciones", "Proyectos prácticos"],
      objectives: ["Crear tu primera aplicación", "Dominar sintaxis básica", "Resolver problemas reales"],
      image: "💻",
      color: "bg-pink-500",
      enrolled: true
    },
    {
      id: 2,
      title: "Matemáticas Divertidas para STEM",
      description: "Descubre cómo las matemáticas están en todo lo que nos rodea. Aprende álgebra, geometría y estadística de forma práctica y emocionante.",
      duration: "8 semanas", 
      level: "Intermedio",
      students: "1,956",
      rating: 4.8,
      progress: 30,
      completed: false,
      topics: ["Álgebra aplicada", "Geometría en el mundo real", "Estadística práctica", "Cálculo básico"],
      objectives: ["Aplicar matemáticas a problemas reales", "Desarrollar pensamiento lógico", "Prepararte para ciencias avanzadas"],
      image: "📊",
      color: "bg-purple-500",
      enrolled: true
    },
    {
      id: 3,
      title: "Ciencias de Datos para Principiantes", 
      description: "Analiza datos como una profesional. Aprende a encontrar patrones, crear visualizaciones y tomar decisiones basadas en datos.",
      duration: "10 semanas",
      level: "Intermedio",
      students: "1,432",
      rating: 4.9,
      progress: 0,
      completed: false,
      topics: ["Análisis exploratorio", "Visualización de datos", "Machine Learning básico", "Proyectos reales"],
      objectives: ["Analizar conjuntos de datos", "Crear visualizaciones impactantes", "Usar herramientas profesionales"],
      image: "📈",
      color: "bg-teal-500",
      enrolled: false
    },
    {
      id: 4,
      title: "Desarrollo de Videojuegos",
      description: "Crea tus propios videojuegos desde cero. Aprende programación, diseño y storytelling para dar vida a tus ideas más creativas.",
      duration: "12 semanas",
      level: "Intermedio",
      students: "1,893",
      rating: 4.8,
      progress: 100,
      completed: true,
      topics: ["Unity y C#", "Diseño de personajes", "Mecánicas de juego", "Publicación"],
      objectives: ["Crear un juego completo", "Dominar Unity", "Publicar en plataformas"],
      image: "🎮",
      color: "bg-yellow-500",
      enrolled: true
    },
    {
      id: 5,
      title: "Robótica e IoT para Exploradoras",
      description: "Construye robots y dispositivos inteligentes. Combina programación, electrónica y creatividad para crear tecnología que cambie el mundo.",
      duration: "14 semanas",
      level: "Avanzado", 
      students: "987",
      rating: 4.9,
      progress: 0,
      completed: false,
      topics: ["Arduino y sensores", "Programación de robots", "Internet de las cosas", "Proyectos innovadores"],
      objectives: ["Construir robots funcionales", "Crear dispositivos IoT", "Integrar hardware y software"],
      image: "🤖",
      color: "bg-indigo-500",
      enrolled: false
    },
    {
      id: 6,
      title: "Inteligencia Artificial Ética",
      description: "Explora el futuro de la IA de manera responsable. Aprende machine learning, ética en tecnología y cómo crear IA que beneficie a todos.",
      duration: "16 semanas",
      level: "Avanzado",
      students: "654",
      rating: 4.7,
      progress: 0,
      completed: false,
      topics: ["Machine Learning", "Ética en IA", "Redes neuronales", "Proyectos sociales"],
      objectives: ["Crear modelos de IA", "Entender implicaciones éticas", "Desarrollar soluciones responsables"],
      image: "🧠",
      color: "bg-rose-500",
      enrolled: false
    }
  ];

  const achievements = [
    { title: "Primera Línea de Código", description: "Escribiste tu primer programa", icon: "💻", earned: true },
    { title: "Solucionadora de Problemas", description: "Completaste 10 ejercicios", icon: "🧩", earned: true },
    { title: "Exploradora Curiosa", description: "Probaste 3 tecnologías diferentes", icon: "🔍", earned: false }
  ];

  const handleEnrollCourse = (courseId: number) => {
    console.log(`Inscribiéndose al curso ${courseId}`);
  };

  return (
    <div className="space-y-8">
      {/* Header motivacional */}
      <div className="text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">¡Conquista el mundo STEM! 🚀</h1>
        <p className="text-xl mb-6">Microcursos diseñados para chicas extraordinarias como tú</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">2,847</div>
            <div className="text-sm opacity-90">Exploradoras aprendiendo</div>
          </div>
          <div>
            <div className="text-2xl font-bold">156</div>
            <div className="text-sm opacity-90">Proyectos creados</div>
          </div>
          <div>
            <div className="text-2xl font-bold">89%</div>
            <div className="text-sm opacity-90">Aman STEM después</div>
          </div>
        </div>
      </div>

      {/* Mi progreso */}
      <Card className="border-pink-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-pink-500" />
            Tu Camino de Conquista STEM
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Progreso general</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-pink-500">3</div>
                <div className="text-sm text-gray-600">Cursos activos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">1</div>
                <div className="text-sm text-gray-600">Completado</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-500">47</div>
                <div className="text-sm text-gray-600">Horas de aprendizaje</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cursos */}
      <div className="grid gap-6">
        <h2 className="text-2xl font-bold text-gray-800">Explora nuestros microcursos épicos</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className={`border-2 hover:shadow-xl transition-all ${
              course.enrolled ? 'border-pink-200 bg-pink-50' : 'border-gray-200'
            }`}>
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${course.color} flex items-center justify-center text-2xl mb-3`}>
                  {course.image}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={course.level === 'Principiante' ? 'default' : course.level === 'Intermedio' ? 'secondary' : 'outline'}>
                    {course.level}
                  </Badge>
                  {course.enrolled && (
                    <Badge className="bg-pink-500 text-white">
                      Inscrita
                    </Badge>
                  )}
                  {course.completed && (
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completado
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription className="text-sm">{course.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    {course.rating}
                  </div>
                </div>

                {course.enrolled && course.progress > 0 && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progreso</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Lo que aprenderás:</h4>
                  <ul className="text-xs space-y-1">
                    {course.topics.slice(0, 2).map((topic, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-500 rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={() => handleEnrollCourse(course.id)}
                  className={`w-full ${course.enrolled ? 'bg-pink-500 hover:bg-pink-600' : 'bg-purple-500 hover:bg-purple-600'} text-white`}
                >
                  {course.completed ? (
                    <>
                      <Award className="h-4 w-4 mr-2" />
                      Ver certificado
                    </>
                  ) : course.enrolled ? (
                    course.progress > 0 ? (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Continuar curso
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Comenzar curso
                      </>
                    )
                  ) : (
                    <>
                      <Zap className="h-4 w-4 mr-2" />
                      ¡Inscribirme ahora!
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mis logros */}
      <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-500" />
            Tus Logros Épicos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                achievement.earned ? 'border-yellow-200 bg-yellow-50' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="text-center">
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className={`font-semibold ${achievement.earned ? 'text-yellow-600' : 'text-gray-400'}`}>
                    {achievement.title}
                  </div>
                  <div className={`text-xs ${achievement.earned ? 'text-yellow-500' : 'text-gray-400'}`}>
                    {achievement.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mensaje motivacional */}
      <Card className="border-pink-200 bg-pink-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <Heart className="h-8 w-8 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">¡Estás brillando, genia!</h3>
            <p className="text-gray-600 mb-4">
              Cada paso que das te acerca más a conquistar el mundo STEM. ¡Sigue así!
            </p>
            <Button 
              onClick={onNavigateToCommunity}
              className="text-white"
              style={{ backgroundColor: '#FF1493' }}
            >
              Compartir mi progreso en la comunidad
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImprovedCoursesSection;
