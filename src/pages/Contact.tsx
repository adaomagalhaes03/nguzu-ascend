import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Send, MessageCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: 'Mensagem Enviada!',
      description: 'Entraremos em contacto consigo brevemente.',
    });
    
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da NGUZU Consultoria.');
    window.open(`https://wa.me/244945408137?text=${message}`, '_blank');
  };

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
              <span className="section-subtitle">Contacte-nos</span>
              <h1 className="section-title text-foreground text-5xl md:text-6xl">
                Vamos <span className="text-primary">Conversar</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Estamos prontos para ajudar o seu negócio a crescer
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section ref={ref} className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Informações de Contacto
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Entre em contacto connosco para uma consultoria personalizada 
                    ou para esclarecer qualquer dúvida sobre os nossos serviços.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Localização</h4>
                      <p className="text-muted-foreground">
                        Centralidade do Kilamba<br />
                        Luanda, Angola
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                      <a href="tel:+244945408137" className="text-primary hover:underline">
                        +244 945 408 137
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a href="mailto:corporationelevation@gmail.com" className="text-primary hover:underline break-all">
                        corporationelevation@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Horário</h4>
                      <p className="text-muted-foreground">
                        Segunda - Sexta: 8h00 - 17h00<br />
                        Sábado: 9h00 - 13h00
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  Falar no WhatsApp
                </button>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="card-elevated p-8">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                    Envie-nos uma Mensagem
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                          placeholder="O seu nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                          placeholder="email@exemplo.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                          placeholder="+244 XXX XXX XXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                          placeholder="Nome da empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-foreground"
                        placeholder="Como podemos ajudar?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-hero-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          A enviar...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card-elevated overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31560.85799!2d13.2!3d-8.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f5c63a4a9!2sCentralidade%20do%20Kilamba!5e0!3m2!1sen!2sao!4v1700000000000!5m2!1sen!2sao"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização NGUZU Consultoria"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
