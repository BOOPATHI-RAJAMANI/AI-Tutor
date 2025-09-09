import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  BookOpen, 
  ArrowRight,
  GraduationCap,
  ArrowLeft,
  Clock,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const SubjectSelection = () => {
  const [searchParams] = useSearchParams();
  const year = searchParams.get('year') || '1';
  const department = searchParams.get('department') || 'cse';

  const yearNames = { '1': 'First', '2': 'Second', '3': 'Third', '4': 'Fourth' };
  const deptNames = {
    cse: 'Computer Science Engineering',
    ece: 'Electronics & Communication Engineering', 
    mech: 'Mechanical Engineering',
    civil: 'Civil Engineering',
    it: 'Information Technology',
    aids: 'AI & Data Science'
  };

  // Subject data based on year and department
  const subjectsByYearDept: { [key: string]: { [key: string]: any[] } } = {
    '1': {
      // Common subjects for all departments in 1st year
      all: [
        { id: 'math1', name: 'Mathematics I', description: 'Calculus, Linear Algebra, and Differential Equations', hours: '4 Credits' },
        { id: 'physics', name: 'Physics', description: 'Mechanics, Thermodynamics, and Modern Physics', hours: '4 Credits' },
        { id: 'chemistry', name: 'Chemistry', description: 'Organic, Inorganic, and Physical Chemistry', hours: '3 Credits' },
        { id: 'graphics', name: 'Engineering Graphics', description: 'Technical Drawing and CAD Fundamentals', hours: '3 Credits' },
        { id: 'electrical', name: 'Basic Electrical & Electronics', description: 'Circuit Theory and Electronic Devices', hours: '3 Credits' },
        { id: 'programming', name: 'Programming Fundamentals', description: 'Introduction to C/C++ Programming', hours: '4 Credits' }
      ]
    },
    '2': {
      cse: [
        { id: 'ds', name: 'Data Structures', description: 'Arrays, Linked Lists, Stacks, Queues, Trees', hours: '4 Credits' },
        { id: 'dbms', name: 'Database Management Systems', description: 'SQL, Normalization, Transaction Management', hours: '4 Credits' },
        { id: 'os', name: 'Operating Systems', description: 'Process Management, Memory Management, File Systems', hours: '4 Credits' },
        { id: 'java', name: 'Object Oriented Programming with Java', description: 'OOP Concepts, Java Programming, GUI Development', hours: '4 Credits' },
        { id: 'networks', name: 'Computer Networks', description: 'OSI Model, TCP/IP, Network Protocols', hours: '3 Credits' }
      ],
      ece: [
        { id: 'circuit', name: 'Circuit Theory', description: 'AC/DC Circuits, Network Theorems, Resonance', hours: '4 Credits' },
        { id: 'analog', name: 'Analog Electronics', description: 'Amplifiers, Oscillators, Op-Amps', hours: '4 Credits' },
        { id: 'signals', name: 'Signals & Systems', description: 'Signal Processing, Fourier Transform, Z-Transform', hours: '4 Credits' },
        { id: 'digital', name: 'Digital Electronics', description: 'Logic Gates, Combinational & Sequential Circuits', hours: '3 Credits' },
        { id: 'micro', name: 'Microprocessors', description: '8086 Architecture, Assembly Programming', hours: '4 Credits' }
      ],
      mech: [
        { id: 'thermo', name: 'Thermodynamics', description: 'Heat Transfer, Energy Systems, Entropy', hours: '4 Credits' },
        { id: 'materials', name: 'Mechanics of Materials', description: 'Stress, Strain, Material Properties', hours: '4 Credits' },
        { id: 'fluid', name: 'Fluid Mechanics', description: 'Fluid Statics, Dynamics, Bernoulli\'s Equation', hours: '4 Credits' },
        { id: 'manufacturing', name: 'Manufacturing Processes', description: 'Machining, Casting, Welding, Forming', hours: '3 Credits' },
        { id: 'drawing', name: 'Machine Drawing', description: 'Technical Drawing, Assembly Drawings', hours: '3 Credits' }
      ],
      civil: [
        { id: 'surveying', name: 'Surveying', description: 'Land Surveying, GPS, Total Station', hours: '4 Credits' },
        { id: 'som', name: 'Strength of Materials', description: 'Stress Analysis, Beam Theory, Column Design', hours: '4 Credits' },
        { id: 'materials', name: 'Building Materials', description: 'Concrete, Steel, Timber Properties', hours: '3 Credits' },
        { id: 'fluid', name: 'Fluid Mechanics', description: 'Hydraulics, Open Channel Flow', hours: '4 Credits' },
        { id: 'concrete', name: 'Concrete Technology', description: 'Mix Design, Testing, Quality Control', hours: '3 Credits' }
      ],
      it: [
        { id: 'ds', name: 'Data Structures', description: 'Arrays, Linked Lists, Trees, Graphs', hours: '4 Credits' },
        { id: 'dbms', name: 'Database Management Systems', description: 'SQL, Database Design, NoSQL', hours: '4 Credits' },
        { id: 'os', name: 'Operating Systems', description: 'Linux, Windows Administration', hours: '4 Credits' },
        { id: 'web', name: 'Web Technologies', description: 'HTML, CSS, JavaScript, PHP', hours: '4 Credits' },
        { id: 'networks', name: 'Computer Networks', description: 'Network Security, Wireless Networks', hours: '3 Credits' }
      ],
      aids: [
        { id: 'ds', name: 'Data Structures', description: 'Advanced Data Structures for AI', hours: '4 Credits' },
        { id: 'algebra', name: 'Linear Algebra', description: 'Matrices, Eigenvalues, Vector Spaces', hours: '4 Credits' },
        { id: 'stats', name: 'Probability & Statistics', description: 'Statistical Methods for Data Science', hours: '4 Credits' },
        { id: 'python', name: 'Python Programming', description: 'Python for Data Science and AI', hours: '4 Credits' },
        { id: 'database', name: 'Database Systems', description: 'Big Data, Data Warehousing', hours: '3 Credits' }
      ]
    },
    '3': {
      cse: [
        { id: 'algorithms', name: 'Algorithms', description: 'Algorithm Design, Analysis, Complexity', hours: '4 Credits' },
        { id: 'se', name: 'Software Engineering', description: 'SDLC, Design Patterns, Testing', hours: '4 Credits' },
        { id: 'ai', name: 'Artificial Intelligence', description: 'Search Algorithms, Expert Systems, Neural Networks', hours: '4 Credits' },
        { id: 'arch', name: 'Computer Architecture', description: 'Processor Design, Memory Hierarchy, Pipeline', hours: '3 Credits' },
        { id: 'compiler', name: 'Compiler Design', description: 'Lexical Analysis, Parsing, Code Generation', hours: '4 Credits' }
      ],
      ece: [
        { id: 'dsp', name: 'Digital Signal Processing', description: 'Digital Filters, FFT, DSP Processors', hours: '4 Credits' },
        { id: 'control', name: 'Control Systems', description: 'Feedback Systems, PID Controllers, Stability', hours: '4 Credits' },
        { id: 'comm', name: 'Communication Systems', description: 'AM/FM, Digital Communication, Modulation', hours: '4 Credits' },
        { id: 'vlsi', name: 'VLSI Design', description: 'IC Design, Layout, Verification', hours: '4 Credits' },
        { id: 'controllers', name: 'Microcontrollers', description: 'ARM, PIC, Embedded Programming', hours: '3 Credits' }
      ],
      mech: [
        { id: 'dom', name: 'Dynamics of Machinery', description: 'Kinematics, Kinetics, Vibrations', hours: '4 Credits' },
        { id: 'ht', name: 'Heat Transfer', description: 'Conduction, Convection, Radiation', hours: '4 Credits' },
        { id: 'dme', name: 'Design of Machine Elements', description: 'Shafts, Gears, Bearings, Springs', hours: '4 Credits' },
        { id: 'cadcam', name: 'CAD/CAM', description: 'Computer-Aided Design and Manufacturing', hours: '3 Credits' },
        { id: 'robotics', name: 'Robotics', description: 'Robot Kinematics, Control, Programming', hours: '4 Credits' }
      ],
      civil: [
        { id: 'structural', name: 'Structural Analysis', description: 'Trusses, Frames, Matrix Methods', hours: '4 Credits' },
        { id: 'geotech', name: 'Geotechnical Engineering', description: 'Soil Properties, Foundation Design', hours: '4 Credits' },
        { id: 'transport', name: 'Transportation Engineering', description: 'Highway Design, Traffic Engineering', hours: '4 Credits' },
        { id: 'hydrology', name: 'Hydrology', description: 'Water Resources, Flood Management', hours: '3 Credits' },
        { id: 'design', name: 'Design of Concrete Structures', description: 'RCC Design, Prestressed Concrete', hours: '4 Credits' }
      ],
      it: [
        { id: 'algorithms', name: 'Algorithms', description: 'Advanced Algorithms and Optimization', hours: '4 Credits' },
        { id: 'cloud', name: 'Cloud Computing', description: 'AWS, Azure, Distributed Systems', hours: '4 Credits' },
        { id: 'se', name: 'Software Engineering', description: 'Agile, DevOps, Software Architecture', hours: '4 Credits' },
        { id: 'aiml', name: 'AI & Machine Learning', description: 'ML Algorithms, Deep Learning Basics', hours: '4 Credits' },
        { id: 'security', name: 'Cybersecurity', description: 'Network Security, Ethical Hacking', hours: '3 Credits' }
      ],
      aids: [
        { id: 'ml', name: 'Machine Learning', description: 'Supervised/Unsupervised Learning, Algorithms', hours: '4 Credits' },
        { id: 'mining', name: 'Data Mining', description: 'Pattern Recognition, Association Rules', hours: '4 Credits' },
        { id: 'dl', name: 'Deep Learning', description: 'Neural Networks, CNN, RNN', hours: '4 Credits' },
        { id: 'ethics', name: 'AI Ethics', description: 'Responsible AI, Bias, Fairness', hours: '3 Credits' },
        { id: 'bigdata', name: 'Big Data Analytics', description: 'Hadoop, Spark, Data Processing', hours: '4 Credits' }
      ]
    },
    '4': {
      cse: [
        { id: 'distributed', name: 'Distributed Systems', description: 'Distributed Computing, Consensus Algorithms', hours: '4 Credits' },
        { id: 'security', name: 'Cybersecurity', description: 'Cryptography, Network Security, Ethical Hacking', hours: '4 Credits' },
        { id: 'cloud', name: 'Cloud Computing', description: 'Cloud Architecture, Services, Deployment', hours: '4 Credits' },
        { id: 'project', name: 'Project Work', description: 'Capstone Project Development', hours: '8 Credits' },
        { id: 'electives', name: 'Technical Electives', description: 'Choose from specialized topics', hours: '6 Credits' }
      ],
      ece: [
        { id: 'wireless', name: 'Wireless Communication', description: '5G, WiFi, Bluetooth Technologies', hours: '4 Credits' },
        { id: 'embedded', name: 'Embedded Systems', description: 'Real-time Systems, IoT Development', hours: '4 Credits' },
        { id: 'antenna', name: 'Antenna & Wave Propagation', description: 'Antenna Design, Electromagnetic Waves', hours: '4 Credits' },
        { id: 'project', name: 'Project Work', description: 'Final Year Project', hours: '8 Credits' },
        { id: 'electives', name: 'Technical Electives', description: 'Specialized ECE Topics', hours: '6 Credits' }
      ],
      mech: [
        { id: 'industrial', name: 'Industrial Engineering', description: 'Operations Research, Quality Control', hours: '4 Credits' },
        { id: 'fea', name: 'Finite Element Analysis', description: 'FEA Software, Structural Analysis', hours: '4 Credits' },
        { id: 'auto', name: 'Automobile Engineering', description: 'Engine Design, Vehicle Dynamics', hours: '4 Credits' },
        { id: 'project', name: 'Project Work', description: 'Mechanical Engineering Project', hours: '8 Credits' },
        { id: 'electives', name: 'Technical Electives', description: 'Advanced Mechanical Topics', hours: '6 Credits' }
      ],
      civil: [
        { id: 'construction', name: 'Construction Management', description: 'Project Planning, Cost Estimation', hours: '4 Credits' },
        { id: 'environmental', name: 'Environmental Engineering', description: 'Water Treatment, Waste Management', hours: '4 Credits' },
        { id: 'advanced', name: 'Advanced Structural Design', description: 'Earthquake Engineering, Wind Design', hours: '4 Credits' },
        { id: 'project', name: 'Project Work', description: 'Civil Engineering Capstone', hours: '8 Credits' },
        { id: 'electives', name: 'Technical Electives', description: 'Specialized Civil Topics', hours: '6 Credits' }
      ],
      it: [
        { id: 'iot', name: 'Internet of Things', description: 'IoT Architecture, Sensor Networks', hours: '4 Credits' },
        { id: 'blockchain', name: 'Blockchain Technology', description: 'Cryptocurrency, Smart Contracts', hours: '4 Credits' },
        { id: 'advanced-web', name: 'Advanced Web Development', description: 'React, Node.js, Full-stack Development', hours: '4 Credits' },
        { id: 'project', name: 'Project Work', description: 'IT Capstone Project', hours: '8 Credits' },
        { id: 'electives', name: 'Technical Electives', description: 'Emerging IT Technologies', hours: '6 Credits' }
      ],
      aids: [
        { id: 'nlp', name: 'Natural Language Processing', description: 'Text Mining, Language Models', hours: '4 Credits' },
        { id: 'rl', name: 'Reinforcement Learning', description: 'RL Algorithms, Game Theory', hours: '4 Credits' },
        { id: 'viz', name: 'Data Visualization', description: 'Interactive Dashboards, D3.js', hours: '4 Credits' },
        { id: 'capstone', name: 'Capstone Project', description: 'AI/DS Industry Project', hours: '8 Credits' },
        { id: 'electives', name: 'Technical Electives', description: 'Advanced AI/DS Topics', hours: '6 Credits' }
      ]
    }
  };

  const getSubjects = () => {
    if (year === '1') {
      return subjectsByYearDept[year]?.all || [];
    }
    return subjectsByYearDept[year]?.[department] || [];
  };

  const subjects = getSubjects();

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
            <Link to={`/department-selection?year=${year}`}>
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Departments
              </Button>
            </Link>
            <div className="flex items-center text-muted-foreground">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span>{yearNames[year as keyof typeof yearNames]} Year • {deptNames[department as keyof typeof deptNames]}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Select Your Subject
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a subject to access comprehensive learning materials and AI tutoring
          </p>
        </motion.div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/learning?year=${year}&department=${department}&subject=${subject.id}`}>
                <div className="card-premium hover-lift bg-background border border-border/50 p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <BookOpen className="h-8 w-8 text-primary flex-shrink-0" />
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {subject.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{subject.hours}</span>
                    </div>
                    <div className="flex items-center text-xs text-primary">
                      <Target className="h-4 w-4 mr-1" />
                      <span>Start Learning</span>
                    </div>
                  </div>
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
            Need personalized study recommendations? Get AI-powered guidance
          </p>
          <Button asChild className="btn-accent">
            <Link to="/ai-tutor">
              Get AI Study Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default SubjectSelection;