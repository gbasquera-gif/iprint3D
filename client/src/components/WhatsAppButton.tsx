import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = '5549991551724';
  const message = 'Olá! Gostaria de solicitar um orçamento para impressão 3D.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-40 group"
      >
        {/* Background pulse animation */}
        <div className="absolute inset-0 bg-accent rounded-full animate-pulse opacity-20 group-hover:opacity-30 transition-opacity" />
        
        {/* Main button */}
        <div className="relative w-14 h-14 bg-accent hover:bg-accent/90 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer transform group-hover:scale-110">
          <MessageCircle size={28} className="text-accent-foreground" />
        </div>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-3 bg-primary text-primary-foreground px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg animate-fade-in">
            Fale conosco no WhatsApp
            <div className="absolute top-full right-2 w-2 h-2 bg-primary transform rotate-45" />
          </div>
        )}
      </a>

      {/* Floating animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

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

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
