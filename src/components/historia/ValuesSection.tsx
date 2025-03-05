
import { motion } from "framer-motion";
import { Leaf, Recycle, Trees, Users, Award, Lightbulb } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

const ValueCard = ({ icon, title, description, gradient, delay = 0 }: ValueCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group relative"
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-eco-200 to-eco-400 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-eco-100 shadow-sm transition-all group-hover:shadow-xl group-hover:translate-y-[-5px] duration-300">
      <div className={`h-16 w-16 rounded-lg bg-gradient-to-r ${gradient} text-white flex items-center justify-center mb-5 shadow-lg transform transition-transform group-hover:scale-110 duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-eco-800 mb-3 group-hover:text-eco-600 transition-colors">{title}</h3>
      <p className="text-eco-600">{description}</p>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-eco-300 to-eco-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  </motion.div>
);

const ValuesSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 to-eco-50/50"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=2340')] bg-fixed bg-cover opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-eco-100 text-eco-700 text-sm font-medium relative overflow-hidden group">
            <span className="relative z-10">Nossos Valores</span>
            <div className="absolute inset-0 bg-gradient-to-r from-eco-200 to-eco-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-eco-900 via-eco-700 to-eco-800">
            Princípios que nos guiam
          </h2>
          
          <p className="text-lg text-eco-600 max-w-3xl mx-auto">
            Nossa trajetória é guiada por valores sólidos que refletem nosso compromisso com o planeta e a sociedade.
          </p>
          
          <div className="mt-6 relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-eco-500 to-transparent mx-auto"></div>
            <Leaf className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-eco-500 animate-leaf-sway" size={20} />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value Cards */}
          <ValueCard 
            icon={<Leaf className="h-8 w-8" />}
            title="Sustentabilidade"
            description="Comprometidos em desenvolver soluções que minimizam o impacto ambiental e promovem práticas sustentáveis."
            gradient="from-eco-700 to-eco-500"
            delay={0.1}
          />
          <ValueCard 
            icon={<Recycle className="h-8 w-8" />}
            title="Economia Circular"
            description="Acreditamos no potencial transformador da reciclagem e no reaproveitamento de recursos para criar um ciclo econômico mais eficiente."
            gradient="from-eco-600 to-eco-400"
            delay={0.2}
          />
          <ValueCard 
            icon={<Trees className="h-8 w-8" />}
            title="Consciência Ambiental"
            description="Trabalhamos para promover a educação e a conscientização sobre a importância da preservação do meio ambiente."
            gradient="from-eco-500 to-eco-300"
            delay={0.3}
          />
          <ValueCard 
            icon={<Users className="h-8 w-8" />}
            title="Colaboração"
            description="Valorizamos parcerias e colaborações que impulsionam a inovação e ampliam nosso impacto positivo."
            gradient="from-eco-600 to-eco-400"
            delay={0.4}
          />
          <ValueCard 
            icon={<Award className="h-8 w-8" />}
            title="Excelência"
            description="Buscamos a excelência em tudo o que fazemos, desde a qualidade de nossos produtos até o atendimento aos clientes."
            gradient="from-eco-700 to-eco-500"
            delay={0.5}
          />
          <ValueCard 
            icon={<Lightbulb className="h-8 w-8" />}
            title="Inovação"
            description="Estamos constantemente em busca de novas tecnologias e soluções criativas para os desafios ambientais."
            gradient="from-eco-500 to-eco-300"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
