
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Heart } from "lucide-react";

interface WelcomeSectionProps {
  onGetStarted: () => void;
}

const WelcomeSection = ({ onGetStarted }: WelcomeSectionProps) => {
  return (
    <section className="py-20 overflow-hidden relative">
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 text-purple-200">
        <Sparkles className="h-8 w-8" />
      </div>
      <div className="absolute top-32 right-20 text-teal-200">
        <Star className="h-6 w-6" />
      </div>
      <div className="absolute bottom-20 left-32 text-pink-200">
        <Heart className="h-10 w-10" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            ¿No sabes qué hacer después del cole?
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              ¡Descubre tu pasión en STEM!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
            Somos tu hermana mayor digital que te ayudará a explorar el increíble mundo de la 
            ciencia, tecnología, ingeniería y matemáticas.
          </p>
          
          <p 
            className="text-2xl md:text-3xl font-bold mb-12 animate-pulse"
            style={{ color: '#FF6B9D' }}
          >
            "Tu futuro brillante empieza con una pequeña curiosidad" ✨
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center md:items-center">
            <Button 
              onClick={onGetStarted}
              size="lg"
              className="text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
              style={{ backgroundColor: '#7E4EFF' }}
            >
              ¡Quiero descubrir mi superpoder! 🦸‍♀️
            </Button>
            
            <p className="text-sm text-gray-500 md:ml-4">
              100% gratis • Sin presión • A tu ritmo
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="font-semibold text-gray-800 mb-2">Chatbot que te entiende</h3>
              <p className="text-gray-600 text-sm">Como hablar con tu hermana mayor favorita</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-800 mb-2">Contenido personalizado</h3>
              <p className="text-gray-600 text-sm">Actividades diseñadas específicamente para ti</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <div className="text-4xl mb-3">👭</div>
              <h3 className="font-semibold text-gray-800 mb-2">Comunidad de apoyo</h3>
              <p className="text-gray-600 text-sm">Conoce chicas con tus mismos intereses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
