
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Star, Trophy, Target, Zap, Clock, Award, BookOpen, Users } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Primera Exploradora",
      description: "Completa tu primer microcurso",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      progress: 100,
      completed: true,
      category: "Logros Desbloqueados"
    },
    {
      id: 2,
      title: "Científica Curiosa",
      description: "Realiza 5 experimentos científicos",
      icon: <Target className="h-8 w-8 text-teal-500" />,
      progress: 60,
      completed: false,
      category: "En Progreso"
    },
    {
      id: 3,
      title: "Programadora Novata",
      description: "Crea tu primera aplicación",
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      progress: 40,
      completed: false,
      category: "En Progreso"
    },
    {
      id: 4,
      title: "Mentora Comunitaria",
      description: "Ayuda a 10 compañeras en la comunidad",
      icon: <Users className="h-8 w-8 text-pink-500" />,
      progress: 60,
      completed: false,
      category: "En Progreso"
    },
    {
      id: 5,
      title: "Aprendiz Constante",
      description: "Completa 15 microcursos",
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      progress: 80,
      completed: false,
      category: "En Progreso"
    }
  ];

  const stats = [
    { label: "Logros obtenidos", value: "3", color: "text-purple-600" },
    { label: "En progreso", value: "3", color: "text-teal-600" },
    { label: "Por desbloquear", value: "3", color: "text-pink-600" }
  ];

  const completedAchievements = achievements.filter(achievement => achievement.completed);
  const inProgressAchievements = achievements.filter(achievement => !achievement.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-8 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tus Logros STEM 🏆
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada paso que das en tu camino STEM es una victoria. ¡Celebremos tus logros y sigamos 
            construyendo tu futuro brillante!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-pink-200">
              <CardContent className="pt-6">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Completed Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            Logros Desbloqueados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedAchievements.map((achievement) => (
              <Card key={achievement.id} className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {achievement.icon}
                    <div className="flex-1">
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                    <Trophy className="h-6 w-6 text-yellow-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge className="w-full justify-center text-white font-bold" style={{ backgroundColor: '#FF1493' }}>
                    ✨ COMPLETADO ✨
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* In Progress Achievements */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Clock className="h-6 w-6 text-purple-500" />
            En Progreso
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {inProgressAchievements.map((achievement) => (
              <Card key={achievement.id} className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {achievement.icon}
                    <div className="flex-1">
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progreso</span>
                        <span className="font-bold text-purple-600">{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-3" />
                    </div>
                    <Button variant="outline" className="w-full border-purple-200 text-purple-600">
                      Seguir trabajando
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
