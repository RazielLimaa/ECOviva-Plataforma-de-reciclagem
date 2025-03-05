
import { Leaf, Sprout, Recycle, Flower, Trees } from "lucide-react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="absolute text-eco-300 opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${0.5 + Math.random()})`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite ${Math.random() * 5}s`,
          }}
        >
          {i % 5 === 0 ? <Leaf size={48} /> : 
           i % 5 === 1 ? <Sprout size={48} /> : 
           i % 5 === 2 ? <Recycle size={48} /> : 
           i % 5 === 3 ? <Flower size={48} /> : 
                         <Trees size={48} />}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
