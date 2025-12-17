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
      'Estratégias personalizadas para impulsionar o crescimento e a competitividade da sua empresa.',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&q=80',
  },
  {
    icon: Calculator,
    title: 'Contabilidade & Fiscalidade',
    description:
      'Gestão contabilística completa e planeamento fiscal para otimizar recursos.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
  {
    icon: Users,
    title: 'Gestão Organizacional',
    description:
      'Estruturação de processos e desenvolvimento de lideranças para máxima eficiência.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
  {
    icon: TrendingUp,
    title: 'Planeamento Financeiro',
    description:
      'Análise financeira e estratégias de investimento para decisões informadas.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    icon: GraduationCap,
    title: 'Formação Profissional',
    description:
      'Programas de capacitação para desenvolver competências técnicas e comportamentais.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section id="servicos" className="py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-glow opacity-40" />
      <div className="absolute bottom-10 left-10 dot-pattern w-32 h-32 opacity-15" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="section-subtitle">Os Nossos Serviços</span>
          <h2 className="section-title text-foreground">
            Soluções Integradas para o Seu <span className="text-primary">Sucesso</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Oferecemos um portfólio completo de serviços especializados para atender todas as
            necessidades da sua empresa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="service-card group cursor-pointer h-48"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="service-card-bg"
              />
              
              {/* Overlay */}
              <div className="service-card-overlay" />

              {/* Content */}
              <div className="relative z-10 p-5 h-full flex flex-col">
                {/* Icon */}
                <div className="icon-container mb-3">
                  <service.icon className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed flex-grow">{service.description}</p>

                {/* Link */}
                <div className="flex items-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  <span>Saber mais</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={itemVariants}
            className="service-card p-5 flex flex-col justify-center items-center text-center h-48 border border-primary/20"
          >
            <div className="service-card-overlay" />
            <div className="relative z-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Solução personalizada?
              </h3>
              <p className="text-muted-foreground text-xs mb-4">
                Descubra como podemos ajudar o seu negócio a crescer.
              </p>
              <a
                href="/contactos"
                className="btn-hero-primary inline-flex items-center gap-1.5 text-xs py-2 px-4"
              >
                Fale Connosco
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;