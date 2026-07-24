import { ArrowRight, Lightbulb, Layers, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const servicos = [
    {
      icon: Layers,
      title: 'Impressão 3D Profissional',
      description: 'Tecnologia de ponta para criar protótipos e produtos com precisão milimétrica.'
    },
    {
      icon: Lightbulb,
      title: 'Design & Prototipagem',
      description: 'Transformamos suas ideias em modelos 3D tangíveis para validação rápida.'
    },
    {
      icon: CheckCircle,
      title: 'Qualidade Garantida',
      description: 'Cada peça passa por rigoroso controle de qualidade antes da entrega.'
    }
  ];

  const valores = [
    {
      icon: '💡',
      title: 'Inovação',
      description: 'Tecnologia que transforma ideias em realidade'
    },
    {
      icon: '🎯',
      title: 'Precisão',
      description: 'Detalhes que fazem a diferença em cada camada'
    },
    {
      icon: '✨',
      title: 'Qualidade',
      description: 'Compromisso com a excelência em todo processo'
    },
    {
      icon: '🤝',
      title: 'Confiança',
      description: 'Transparência e segurança em cada projeto'
    },
    {
      icon: '♿',
      title: 'Acessibilidade',
      description: 'Impressão 3D para todos os tipos de ideias'
    }
  ];

  const portfolio = [
    {
      title: 'Protótipo Mecânico',
      image: '/manus-storage/iprint-portfolio-1_2f84f53c.jpg',
      category: 'Engenharia'
    },
    {
      title: 'Modelo Arquitetônico',
      image: '/manus-storage/iprint-portfolio-2_e9978ab7.jpg',
      category: 'Arquitetura'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-white to-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Suas ideias ganham <span className="text-accent">forma</span>
                </h1>
                <p className="text-lg text-secondary font-medium">
                  Impressão 3D com precisão, qualidade e inovação
                </p>
              </div>
              
              <p className="text-base text-foreground/80 leading-relaxed max-w-lg">
                Transformamos conceitos em produtos reais. Com tecnologia de ponta e expertise em impressão 3D, criamos soluções que impulsionam seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8 flex items-center gap-2 transition-all hover:shadow-lg">
                  Começar Agora
                  <ArrowRight size={18} />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8 font-semibold"
                >
                  Conhecer Mais
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-bold text-accent">500+</p>
                  <p className="text-sm text-foreground/70">Projetos Realizados</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">98%</p>
                  <p className="text-sm text-foreground/70">Clientes Satisfeitos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">10+</p>
                  <p className="text-sm text-foreground/70">Anos de Experiência</p>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-delayed">
              <img 
                src="/manus-storage/iprint-hero-bg_3b3351a7.jpg" 
                alt="3D Printing Technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Conceito Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nosso <span className="text-accent">Conceito</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Combinamos tecnologia avançada com expertise para criar soluções que transformam ideias em realidade tangível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicos.map((servico, idx) => {
              const Icon = servico.icon;
              return (
                <div 
                  key={idx}
                  className="group p-8 rounded-xl border border-border bg-white hover:shadow-lg hover:border-accent transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <Icon size={28} className="text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{servico.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{servico.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfólio Section */}
      <section id="portfolio" className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nosso <span className="text-accent">Portfólio</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Projetos que demonstram nossa capacidade de transformar ideias em realidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((projeto, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img 
                  src={projeto.image} 
                  alt={projeto.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-accent text-sm font-semibold mb-2">{projeto.category}</p>
                  <h3 className="text-white text-xl font-bold">{projeto.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8">
              Ver Mais Projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section id="valores" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos <span className="text-accent">Valores</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e projeto que realizamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {valores.map((valor, idx) => (
              <div 
                key={idx}
                className="text-center p-6 rounded-lg hover:bg-muted transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{valor.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{valor.title}</h3>
                <p className="text-sm text-foreground/70">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Entre em contato conosco e descubra como a impressão 3D pode impulsionar seu negócio.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8 flex items-center gap-2 mx-auto transition-all hover:shadow-lg">
            Solicitar Orçamento
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>

      <Footer />

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDelayed {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fadeInDelayed 0.8s ease-out 0.2s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-fade-in-delayed {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
