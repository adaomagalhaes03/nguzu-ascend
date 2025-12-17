import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Pacote Básico',
    description: 'Ideal para micro e pequenas empresas',
    price: '40.000 - 80.000',
    currency: 'Kz',
    period: '/mês',
    features: [
      'Consultoria essencial',
      'Contabilidade básica',
      'Obrigações fiscais',
      'Relatórios mensais simples',
      'Suporte por email',
    ],
    highlighted: false,
  },
  {
    name: 'Pacote Premium',
    description: 'Ideal para médias empresas',
    price: '250.000 - 450.000',
    currency: 'Kz',
    period: '/mês',
    features: [
      'Consultoria avançada',
      'Gestão financeira total',
      'Auditoria interna',
      'Planeamento estratégico completo',
      'Suporte prioritário 24/7',
      'Consultoria presencial mensal',
      'Formação de equipas incluída',
    ],
    highlighted: true,
  },
  {
    name: 'Pacote Standard',
    description: 'Ideal para empresas em crescimento',
    price: '120.000 - 200.000',
    currency: 'Kz',
    period: '/mês',
    features: [
      'Consultoria estratégica',
      'Contabilidade completa',
      'Planeamento fiscal',
      'Relatórios personalizados',
      'Suporte contínuo',
      'Análise financeira trimestral',
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-20" />
      <div className="absolute top-10 right-10 dot-pattern w-24 h-24 opacity-15" />
      <div className="absolute bottom-10 left-10 dot-pattern w-20 h-20 opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="section-subtitle">Pacotes de Serviços</span>
          <h2 className="section-title text-foreground">
            Planos Adaptados às Suas <span className="text-primary">Necessidades</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Escolha o pacote que melhor se adequa à dimensão e aos objetivos da sua empresa.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={itemVariants}
              className={`relative ${pkg.highlighted ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 bg-gradient-primary px-3 py-1 rounded-full">
                    <Star className="w-3 h-3 text-primary-foreground fill-primary-foreground" />
                    <span className="text-xs font-semibold text-primary-foreground">
                      Mais Popular
                    </span>
                  </div>
                </div>
              )}

              <div
                className={`h-full flex flex-col ${
                  pkg.highlighted ? 'pricing-card-premium' : 'pricing-card'
                }`}
              >
                {/* Header */}
                <div className="text-center mb-4">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-xs">{pkg.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-5 pb-5 border-b border-border/50">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl md:text-3xl font-bold text-foreground font-heading">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{pkg.currency}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{pkg.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-5 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contactos"
                  className={`w-full py-2.5 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-1.5 group text-sm ${
                    pkg.highlighted
                      ? 'btn-hero-primary'
                      : 'border border-border hover:border-primary hover:bg-primary/5 text-foreground'
                  }`}
                >
                  Solicitar Proposta
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-muted-foreground mt-8 text-xs"
        >
          * Valores podem variar conforme a complexidade e especificidades de cada empresa.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;