
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Upload, Heart, MessageCircle, Share2, Camera, Trophy, Sparkles } from "lucide-react";

interface Challenge {
  id: string;
  user: string;
  age: number;
  title: string;
  description: string;
  category: string;
  image?: string;
  likes: number;
  comments: number;
  timeAgo: string;
  achievement?: string;
}

const ChallengeShare = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: '1',
      user: 'Ana García',
      age: 16,
      title: 'Mi primer robot con Arduino!',
      description: 'Después de 3 semanas aprendiendo, logré hacer que mi robot evite obstáculos. Al principio pensé que era imposible, pero Sofia me ayudó paso a paso. ¡Nunca pensé que podría programar algo así! 🤖✨',
      category: 'Robótica',
      likes: 24,
      comments: 8,
      timeAgo: 'Hace 2 horas',
      achievement: 'Primera Programadora'
    },
    {
      id: '2',
      user: 'María López',
      age: 15,
      title: 'Experimento de química casero',
      description: 'Hice el experimento del volcán con bicarbonato y vinagre, pero le agregué colorante y purpurina. ¡El resultado fue increíble! Mi mamá se sorprendió mucho. La química puede ser súper divertida 🌋',
      category: 'Ciencias',
      likes: 18,
      comments: 5,
      timeAgo: 'Hace 5 horas'
    },
    {
      id: '3',
      user: 'Sofía Chen',
      age: 17,
      title: 'App de calculadora científica',
      description: 'Terminé mi primera app móvil! Es una calculadora científica que ayuda con trigonometría. Fue difícil al principio pero ahora entiendo mejor la programación. ¡Gracias a todas por el apoyo! 📱💜',
      category: 'Programación',
      likes: 31,
      comments: 12,
      timeAgo: 'Hace 1 día',
      achievement: 'Desarrolladora Móvil'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newChallenge, setNewChallenge] = useState({
    title: '',
    description: '',
    category: 'Programación'
  });

  const handleLike = (challengeId: string) => {
    setChallenges(prev => prev.map(challenge => 
      challenge.id === challengeId 
        ? { ...challenge, likes: challenge.likes + 1 }
        : challenge
    ));
  };

  const handleSubmitChallenge = () => {
    const challenge: Challenge = {
      id: Date.now().toString(),
      user: 'Tú',
      age: 16,
      title: newChallenge.title,
      description: newChallenge.description,
      category: newChallenge.category,
      likes: 0,
      comments: 0,
      timeAgo: 'Ahora'
    };

    setChallenges(prev => [challenge, ...prev]);
    setNewChallenge({ title: '', description: '', category: 'Programación' });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Comparte tu éxito STEM 🌟
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          ¡Muestra tus proyectos, experimentos y logros! Inspira a otras chicas y 
          demuestra que juntas podemos lograr cosas increíbles en STEM.
        </p>
        
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button 
              size="lg"
              className="text-white font-semibold"
              style={{ backgroundColor: '#7E4EFF' }}
            >
              <Share2 className="h-5 w-5 mr-2" />
              Compartir mi reto
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">Comparte tu logro 🎉</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Título de tu proyecto..."
                value={newChallenge.title}
                onChange={(e) => setNewChallenge(prev => ({ ...prev, title: e.target.value }))}
              />
              
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={newChallenge.category}
                onChange={(e) => setNewChallenge(prev => ({ ...prev, category: e.target.value }))}
              >
                <option value="Programación">Programación</option>
                <option value="Ciencias">Ciencias</option>
                <option value="Robótica">Robótica</option>
                <option value="Matemáticas">Matemáticas</option>
                <option value="Ingeniería">Ingeniería</option>
              </select>
              
              <Textarea
                placeholder="Cuéntanos sobre tu proyecto, qué aprendiste, cómo te sentiste..."
                value={newChallenge.description}
                onChange={(e) => setNewChallenge(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
              />
              
              <Button 
                className="w-full text-white"
                style={{ backgroundColor: '#7E4EFF' }}
                onClick={handleSubmitChallenge}
              >
                <Upload className="h-4 w-4 mr-2" />
                Publicar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Motivational banner */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">
          "Tu historia puede inspirar a la próxima generación de científicas" ✨
        </h3>
        <p className="opacity-90">
          Cada logro que compartes motiva a otra chica a seguir sus sueños STEM
        </p>
      </div>

      {/* Challenges feed */}
      <div className="space-y-6">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    {challenge.user.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {challenge.user}, {challenge.age} años
                    </div>
                    <div className="text-sm text-gray-500">{challenge.timeAgo}</div>
                  </div>
                </div>
                <Badge 
                  style={{ backgroundColor: '#E6FFFA', color: '#2FD4D4' }}
                >
                  {challenge.category}
                </Badge>
              </div>
              
              {challenge.achievement && (
                <div className="flex items-center gap-2 mt-2">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium text-yellow-600">
                    Nuevo logro: {challenge.achievement}
                  </span>
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                </div>
              )}
              
              <CardTitle className="text-lg">{challenge.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
              
              {/* Image placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-teal-100 rounded-lg flex items-center justify-center">
                <Camera className="h-12 w-12 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(challenge.id)}
                    className="text-gray-600 hover:text-pink-500"
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    {challenge.likes}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-purple-500"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {challenge.comments}
                  </Button>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-purple-600 font-medium"
                  style={{ color: '#7E4EFF' }}
                >
                  ¡Tú puedes hacerlo! 💪
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Encouragement section */}
      <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          ¿Lista para tu próximo reto? 🚀
        </h3>
        <p className="text-gray-600 mb-4">
          Cada proyecto que compartes inspira a otras chicas a seguir explorando STEM. 
          ¡Tu próximo logro está esperándote!
        </p>
        <Button 
          className="text-white"
          style={{ backgroundColor: '#FF6B9D' }}
        >
          Ver microcursos disponibles
        </Button>
      </div>
    </div>
  );
};

export default ChallengeShare;
