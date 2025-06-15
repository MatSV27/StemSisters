
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, MapPin } from "lucide-react";

interface ProfileCardProps {
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
  tags?: string[];
  onViewSimilar?: () => void;
}

const ProfileCard = ({ 
  name, 
  field, 
  country, 
  birthYear, 
  image, 
  achievements, 
  biography, 
  impact, 
  quote, 
  backgroundColor,
  badgeColor,
  tags = [],
  onViewSimilar
}: ProfileCardProps) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <Card className={`${backgroundColor} border-2 hover:shadow-xl transition-all hover:scale-105 h-full flex flex-col`}>
      <CardHeader className="text-center pb-4">
        <div className="text-6xl mb-3">{image}</div>
        <CardTitle className="text-xl text-gray-800 mb-2">{name}</CardTitle>
        <div className="space-y-2">
          <Badge 
            className={`${badgeColor} text-white font-bold px-3 py-1`}
          >
            {field}
          </Badge>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {country}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {age} años
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 flex-1 flex flex-col">
        <div className="flex-1">
          <CardDescription className="text-gray-700 text-sm leading-relaxed mb-4">
            {biography}
          </CardDescription>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 text-sm mb-2 flex items-center gap-1">
              <Award className="h-4 w-4 text-yellow-500" />
              Logros destacados:
            </h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-xs text-gray-600 flex items-center gap-2">
                  <span className="w-1 h-1 bg-pink-500 rounded-full"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-4">
            <div className="bg-white/70 p-3 rounded-lg border border-pink-200">
              <p className="text-xs text-gray-600 italic text-center">
                "{quote}"
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-3 rounded-lg">
            <h4 className="font-semibold text-sm text-gray-800 mb-1">Su impacto:</h4>
            <p className="text-xs text-gray-700">{impact}</p>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-pink-200 space-y-2">
          {onViewSimilar && (
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-purple-300 text-purple-600 hover:bg-purple-50 text-xs"
              onClick={onViewSimilar}
            >
              <Award className="h-3 w-3 mr-1" />
              Ver perfiles similares 🌟
            </Button>
          )}
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-pink-300 text-pink-600 hover:bg-pink-50 text-xs"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Conocer más sobre {name.split(' ')[0]}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
