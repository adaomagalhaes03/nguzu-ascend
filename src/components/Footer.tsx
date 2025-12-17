import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo-nguzu.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="NGUZU Consultoria" className="h-14 w-auto rounded-lg" />
              <div>
                <span className="font-heading font-bold text-xl text-foreground">NGUZU</span>
                <span className="block text-sm text-primary">CONSULTORIA</span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Força, Crescimento & Inovação Contínua. Impulsionamos o crescimento sustentável do seu negócio com soluções integradas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
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
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                'Consultoria Empresarial',
                'Contabilidade & Fiscalidade',
                'Gestão Organizacional',
                'Planeamento Financeiro',
                'Formação Profissional',
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group cursor-pointer">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Centralidade do Kilamba, Luanda, Angola</span>
              </li>
              <li>
                <a
                  href="tel:+244945408137"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  +244 945 408 137
                </a>
              </li>
              <li>
                <a
                  href="mailto:corporationelevation@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  corporationelevation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} NGUZU Consultoria. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
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
