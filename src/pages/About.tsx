import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Heart, Shield, Lightbulb, Users } from 'lucide-react';

const values = [
  { icon: Shield, name: 'Ética e Transparência', description: 'Actuamos com integridade em todas as relações.' },
  { icon: Target, name: 'Qualidade e Excelência', description: 'Buscamos a perfeição em cada projeto.' },
  { icon: Lightbulb, name: 'Inovação', description: 'Soluções criativas para desafios complexos.' },
  { icon: Shield, name: 'Confidencialidade', description: 'Protegemos os dados dos nossos clientes.' },
  { icon: Heart, name: 'Responsabilidade Social', description: 'Contribuímos para o desenvolvimento de Angola.' },
  { icon: Users, name: 'Trabalho em Equipa', description: 'Unidos somos mais fortes.' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="section-subtitle">Sobre Nós</span>
              <h1 className="section-title text-foreground text-5xl md:text-6xl">
                NGUZU <span className="text-primary">Consultoria</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Força, Crescimento & Inovação Contínua
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  A Nossa História
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Num mercado cada vez mais dinâmico e digital, a gestão financeira deixou de ser 
                    apenas uma obrigação legal para se tornar um verdadeiro pilar estratégico do sucesso empresarial.
                  </p>
                  <p>
                    A <strong className="text-foreground">NGUZU Consultoria</strong> nasce com o propósito de apoiar empresas, 
                    empreendedores e profissionais liberais na organização, controlo e otimização das suas finanças, 
                    com soluções modernas, seguras e totalmente adaptadas às novas exigências do mundo digital.
                  </p>
                  <p>
                    Oferecemos serviços contabilísticos personalizados, orientados para a transparência, 
                    precisão e tomada de decisão informada. O nosso compromisso é simplificar processos, 
                    reduzir riscos fiscais e transformar a contabilidade numa ferramenta de crescimento 
                    sustentável para o seu negócio.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-elevated p-8"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Origem do Nome
                </h3>
                <p className="text-muted-foreground mb-6">
                  O nome <strong className="text-primary">NGUZU</strong> é proveniente da língua nacional 
                  Kimbundu, que significa <em>"Força"</em> ou <em>"Poder"</em>.
                </p>
                <p className="text-muted-foreground">
                  Este nome representa a essência da nossa missão: dar força às empresas angolanas 
                  para que possam crescer de forma sustentável e competitiva no mercado.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission, Vision */}
        <section ref={ref} className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="card-elevated p-8 border-l-4 border-l-primary"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-primary" />
                  <h3 className="font-heading text-2xl font-bold text-foreground">Missão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Impulsionar o crescimento sustentável das micro, pequenas e médias empresas, 
                  oferecendo soluções integradas de consultoria, fiscalidade, contabilidade e 
                  gestão organizacional, enquanto formamos e capacitamos profissionais altamente 
                  competentes que respondem às exigências do mercado moderno.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card-elevated p-8 border-l-4 border-l-primary"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                  <h3 className="font-heading text-2xl font-bold text-foreground">Visão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida nacionalmente, até 2028, como uma empresa referência em 
                  consultoria empresarial e formação profissional, destacando-se pela inovação, 
                  excelência operacional e impacto positivo no desenvolvimento das organizações 
                  e dos talentos angolanos.
                </p>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-12"
            >
              <span className="section-subtitle">Os Nossos Valores</span>
              <h2 className="section-title text-foreground">
                Princípios que Nos <span className="text-primary">Guiam</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="card-elevated p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{value.name}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
