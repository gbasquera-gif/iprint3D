import { ArrowRight, Heart, Star, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const phoneNumber = '5549999592489';
  const message = 'Olá! Gostaria de solicitar um orçamento para escultura 3D do meu pet.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const diferenciais = [
    {
      icon: Star,
      title: 'Resina 16K Ultra HD',
      description: 'Tecnologia Saturn 4 com resolução 16K captura cada pelo, expressão e detalhe único do seu pet com fidelidade impressionante.'
    },
    {
      icon: Heart,
      title: 'Feito com Amor',
      description: 'Cada peça é produzida com cuidado e dedicação, respeitando a memória e o vínculo especial entre você e seu pet.'
    },
    {
      icon: Package,
      title: 'Embalagem Premium',
      description: 'Sua escultura chega protegida em embalagem especial, pronta para ser exibida ou presenteada com muito carinho.'
    }
  ];

  const produtos = [
    {
      title: 'Escultura Personalizada',
      image: '/manus-storage/iprint-portfolio-1_2f84f53c.jpg',
      category: 'Mais Popular',
      description: 'Réplica fiel do seu pet em resina de alta definição'
    },
    {
      title: 'Urna Memorial Premium',
      image: '/manus-storage/iprint-portfolio-2_e9978ab7.jpg',
      category: 'Memorial',
      description: 'Urna personalizada para guardar com amor e dignidade'
    }
  ];

  const numeros = [
    { valor: '16K', label: 'Resolução em Resina' },
    { valor: '100%', label: 'Personalizado' },
    { valor: 'BR', label: 'Envio para todo Brasil' },
  ];

  const passos = [
    { num: '01', title: 'Envie a foto', desc: 'Mande fotos do seu pet pelo WhatsApp — quanto mais detalhadas, melhor o resultado.' },
    { num: '02', title: 'Aprovação', desc: 'Enviamos o modelo 3D para sua aprovação antes de iniciar a impressão.' },
    { num: '03', title: 'Impressão 16K', desc: 'Produzimos sua peça com resina de alta definição na Saturn 4.' },
    { num: '04', title: 'Entrega', desc: 'Enviamos para todo o Brasil em embalagem premium protegida.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-white to-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-sm font-bold text-accent uppercase tracking-widest">
                Cada detalhe, uma memória.
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Eternize seu pet para <span className="text-accent">sempre</span>
              </h1>
              <p className="text-base text-foreground/80 leading-relaxed max-w-lg">
                Esculturas e urnas personalizadas em resina 16K com fidelidade impressionante.
                Cada pelo, cada expressão, cada detalhe único do seu companheiro — preservado para sempre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8 flex items-center gap-2 transition-all hover:shadow-lg">
                    Solicitar Orçamento
                    <ArrowRight size={18} />
                  </Button>
                </a>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8 font-semibold">
                  Ver Portfólio
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-border">
                {numeros.map((n, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold text-accent">{n.valor}</p>
                    <p className="text-sm text-foreground/70">{n.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-delayed">
              <img
                src="/manus-storage/iprint-hero-bg_3b3351a7.jpg"
                alt="Escultura 3D de Pet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Por que escolher a <span className="text-accent">iPrint 3D</span>?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Somos pioneiros em esculturas e urnas personalizadas de pets no Oeste de Santa Catarina,
              com tecnologia de ponta e muito carinho em cada peça.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diferenciais.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group p-8 rounded-xl border border-border bg-white hover:shadow-lg hover:border-accent transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <Icon size={28} className="text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="portfolio" className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos <span className="text-accent">Produtos</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Cada peça é única, produzida com tecnologia 16K e acabamento premium.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {produtos.map((produto, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={produto.image}
                  alt={produto.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-accent text-sm font-semibold mb-2">{produto.category}</p>
                  <h3 className="text-white text-xl font-bold">{produto.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{produto.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Como <span className="text-accent">funciona</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {passos.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Eternize a memória do seu pet hoje
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Entre em contato pelo WhatsApp e receba um orçamento personalizado. Enviamos para todo o Brasil.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8 flex items-center gap-2 mx-auto transition-all hover:shadow-lg">
              Solicitar Orçamento pelo WhatsApp
              <ArrowRight size={18} />
            </Button>
          </a>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDelayed {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fadeIn 0.6s ease-out; }
        .animate-fade-in-delayed { animation: fadeInDelayed 0.8s ease-out 0.2s both; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in, .animate-fade-in-delayed { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}