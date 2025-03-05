import { ReactNode, useEffect, useRef } from "react";

interface HistorySectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const HistorySection = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "" 
}: HistorySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`reveal-animation py-16 md:py-24 ${className} history-section`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-eco-800 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-eco-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="mt-4 w-24 h-1 bg-eco-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;