import { Card, CardContent } from "@/components/ui/card";
import { Truck, Shield, Headphones, Award, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Para compras acima de R$ 199,90 em todo o Brasil"
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "2 anos de garantia em todos os produtos"
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Atendimento por pescadores para pescadores"
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Apenas as melhores marcas do mercado"
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Envio em até 24h após a confirmação"
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Faça parte da nossa comunidade de pescadores"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-ocean-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que Escolher a AquaSport?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais de 15 anos oferecendo a melhor experiência em equipamentos de pesca esportiva
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-hover transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-full group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;