
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Target, Star } from "lucide-react";

interface InitialSurveyProps {
  onComplete: () => void;
}

const InitialSurveyProps = ({ onComplete }: InitialSurveyProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const questions = [
    {
      id: 'frustration',
      title: '¡Hola genia! 💖',
      subtitle: 'Te queremos conocer mejor para personalizar tu experiencia',
      question: '¿Qué te molesta más en tu día a día?',
      options: [
        { value: 'stereotypes', label: 'Que digan "eso no es para chicas"', emoji: '😤' },
        { value: 'opportunities', label: 'No tener oportunidades cool en ciencias', emoji: '😔' },
        { value: 'support', label: 'Que no me entiendan mis sueños', emoji: '💔' },
        { value: 'representation', label: 'No ver mujeres en tecnología', emoji: '🤷‍♀️' }
      ]
    },
    {
      id: 'stem_explanation',
      title: '¿Sabes qué es STEM? 🤔',
      subtitle: 'STEM significa Ciencia, Tecnología, Ingeniería y Matemáticas',
      description: 'Son las áreas donde puedes crear videojuegos épicos, inventar curas para enfermedades, diseñar apps que cambien vidas, o incluso explorar el espacio. ¡Es donde las genias como tú conquistan el mundo! 🚀',
      question: 'Después de saber esto, ¿cuál área te emociona más?',
      options: [
        { value: 'science', label: 'Ciencia - Descubrir cómo funciona todo', emoji: '🔬' },
        { value: 'technology', label: 'Tecnología - Crear apps y webs geniales', emoji: '💻' },
        { value: 'engineering', label: 'Ingeniería - Construir cosas increíbles', emoji: '⚙️' },
        { value: 'math', label: 'Matemáticas - Resolver misterios con números', emoji: '📊' }
      ]
    },
    {
      id: 'interests',
      title: '¿Qué te hace vibrar? ✨',
      subtitle: 'Esto nos ayuda a encontrar tu camino perfecto',
      question: '¿Cuál de estas actividades te emociona más?',
      options: [
        { value: 'create', label: 'Crear cosas nuevas y súper cool', emoji: '🎨' },
        { value: 'solve', label: 'Resolver problemas complicados', emoji: '🧩' },
        { value: 'help', label: 'Ayudar a otras personas', emoji: '❤️' },
        { value: 'explore', label: 'Explorar lo desconocido', emoji: '🚀' }
      ]
    },
    {
      id: 'goals',
      title: '¿Cómo quieres cambiar el mundo? 🌟',
      subtitle: 'Todas las exploradoras tienen una misión épica',
      question: '¿Cuál es tu sueño más grande?',
      options: [
        { value: 'health', label: 'Curar enfermedades y salvar vidas', emoji: '⚕️' },
        { value: 'environment', label: 'Salvar el planeta y los animales', emoji: '🌍' },
        { value: 'technology', label: 'Crear la próxima app viral', emoji: '📱' },
        { value: 'space', label: 'Explorar el espacio y otros planetas', emoji: '🛸' }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Survey completed
      setTimeout(onComplete, 1000);
    }
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-2 border-pink-200">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl text-gray-800 mb-2">
            {currentQuestion.title}
          </CardTitle>
          <p className="text-gray-600 mb-4">{currentQuestion.subtitle}</p>
          
          {currentQuestion.description && (
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg mb-4 border border-pink-200">
              <p className="text-pink-800 font-medium">{currentQuestion.description}</p>
            </div>
          )}
          
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Pregunta {currentStep + 1} de {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <CardContent>
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            {currentQuestion.question}
          </h3>

          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                variant="outline"
                className="h-auto p-4 text-left hover:bg-pink-50 hover:border-pink-300 transition-all group"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="text-2xl group-hover:scale-110 transition-transform">
                    {option.emoji}
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-gray-800">{option.label}</span>
                  </div>
                </div>
              </Button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              ✨ No hay respuestas correctas o incorrectas, solo queremos conocerte mejor
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InitialSurveyProps;
