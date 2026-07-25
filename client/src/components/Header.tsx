import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumber = '5549999592489';
  const message = 'Ola! Gostaria de solicitar um orcamento para escultura 3D do meu pet.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const navItems = [
    { label: 'Esculturas', href: '#esculturas' },
    { label: 'Urnas', href: '#urnas' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1B3D]/95 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <img src="/manus-storage/iprint-logo_437aa7c9.png" alt="iPrint 3D" className="h-10" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors duration-200">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0D1B3D] font-bold px-6 py-2 rounded-full transition-all">
              <MessageCircle size={16} />
              Solicitar Orcamento
            </button>
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1B3D] border-t border-white/10">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-[#D4AF37] text-[#0D1B3D] font-bold py-3 rounded-full mt-4">
                Solicitar Orcamento
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}