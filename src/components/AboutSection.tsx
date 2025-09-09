import { motion } from 'framer-motion';
import { Bot, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Learning',
      description: 'Advanced artificial intelligence tutoring system that adapts to your learning style and pace.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Connect with fellow students, share knowledge, and learn together in our community-driven platform.',
      color: 'text-secondary'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Resources',
      description: 'Access extensive study materials, lecture notes, assignments, and practice papers for all subjects.',
      color: 'text-accent'
    },
    {
      icon: Award,
      title: 'Excellence Focused',
      description: 'Designed to help engineering students achieve academic excellence and professional success.',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <BookOpen className="h-4 w-4" />
                <span>About Our Portal</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Revolutionizing Engineering Education with{' '}
                <span className="text-gradient-primary">Smart Technology</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                EduPortal AI is a comprehensive educational platform designed specifically for engineering students. 
                We combine cutting-edge artificial intelligence with proven educational methodologies to create 
                a personalized learning experience that adapts to each student's unique needs and learning style.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gradient-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Students Empowered</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gradient-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Study Resources</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gradient-accent">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gradient-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-hero">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-outline-premium">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="card-premium group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-background to-surface border border-border/50 flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="card-hero">
              <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "To democratize quality engineering education by providing intelligent, 
                personalized learning experiences that empower every student to achieve their full potential. 
                We believe that with the right tools, guidance, and support, every engineering student 
                can excel and contribute meaningfully to technological advancement."
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="btn-accent">
                  <Link to="/start-journey">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;