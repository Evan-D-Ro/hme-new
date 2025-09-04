import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Serviços", href: "/servicos" },
    { name: "Cursos", href: "/cursos" },
    { name: "Dúvidas Frequentes", href: "/duvidas-frequentes" },
    { name: "Fale Conosco", href: "/fale-conosco" },
  ];

  const isActivePage = (href: string) => location.pathname === href;

  const handleWhatsApp = () => {
    window.open("https://wa.me/5518997852512?text=Olá! Gostaria de saber mais sobre os serviços da HME.", "_blank");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden sm:block">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm font-telegraf">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+5518997852512" className="hover:underline">
                  (18) 99785-2512
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:solucoes@hmesaude.com.br" className="hover:underline">
                  solucoes@hmesaude.com.br
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Segunda a sexta, das 8h às 18h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* Logo sempre visível */}
            <img
              src={logo}
              alt="HME Soluções e Saúde"
              className="h-10 w-auto"
            />

            {/* Separador vertical - somente em telas md+ */}
            <div className="hidden md:block mx-3 h-8 border-l border-gray-300" />

            {/* Texto ao lado da logo - somente em telas md+ */}
            <div className="hidden md:block">
              <div className="font-bold text-lg text-foreground">HME Soluções e Saúde</div>
              <div className="text-sm text-muted-foreground font-telegraf">
                Fortalecendo instituições, transformando realidades
              </div>
            </div>
          </Link>



          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActivePage(item.href)
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button onClick={handleWhatsApp} className="whatsapp-button">
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${isActivePage(item.href) ? "text-primary" : "text-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button onClick={handleWhatsApp} className="whatsapp-button">
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;