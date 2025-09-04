import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import logoBranca from "@/assets/logo-branca.png";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5518997852512?text=Olá! Gostaria de saber mais sobre os serviços da HME.", "_blank");
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <a href="/" className="flex items-center">
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
                  <div className="font-bold text-lg text-foreground text-white">HME Soluções e Saúde</div>
                  <div className="text-sm text-muted-foreground font-telegraf text-white">
                    Fortalecendo instituições, transformando realidades
                  </div>
                </div>
              </a>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Há mais de 15 anos oferecendo soluções especializadas em gestão pública,
              serviços médicos e apoio ao terceiro setor, sempre com foco na legalidade
              e nas pessoas.
            </p>
            <div className="flex gap-4 items-center">
              <button
                onClick={handleWhatsApp}
                className="whatsapp-button px-4 py-2 rounded-lg text-sm font-medium"
              >
                WhatsApp
              </button>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/hmesolucoesesaude/" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/hmesolucoesesaude" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/channel/UCd-bmLoDXJdI6kjbaPvuTNg" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Menu Rápido</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-gray-300 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-gray-300 hover:text-white transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/duvidas-frequentes" className="text-gray-300 hover:text-white transition-colors">
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/fale-conosco" className="text-gray-300 hover:text-white transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <a href="mailto:solucoes@hmesaude.com.br" className="text-gray-300 hover:text-white transition-colors">
                    solucoes@hmesaude.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <a href="tel:+5518997852512" className="text-gray-300 hover:text-white transition-colors">
                    (18) 99785-2512
                  </a>
                  <div className="text-sm text-gray-400 font-telegraf">
                    Segunda a sexta, das 8h às 18h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <h3 className="font-semibold mb-4">Nossos Endereços</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium">Matriz</div>
                <div className="text-sm text-gray-300">
                  Rua Padre João Goetz, 501<br />
                  Presidente Prudente/SP<br />
                  CEP: 19061-460
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium">Filial Roraima</div>
                <div className="text-sm text-gray-300">
                  Av. Ville Roy, 5618, Sala 15<br />
                  Boa Vista/RR<br />
                  CEP: 69301-000
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium">Filial Rosana</div>
                <div className="text-sm text-gray-300">
                  Rua do Estádio, 619, Quadra 108<br />
                  Bairro Primavera, Rosana/SP<br />
                  CEP: 19274-000
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} HME Soluções e Saúde. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-sm">
              <Link to="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">LGPD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;