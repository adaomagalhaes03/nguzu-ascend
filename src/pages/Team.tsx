import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Crown } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  department: string;
  initials: string;
  isLeader?: boolean;
  image?: string;
}

const departments: { name: string; members: TeamMember[] }[] = [
  {
    name: 'Direção Geral',
    members: [
      { name: 'Graciete Fátima', role: 'Diretora Geral', department: 'Direção Geral', initials: 'GF', isLeader: true, image: '/Graciete-Fatima.JPG' },
    ],
  },
  {
    name: 'Departamento Financeiro e Estratégico',
    members: [
      { name: 'Kadima da Silva', role: 'Diretor do Departamento', department: 'Financeiro', initials: 'KS', isLeader: true, image: '/Kadima.jpeg' },
      { name: 'Jhony Esteves', role: 'Especialista Financeiro Sénior', department: 'Financeiro', initials: 'JE', image: '/Jhony-Esteves.jpeg' },
      { name: 'Luciana Santos', role: 'Analista de Planeamento', department: 'Financeiro', initials: 'LS', image: '/Luciana-santos.jpeg' },
      { name: 'Ingrácia Inglês', role: 'Especialista em Comunicação', department: 'Financeiro', initials: 'II', image: '/Ingracia-Ingles.JPG' },
      { name: 'Rodrigues Zumba', role: 'Técnico de Contabilidade', department: 'Financeiro', initials: 'RZ', image: '/Zumba.jpeg' },
    ],
  },
  {
    name: 'Departamento de Consultoria & Gestão Organizacional',
    members: [
      { name: 'Ruth Matias', role: 'Diretora do Departamento', department: 'Consultoria', initials: 'RM', isLeader: true, image: '/Ruth-Matias.jpeg' },
      { name: 'Jelson Balanga', role: 'Consultor de Processos', department: 'Consultoria', initials: 'JB', image: '/Jelson_Balanga.jpeg' },
      { name: 'Mayara Luís', role: 'Consultora de Planeamento', department: 'Consultoria', initials: 'ML', image: '/Mayara_Luis.jpeg' },
      { name: 'Chris Mavinga', role: 'Consultor de Cultura Organizacional', department: 'Consultoria', initials: 'CM', image: '/Cris-Mavinga.jpeg' },
      { name: 'Isabel Ndandi', role: 'Consultora de Gestão Administrativa', department: 'Consultoria', initials: 'IN', image: '/Isabel-Nadndi.JPG' },
    ],
  },
  {
    name: 'Departamento Técnico-Contabilístico',
    members: [
      { name: 'Celma Lucas', role: 'Relatórios Contabilísticos', department: 'Contabilidade', initials: 'CL', image: '/Celma_Lucas.JPG' },
      { name: 'Simão Manuel', role: 'Auditoria', department: 'Contabilidade', initials: 'SM', image: '/Samao-Manuel.JPG' },
      { name: 'Letícia Sapato', role: 'Contabilidade Operacional', department: 'Contabilidade', initials: 'LS', image: '/Leticia.jpeg' },
      { name: 'David Kódia', role: 'Obrigações Fiscais', department: 'Contabilidade', initials: 'DK', image: '/Kodia.JPG' },
    ],
  },
  {
    name: 'Departamento de Formação & Desenvolvimento Profissional',
    members: [
      { name: 'Alciara Silva', role: 'Diretora do Departamento', department: 'Formação', initials: 'AS', isLeader: true, image: '/Al.jpeg' },
      { name: 'Nicolau Júnior', role: 'Formador Principal', department: 'Formação', initials: 'NJ', image: '/Nicalau.jpeg' },
      { name: 'Herodes Quissanga', role: 'Assistente Logístico', department: 'Formação', initials: 'HQ', image: '/Herodes.jpeg' },
      { name: 'Dumilde Matoca', role: 'Formador de Desenvolvimento Pessoal', department: 'Formação', initials: 'DM', image: '/Dumilde-Matoca.jpeg' },
      { name: 'Graciana Jamba', role: 'Técnica de Avaliação', department: 'Formação', initials: 'GJ', image: '/Graciana-Jamba.jpeg' },
    ],
  },
];

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`team-card group relative ${member.isLeader ? 'ring-2 ring-primary/50' : ''}`}
    >
      {member.isLeader && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-1 bg-gradient-primary px-3 py-1 rounded-full">
            <Crown className="w-3 h-3 text-primary-foreground" />
            <span className="text-xs font-semibold text-primary-foreground">Direção</span>
          </div>
        </div>
      )}
      
      <div className="aspect-square relative overflow-hidden">
        {member.image ? (
          <>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span className="text-5xl font-heading font-bold text-primary/50 group-hover:text-primary/70 transition-colors">
              {member.initials}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 text-center relative z-10">
        <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {member.name}
        </h3>
        <p className="text-sm text-primary font-medium">{member.role}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="section-subtitle">A Nossa Equipa</span>
              <h1 className="section-title text-foreground text-5xl md:text-6xl">
                Profissionais de <span className="text-primary">Excelência</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Uma equipa multidisciplinar comprometida com o sucesso dos nossos clientes
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team by Department */}
        {departments.map((dept, deptIndex) => (
          <section
            key={dept.name}
            className={`py-16 ${deptIndex % 2 === 0 ? 'bg-card' : 'bg-background'}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {dept.name}
                </h2>
                <div className="line-gradient" />
              </motion.div>

              <div className={`grid gap-6 ${
                dept.name === 'Direção Geral' 
                  ? 'grid-cols-1 max-w-xs mx-auto' 
                  : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
              }`}>
                {dept.members.map((member, index) => (
                  <TeamMemberCard key={member.name} member={member} index={index} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Team;
