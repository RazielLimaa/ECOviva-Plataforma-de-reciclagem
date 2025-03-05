
import { motion } from "framer-motion";
import { Sprout } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  delay?: number;
}

const TeamMember = ({ name, role, imageSrc, delay = 0 }: TeamMemberProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group relative"
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-eco-200 to-eco-400 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-xl">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-eco-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold text-eco-800 group-hover:text-eco-600 transition-colors">{name}</h3>
        <p className="text-eco-600">{role}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-eco-300 to-eco-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  </motion.div>
);

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-eco-50/90 to-white/70"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2340')] bg-fixed bg-cover opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-eco-100 text-eco-700 text-sm font-medium relative overflow-hidden group">
            <span className="relative z-10">Nossa Equipe</span>
            <div className="absolute inset-0 bg-gradient-to-r from-eco-200 to-eco-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-eco-900 via-eco-700 to-eco-800">
            As mentes por trás da ECOviva
          </h2>
          
          <p className="text-lg text-eco-600 max-w-3xl mx-auto">
            Conheça alguns dos talentosos profissionais que lideram nossa missão de transformar o mundo.
          </p>
          
          <div className="mt-6 relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-eco-500 to-transparent mx-auto"></div>
            <Sprout className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-eco-500 animate-bounce" size={20} />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="Carlos Oliveira"
            role="CEO & Fundador"
            imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            delay={0.1}
          />
          <TeamMember 
            name="Ana Silva"
            role="Diretora de Tecnologia"
            imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            delay={0.3}
          />
          <TeamMember 
            name="Rafael Santos"
            role="Diretor de Sustentabilidade"
            imageSrc="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
