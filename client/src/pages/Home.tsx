import { lazy, Suspense } from 'react';
import { ArrowRight, Heart, Star, Shield, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LazyOnVisible from '@/components/LazyOnVisible';

const ModelViewer3D = lazy(() => import('@/components/ModelViewer3D'));

export default function Home() {
  const phoneNumber = '5549999592489';
  const message = 'Ola! Gostaria de solicitar um orcamento para escultura 3D do meu pet.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const depoimentos = [
    {
      nome: 'Ana Paula S.',
      cidade: 'Chapeco - SC',
      texto: 'Recebi a escultura do meu golden e chorei de emocao. Cada detalhe do pelo, dos olhos... e exatamente ele. Melhor presente que ja recebi.',
      estrelas: 5,
    },
    {
      nome: 'Carlos M.',
      cidade: 'Florianopolis - SC',
      texto: 'Perdi minha gata ha 3 meses. A escultura da iPrint me deu um conforto que nao esperava. Parece que ela ainda esta aqui.',
      estrelas: 5,
    },
    {
      nome: 'Fernanda L.',
      cidade: 'Sao Paulo - SP',
      texto: 'Qualidade impressionante! A resina 16K captura detalhes que eu nem sabia que existiam. Vale cada centavo.',
      estrelas: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#060D1F]">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3D] to-[#060D1F]" />
        <div className="relative z-10 container text-center px-4 py-32">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-8">
            <Star size={14} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium">Tecnologia Saturn 4 · Resina 16K Ultra HD</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Eternize seu pet<br />
            <span className="text-[#D4AF37]">para sempre</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Esculturas personalizadas em resina 16K com fidelidade impressionante. Cada pelo, cada expressao, cada detalhe unico do seu companheiro preservado para sempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0D1B3D] font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-2xl">
                Solicitar Orcamento
                <ArrowRight size={20} />
              </button>
            </a>
            <a href="#esculturas">
              <button className="flex items-center gap-2 border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] font-semibold px-8 py-4 rounded-full text-lg transition-all">
                Ver Esculturas
                <ChevronRight size={20} />
              </button>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-16 pt-16 border-t border-white/10">
            {[
              { valor: '16K', label: 'Resolucao em Resina' },
              { valor: '100%', label: 'Personalizado' },
              { valor: 'Brasil', label: 'Enviamos para todo' },
            ].map((n, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black text-[#D4AF37]">{n.valor}</p>
                <p className="text-sm text-white/50 mt-1">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="esculturas" className="py-24 bg-[#0D1B3D]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">Nosso Produto Principal</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">Esculturas 3D</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Replicas fieis do seu pet em resina de alta definicao. Cada peca e unica, produzida com a impressora Saturn 4 e acabamento premium.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { img: '/images/portfolio-1.jpg', title: 'Cao de pequeno porte', desc: 'Resina 16K · Tamanho P' },
              { img: '/images/hero.jpg', title: 'Gato persa', desc: 'Resina 16K · Tamanho M' },
              { img: '/images/portfolio-2.jpg', title: 'Golden Retriever', desc: 'Resina 16K · Tamanho G' },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1">{item.desc}</p>
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0D1B3D] font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl">
                Quero minha escultura
              </button>
            </a>
          </div>
        </div>
      </section>

      <div id="visualizar-3d">
        <LazyOnVisible minHeight={720}>
          <Suspense
            fallback={
              <div className="py-24 bg-[#060D1F] flex items-center justify-center" style={{ minHeight: 720 }}>
                <div className="w-10 h-10 border-2 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" />
              </div>
            }
          >
            <ModelViewer3D />
          </Suspense>
        </LazyOnVisible>
      </div>

      <section id="urnas" className="py-24 bg-[#060D1F]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">Memorial</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-6">
                Urnas Memoriais<br />
                <span className="text-[#D4AF37]">Premium</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Para quem perdeu um companheiro, a urna memorial da iPrint e uma forma de guardar com dignidade, amor e beleza a memoria de quem tanto amou.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Produzidas em resina 16K, com personalizacao completa — nome, raca, e detalhes unicos do seu pet.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0D1B3D] font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl">
                  Solicitar Urna Memorial
                  <ArrowRight size={18} />
                </button>
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-3xl blur-xl" />
              <img src="/images/portfolio-2.jpg" alt="Urna Memorial Premium" className="relative rounded-2xl w-full object-cover aspect-[3/5] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-24 bg-[#0D1B3D]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">Simples e rapido</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Como funciona?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Envie a foto', desc: 'Mande fotos do seu pet pelo WhatsApp — quanto mais angulos, melhor o resultado.' },
              { num: '02', title: 'Aprovacao do modelo', desc: 'Enviamos o modelo 3D digital para sua aprovacao antes de imprimir.' },
              { num: '03', title: 'Impressao 16K', desc: 'Produzimos com a Saturn 4 em resina de ultra alta definicao.' },
              { num: '04', title: 'Entrega em casa', desc: 'Enviamos para todo o Brasil em embalagem premium e segura.' },
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-black text-xl mx-auto mb-6 group-hover:bg-[#D4AF37] group-hover:text-[#0D1B3D] transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#060D1F]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white">
              Por que escolher a <span className="text-[#D4AF37]">iPrint 3D</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: 'Resina 16K Ultra HD', desc: 'A impressora Saturn 4 captura detalhes invisiveis a olho nu — pelos, textura da pele, expressao do olhar.' },
              { icon: Heart, title: 'Feito com amor', desc: 'Cada peca e produzida com cuidado e respeito pela memoria do seu companheiro.' },
              { icon: Shield, title: 'Garantia de satisfacao', desc: 'Aprovacao do modelo antes da impressao. Se nao gostar, refazemos sem custo adicional.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-all">
                    <Icon size={24} className="text-[#D4AF37]" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-24 bg-[#0D1B3D]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">Quem ja eternizou</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Depoimentos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((dep, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#060D1F] border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(dep.estrelas)].map((_, j) => (
                    <Star key={j} size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-6 italic">"{dep.texto}"</p>
                <div>
                  <p className="text-white font-bold">{dep.nome}</p>
                  <p className="text-white/40 text-sm">{dep.cidade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-24 bg-[#060D1F]">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">Comece agora</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-6">
              Eternize a memoria<br />do seu pet hoje
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Entre em contato pelo WhatsApp e receba um orcamento personalizado em minutos. Enviamos para todo o Brasil.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0D1B3D] font-bold px-10 py-5 rounded-full text-xl transition-all hover:shadow-2xl mx-auto">
                Falar no WhatsApp
                <ArrowRight size={22} />
              </button>
            </a>
            <p className="text-white/30 text-sm mt-6">
              Chapeco - SC · Envio para todo o Brasil · @iprint3dchapeco
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}