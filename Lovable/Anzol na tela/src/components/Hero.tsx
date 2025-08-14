import { Button } from "@/components/ui/button";
import { ArrowDown, Target, Award } from "lucide-react";
import heroImage from "@/assets/hero-fishing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/90 via-ocean/70 to-aqua/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Award className="h-8 w-8 text-aqua" />
            <span className="text-aqua font-medium tracking-wider uppercase text-sm">
              Equipamentos Premium
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Conquiste os 
            <span className="text-aqua block">Melhores Pesques</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Equipamentos de pesca esportiva de alta qualidade para pescadores profissionais e iniciantes. 
            Transforme cada pescaria em uma experiência inesquecível.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Target className="mr-2 h-5 w-5" />
              Ver Produtos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-ocean">
              Fale Conosco
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-aqua mb-2">5000+</div>
              <div className="text-white/80">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-aqua mb-2">15+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-aqua mb-2">500+</div>
              <div className="text-white/80">Produtos Disponíveis</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;