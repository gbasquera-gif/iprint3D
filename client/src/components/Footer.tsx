import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img 
              src="/manus-storage/iprint-logo_437aa7c9.png" 
              alt="iprint" 
              className="h-10 w-10 mb-4"
            />
            <p className="text-sm text-primary-foreground/80">
              Transformando ideias em realidade através da impressão 3D de precisão.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfólio</a></li>
              <li><a href="#valores" className="hover:text-accent transition-colors">Valores</a></li>
              <li><a href="#contato" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>contato@iprint.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-base mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-primary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/70">
            © {currentYear} iprint impressão 3D. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
