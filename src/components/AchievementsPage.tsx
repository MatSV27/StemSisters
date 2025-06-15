import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Users, BookOpen, Award, MessageCircle, Target, Bot, Zap, Shield, Atom, Crown, Trophy, Medal } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  isCompleted: boolean;
  category: string;
}

interface UserStats {
  level: number;
  totalPoints: number;
  completedChallenges: number;
  streak: number;
}

const AchievementsPage = () => {
  const [achievements] = useState<Achievement[]>([
    {
      id: "1",
      title: "Primera Exploradora",
      description: "Completa tu primer experimento científico",
      icon: "🔬",
      progress: 100,
      isCompleted: true,
      category: "Primeros Pasos"
    },
    {
      id: "2", 
      title: "Curiosa Digital",
      description: "Escribe tu primera línea de código",
      icon: "💻",
      progress: 75,
      isCompleted: false,
      category: "Tecnología"
    },
    {
      id: "3",
      title: "Matemática Genial",
      description: "Resuelve 10 problemas matemáticos",
      icon: "🧮",
      progress: 40,
      isCompleted: false,
      category: "Matemáticas"
    }
  ]);

  const [userStats] = useState<UserStats>({
    level: 3,
    totalPoints: 1250,
    completedChallenges: 8,
    streak: 5
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            🏆 Mi Panel de Logros
          </h1>
          <p className="text-gray-600 text-lg">
            ¡Mira todo lo increíble que has logrado en tu camino STEM!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center border-pink-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">{userStats.level}</div>
              <div className="text-gray-600">Nivel Actual</div>
            </CardContent>
          </Card>
          <Card className="text-center border-purple-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-500 mb-2">{userStats.totalPoints}</div>
              <div className="text-gray-600">Puntos Totales</div>
            </CardContent>
          </Card>
          <Card className="text-center border-teal-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-teal-500 mb-2">{userStats.completedChallenges}</div>
              <div className="text-gray-600">Retos Completados</div>
            </CardContent>
          </Card>
          <Card className="text-center border-yellow-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-yellow-500 mb-2">{userStats.streak}</div>
              <div className="text-gray-600">Días Consecutivos</div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className={`border-2 ${achievement.isCompleted ? 'border-green-200 bg-green-50' : 'border-gray-200'} hover:shadow-lg transition-all`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{achievement.icon}</div>
                  {achievement.isCompleted && (
                    <Badge className="bg-green-500 text-white">
                      ¡Completado!
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
                <CardDescription>{achievement.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progreso</span>
                    <span>{achievement.progress}%</span>
                  </div>
                  <Progress 
                    value={achievement.progress} 
                    className={achievement.isCompleted ? "bg-green-200" : ""}
                  />
                  <Badge variant="outline" className="text-xs">
                    {achievement.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
