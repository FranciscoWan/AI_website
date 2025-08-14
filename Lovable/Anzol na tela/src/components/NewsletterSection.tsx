import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🐟</div>
        <div className="absolute top-20 right-20 text-4xl">🎣</div>
        <div className="absolute bottom-20 left-20 text-5xl">⚓</div>
        <div className="absolute bottom-10 right-10 text-3xl">🌊</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <Gift className="w-16 h-16 text-aqua mx-auto mb-4" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fique por Dentro das Novidades
          </h2>
          
          <p className="text-white/90 text-lg mb-8">
            Receba dicas exclusivas, promoções especiais e novidades do mundo da pesca esportiva. 
            <strong className="text-aqua"> Ganhe 10% de desconto</strong> na sua primeira compra!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="pl-10 bg-white/95 border-white/20 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="aqua" size="lg" className="px-8">
              Inscrever-se
            </Button>
          </div>
          
          <p className="text-white/70 text-sm mt-4">
            Não enviamos spam. Você pode cancelar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;