
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Trophy, Star, Award, Flame, Users, Target, Zap } from "lucide-react";

interface TopUser {
  name: string;
  age: number;
  achievements: number;
  points: number;
  category: string;
  specialty: string;
  rank: number;
  avatar: string;
}

const RecognitionSection = () => {
  const topUsers: TopUser[] = [
    {
      name: 'Isabella Rodríguez',
      age: 17,
      achievements: 12,
      points: 2850,
      category: 'Líder del Mes',
      specialty: 'Programación & IA',
      rank: 1,
      avatar: '👑'
    },
    {
      name: 'Camila Torres',
      age: 16,
      achievements: 10,
      points: 2640,
      category: 'Científica Estrella',
      specialty: 'Química & Biología',
      rank: 2,
      avatar: '🧪'
    },
    {
      name: 'Valentina Silva',
      age: 15,
      achievements: 9,
      points: 2380,
      category: 'Innovadora Tech',
      specialty: 'Robótica & IoT',
      rank: 3,
      avatar: '🤖'
    },
    {
      name: 'Martina López',
      age: 16,
      achievements: 8,
      points: 2150,
      category: 'Mentora Comunitaria',
      specialty: 'Ingeniería & Diseño',
      rank: 4,
      avatar: '🎯'
    },
    {
      name: 'Emilia García',
      age: 17,
      achievements: 7,
      points: 1920,
      category: 'Exploradora STEM',
      specialty: 'Matemáticas & Física',
      rank: 5,
      avatar: '🔬'
    }
  ];

  const monthlyCategories = [
    {
      title: 'Más Colaborativa',
      winner: 'Ana Martínez',
      description: 'Ayudó a 15 compañeras este mes',
      icon: Users,
      color: 'text-pink-500',
      bgColor: 'bg-pink-100'
    },
    {
      title: 'Reto Más Creativo',
      winner: 'Sofia Chen',
      description: 'App de arte con código',
      icon: Star,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Mayor Progreso',
      winner: 'Luna Vargas',
      description: 'De 0 a 5 cursos completados',
      icon: Target,
      color: 'text-teal-500',
      bgColor: 'bg-teal-100'
    },
    {
      title: 'Espíritu STEM',
      winner: 'Daniela Ruiz',
      description: 'Motivó a 20+ chicas nuevas',
      icon: Flame,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100'
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2: return <Trophy className="h-6 w-6 text-gray-400" />;
      case 3: return <Award className="h-6 w-6 text-amber-600" />;
      default: return <Star className="h-6 w-6 text-purple-500" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-400 to-yellow-600';
      case 2: return 'from-gray-300 to-gray-500';
      case 3: return 'from-amber-400 to-amber-600';
      default: return 'from-purple-400 to-purple-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Reconocimiento StemSisters 👑
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Celebramos a las chicas que están marcando la diferencia en STEM. 
          Su dedicación, creatividad y apoyo mutuo inspiran a toda nuestra comunidad.
        </p>
      </div>

      {/* Top Rankings */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          🏆 Top 5 StemSisters del Mes
        </h3>
        
        <div className="space-y-4">
          {topUsers.map((user, index) => (
            <Card 
              key={user.name} 
              className={`relative overflow-hidden ${
                user.rank === 1 ? 'border-2 border-yellow-300 bg-gradient-to-r from-yellow-50 to-yellow-100' :
                user.rank === 2 ? 'border-2 border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100' :
                user.rank === 3 ? 'border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-amber-100' :
                'border border-purple-200 bg-white'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Rank */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getRankColor(user.rank)} flex items-center justify-center text-white font-bold text-lg`}>
                      #{user.rank}
                    </div>
                    
                    {/* Avatar */}
                    <div className="text-3xl">{user.avatar}</div>
                    
                    {/* User info */}
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-lg text-gray-800">{user.name}</h4>
                        {getRankIcon(user.rank)}
                      </div>
                      <p className="text-gray-600">{user.age} años • {user.specialty}</p>
                      <Badge 
                        className="mt-1 text-white"
                        style={{ backgroundColor: '#7E4EFF' }}
                      >
                        {user.category}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#7E4EFF' }}>
                      {user.points.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">puntos</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {user.achievements} logros desbloqueados
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Special Categories */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          ✨ Reconocimientos Especiales
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {monthlyCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <p className="text-sm text-gray-500">Julio 2024</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-xl font-bold" style={{ color: '#7E4EFF' }}>
                    {category.winner}
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 text-purple-600 border-purple-200"
                  >
                    <Zap className="h-4 w-4 mr-1" />
                    ¡Felicitaciones!
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Inspiration message */}
      <div className="text-center p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
        <h3 className="text-2xl font-bold mb-3">
          ¡Tú también puedes estar aquí! 🌟
        </h3>
        <p className="text-lg opacity-90 mb-4">
          Cada día es una nueva oportunidad para brillar en STEM. 
          Completa retos, ayuda a tus compañeras y sigue explorando.
        </p>
        <Button 
          size="lg"
          className="bg-white text-purple-600 hover:bg-purple-50 font-semibold"
        >
          Ver mis próximos retos 🚀
        </Button>
      </div>
    </div>
  );
};

export default RecognitionSection;
