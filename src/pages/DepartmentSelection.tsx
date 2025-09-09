import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Monitor, 
  Zap, 
  Cog, 
  Building, 
  Smartphone, 
  Bot,
  ArrowRight,
  GraduationCap,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const DepartmentSelection = () => {
  const [searchParams] = useSearchParams();
  const year = searchParams.get('year') || '1';

  const departments = [
    {
      id: 'cse',
      name: 'Computer Science Engineering',
      abbr: 'CSE',
      icon: Monitor,
      description: 'Software development, algorithms, and computing systems',
      color: 'from-primary to-primary-light',
      highlights: ['Programming', 'Data Structures', 'AI & ML', 'Software Engineering'],
    },
    {
      id: 'ece',
      name: 'Electronics & Communication Engineering',
      abbr: 'ECE',
      icon: Zap,
      description: 'Electronics, telecommunications, and signal processing',
      color: 'from-secondary to-secondary-light',
      highlights: ['Circuit Design', 'Communication Systems', 'VLSI', 'Embedded Systems'],
    },
    {
      id: 'mech',
      name: 'Mechanical Engineering',
      abbr: 'MECH',
      icon: Cog,
      description: 'Design, manufacturing, and mechanical systems',
      color: 'from-accent to-accent-light',
      highlights: ['Thermodynamics', 'Machine Design', 'Manufacturing', 'Robotics'],
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      abbr: 'CIVIL',
      icon: Building,
      description: 'Infrastructure, construction, and environmental systems',
      color: 'from-primary to-secondary',
      highlights: ['Structural Design', 'Construction', 'Transportation', 'Environment'],
    },
    {
      id: 'it',
      name: 'Information Technology',
      abbr: 'IT',
      icon: Smartphone,
      description: 'Information systems, web technologies, and networks',
      color: 'from-secondary to-accent',
      highlights: ['Web Development', 'Database Systems', 'Cloud Computing', 'Cybersecurity'],
    },
    {
      id: 'aids',
      name: 'AI & Data Science',
      abbr: 'AIDS',
      icon: Bot,
      description: 'Artificial intelligence, machine learning, and data analytics',
      color: 'from-accent to-primary',
      highlights: ['Machine Learning', 'Data Mining', 'Deep Learning', 'Big Data'],
    },
  ];

  const yearNames = { '1': 'First', '2': 'Second', '3': 'Third', '4': 'Fourth' };

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
          <div className="flex items-center justify-center mb-4">
            <Link to="/year-selection">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Years
              </Button>
            </Link>
            <div className="flex items-center text-muted-foreground">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span>{yearNames[year as keyof typeof yearNames]} Year</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Choose Your Department
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your engineering department to access specialized courses and materials
          </p>
        </motion.div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/subject-selection?year=${year}&department=${dept.id}`}>
                <div className={`card-premium hover-lift bg-gradient-to-br ${dept.color} p-6 text-white relative overflow-hidden h-full`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <dept.icon className="h-10 w-10" />
                      <div className="text-right">
                        <div className="text-sm font-bold opacity-90">{dept.abbr}</div>
                        <ArrowRight className="h-5 w-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                    <p className="text-white/90 text-sm mb-4">{dept.description}</p>
                    
                    <div className="space-y-1">
                      {dept.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-xs text-white/80">
                          <div className="w-1 h-1 bg-white/60 rounded-full mr-2" />
                          <span>{highlight}</span>
                        </div>
                      ))}
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
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-6">
            Need help choosing? Our AI Tutor can recommend the best department for you
          </p>
          <Button asChild className="btn-accent">
            <Link to="/ai-tutor">
              Get AI Recommendation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentSelection;