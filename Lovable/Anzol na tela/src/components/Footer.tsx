import { Fish, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Fish className="h-8 w-8 text-aqua" />
              <span className="text-2xl font-bold">AquaSport</span>
            </div>
            <p className="text-white/80 mb-4">
              Sua loja especializada em equipamentos de pesca esportiva. 
              Qualidade e tradição há mais de 15 anos.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-white/60 hover:text-aqua cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-white/60 hover:text-aqua cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-white/60 hover:text-aqua cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-aqua">Produtos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Varas de Pesca</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Molinetes</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Iscas Artificiais</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Acessórios</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Equipamentos</a></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-aqua">Atendimento</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Política de Troca</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Garantia</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Frete e Entrega</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Formas de Pagamento</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-aqua">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-aqua" />
                <span className="text-white/80">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-aqua" />
                <span className="text-white/80">contato@aquasport.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-aqua mt-1" />
                <span className="text-white/80">
                  Rua das Pescarias, 123<br />
                  Centro - São Paulo, SP<br />
                  CEP: 01234-567
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 AquaSport. Todos os direitos reservados. | CNPJ: 12.345.678/0001-90
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;