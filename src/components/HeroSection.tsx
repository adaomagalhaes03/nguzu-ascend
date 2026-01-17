import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { ProposalModal } from './ProposalModal';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <section ref={containerRef} className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="NGUZU Consultoria - Equipa profissional"
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
        
        {/* Dot Pattern */}
        <div className="absolute top-32 left-8 dot-pattern w-28 h-28 opacity-20" />
        <div className="absolute bottom-32 right-8 dot-pattern w-24 h-24 opacity-15" />

        {/* Content */}
        <motion.div style={{ opacity }} className="container mx-auto px-4 lg:px-8 relative z-10 pt-16">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="line-gradient" />
              <span className="section-subtitle mb-0">Consultoria de Excelência</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
            >
              Impulsionamos o{' '}
              <span className="text-primary glow-text">Crescimento</span> do Seu{' '}
              <span className="text-primary glow-text">Negócio</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base text-muted-foreground mb-6 leading-relaxed max-w-xl"
            >
              Soluções integradas de consultoria, contabilidade, fiscalidade e gestão organizacional
              para transformar a sua empresa. Força, Crescimento & Inovação Contínua.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-hero-primary flex items-center justify-center gap-2 group"
              >
                Solicitar Proposta
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#servicos" className="btn-hero-secondary flex items-center justify-center gap-2">
                Ver Serviços
              </a>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-6 border-t border-border/30"
            >
              {[
                { value: '150+', label: 'Clientes' },
                { value: '5+', label: 'Anos' },
                { value: '200+', label: 'Projetos' },
                { value: '98%', label: 'Satisfação' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <span className="block text-xl md:text-2xl font-bold text-primary font-heading">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-muted-foreground"
          >
            <span className="text-[10px] uppercase tracking-wider">Scroll</span>
            <div className="w-5 h-8 border border-muted-foreground/40 rounded-full flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <ProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;