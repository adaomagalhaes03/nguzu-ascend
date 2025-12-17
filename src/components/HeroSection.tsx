import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="NGUZU Consultoria - Equipa profissional"
          className="w-full h-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      
      {/* Dot Pattern */}
      <div className="absolute top-40 left-10 dot-pattern w-40 h-40 opacity-30" />
      <div className="absolute bottom-40 right-10 dot-pattern w-32 h-32 opacity-20" />

      {/* Content */}
      <motion.div style={{ opacity }} className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="line-gradient" />
            <span className="section-subtitle mb-0">Consultoria de Excelência</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Impulsionamos o{' '}
            <span className="text-primary glow-text">Crescimento</span> do Seu{' '}
            <span className="text-primary glow-text">Negócio</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
          >
            Soluções integradas de consultoria, contabilidade, fiscalidade e gestão organizacional
            para transformar a sua empresa. Força, Crescimento & Inovação Contínua.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contactos" className="btn-hero-primary flex items-center justify-center gap-2 group">
              Solicitar Consultoria
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="#servicos" className="btn-hero-secondary flex items-center justify-center gap-2">
              Ver Serviços
            </a>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/30"
          >
            {[
              { value: '150+', label: 'Clientes' },
              { value: '5+', label: 'Anos' },
              { value: '200+', label: 'Projetos' },
              { value: '98%', label: 'Satisfação' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center md:text-left">
                <span className="block text-2xl md:text-3xl font-bold text-primary font-heading">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
