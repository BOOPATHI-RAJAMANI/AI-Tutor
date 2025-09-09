import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, BookOpen, Award, Clock } from 'lucide-react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  interface StatItem {
    icon: React.ComponentType<any>;
    label: string;
    value: number;
    suffix: string;
    color: string;
  }

  const stats: StatItem[] = [
    {
      icon: Users,
      label: 'Students Empowered',
      value: 10000,
      suffix: '+',
      color: 'text-primary'
    },
    {
      icon: BookOpen,
      label: 'Study Resources',
      value: 500,
      suffix: '+',
      color: 'text-secondary'
    },
    {
      icon: Award,
      label: 'Success Rate',
      value: 95,
      suffix: '%',
      color: 'text-accent'
    },
    {
      icon: Clock,
      label: 'AI Support',
      value: 24,
      suffix: '/7',
      color: 'text-primary'
    }
  ];

  const AnimatedCounter = ({ end, suffix, color }: { end: number; suffix: string; color: string }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isInView) return;
      
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = end / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [end, isInView]);

    return (
      <span className={`text-4xl md:text-5xl font-bold ${color}`}>
        {count}{suffix}
      </span>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-surface to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Background Glow Effects */}
      <motion.div 
        className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="h-4 w-4" />
            <span>Our Impact</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Transforming Engineering Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have already transformed their learning experience with our AI-powered educational platform.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="card-premium group cursor-default mb-6"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-background to-surface border border-border/50 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  
                  {/* Counter */}
                  <div className="space-y-2">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      color={stat.color}
                    />
                    <div className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-gradient-primary">4</div>
              <div className="text-sm text-muted-foreground">Years of Comprehensive Study</div>
            </motion.div>
            
            <motion.div
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-gradient-secondary">6</div>
              <div className="text-sm text-muted-foreground">Engineering Departments</div>
            </motion.div>
            
            <motion.div
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-gradient-accent">100+</div>
              <div className="text-sm text-muted-foreground">Subject Areas Covered</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievement Banner */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="card-hero text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gradient-primary mb-4">
              🏆 Award-Winning Educational Platform
            </h3>
            <p className="text-muted-foreground">
              Recognized as the leading AI-powered learning platform for engineering education, 
              trusted by students and educators across multiple institutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;