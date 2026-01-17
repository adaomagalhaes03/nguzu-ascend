import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Graciete Fátima',
    role: 'Diretora Geral',
    department: 'Direção Geral',
    initials: 'GF',
    image: '/Graciete-Fatima.JPG',
  },
  {
    name: 'Kadima da Silva',
    role: 'Diretor do Departamento',
    department: 'Dept. Financeiro',
    initials: 'KS',
    image: '/Kadima.jpeg',
  },
  {
    name: 'Ruth Matias',
    role: 'Diretora do Departamento',
    department: 'Dept. Consultoria',
    initials: 'RM',
    image: '/Ruth-Matias.jpeg',
  },
  {
    name: 'Alciara Silva',
    role: 'Diretora do Departamento',
    department: 'Dept. Formação',
    initials: 'AS',
    image: '/Al.jpeg',
  },
];

const TeamPreview = () => {
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
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="py-14 bg-muted/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-glow opacity-15" />
      <div className="absolute bottom-0 right-0 dot-pattern w-40 h-40 opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="section-subtitle">A Nossa Equipa</span>
          <h2 className="section-title text-foreground">
            Profissionais de <span className="text-primary">Excelência</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Uma equipa multidisciplinar comprometida com o sucesso dos nossos clientes.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={itemVariants} className="team-card group">
              {/* Avatar */}
              <div className="aspect-square relative overflow-hidden">
                {member.image ? (
                  <>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                ) : (
                  <>
                    <div className="w-full h-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                      <span className="text-3xl font-heading font-bold text-primary/40 group-hover:text-primary/60 transition-colors">
                        {member.initials}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
              </div>

              {/* Info */}
              <div className="p-3 text-center relative z-10">
                <h3 className="font-heading font-semibold text-sm text-foreground mb-0.5 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-primary font-medium mb-0.5">{member.role}</p>
                <p className="text-[10px] text-muted-foreground">{member.department}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center mt-8"
        >
          <Link
            to="/equipa"
            className="btn-hero-secondary inline-flex items-center gap-1.5 group text-sm"
          >
            Ver toda a equipa
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;