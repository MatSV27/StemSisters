
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Heart } from "lucide-react";

interface WelcomeSectionProps {
  onGetStarted: () => void;
}

const WelcomeSection = ({ onGetStarted }: WelcomeSectionProps) => {
  return (
    <section className="py-20 overflow-hidden relative">
      {/* Elementos decorativos más llamativos */}
      <div className="absolute top-10 left-10 text-purple-300 animate-bounce">
        <Sparkles className="h-10 w-10" />
      </div>
      <div className="absolute top-32 right-20 text-pink-300 animate-pulse">
        <Star className="h-8 w-8" />
      </div>
      <div className="absolute bottom-20 left-32 text-teal-300 animate-bounce">
        <Heart className="h-12 w-12" />
      </div>
      <div className="absolute top-20 right-40 text-yellow-300">
        <Sparkles className="h-6 w-6" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            ¿Cansada de que digan 
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              "eso no es para chicas"?
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed font-medium">
            Descubre cómo <span className="text-pink-500 font-bold">conquistar el mundo</span> creando videojuegos, 
            salvando el planeta o curando enfermedades.
          </p>
          
          <p 
            className="text-2xl md:text-3xl font-bold mb-8 animate-pulse"
            style={{ color: '#FF1493' }}
          >
            ¡TÚ TAMBIÉN PUEDES! 🔥✨
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Somos tu comunidad digital de <span className="font-bold text-purple-600">hermanas digitales</span> que te ayudarán a dominar el increíble mundo de la 
            <span className="font-bold text-purple-600"> Ciencia, Tecnología, Ingeniería y Matemáticas (STEM)</span>.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center md:items-center">
            <Button 
              onClick={onGetStarted}
              size="lg"
              className="text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
              style={{ backgroundColor: '#FF1493' }}
            >
              ¡Empezar con MaYA! 🤖💖
            </Button>
            
            <p className="text-sm text-gray-500 md:ml-4">
              100% gratis • Sin presión • Solo apoyo entre exploradoras
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🤖✨</div>
              <h3 className="font-bold text-gray-800 mb-2">MaYA te entiende</h3>
              <p className="text-gray-600 text-sm">Como tu hermana mayor que siempre está ahí</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-teal-50 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🎯💜</div>
              <h3 className="font-bold text-gray-800 mb-2">Tu camino único</h3>
              <p className="text-gray-600 text-sm">Contenido diseñado para TI, no para otros</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-pink-50 backdrop-blur-sm rounded-2xl p-6 border-2 border-teal-200 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">👭🔥</div>
              <h3 className="font-bold text-gray-800 mb-2">Comunidad de exploradoras genias</h3>
              <p className="text-gray-600 text-sm">Conoce chicas que también van a cambiar el mundo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
