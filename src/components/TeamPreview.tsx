import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Gracieth de Fátima',
    role: 'Diretora Geral',
    department: 'Direção Geral',
    initials: 'GF',
  },
  {
    name: 'Kadima da Silva',
    role: 'Diretor Financeiro',
    department: 'Dept. Financeiro e Estratégico',
    initials: 'KS',
  },
  {
    name: 'Ruth Matias',
    role: 'Diretora de Consultoria',
    department: 'Dept. de Consultoria',
    initials: 'RM',
  },
  {
    name: 'Alciara Silva',
    role: 'Diretora de Formação',
    department: 'Dept. de Formação',
    initials: 'AS',
  },
  {
    name: 'Jhony Esteves',
    role: 'Especialista Financeiro',
    department: 'Dept. Financeiro e Estratégico',
    initials: 'JE',
  },
];

const TeamPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-glow opacity-20" />
      <div className="absolute bottom-0 right-0 dot-pattern w-64 h-64 opacity-15" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-subtitle">A Nossa Equipa</span>
          <h2 className="section-title text-foreground">
            Profissionais de <span className="text-primary">Excelência</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma equipa multidisciplinar comprometida com o sucesso dos nossos clientes.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={itemVariants} className="team-card group">
              {/* Avatar */}
              <div className="aspect-square relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-5xl font-heading font-bold text-primary/50 group-hover:text-primary/70 transition-colors">
                    {member.initials}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-4 text-center relative z-10">
                <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.department}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/equipa"
            className="btn-hero-secondary inline-flex items-center gap-2 group"
          >
            Ver toda a equipa
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
