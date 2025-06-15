
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, ExternalLink, Calendar, MapPin } from "lucide-react";

const EventsOpportunitiesSection = () => {
  const opportunities = [
    {
      title: "Beca Google para Exploradoras STEM",
      type: "Beca",
      deadline: "15 Dic 2024",
      amount: "$5,000 USD",
      description: "Beca completa para chicas destacadas en tecnología",
      icon: "💰",
      link: "#",
      country: "Internacional"
    },
    {
      title: "Hackathon Chicas Tech México",
      type: "Evento",
      deadline: "20 Nov 2024",
      amount: "Gratis",
      description: "48 horas creando soluciones tecnológicas para problemas sociales",
      icon: "💻",
      link: "#",
      country: "México"
    },
    {
      title: "Mentoría con Científicas de NASA",
      type: "Mentoría",
      deadline: "30 Nov 2024",
      amount: "Gratis",
      description: "Programa de 6 meses con científicas de la NASA",
      icon: "🚀",
      link: "#",
      country: "Estados Unidos"
    },
    {
      title: "Taller de Robótica MIT",
      type: "Taller",
      deadline: "10 Dic 2024",
      amount: "$200 USD",
      description: "Taller intensivo de robótica en el MIT",
      icon: "🤖",
      link: "#",
      country: "Estados Unidos"
    }
  ];

  const opportunityTestimonials = [
    {
      name: "Valentina S.",
      avatar: "👩‍💼",
      opportunity: "Beca Google 2023",
      testimonial: "¡He encontrado esta beca increíble! Gracias a la comunidad por compartir. Ya apliqué y estoy súper emocionada 💖"
    },
    {
      name: "Isabella M.",
      avatar: "👩‍🔬",
      opportunity: "Mentoría NASA",
      testimonial: "La mentoría cambió mi vida. Mi mentora me ayudó a entrar al programa de ciencias espaciales de mi universidad"
    }
  ];

  const events = [
    {
      title: "Hackathon Chicas Tech",
      date: "15 Oct",
      participants: "125 inscritas",
      color: "bg-pink-500"
    },
    {
      title: "Mentoring con Google",
      date: "22 Oct", 
      participants: "45 plazas",
      color: "bg-purple-500"
    },
    {
      title: "Workshop Arduino",
      date: "28 Oct",
      participants: "30 exploradoras",
      color: "bg-teal-500"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Opportunities Section */}
      <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-teal-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-purple-500" />
            Oportunidades Épicas para Ti 🚀
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{opportunity.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-sm">{opportunity.title}</CardTitle>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {opportunity.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-green-200 text-green-600">
                          {opportunity.country}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 mb-3">{opportunity.description}</p>
                  <div className="flex justify-between items-center text-xs mb-3">
                    <span className="text-gray-500">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {opportunity.deadline}
                    </span>
                    <span className="font-bold text-purple-600">{opportunity.amount}</span>
                  </div>
                  <Button size="sm" className="w-full text-xs" style={{ backgroundColor: '#8B5CF6' }}>
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Ver detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 text-sm">Lo que dicen las exploradoras:</h4>
            {opportunityTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-3 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{testimonial.avatar}</span>
                  <div>
                    <span className="font-semibold text-xs text-gray-800">{testimonial.name}</span>
                    <span className="text-xs text-gray-500 ml-2">{testimonial.opportunity}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card className="border-pink-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5 text-purple-500" />
            Próximos Eventos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {events.map((event, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${event.color}`} />
                <div className="flex-1">
                  <div className="font-semibold text-sm text-gray-800">{event.title}</div>
                  <div className="text-xs text-gray-500">{event.date} • {event.participants}</div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default EventsOpportunitiesSection;
