import { Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '5549999592489';
  const message = 'Olá! Gostaria de solicitar um orçamento para escultura 3D do meu pet.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-[#060D1F] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          <div>
            <div className="mb-4">
              <span className="text-2xl font-black text-white italic">iprint</span>
              <span className="text-xs block text-[#D4AF37] font-medium tracking-widest mt-1">impressão 3D</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Cada detalhe, uma memória. Esculturas e urnas personalizadas em resina 16K para eternizar seu melhor amigo.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#D4AF37] text-sm uppercase tracking-widest mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              {['Esculturas', 'Urnas', 'Como Funciona', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-[#D4AF37] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#D4AF37] text-sm uppercase tracking-widest mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/60">
                <Phone size={16} className="text-[#D4AF37]" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                  (49) 99959-2489
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <MapPin size={16} className="text-[#D4AF37]" />
                <span>Chapecó – SC · Envio para todo o Brasil</span>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Instagram size={16} className="text-[#D4AF37]" />
                <a href="https://www.instagram.com/iprint3dchapeco" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                  @iprint3dchapeco
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} iPrint 3D. Todos os direitos reservados.
          </p>
          <p className="text-sm text-[#D4AF37] italic font-medium">
            Cada detalhe, uma memória.
          </p>
        </div>
      </div>
    </footer>
  );
}