
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Medal, Award, Crown, Target, Zap, Users, ArrowLeft, Calendar, TrendingUp } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
  earnedAt: string;
  points: number;
  isPersonal?: boolean;
}

interface AchievementsPageProps {
  onBack: () => void;
}

const AchievementsPage = ({ onBack }: AchievementsPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showPersonalOnly, setShowPersonalOnly] = useState(false);

  const userStats = {
    totalPoints: 1,250,
    rank: 15,
    totalAchievements: 8,
    recentStreak: 12
  };

  const personalAchievements: Achievement[] = [
    {
      id: 1,
      title: "Primera Exploradora",
      description: "¡Completaste tu primer día en StemSisters!",
      icon: "🌟",
      category: "inicio",
      earnedAt: "Hace 2 semanas",
      points: 50,
      isPersonal: true
    },
    {
      id: 2,
      title: "Programadora en Ciernes",
      description: "Completaste tu primer curso de programación",
      icon: "👩‍💻",
      category: "tecnologia",
      earnedAt: "Hace 1 semana",
      points: 150,
      isPersonal: true
    },
    {
      id: 3,
      title: "Científica Curiosa",
      description: "Realizaste tu primer experimento virtual",
      icon: "🧪",
      category: "ciencia",
      earnedAt: "Hace 3 días",
      points: 100,
      isPersonal: true
    }
  ];

  const communityAchievements: Achievement[] = [
    {
      id: 4,
      title: "App Desarrolladora Pro",
      description: "María G. - Creó su primera aplicación móvil",
      icon: "📱",
      category: "tecnologia",
      earnedAt: "Hace 2 horas",
      points: 300,
      isPersonal: false
    },
    {
      id: 5,
      title: "Investigadora Nacional",
      description: "Luna M. - Proyecto seleccionado para feria nacional",
      icon: "🏆",
      category: "ciencia",
      earnedAt: "Ayer",
      points: 500,
      isPersonal: false
    },
    {
      id: 6,
      title: "Ingeniera Innovadora",
      description: "Sofía R. - Diseñó un filtro de agua revolucionario",
      icon: "⚙️",
      category: "ingenieria",
      earnedAt: "Hace 2 días",
      points: 400,
      isPersonal: false
    },
    {
      id: 7,
      title: "Matemática Brillante",
      description: "Ana L. - Resolvió problema complejo de algoritmos",
      icon: "🔢",
      category: "matematicas",
      earnedAt: "Hace 3 días",
      points: 250,
      isPersonal: false
    }
  ];

  const allAchievements = [...personalAchievements, ...communityAchievements];

  const categories = [
    { id: "all", label: "Todos", icon: Star },
    { id: "inicio", label: "Inicio", icon: Target },
    { id: "tecnologia", label: "Tecnología", icon: Zap },
    { id: "ciencia", label: "Ciencia", icon: Medal },
    { id: "ingenieria", label: "Ingeniería", icon: Award },
    { id: "matematicas", label: "Matemáticas", icon: Trophy }
  ];

  const filteredAchievements = allAchievements.filter(achievement => {
    const categoryMatch = selectedCategory === "all" || achievement.category === selectedCategory;
    const personalMatch = !showPersonalOnly || achievement.isPersonal;
    return categoryMatch && personalMatch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "inicio": return "bg-green-100 text-green-800 border-green-200";
      case "tecnologia": return "bg-blue-100 text-blue-800 border-blue-200";
      case "ciencia": return "bg-purple-100 text-purple-800 border-purple-200";
      case "ingenieria": return "bg-orange-100 text-orange-800 border-orange-200";
      case "matematicas": return "bg-pink-100 text-pink-800 border-pink-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-pink-200 text-pink-600 hover:bg-pink-50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a Comunidad
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">
            Logros y Reconocimientos 🏆
          </h1>
          <p className="text-gray-600">
            Celebra tus éxitos y descubre los logros épicos de otras exploradoras
          </p>
        </div>
      </div>

      {/* User Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-pink-200 bg-gradient-to-br from-pink-50 to-pink-100">
          <CardContent className="p-6 text-center">
            <Crown className="h-8 w-8 text-pink-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-pink-600">{userStats.totalPoints}</div>
            <div className="text-sm text-gray-600">Puntos Totales</div>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">#{userStats.rank}</div>
            <div className="text-sm text-gray-600">Ranking Global</div>
          </CardContent>
        </Card>
        
        <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-teal-100">
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-teal-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-teal-600">{userStats.totalAchievements}</div>
            <div className="text-sm text-gray-600">Logros Desbloqueados</div>
          </CardContent>
        </Card>
        
        <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100">
          <CardContent className="p-6 text-center">
            <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-600">{userStats.recentStreak}</div>
            <div className="text-sm text-gray-600">Días Consecutivos</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id 
                ? "text-white" 
                : "border-pink-200 text-pink-600 hover:bg-pink-50"
              }
              style={selectedCategory === category.id ? { backgroundColor: '#FF1493' } : {}}
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>
        
        <div className="flex gap-4">
          <Button
            variant={showPersonalOnly ? "default" : "outline"}
            onClick={() => setShowPersonalOnly(!showPersonalOnly)}
            className={showPersonalOnly 
              ? "text-white" 
              : "border-pink-200 text-pink-600 hover:bg-pink-50"
            }
            style={showPersonalOnly ? { backgroundColor: '#FF1493' } : {}}
          >
            <Users className="h-4 w-4 mr-2" />
            {showPersonalOnly ? "Mostrando solo mis logros" : "Mostrar solo mis logros"}
          </Button>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement) => (
          <Card 
            key={achievement.id} 
            className={`border-2 hover:shadow-lg transition-all ${
              achievement.isPersonal 
                ? "border-pink-200 bg-gradient-to-br from-pink-50 to-pink-100" 
                : "border-gray-200 hover:border-pink-200"
            }`}
          >
            <CardHeader className="text-center pb-3">
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <CardTitle className="text-lg text-gray-800">
                {achievement.title}
                {achievement.isPersonal && (
                  <Badge className="ml-2 text-white text-xs" style={{ backgroundColor: '#FF1493' }}>
                    ¡Tuyo!
                  </Badge>
                )}
              </CardTitle>
              <Badge variant="outline" className={`text-xs ${getCategoryColor(achievement.category)}`}>
                {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
              </Badge>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              <CardDescription className="text-gray-600 mb-3">
                {achievement.description}
              </CardDescription>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {achievement.earnedAt}
                </span>
                <span className="font-bold text-pink-600">
                  +{achievement.points} pts
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAchievements.length === 0 && (
        <Card className="border-gray-200 text-center py-12">
          <CardContent>
            <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No hay logros en esta categoría aún
            </h3>
            <p className="text-gray-500">
              ¡Sigue explorando y aprendiendo para desbloquear nuevos logros!
            </p>
          </CardContent>
        </Card>
      )}

      {/* Next Goals */}
      <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-pink-500" />
            Próximos Logros por Desbloquear
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🚀</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800">Exploradora Avanzada</div>
                <div className="text-sm text-gray-600">Completa 5 cursos diferentes</div>
                <Progress value={60} className="mt-1 h-2" />
                <div className="text-xs text-gray-500 mt-1">3/5 cursos completados</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-2xl">🌟</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800">Mentora Comunitaria</div>
                <div className="text-sm text-gray-600">Ayuda a 10 exploradoras con sus dudas</div>
                <Progress value={30} className="mt-1 h-2" />
                <div className="text-xs text-gray-500 mt-1">3/10 ayudas completadas</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AchievementsPage;
