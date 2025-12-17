import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo-nguzu.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="NGUZU Consultoria" className="h-10 w-auto rounded-lg" />
              <div>
                <span className="font-heading font-bold text-base text-foreground">NGUZU</span>
                <span className="block text-xs text-primary">CONSULTORIA</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Força, Crescimento & Inovação Contínua. Impulsionamos o crescimento sustentável do seu negócio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Início', path: '/' },
                { name: 'Sobre Nós', path: '/sobre' },
                { name: 'Serviços', path: '/#servicos' },
                { name: 'Equipa', path: '/equipa' },
                { name: 'Contactos', path: '/contactos' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1.5 group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2">
              {[
                'Consultoria Empresarial',
                'Contabilidade & Fiscalidade',
                'Gestão Organizacional',
                'Planeamento Financeiro',
                'Formação Profissional',
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1.5 group cursor-pointer text-sm">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Centralidade do Kilamba, Luanda, Angola</span>
              </li>
              <li>
                <a
                  href="tel:+244945408137"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  +244 945 408 137
                </a>
              </li>
              <li>
                <a
                  href="mailto:corporationelevation@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  corporationelevation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-muted-foreground text-xs text-center md:text-left">
              © {currentYear} NGUZU Consultoria. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="hover:text-primary transition-colors cursor-pointer">Política de Privacidade</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Termos de Uso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;