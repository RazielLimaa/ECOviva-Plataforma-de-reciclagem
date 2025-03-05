
import { motion } from "framer-motion";
import { Recycle, Leaf } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-eco-300 to-eco-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse" style={{ animationDuration: '3s' }}></div>
          
          <div className="relative bg-gradient-to-r from-eco-700 to-eco-500 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=2340')] bg-cover opacity-10 mix-blend-overlay"></div>
            
            <div className="px-6 py-12 md:p-16 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md"
              >
                Faça parte da revolução sustentável
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-eco-50 text-lg md:text-xl max-w-3xl mx-auto mb-8"
              >
                Junte-se à ECOviva em nossa missão de criar um futuro mais verde e sustentável. Seja como parceiro, cliente ou colaborador, há um lugar para você em nossa história.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <a 
                  href="/contato" 
                  className="group px-8 py-4 rounded-lg bg-white text-eco-700 font-medium transition-all hover:bg-eco-50 hover:shadow-[0_5px_30px_rgba(255,255,255,0.3)] relative overflow-hidden"
                >
                  <span className="relative z-10">Entre em contato</span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-eco-300 to-eco-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                
                <a 
                  href="/produtos" 
                  className="group px-8 py-4 rounded-lg border border-white/30 text-white font-medium transition-all hover:bg-white/10 hover:shadow-[0_5px_20px_rgba(255,255,255,0.2)] relative overflow-hidden"
                >
                  <span className="relative z-10">Conheça nossas soluções</span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </motion.div>
              
              <div className="absolute top-0 right-0 w-20 h-20 text-white/10">
                <Recycle size={80} className="animate-spin-slow" style={{ animationDuration: '20s' }} />
              </div>
              
              <div className="absolute bottom-0 left-0 w-20 h-20 text-white/10">
                <Leaf size={80} className="animate-leaf-sway" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
