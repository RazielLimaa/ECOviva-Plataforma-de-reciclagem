
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import HistorySection from "../HistorySection";

const MissionSection = () => {
  return (
    <HistorySection 
      id="missao"
      title="Nossa Missão"
      subtitle="Propósito que move cada uma de nossas ações na busca por um mundo mais sustentável."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-eco-300 to-eco-500 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80" 
                alt="Equipe ECOviva em ação" 
                className="w-full h-auto rounded-xl transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-900/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="px-2 py-1 text-xs bg-eco-600/80 backdrop-blur-sm rounded-full">Equipe ECOviva</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-eco-800 flex items-center gap-2">
            <span className="text-eco-500"><Sparkles size={24} /></span>
            Transformando o presente, preservando o futuro
          </h3>
          
          <p className="text-eco-700 border-l-4 border-eco-300 pl-4 italic">
            Na ECOviva, nossa missão é transformar a relação da sociedade com o meio ambiente através da tecnologia e da inovação. Acreditamos que a sustentabilidade não é apenas uma responsabilidade, mas uma oportunidade para criar soluções que beneficiam tanto as pessoas quanto o planeta.
          </p>
          
          <p className="text-eco-700">
            Buscamos desenvolver e implementar sistemas de gestão de resíduos inteligentes que maximizam a reciclagem e minimizam o impacto ambiental. Trabalhamos em parceria com empresas, governos e comunidades para criar uma economia circular onde o "lixo" se transforma em recurso valioso.
          </p>
          
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-eco-300 via-eco-500 to-eco-300"></div>
            <p className="text-eco-700">
              Nosso compromisso vai além da tecnologia. Investimos em educação ambiental, capacitação de catadores e desenvolvimento de comunidades, pois entendemos que a verdadeira transformação acontece quando as pessoas são parte da solução.
            </p>
          </div>
          
          <div className="pt-4">
            <a 
              href="/contato" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-eco-600 to-eco-500 text-white font-medium transition-all hover:shadow-[0_0_15px_rgba(60,146,72,0.5)] relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Junte-se a nós
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-eco-700 to-eco-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </div>
        </motion.div>
      </div>
    </HistorySection>
  );
};

export default MissionSection;
