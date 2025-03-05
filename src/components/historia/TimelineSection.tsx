
import HistorySection from "../HistorySection";
import TimelineItem from "../TimelineItem";

const TimelineSection = () => {
  return (
    <HistorySection 
      id="nossa-jornada"
      title="Nossa Jornada"
      subtitle="Conheça os marcos importantes que moldaram a história da ECOviva ao longo dos anos."
      className="bg-gradient-to-b from-eco-50/90 to-white/80 relative"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535025639604-9a804c092faa?q=80&w=2342')] bg-fixed bg-cover opacity-[0.04] mix-blend-overlay"></div>
      
      <div className="mt-16">
        <TimelineItem
          year="2010"
          title="O Início de Tudo"
          isLeft={true}
          imageSrc="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          imageAlt="Fundadores da ECOviva em 2010"
        >
          <p>
            A ECOviva nasceu da visão de três amigos engenheiros preocupados com o crescente problema do descarte inadequado de resíduos. Em um pequeno galpão em São Paulo, começamos a desenvolver nossa primeira solução de coleta seletiva inteligente.
          </p>
        </TimelineItem>
        
        <TimelineItem
          year="2013"
          title="Primeiro Grande Projeto"
          imageSrc="https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          imageAlt="Primeiro projeto da ECOviva em 2013"
        >
          <p>
            Implementamos nosso primeiro sistema de gestão de resíduos em escala comercial para um shopping center em São Paulo. O projeto reduziu em 40% o volume de resíduos enviados para aterros e serviu como modelo para futuros empreendimentos.
          </p>
        </TimelineItem>
        
        <TimelineItem
          year="2015"
          title="Expansão Nacional"
          isLeft={true}
          imageSrc="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1313&q=80"
          imageAlt="Equipe ECOviva celebrando expansão em 2015"
        >
          <p>
            Com o sucesso de nossos primeiros projetos, expandimos nossas operações para outras capitais brasileiras. Neste ano, também lançamos nosso aplicativo de rastreamento de resíduos, permitindo maior transparência no processo de reciclagem.
          </p>
        </TimelineItem>
        
        <TimelineItem
          year="2018"
          title="Reconhecimento Internacional"
          imageSrc="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          imageAlt="Premiação internacional da ECOviva em 2018"
        >
          <p>
            A ECOviva foi reconhecida com o prêmio "Inovação em Sustentabilidade" pela ONU Meio Ambiente, destacando nossa abordagem tecnológica para resolver problemas ambientais. Iniciamos também nossas primeiras operações internacionais.
          </p>
        </TimelineItem>
        
        <TimelineItem
          year="2020"
          title="Uma Década de Impacto"
          isLeft={true}
          imageSrc="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          imageAlt="Celebração dos 10 anos da ECOviva"
        >
          <p>
            Celebramos uma década de operações com números impressionantes: mais de 10.000 toneladas de resíduos desviados de aterros, parcerias com 500+ empresas e um time de 200 colaboradores comprometidos com nossa missão.
          </p>
        </TimelineItem>
        
        <TimelineItem
          year="2023"
          title="O Futuro é Agora"
          imageSrc="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          imageAlt="ECOviva atualmente"
        >
          <p>
            Hoje, a ECOviva continua a liderar a inovação em sustentabilidade, com novos projetos em blockchain para rastreabilidade de resíduos e o desenvolvimento de materiais biodegradáveis avançados. Nossa missão de transformar a relação da sociedade com os resíduos continua mais forte do que nunca.
          </p>
        </TimelineItem>
      </div>
    </HistorySection>
  );
};

export default TimelineSection;
