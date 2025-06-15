
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Heart, Star, Sparkles } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthComplete: (userData: any) => void;
}

const AuthModal = ({ isOpen, onClose, onAuthComplete }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular autenticación exitosa
    const userData = {
      name: name || "Exploradora",
      email,
      age: age || "16"
    };
    
    onAuthComplete(userData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md border-2 border-pink-200 relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
        >
          <X className="h-4 w-4" />
        </Button>
        
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            {isLogin ? '¡Hola de nuevo, genia!' : '¡Únete a las exploradoras!'}
          </CardTitle>
          <p className="text-gray-600">
            {isLogin 
              ? 'Continúa tu camino hacia conquistar el mundo STEM' 
              : 'Comienza tu aventura épica en ciencia y tecnología'
            }
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ¿Cómo te llamas, genia?
                  </label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    required={!isLogin}
                    className="border-pink-200 focus:border-pink-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ¿Cuántos años tienes?
                  </label>
                  <Input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Tu edad"
                    min="13"
                    max="18"
                    required={!isLogin}
                    className="border-pink-200 focus:border-pink-400"
                  />
                </div>
              </>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="border-pink-200 focus:border-pink-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Tu contraseña súper secreta"
                required
                className="border-pink-200 focus:border-pink-400"
              />
            </div>

            <Button
              type="submit"
              className="w-full text-white font-bold py-3"
              style={{ backgroundColor: '#FF1493' }}
            >
              {isLogin ? '¡Entrar a conquistar! 🚀' : '¡Crear mi cuenta épica! ✨'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? '¿Primera vez aquí?' : '¿Ya tienes cuenta?'}
            </p>
            <Button
              variant="ghost"
              onClick={() => setIsLogin(!isLogin)}
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              {isLogin ? 'Crear cuenta nueva' : 'Iniciar sesión'}
            </Button>
          </div>

          {!isLogin && (
            <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-pink-500" />
                <span className="text-sm font-medium text-pink-800">Espacio 100% seguro</span>
              </div>
              <p className="text-xs text-pink-600">
                Tu privacidad es súper importante. Solo usamos tu info para personalizar tu experiencia.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;
