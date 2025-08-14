import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Fish } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Fish className="h-8 w-8 text-ocean" />
            <span className="text-2xl font-bold text-ocean">AquaSport</span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#produtos" className="text-foreground hover:text-ocean transition-colors font-medium">
              Produtos
            </a>
            <a href="#sobre" className="text-foreground hover:text-ocean transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-ocean transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;