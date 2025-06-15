
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Heart, Sparkles } from "lucide-react";

interface RegistrationModalProps {
  onClose: () => void;
  onComplete: () => void;
}

const RegistrationModal = ({ onClose, onComplete }: RegistrationModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    grade: "",
    parentConsent: false,
    interests: [] as string[],
    learningStyle: "",
    stemFeeling: "",
    motivation: ""
  });

  const stemInterests = [
    "Programación y desarrollo", "Robótica", "Medicina y biología", 
    "Ingeniería", "Matemáticas", "Química", "Física", "Astronomía",
    "Inteligencia artificial", "Videojuegos", "Apps móviles", "Diseño 3D"
  ];

  const learningStyles = [
    "Videos interactivos", "Proyectos prácticos", "Lecturas cortas",
    "Quizzes y juegos", "Experimentos", "Historias reales"
  ];

  const stemFeelings = [
    "¡Me emociona! 😍", "Me da curiosidad 🤔", "Me parece difícil 😰",
    "No sé mucho 🤷‍♀️", "Me aburre un poco 😴", "Quiero saber más 🚀"
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.age && formData.grade && formData.parentConsent;
      case 2:
        return formData.interests.length > 0;
      case 3:
        return formData.learningStyle;
      case 4:
        return formData.stemFeeling;
      default:
        return false;
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              ¡Hola! Soy tu hermana mayor digital 💜
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${(step / 4) * 100}%`,
                backgroundColor: '#A0E8B0'
              }}
            />
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                  Cuéntame sobre ti
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg text-sm text-purple-700">
                  ¡Qué emoción conocerte! Me encanta ayudar a chicas como tú a descubrir lo increíble que puede ser STEM 💫
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">¿Cuál es tu nombre?</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">¿Cuántos años tienes?</Label>
                    <Input
                      id="age"
                      type="number"
                      min="13"
                      max="17"
                      value={formData.age}
                      onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                      placeholder="Tu edad"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email (o puedes usar Google después)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="grade">¿En qué grado estás?</Label>
                  <Input
                    id="grade"
                    value={formData.grade}
                    onChange={(e) => setFormData(prev => ({ ...prev, grade: e.target.value }))}
                    placeholder="Ej: 3ro de secundaria, 5to de bachillerato..."
                  />
                </div>

                <div className="flex items-center space-x-2 bg-yellow-50 p-3 rounded-lg">
                  <Checkbox
                    id="consent"
                    checked={formData.parentConsent}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, parentConsent: checked as boolean }))
                    }
                  />
                  <Label htmlFor="consent" className="text-sm">
                    Tengo permiso de mis padres para usar esta plataforma y entiendo que es un espacio seguro para mi aprendizaje.
                  </Label>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  ¿Qué te llama la atención?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-teal-50 p-4 rounded-lg text-sm text-teal-700 mb-4">
                  No hay respuestas correctas o incorrectas. Solo quiero conocer qué te genera curiosidad 🌟
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {stemInterests.map((interest) => (
                    <div
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.interests.includes(interest)
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-sm font-medium">{interest}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>¿Cómo te gusta aprender?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-pink-50 p-4 rounded-lg text-sm text-pink-700 mb-4">
                  Todas aprendemos diferente. Cuéntame cuál es tu estilo para crear contenido que realmente te guste 💖
                </div>
                
                <div className="space-y-3">
                  {learningStyles.map((style) => (
                    <div
                      key={style}
                      onClick={() => setFormData(prev => ({ ...prev, learningStyle: style }))}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.learningStyle === style
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-gray-200 hover:border-teal-300'
                      }`}
                    >
                      <div className="font-medium">{style}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>¿Cómo te sientes con STEM?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-purple-50 p-4 rounded-lg text-sm text-purple-700 mb-4">
                  Está bien si te sientes insegura o si no sabes mucho. ¡Todas empezamos así! Esto me ayuda a acompañarte mejor 🤗
                </div>
                
                <div className="space-y-3">
                  {stemFeelings.map((feeling) => (
                    <div
                      key={feeling}
                      onClick={() => setFormData(prev => ({ ...prev, stemFeeling: feeling }))}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.stemFeeling === feeling
                          ? 'border-pink-500 bg-pink-50 text-pink-700'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <div className="font-medium text-lg">{feeling}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Label htmlFor="motivation">¿Hay algo específico que te motiva o te preocupa sobre tu futuro? (Opcional)</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                    placeholder="Comparte lo que quieras... estoy aquí para escucharte 💜"
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
              className="px-6"
            >
              Atrás
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="px-6 text-white"
              style={{ backgroundColor: '#7E4EFF' }}
            >
              {step === 4 ? '¡Empezar mi aventura! 🚀' : 'Siguiente'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
