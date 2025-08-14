import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vara Shimano Catana 2.10m",
    description: "Vara de pesca versátil para água doce e salgada",
    price: "R$ 299,90",
    originalPrice: "R$ 399,90",
    rating: 4.8,
    reviews: 127,
    image: "🎣",
    badge: "Mais Vendido"
  },
  {
    id: 2,
    name: "Molinete Daiwa BG 4000",
    description: "Molinete robusto com sistema anti-corrosão",
    price: "R$ 549,90",
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image: "⚙️",
    badge: "Premium"
  },
  {
    id: 3,
    name: "Kit Iscas Artificiais Marine Sports",
    description: "15 iscas variadas para diferentes espécies",
    price: "R$ 149,90",
    originalPrice: "R$ 199,90",
    rating: 4.7,
    reviews: 203,
    image: "🐟",
    badge: "Promoção"
  },
  {
    id: 4,
    name: "Caixa de Pesca Organizadora Pro",
    description: "7 compartimentos ajustáveis",
    price: "R$ 89,90",
    originalPrice: null,
    rating: 4.6,
    reviews: 156,
    image: "📦",
    badge: "Novo"
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selecionamos os melhores equipamentos para garantir o sucesso da sua pescaria
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group bg-gradient-card border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{product.image}</div>
                  <Badge 
                    variant={product.badge === "Promoção" ? "destructive" : "secondary"}
                    className="text-xs"
                  >
                    {product.badge}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-ocean transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-ocean">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <Button className="w-full" variant="default">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Adicionar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;