import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen,
  Bot,
  Users,
  Target,
  Lightbulb,
  Award,
  ArrowRight,
  CheckCircle,
  Zap,
  Heart,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Tutoring',
      description: 'Personalized learning with intelligent AI tutors available 24/7 to help you understand complex concepts.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Resources',
      description: 'Access to extensive study materials, notes, previous papers, and practical examples for all engineering subjects.',
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Join study groups, participate in discussions, and learn from your peers across all engineering disciplines.',
    },
    {
      icon: Target,
      title: 'Structured Learning Path',
      description: 'Follow a carefully designed curriculum that takes you from basics to advanced concepts systematically.',
    }
  ];

  const achievements = [
    { number: '10,000+', label: 'Students Served' },
    { number: '6', label: 'Engineering Departments' },
    { number: '200+', label: 'Subjects Covered' },
    { number: '24/7', label: 'AI Tutor Available' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Academic Officer',
      description: 'Former MIT professor with 15 years of experience in engineering education and AI research.',
      image: '👩‍🏫'
    },
    {
      name: 'Alex Chen',
      role: 'AI Development Lead',
      description: 'Machine learning expert who developed our adaptive learning algorithms.',
      image: '👨‍💻'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Curriculum Designer',
      description: 'Educational specialist who creates engaging and effective learning experiences.',
      image: '👩‍🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
            About EduPortal AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Revolutionizing engineering education with AI-powered personalized learning, 
            comprehensive resources, and innovative teaching methodologies.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="bg-card border border-border/50 rounded-2xl p-8 mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To democratize quality engineering education by making it accessible, personalized, and engaging for every student. 
              We believe that with the right guidance and resources, every aspiring engineer can achieve excellence and contribute 
              meaningfully to solving the world's greatest challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-foreground">Accessible Education</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-foreground">Personalized Learning</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-foreground">Innovation Focus</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose EduPortal AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card-premium text-center h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-2">Our Impact</h2>
            <p className="text-muted-foreground">Making a difference in engineering education worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-2">Meet Our Team</h2>
            <p className="text-muted-foreground">Passionate educators and technologists working to transform learning</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="card-premium text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <div className="text-primary font-medium mb-3">{member.role}</div>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="bg-card border border-border/50 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We envision a world where every student has access to world-class engineering education, 
                regardless of their location or background. Through AI-powered personalization and 
                innovative teaching methods, we're building the future of learning.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground">Cutting-edge AI technology</span>
                </div>
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground">Innovative learning experiences</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground">Global accessibility</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
              <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">AI at the Core</h3>
              <p className="text-muted-foreground">
                Our advanced AI algorithms adapt to each student's learning style, 
                providing personalized recommendations and support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already transforming their engineering education with EduPortal AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-hero">
              <Link to="/year-selection">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-outline-premium">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;