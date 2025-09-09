import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'About the Portal',
      links: [
        { name: 'Our Vision', href: '/about' },
        { name: 'Mission Statement', href: '/about' },
        { name: 'Our Team', href: '/about' },
        { name: 'Start Your Journey', href: '/start-journey' },
        { name: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Start Journey', href: '/start-journey' },
        { name: 'Resources', href: '/resources' },
        { name: 'AI Learning', href: '/learning' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Academic Paths',
      links: [
        { name: 'Year Selection', href: '/year-selection' },
        { name: 'Department Selection', href: '/department-selection' },
        { name: 'Subject Selection', href: '/subject-selection' },
        { name: 'Learning Interface', href: '/learning' },
        { name: 'Study Resources', href: '/resources' },
        { name: 'AI Tutor', href: '/learning' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Study Materials', href: '/resources' },
        { name: 'Academic Resources', href: '/resources' },
        { name: 'Learning Tools', href: '/resources' },
        { name: 'Video Tutorials', href: '/resources' },
        { name: 'Practice Papers', href: '/resources' }
      ]
    },
    {
      title: 'Support & Help',
      links: [
        { name: 'Get Help', href: '/contact' },
        { name: 'Technical Support', href: '/contact' },
        { name: 'Feedback', href: '/contact' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Help Center', href: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-surface via-background to-surface border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/" className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <BookOpen className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gradient-primary">EduPortal AI</h3>
                    <p className="text-sm text-muted-foreground">Smart Learning Platform</p>
                  </div>
                </Link>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Empowering engineering students with AI-powered learning experiences. 
                  Join thousands of students who have transformed their academic journey with our intelligent tutoring system.
                </p>
                
                <Button asChild className="btn-hero w-full sm:w-auto">
                  <Link to="/year-selection">
                    Start Learning Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="font-semibold text-foreground text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter & Contact Section */}
        <div className="py-12 border-t border-border/50">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Newsletter */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">Stay Updated</h4>
                <p className="text-muted-foreground text-sm">
                  Subscribe to our newsletter for the latest updates, study resources, and AI tutoring tips.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button className="btn-accent">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      123 Education Street, Tech City, TC 12345
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">info@eduportal-ai.com</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="font-medium text-foreground mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 rounded-lg bg-surface border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-200 ${social.color} hover:scale-110 hover:border-primary/50`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <p>&copy; {currentYear} EduPortal AI. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Powered by</span>
              <span className="text-gradient-accent font-medium">AI Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;