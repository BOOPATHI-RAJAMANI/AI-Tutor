import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  CalendarDays, 
  CalendarCheck, 
  CalendarClock,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const YearSelection = () => {
  const years = [
    {
      id: '1',
      title: '1st Year',
      description: 'Foundation courses for all engineering disciplines',
      icon: Calendar,
      color: 'from-primary to-primary-light',
      subjects: 'Mathematics, Physics, Chemistry, Engineering Graphics',
    },
    {
      id: '2',
      title: '2nd Year',
      description: 'Core engineering subjects and specialization basics',
      icon: CalendarDays,
      color: 'from-secondary to-secondary-light',
      subjects: 'Data Structures, Circuit Theory, Thermodynamics',
    },
    {
      id: '3',
      title: '3rd Year',
      description: 'Advanced concepts and practical applications',
      icon: CalendarCheck,
      color: 'from-accent to-accent-light',
      subjects: 'Algorithms, Control Systems, Machine Design',
    },
    {
      id: '4',
      title: '4th Year',
      description: 'Specialization and project work',
      icon: CalendarClock,
      color: 'from-primary to-secondary',
      subjects: 'Capstone Projects, Advanced Topics, Industry Training',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-surface pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Select Your Year
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your academic year to access relevant courses and learning materials
          </p>
        </motion.div>

        {/* Year Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {years.map((year, index) => (
            <motion.div
              key={year.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/department-selection?year=${year.id}`}>
                <div className={`card-premium hover-lift bg-gradient-to-br ${year.color} p-8 text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <year.icon className="h-12 w-12" />
                      <ArrowRight className="h-6 w-6 opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{year.title}</h3>
                    <p className="text-white/90 mb-4">{year.description}</p>
                    
                    <div className="flex items-center text-sm text-white/80">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>{year.subjects}</span>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Not sure which year? Start with our AI Tutor for personalized guidance
          </p>
          <Button asChild className="btn-accent">
            <Link to="/ai-tutor">
              Get AI Guidance
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default YearSelection;