
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Heart, Sparkles } from "lucide-react";
import ProfileCard from "./ProfileCard";

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

interface SimilarProfilesModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProfile: Profile | null;
  allProfiles: Profile[];
}

const SimilarProfilesModal = ({ isOpen, onClose, selectedProfile, allProfiles }: SimilarProfilesModalProps) => {
  if (!isOpen || !selectedProfile) return null;

  // Función para encontrar perfiles similares basados en tags
  const getSimilarProfiles = () => {
    return allProfiles
      .filter(profile => profile.name !== selectedProfile.name)
      .map(profile => {
        const commonTags = profile.tags.filter(tag => selectedProfile.tags.includes(tag));
        return { profile, similarity: commonTags.length };
      })
      .filter(item => item.similarity > 0)
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 3)
      .map(item => item.profile);
  };

  const similarProfiles = getSimilarProfiles();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto border-2 border-pink-200 relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 z-10"
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
            Mujeres como {selectedProfile.name.split(' ')[0]} ✨
          </CardTitle>
          <p className="text-gray-600">
            Descubre otras pioneras que comparten caminos similares en STEM
          </p>
        </CardHeader>

        <CardContent>
          {similarProfiles.length > 0 ? (
            <>
              <div className="mb-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-4 w-4 text-pink-500" />
                  <span className="font-semibold text-pink-800">¿Por qué son similares?</span>
                </div>
                <p className="text-sm text-pink-700">
                  Estas increíbles mujeres comparten campos de estudio, desafíos superados o impactos similares con {selectedProfile.name.split(' ')[0]}. 
                  ¡Todas demostraron que no hay límites para lo que puedes lograr!
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProfiles.map((profile, index) => (
                  <ProfileCard key={index} {...profile} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                ¡{selectedProfile.name.split(' ')[0]} es única!
              </h3>
              <p className="text-gray-600">
                Su camino es tan especial que no encontramos perfiles exactamente similares, 
                pero eso la hace aún más inspiradora.
              </p>
            </div>
          )}

          <div className="mt-8 text-center">
            <div className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-800 mb-2">💫 Tu momento de brillar</h4>
              <p className="text-sm text-teal-700">
                Cada una de estas mujeres empezó donde tú estás ahora. Con curiosidad, determinación y ganas de cambiar el mundo. 
                <span className="font-bold"> ¡Tu historia puede ser la próxima en esta lista!</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimilarProfilesModal;
