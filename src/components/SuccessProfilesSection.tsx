
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Sparkles, Heart, Rocket } from "lucide-react";
import ProfileCard from "./ProfileCard";
import SimilarProfilesModal from "./SimilarProfilesModal";

interface Profile {
  name: string;
  field: string;
  country: string;
  birthYear: number;
  image: string;
  achievements: string[];
  biography: string;
  impact: string;
  quote: string;
  backgroundColor: string;
  badgeColor: string;
  tags: string[];
}

const SuccessProfilesSection = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [showSimilarModal, setShowSimilarModal] = useState(false);

  const profiles: Profile[] = [
    {
      name: "Marie Curie",
      field: "Física y Química",
      country: "Polonia/Francia",
      birthYear: 1867,
      image: "👩‍🔬",
      achievements: [
        "Primera mujer en ganar un Premio Nobel",
        "Única persona en ganar Nobel en dos ciencias diferentes",
        "Descubrió los elementos Radio y Polonio",
        "Pionera en investigación sobre radioactividad"
      ],
      biography: "Marie Curie rompió todas las barreras de su época. En un mundo donde las mujeres no podían ni siquiera estudiar en universidades, ella se convirtió en la científica más importante de su generación. Su determinación y pasión por la ciencia la llevaron a hacer descubrimientos que cambiaron el mundo para siempre.",
      impact: "Sus investigaciones sobre radioactividad salvaron millones de vidas y abrieron el camino para tratamientos contra el cáncer. Además, inspiró a generaciones de mujeres a seguir carreras científicas.",
      quote: "No hay nada que temer en la vida, solo hay que entender. Ahora es el momento de entender más, para temer menos.",
      backgroundColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      badgeColor: "bg-blue-500",
      tags: ["investigación", "medicina", "física", "química", "premio-nobel", "pionera"]
    },
    {
      name: "Katherine Johnson",
      field: "Matemáticas y Ciencias Espaciales",
      country: "Estados Unidos",
      birthYear: 1918,
      image: "👩‍🚀",
      achievements: [
        "Calculó las trayectorias del programa espacial de la NASA",
        "Sus cálculos fueron cruciales para el Apollo 11",
        "Recibió la Medalla Presidencial de la Libertad",
        "Inspiró la película 'Talentos Ocultos'"
      ],
      biography: "Katherine Johnson demostró que las matemáticas no tienen género ni color. A pesar de enfrentar discriminación racial y de género, su brillantez matemática fue tan extraordinaria que la NASA dependía de sus cálculos para misiones espaciales críticas. Los astronautas confiaban más en sus números que en las computadoras.",
      impact: "Sus cálculos precisos hicieron posible que los humanos llegaran a la luna. Abrió puertas para mujeres y personas de color en STEM, demostrando que el talento no conoce barreras.",
      quote: "Me gustaban los números y los números me gustaban a mí. Todo sumaba. Las matemáticas me hicieron libre.",
      backgroundColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      badgeColor: "bg-purple-500",
      tags: ["matemáticas", "espacio", "nasa", "astronáutica", "cálculos", "pionera"]
    },
    {
      name: "Hedy Lamarr",
      field: "Ingeniería de Telecomunicaciones",
      country: "Austria/Estados Unidos",
      birthYear: 1914,
      image: "👩‍💻",
      achievements: [
        "Inventó la tecnología de espectro ensanchado",
        "Sus patentes son base del WiFi y Bluetooth",
        "Actriz de Hollywood e inventora brillante",
        "Pionera en sistemas de comunicación segura"
      ],
      biography: "Hedy Lamarr era conocida como 'la mujer más bella del mundo' en Hollywood, pero su verdadero genio estaba en la ingeniería. Durante el día filmaba películas, y por las noches inventaba tecnologías que cambiarían el mundo. Demostró que la belleza y la inteligencia no son excluyentes.",
      impact: "Su tecnología de salto de frecuencia es la base del WiFi, Bluetooth y GPS que usamos hoy. Sin ella, no tendríamos smartphones ni internet inalámbrico.",
      quote: "Cualquier chica puede ser glamorosa. Todo lo que tienes que hacer es quedarte quieta y parecer estúpida. Pero yo prefería usar mi cerebro.",
      backgroundColor: "bg-gradient-to-br from-pink-50 to-yellow-50",
      badgeColor: "bg-pink-500",
      tags: ["tecnología", "ingeniería", "telecomunicaciones", "inventora", "wifi", "bluetooth"]
    },
    {
      name: "Reshma Saujani",
      field: "Tecnología y Educación",
      country: "Estados Unidos",
      birthYear: 1975,
      image: "👩‍💼",
      achievements: [
        "Fundadora de Girls Who Code",
        "Ha inspirado a 450,000+ chicas en programación",
        "Autora bestseller del New York Times",
        "Defensora de la equidad de género en tech"
      ],
      biography: "Reshma Saujani vio que solo el 20% de los programadores eran mujeres y decidió cambiar eso. Fundó Girls Who Code cuando se dio cuenta de que el problema no era que las chicas no pudieran programar, sino que nadie les había mostrado que podían hacerlo. Su misión es cerrar la brecha de género en tecnología.",
      impact: "Ha entrenado a casi medio millón de chicas en programación y ha cambiado la conversación sobre mujeres en tecnología. Sus egresadas trabajan en Google, Microsoft, Tesla y muchas más.",
      quote: "Enseñemos a nuestras chicas a ser valientes, no perfectas. La perfección es el enemigo de la revolución.",
      backgroundColor: "bg-gradient-to-br from-teal-50 to-green-50",
      badgeColor: "bg-teal-500",
      tags: ["programación", "educación", "tecnología", "emprendimiento", "coding", "girls-who-code"]
    },
    {
      name: "Dr. Mae Jemison",
      field: "Medicina y Astronáutica",
      country: "Estados Unidos",
      birthYear: 1956,
      image: "👩‍⚕️",
      achievements: [
        "Primera mujer afroamericana astronauta",
        "Médica, ingeniera y bailarina",
        "Fundadora de múltiples empresas tech",
        "Defensora de la ciencia para todos"
      ],
      biography: "Mae Jemison demostró que puedes ser doctora, astronauta, bailarina e ingeniera al mismo tiempo. Nunca dejó que nadie limitara sus sueños. Cuando era niña, veía Star Trek y se preguntaba por qué no había mujeres como ella en el espacio. Decidió ser la primera.",
      impact: "Rompió barreras raciales y de género en la NASA. Ahora dedica su vida a inspirar a niñas de todas las etnias a seguir carreras STEM sin límites.",
      quote: "No tengas miedo de alcanzar las estrellas. Lo único que necesitas es creer en ti misma y trabajar duro.",
      backgroundColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      badgeColor: "bg-indigo-500",
      tags: ["medicina", "espacio", "astronáutica", "nasa", "multidisciplinaria", "pionera"]
    },
    {
      name: "Jennifer Doudna",
      field: "Bioquímica y Genética",
      country: "Estados Unidos",
      birthYear: 1964,
      image: "🧬",
      achievements: [
        "Co-inventora de la tecnología CRISPR",
        "Premio Nobel de Química 2020",
        "Revolucionó la edición genética",
        "Lidera la investigación contra enfermedades genéticas"
      ],
      biography: "Jennifer Doudna desarrolló una herramienta que puede 'editar' el ADN como si fuera un documento de Word. Su tecnología CRISPR está curando enfermedades que antes eran incurables y puede ayudar a alimentar al mundo. Demuestra que la ciencia puede ser la solución a los problemas más grandes de la humanidad.",
      impact: "CRISPR está siendo usado para curar la anemia falciforme, desarrollar mejores cultivos y potencialmente curar el cáncer. Su trabajo está salvando vidas en todo el mundo.",
      quote: "La ciencia no es solo sobre descubrir cómo funciona el mundo, sino sobre usar ese conocimiento para hacerlo mejor.",
      backgroundColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      badgeColor: "bg-green-500",
      tags: ["bioquímica", "genética", "crispr", "medicina", "investigación", "premio-nobel"]
    }
  ];

  const handleViewSimilar = (profile: Profile) => {
    setSelectedProfile(profile);
    setShowSimilarModal(true);
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-8 w-8 text-yellow-500" />
              <Sparkles className="h-8 w-8 text-pink-500" />
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mujeres que Cambiaron el Mundo 🌟
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Estas mujeres extraordinarias rompieron barreras, desafiaron estereotipos y 
              demostraron que no hay límites para lo que una chica determinada puede lograr en STEM.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-pink-600">
                <Heart className="h-4 w-4" />
                <span className="font-semibold">Todas empezaron como tú</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <Rocket className="h-4 w-4" />
                <span className="font-semibold">Todas cambiaron el mundo</span>
              </div>
            </div>
          </div>

          {/* Inspiration Message */}
          <Card className="mb-12 bg-gradient-to-r from-pink-100 via-purple-100 to-teal-100 border-2 border-pink-200">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-gray-800 flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-pink-500" />
                Tu historia puede ser la próxima ✨
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-700 text-base leading-relaxed">
                Cada una de estas mujeres increíbles enfrentó obstáculos, dudas y desafíos. 
                Lo que las hizo especiales no fue que fueran perfectas, sino que fueron <strong>valientes</strong>, 
                <strong> persistentes</strong> y nunca dejaron que nadie les dijera que no podían hacerlo.
                <br />
                <span className="text-pink-600 font-bold mt-2 block">
                  Tú tienes ese mismo poder dentro de ti. ¡Es hora de descubrirlo!
                </span>
              </CardDescription>
            </CardContent>
          </Card>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <ProfileCard 
                key={index} 
                {...profile} 
                onViewSimilar={() => handleViewSimilar(profile)}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-pink-500 to-purple-600 border-none text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  ¿Lista para escribir tu propia historia de éxito? 💫
                </h3>
                <p className="text-pink-100 mb-6">
                  Cada gran científica, ingeniera o matemática comenzó con un solo paso. 
                  Tu momento de brillar es AHORA.
                </p>
                <Button 
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  ¡Comenzar mi aventura STEM! 🚀
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Similar Profiles Modal */}
      <SimilarProfilesModal
        isOpen={showSimilarModal}
        onClose={() => setShowSimilarModal(false)}
        selectedProfile={selectedProfile}
        allProfiles={profiles}
      />
    </>
  );
};

export default SuccessProfilesSection;
