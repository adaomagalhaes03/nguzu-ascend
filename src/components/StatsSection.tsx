import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Briefcase, GraduationCap, Award } from 'lucide-react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ value, suffix = '', duration = 2 }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: 'easeOut',
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="stat-number">
      {displayValue}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: Users,
    value: 150,
    suffix: '+',
    label: 'Clientes Atendidos',
    description: 'Empresas que confiam em nós',
  },
  {
    icon: Briefcase,
    value: 200,
    suffix: '+',
    label: 'Projetos Realizados',
    description: 'Soluções implementadas',
  },
  {
    icon: GraduationCap,
    value: 500,
    suffix: '+',
    label: 'Profissionais Formados',
    description: 'Capacitação de excelência',
  },
  {
    icon: Award,
    value: 5,
    suffix: '+',
    label: 'Anos de Experiência',
    description: 'Tradição e inovação',
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="py-14 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-48 h-48 border border-primary/8 rounded-full" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 border border-primary/8 rounded-full" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="section-subtitle">Números que Falam por Nós</span>
          <h2 className="section-title text-foreground">
            Resultados que <span className="text-primary">Inspiram Confiança</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            A nossa trajetória é marcada por conquistas e pela satisfação dos nossos clientes.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="card-elevated p-5 text-center group"
            >
              {/* Icon */}
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Counter */}
              <div className="mb-1">
                {isInView && <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
              </div>

              {/* Label */}
              <h3 className="font-heading font-semibold text-sm text-foreground mb-0.5">
                {stat.label}
              </h3>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;