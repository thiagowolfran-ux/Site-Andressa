import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { 
  Menu, X, HeartHandshake, ClipboardList, UserCheck, 
  Microscope, Activity, Dumbbell, ArrowRight, 
  MapPin, Phone, Clock, Send, ChevronDown, CheckCircle2,
  Instagram, Facebook, Linkedin, Mail, ChevronLeft, ChevronRight
} from 'lucide-react';

// --- Components ---

const FadeIn = ({ children, delay = 0, direction = 'up', key }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right', key?: React.Key }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, filter: 'blur(10px)', ...directions[direction] }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

// --- Navbar ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Especialidades', href: '#specialties' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/95 backdrop-blur-md shadow-lg py-4 border-b border-border-soft' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-serif font-bold flex items-center gap-2 ${scrolled ? 'text-text-main' : 'text-text-main'}`}>
          <img 
            src="https://lh3.googleusercontent.com/d/1nHS9ZXys7GZSnjLwD1TJqYY4lcPqtrbM" 
            alt="Andressa Sartori Logo" 
            className="w-20 h-20 object-contain"
            referrerPolicy="no-referrer"
          />
          AndressaSartori
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`transition-colors text-sm font-medium tracking-wide ${scrolled ? 'text-text-body hover:text-primary' : 'text-text-body hover:text-primary'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5569999397946"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-hover text-text-invert px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-text-main"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface border-t border-border overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-body hover:text-primary py-2 text-lg"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5569999397946"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary hover:bg-primary-hover text-text-invert px-6 py-3 rounded-full font-medium text-center mt-4 transition-colors"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Hero Section ---
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-bg-main overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: 'url("https://drive.google.com/uc?export=view&id=1J6muiwzzN0Xa3RLhbq2rIyl-ru-pTC63")',
          y 
        }}
      ></motion.div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-primary-light),_transparent_50%)] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-main"
          >
            <h1 className="text-5xl lg:text-7xl font-serif leading-[1.1] mb-6">
              Recupere o <span className="text-primary italic">equilíbrio</span> do seu corpo
            </h1>
            <p className="text-lg lg:text-xl text-text-body mb-10 max-w-lg font-light leading-relaxed">
              Saúde integrativa, quiropraxia, fisioterapia e cuidados de performance projetados para suas necessidades únicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5569999397946"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-text-invert px-8 py-4 rounded-full font-medium text-center transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Agendar avaliação
              </a>
              <a 
                href="#about"
                className="bg-surface hover:bg-surface-muted border border-border text-text-main px-8 py-4 rounded-full font-medium text-center transition-all"
              >
                Conheça a clínica
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-primary-light/40 rounded-[2.5rem] blur-2xl transform rotate-3"></div>
            <img 
              src="https://lh3.googleusercontent.com/d/1d_mO2VB4kBKlMZGcwU3jIlZn0SJI4OAs" 
              alt="Profissional sorrindo" 
              className="relative z-10 rounded-[2rem] object-cover object-top h-[600px] w-full shadow-xl"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-surface p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-border-soft"
            >
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm text-text-soft font-medium uppercase tracking-wider">Quiroprata</p>
                <p className="text-text-main font-serif font-bold text-xl">Profissional</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Features (Below Hero) ---
const Features = () => {
  const features = [
    { icon: <HeartHandshake size={28} />, title: "Atendimento humanizado" },
    { icon: <ClipboardList size={28} />, title: "Avaliação individual" },
    { icon: <UserCheck size={28} />, title: "Profissionais especializados" },
    { icon: <Microscope size={28} />, title: "Tecnologia avançada" },
  ];

  return (
    <div className="bg-surface py-12 border-b border-border relative z-20 -mt-8 mx-6 lg:mx-auto max-w-7xl rounded-2xl shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
        {features.map((feature, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="flex flex-col items-center text-center gap-4 group">
              <div className="w-16 h-16 rounded-full bg-surface-muted group-hover:bg-primary-light flex items-center justify-center text-primary transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="font-medium text-text-main">{feature.title}</h4>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

// --- About Section ---
const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-light rounded-[2.5rem] transform -rotate-3"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1n3Oytn8e4xgHw41Ji6355k7RU8Cr0-Nd" 
                alt="Médico examinando paciente" 
                className="relative z-10 rounded-[2rem] object-cover object-top h-[500px] w-full shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div>
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">Sobre Nós</p>
              <h2 className="text-4xl lg:text-5xl font-serif text-text-main mb-6 leading-tight">
                Excelência técnica com um <span className="italic">olhar humano</span>
              </h2>
              <p className="text-text-body text-lg mb-8 leading-relaxed">
                Acreditamos que a verdadeira cura vem da compreensão do corpo como um todo. Nossa abordagem integrativa combina anos de experiência clínica com técnicas terapêuticas avançadas para tratar a causa raiz da sua dor, não apenas os sintomas.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Formação multidisciplinar", desc: "Especialistas em diversas áreas trabalhando juntos." },
                  { title: "Método exclusivo", desc: "Um protocolo único desenvolvido ao longo de 15 anos." },
                  { title: "Atendimento personalizado", desc: "Tratamentos adaptados especificamente para o seu corpo." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-main text-lg">{item.title}</h4>
                      <p className="text-text-body">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

// --- Gallery Section ---
const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1453&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=1417&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">Nossa Estrutura</p>
            <h3 className="text-3xl lg:text-4xl font-serif text-text-main">
              Conheça nosso <span className="italic">espaço</span> e <span className="italic">equipe</span>
            </h3>
          </div>
        </FadeIn>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Slider */}
          <div className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden rounded-3xl shadow-xl bg-bg-soft">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                alt={`Galeria da Clínica ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm text-text-main flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-lg z-10"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm text-text-main flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-lg z-10"
              aria-label="Próxima foto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Services Section ---
const Services = () => {
  const services = [
    {
      icon: <Activity size={32} />,
      title: "Quiropraxia",
      desc: "Ajustes articulares para corrigir o alinhamento, aliviar a dor e apoiar a capacidade natural do corpo de se curar."
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Avaliação Terapêutica",
      desc: "Reabilitação abrangente combinando terapia manual, movimento e técnicas holísticas."
    },
    {
      icon: <Dumbbell size={32} />,
      title: "Performance física",
      desc: "Estratégias avançadas de condicionamento e recuperação para otimizar suas capacidades atléticas e prevenir lesões."
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">Nossa Especialidade</p>
            <h2 className="text-4xl lg:text-5xl font-serif text-text-main mb-6">
              Soluções completas para sua saúde
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="bg-surface rounded-3xl p-10 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border group">
                <div className="w-16 h-16 rounded-2xl bg-surface-muted shadow-sm flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-text-invert transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif text-text-main mb-4">{service.title}</h3>
                <p className="text-text-body mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <a href="https://wa.me/5569999397946" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-primary-hover transition-colors">
                  Saiba mais <ArrowRight size={18} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CTA Section Dark ---
const CTADark = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-primary/90 z-10"></div>
      <motion.img 
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
        alt="Gym background" 
        className="absolute inset-0 w-full h-[120%] object-cover blur-sm"
        style={{ y, top: "-10%" }}
        referrerPolicy="no-referrer"
      />
      
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-5xl lg:text-7xl font-serif text-text-invert mb-8 leading-tight">
            Comece sua <span className="italic text-primary-light">transformação</span> hoje
          </h2>
          <p className="text-xl text-text-invert/80 mb-12 font-light max-w-2xl mx-auto">
            Não deixe a dor limitar seu potencial. Dê o primeiro passo em direção a uma vida mais saudável e equilibrada.
          </p>
          <a 
            href="https://wa.me/5569999397946"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-surface hover:bg-surface-muted text-primary px-10 py-5 rounded-full font-medium text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            Agende agora
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

// --- Differential Section ---
const Differential = () => {
  return (
    <section id="specialties" className="py-24 lg:py-32 bg-bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right">
            <div>
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">O Padrão Andressa Sartori</p>
              <h2 className="text-4xl lg:text-5xl font-serif text-text-main mb-8 leading-tight">
                Sua saúde merece um <span className="italic">novo padrão</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { title: "Ambiente exclusivo", desc: "Uma clínica projetada para trazer paz e conforto desde o momento em que você entra." },
                  { title: "Equipamentos modernos", desc: "Tecnologia de ponta para diagnóstico preciso e tratamento eficaz." },
                  { title: "Terapia avançada", desc: "Protocolos baseados em evidências combinando o melhor das práticas globais." },
                  { title: "Cuidados de alta performance", desc: "Programas dedicados para atletas e indivíduos ativos." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary shrink-0 font-serif text-xl">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-main text-xl mb-2">{item.title}</h4>
                      <p className="text-text-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://lh3.googleusercontent.com/d/1eZ15aJY44Wz7hKYt5wkbnwI89aKcGhzm" 
                alt="Interior da clínica" 
                className="rounded-3xl object-cover h-[300px] w-full mt-12 shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1yDXkD7scRg2uITE3e9DPWPYuqYynU3JQ" 
                alt="Sessão de terapia" 
                className="rounded-3xl object-cover h-[400px] w-full shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

// --- Results Block ---
const Results = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
      <FadeIn>
        <div className="bg-primary rounded-3xl p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
          <div className="text-center md:text-left">
            <h3 className="text-5xl lg:text-7xl font-serif text-primary-light mb-2">+500</h3>
            <p className="text-text-invert text-xl font-light tracking-wide">Pacientes tratados e recuperados</p>
          </div>
          <div className="h-px w-full md:w-px md:h-24 bg-text-invert/20"></div>
          <div className="text-center md:text-left">
            <h3 className="text-5xl lg:text-7xl font-serif text-primary-light mb-2">15</h3>
            <p className="text-text-invert text-xl font-light tracking-wide">Anos de experiência clínica</p>
          </div>
          <div className="h-px w-full md:w-px md:h-24 bg-text-invert/20"></div>
          <div className="text-center md:text-left">
            <h3 className="text-5xl lg:text-7xl font-serif text-primary-light mb-2">98%</h3>
            <p className="text-text-invert text-xl font-light tracking-wide">Taxa de satisfação dos pacientes</p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

// --- Testimonials ---
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Maratonista",
      text: "Após meses de dor crônica nas costas, a abordagem integrativa aqui mudou completamente minha trajetória. Voltei a correr sem dor."
    },
    {
      name: "Michael Chen",
      role: "Engenheiro de Software",
      text: "A correção postural e o cuidado quiroprático aliviaram anos de tensão do trabalho em escritório. O ambiente da clínica é incrivelmente relaxante."
    },
    {
      name: "Emma Thompson",
      role: "Instrutora de Yoga",
      text: "A compreensão deles sobre a mecânica do corpo é incomparável. O plano de cuidados personalizado me ajudou a me recuperar de uma lesão no ombro mais rápido do que o esperado."
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-bg-main pt-48">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">Depoimentos</p>
            <h2 className="text-4xl lg:text-5xl font-serif text-text-main mb-6">
              Histórias de <span className="italic">recuperação</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div className="bg-surface p-10 rounded-3xl shadow-sm border border-border h-full relative">
                <div className="text-secondary mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.182C16.914 12.727 17.5 11.364 18.171 10.091C18.843 8.818 19.683 7.636 20.691 6.545L18.171 4C16.829 5.455 15.654 7.045 14.646 8.773C13.637 10.5 12.88 12.409 12.377 14.5L14.017 21ZM3.674 21L6.069 14.182C6.571 12.727 7.157 11.364 7.829 10.091C8.5 8.818 9.34 7.636 10.349 6.545L7.829 4C6.486 5.455 5.311 7.045 4.303 8.773C3.294 10.5 2.537 12.409 2.034 14.5L3.674 21Z" />
                  </svg>
                </div>
                <p className="text-text-body text-lg mb-8 leading-relaxed italic">"{item.text}"</p>
                <div>
                  <h4 className="font-serif font-bold text-text-main text-lg">{item.name}</h4>
                  <p className="text-text-soft text-sm">{item.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---
const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <FadeIn direction="right">
            <div>
              <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">Entre em contato</p>
              <h2 className="text-4xl lg:text-5xl font-serif text-text-main mb-8">
                Pronto para começar seu <span className="italic">tratamento?</span>
              </h2>
              
              <div className="bg-surface p-10 rounded-3xl border border-border space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-surface-muted shadow-sm flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-main text-lg mb-1">Localização</h4>
                    <p className="text-text-body">Av. Bem-Estar, 123, Sala 400<br/>São Paulo, SP 01000-000</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-surface-muted shadow-sm flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-main text-lg mb-1">Telefone e WhatsApp</h4>
                    <p className="text-text-body">+55 (69) 99939-7946</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-surface-muted shadow-sm flex items-center justify-center text-primary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-main text-lg mb-1">Horário de Funcionamento</h4>
                    <p className="text-text-body">Seg - Sex: 8:00 - 19:00<br/>Sáb: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-surface rounded-3xl p-10 lg:p-12 shadow-xl border border-border">
              <h3 className="text-2xl font-serif text-text-main mb-8">Envie uma mensagem</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-text-body text-sm mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full bg-surface-muted border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-border-focus transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-text-body text-sm mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-surface-muted border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-border-focus transition-colors"
                    placeholder="Seu número de telefone"
                  />
                </div>
                <div>
                  <label className="block text-text-body text-sm mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-surface-muted border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-border-focus transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <a 
                  href="https://wa.me/5569999397946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-primary-hover text-text-invert py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Send size={18} />
                  Enviar via WhatsApp
                </a>
              </form>
            </div>
          </FadeIn>

        </div>

        {/* Interactive Map */}
        <FadeIn delay={0.4}>
          <div className="mt-16 h-[400px] bg-surface-muted rounded-3xl overflow-hidden relative border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197505068307!2d-46.65883832385806!3d-23.56133746158586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710680000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// --- FAQ Section ---
const FAQ = () => {
  const faqs = [
    {
      q: "O que é quiropraxia?",
      a: "A quiropraxia é uma profissão de saúde focada no diagnóstico, tratamento e prevenção de distúrbios mecânicos do sistema musculoesquelético, com ênfase especial na coluna vertebral."
    },
    {
      q: "Preciso de encaminhamento médico?",
      a: "Não, você não precisa de encaminhamento médico para consultar um quiropraxista ou fisioterapeuta em nossa clínica. Você pode agendar uma consulta diretamente conosco."
    },
    {
      q: "Quanto tempo dura o tratamento?",
      a: "A duração do tratamento varia dependendo da sua condição específica, objetivos e como seu corpo responde. Durante sua avaliação inicial, forneceremos um plano de tratamento personalizado com prazos estimados."
    },
    {
      q: "Vocês aceitam plano de saúde?",
      a: "Fornecemos recibos detalhados que você pode enviar ao seu plano de saúde para reembolso. Recomendamos verificar com sua operadora sobre sua cobertura específica."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-main">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-text-main mb-4">Perguntas Frequentes</h2>
            <p className="text-text-body">Tudo o que você precisa saber sobre nossa clínica e tratamentos.</p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div 
                className={`bg-surface rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIdx === idx ? 'border-border-focus shadow-md' : 'border-border hover:border-border-focus'
                }`}
              >
                <button 
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  <span className="font-serif text-lg text-text-main font-medium">{faq.q}</span>
                  <ChevronDown 
                    className={`text-primary transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 text-text-body leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="bg-bg-soft pt-24 pb-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-serif font-bold text-text-main flex items-center gap-2 mb-6">
              <img 
                src="https://lh3.googleusercontent.com/d/1nHS9ZXys7GZSnjLwD1TJqYY4lcPqtrbM" 
                alt="Andressa Sartori Logo" 
                className="w-20 h-20 object-contain"
                referrerPolicy="no-referrer"
              />
              AndressaSartori
            </a>
            <p className="text-text-soft mb-8 font-light leading-relaxed">
              Comprometimento com a saúde física e a qualidade de vida das pessoas
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-text-invert transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-text-invert transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-text-invert transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-text-main font-serif text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              {[
                { name: 'Início', href: '#home' },
                { name: 'Sobre Nós', href: '#about' },
                { name: 'Serviços', href: '#services' },
                { name: 'Especialidades', href: '#specialties' },
                { name: 'Depoimentos', href: '#testimonials' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-text-soft hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-serif text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-text-soft">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                Av. Bem-Estar, 123, SP
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                +55 (11) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                ola@luminahealth.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-text-soft mb-4 text-sm">Inscreva-se para receber dicas de saúde e novidades.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-surface border border-border rounded-l-xl px-4 py-3 text-text-main focus:outline-none focus:border-border-focus w-full"
              />
              <button className="bg-primary text-text-invert px-4 rounded-r-xl font-medium hover:bg-primary-hover transition-colors">
                Inscrever-se
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-border text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-soft text-sm">
            &copy; {new Date().getFullYear()} Andressa Sartori. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-text-soft">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans text-text-main bg-bg-main selection:bg-primary-light/50 selection:text-primary">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
        <Features />
        <About />
        <Services />
        <CTADark />
        <Differential />
        <Results />
        <Gallery />
        <Testimonials />
        <Contact />
        <FAQ />
      </motion.main>
      <Footer />
    </div>
  );
}
