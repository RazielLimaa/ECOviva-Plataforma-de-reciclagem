
import { motion } from "framer-motion";
import { Sparkles, Zap, Diamond } from "lucide-react";

interface HeroSectionProps {
  scrollY: number;
  parallaxIntensity: number;
}

const HeroSection = ({ scrollY, parallaxIntensity }: HeroSectionProps) => {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-eco-100/70 to-transparent"></div>
      
      <div 
        className="absolute top-0 left-0 right-0 h-64 -z-5 overflow-hidden"
        style={{ transform: `translateY(${scrollY * parallaxIntensity}px)` }}
      >
        <div className="w-full h-full bg-eco-100/30 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-eco-100 text-eco-800 text-sm font-medium relative overflow-hidden group">
            <span className="relative z-10">Nossa Jornada Verde</span>
            <div className="absolute inset-0 bg-gradient-to-r from-eco-200 to-eco-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-eco-300 to-eco-400 blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-eco-900 mb-6 text-balance relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-eco-800 via-eco-600 to-eco-700">
              A História da ECOviva
            </span>
            <Sparkles className="absolute -top-6 -right-6 text-eco-400 animate-pulse h-12 w-12" />
          </h1>
          
          <p className="text-lg md:text-xl text-eco-700 mb-8 max-w-2xl mx-auto relative">
            Descubra como uma pequena ideia sustentável se transformou em uma missão para revolucionar a reciclagem no Brasil através da tecnologia e inovação.
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-eco-400 to-transparent"></span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#nossa-jornada" 
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-eco-600 to-eco-500 text-white font-medium transition-all hover:shadow-[0_0_15px_rgba(60,146,72,0.5)] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Nossa Jornada
                <Zap className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-eco-700 to-eco-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
            
            <a 
              href="#missao" 
              className="px-6 py-3 rounded-lg border border-eco-300 bg-white/80 backdrop-blur-sm text-eco-700 font-medium transition-all hover:border-eco-400 hover:bg-eco-50/50 hover:shadow-[0_0_15px_rgba(60,146,72,0.3)] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Nossa Missão
                <Diamond className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-eco-50/50 to-eco-100/50 -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-16 md:mt-24 flex justify-center"
        >
          <div className="w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-eco-900/70 via-transparent to-eco-900/70 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="ECOviva equipe trabalhando em soluções sustentáveis" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 border-[3px] border-eco-100/30 rounded-xl z-20 scale-[0.98] group-hover:scale-[1.01] transition-transform duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
