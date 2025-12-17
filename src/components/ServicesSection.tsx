import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Briefcase,
  Calculator,
  Users,
  TrendingUp,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Consultoria Empresarial',
    description:
      'Estratégias personalizadas para impulsionar o crescimento e a competitividade da sua empresa no mercado.',
  },
  {
    icon: Calculator,
    title: 'Contabilidade & Fiscalidade',
    description:
      'Gestão contabilística completa e planeamento fiscal para otimizar recursos e garantir conformidade legal.',
  },
  {
    icon: Users,
    title: 'Gestão Organizacional',
    description:
      'Estruturação de processos, cultura organizacional e desenvolvimento de lideranças para máxima eficiência.',
  },
  {
    icon: TrendingUp,
    title: 'Planeamento Financeiro',
    description:
      'Análise financeira, orçamentação e estratégias de investimento para decisões informadas e rentáveis.',
  },
  {
    icon: GraduationCap,
    title: 'Formação Profissional',
    description:
      'Programas de capacitação e workshops práticos para desenvolver competências técnicas e comportamentais.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-glow opacity-50" />
      <div className="absolute bottom-20 left-10 dot-pattern w-48 h-48 opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-subtitle">Os Nossos Serviços</span>
          <h2 className="section-title text-foreground">
            Soluções Integradas para o Seu <span className="text-primary">Sucesso</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos um portfólio completo de serviços especializados para atender todas as
            necessidades da sua empresa, desde a consultoria estratégica até à formação de equipas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card-elevated p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className="icon-container mb-6">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>

              {/* Link */}
              <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Saber mais</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={itemVariants}
            className="card-elevated p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contacto connosco e descubra como podemos ajudar o seu negócio a crescer.
            </p>
            <a
              href="/contactos"
              className="btn-hero-primary inline-flex items-center gap-2 text-sm py-3 px-6"
            >
              Fale Connosco
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
