
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Target, Zap, Heart, BookOpen, Users, Award } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
  isUnlocked: boolean;
  progress?: number;
  maxProgress?: number;
}

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Primera Exploradora',
      description: 'Completa tu primer microcurso',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      isUnlocked: true
    },
    {
      id: '2',
      title: 'Científica Curiosa',
      description: 'Realiza 5 experimentos científicos',
      icon: Target,
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      isUnlocked: true
    },
    {
      id: '3',
      title: 'Programadora Novata',
      description: 'Crea tu primera aplicación',
      icon: Zap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      isUnlocked: true
    },
    {
      id: '4',
      title: 'Mentora Comunitaria',
      description: 'Ayuda a 10 compañeras en la comunidad',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      isUnlocked: false,
      progress: 6,
      maxProgress: 10
    },
    {
      id: '5',
      title: 'Aprendiz Constante',
      description: 'Completa 15 microcursos',
      icon: BookOpen,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      isUnlocked: false,
      progress: 8,
      maxProgress: 15
    },
    {
      id: '6',
      title: 'Líder STEM',
      description: 'Participa en 3 hackathons',
      icon: Trophy,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      isUnlocked: false,
      progress: 1,
      maxProgress: 3
    }
  ];

  const unlockedAchievements = achievements.filter(a => a.isUnlocked);
  const inProgressAchievements = achievements.filter(a => !a.isUnlocked && a.progress !== undefined);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Tus Logros STEM 🏆
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Cada paso que das en tu camino STEM es una victoria. 
          ¡Celebremos tus logros y sigamos construyendo tu futuro brillante!
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{unlockedAchievements.length}</div>
          <div className="text-sm text-purple-700">Logros obtenidos</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
          <div className="text-2xl font-bold text-teal-600">{inProgressAchievements.length}</div>
          <div className="text-sm text-teal-700">En progreso</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
          <div className="text-2xl font-bold" style={{ color: '#FF6B9D' }}>{achievements.length - unlockedAchievements.length}</div>
          <div className="text-sm" style={{ color: '#FF6B9D' }}>Por desbloquear</div>
        </div>
      </div>

      {/* Unlocked Achievements */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Logros Desbloqueados
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {unlockedAchievements.map((achievement) => (
            <Card key={achievement.id} className="border-2 border-green-200 bg-green-50">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-full ${achievement.bgColor} flex items-center justify-center mb-2`}>
                  <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                </div>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
                <Badge 
                  className="mt-3 text-white"
                  style={{ backgroundColor: '#10B981' }}
                >
                  ✓ Completado
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* In Progress Achievements */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="h-5 w-5 text-purple-500" />
          En Progreso
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {inProgressAchievements.map((achievement) => (
            <Card key={achievement.id} className="border-purple-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-full ${achievement.bgColor} flex items-center justify-center`}>
                    <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                  </div>
                  <Badge variant="outline">
                    {achievement.progress}/{achievement.maxProgress}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600 text-sm">{achievement.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progreso</span>
                    <span>{Math.round((achievement.progress! / achievement.maxProgress!) * 100)}%</span>
                  </div>
                  <Progress 
                    value={(achievement.progress! / achievement.maxProgress!) * 100} 
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
