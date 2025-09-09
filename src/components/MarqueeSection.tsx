import { motion } from 'framer-motion';
import { 
  Monitor, 
  Zap, 
  Cog, 
  Building, 
  Smartphone, 
  Bot,
  Calendar,
  CalendarDays,
  CalendarCheck,
  CalendarClock
} from 'lucide-react';

const MarqueeSection = () => {
  const yearItems = [
    { icon: Calendar, label: '1st Year', color: 'text-primary' },
    { icon: CalendarDays, label: '2nd Year', color: 'text-secondary' },
    { icon: CalendarCheck, label: '3rd Year', color: 'text-accent' },
    { icon: CalendarClock, label: '4th Year', color: 'text-primary' },
  ];

  const departmentItems = [
    { icon: Monitor, label: 'Computer Science', abbr: 'CSE', color: 'text-primary' },
    { icon: Zap, label: 'Electronics & Communication', abbr: 'ECE', color: 'text-secondary' },
    { icon: Cog, label: 'Mechanical Engineering', abbr: 'MECH', color: 'text-accent' },
    { icon: Building, label: 'Civil Engineering', abbr: 'CIVIL', color: 'text-primary' },
    { icon: Smartphone, label: 'Information Technology', abbr: 'IT', color: 'text-secondary' },
    { icon: Bot, label: 'AI & Data Science', abbr: 'AIDS', color: 'text-accent' },
  ];

  // Duplicate items for seamless loop
  const allItems = [...yearItems, ...departmentItems, ...yearItems, ...departmentItems];

  return (
    <section className="py-16 bg-gradient-to-r from-surface via-background to-surface overflow-hidden">
      <div className="relative">
        {/* Top Marquee - Years */}
        <div className="relative mb-8">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-8 md:space-x-12"
              animate={{ x: [0, -1600] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...yearItems, ...yearItems, ...yearItems].map((item, index) => (
                <motion.div
                  key={`year-${index}`}
                  className="flex-shrink-0 flex flex-col items-center space-y-3 min-w-[120px]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-background to-surface border border-border/50 flex items-center justify-center shadow-card hover:shadow-glow transition-all duration-300 ${item.color}`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground text-sm">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Center Text */}
        <div className="text-center py-8">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Engineering Excellence Across All Years & Departments
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive learning resources and AI-powered tutoring for every engineering discipline
          </motion.p>
        </div>

        {/* Bottom Marquee - Departments */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-8 md:space-x-12"
              animate={{ x: [-1600, 0] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...departmentItems, ...departmentItems, ...departmentItems].map((item, index) => (
                <motion.div
                  key={`dept-${index}`}
                  className="flex-shrink-0 flex flex-col items-center space-y-3 min-w-[160px]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-background to-surface border border-border/50 flex flex-col items-center justify-center shadow-card hover:shadow-glow transition-all duration-300 group ${item.color}`}>
                    <item.icon className="h-8 w-8 mb-1" />
                    <div className="text-xs font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.abbr}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground text-sm">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Background Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      </div>
    </section>
  );
};

export default MarqueeSection;