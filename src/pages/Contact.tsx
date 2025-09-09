import { motion } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Users,
  BookOpen,
  Bot
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['support@eduportal-ai.com', 'info@eduportal-ai.com'],
      description: 'Send us your questions or feedback anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
      description: 'Speak with our support team during business hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Education Street', 'Tech City, TC 12345'],
      description: 'Come to our headquarters for in-person support'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      description: 'Our team is available during these hours'
    }
  ];

  const supportOptions = [
    {
      icon: Bot,
      title: 'AI Tutor Support',
      description: 'Get help with AI tutoring features and learning recommendations',
      action: 'Chat with AI'
    },
    {
      icon: BookOpen,
      title: 'Academic Support',
      description: 'Need help with course content or study materials?',
      action: 'Get Academic Help'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other students and share knowledge',
      action: 'Join Community'
    },
    {
      icon: Globe,
      title: 'Technical Support',
      description: 'Platform issues, login problems, or technical difficulties',
      action: 'Report Issue'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you succeed in your engineering journey. 
            Reach out to us for support, questions, or just to say hello!
          </p>
        </motion.div>

        {/* Quick Support Options */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              className="card-premium text-center hover-lift cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <option.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{option.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
              <Button size="sm" variant="outline" className="w-full">
                {option.action}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-card border border-border/50 rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <MessageCircle className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input placeholder="How can we help you?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us more about your question or feedback..."
                  rows={6}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="newsletter" className="rounded" />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  Subscribe to our newsletter for updates and learning tips
                </label>
              </div>
              
              <Button className="w-full btn-hero">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">{detail}</p>
                      ))}
                      <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <motion.div
              className="bg-card border border-border/50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-border/50 pb-4">
                  <h3 className="font-semibold text-foreground mb-2">How does the AI tutor work?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI tutor uses advanced machine learning to adapt to your learning style and provide personalized guidance.
                  </p>
                </div>
                <div className="border-b border-border/50 pb-4">
                  <h3 className="font-semibold text-foreground mb-2">Is the platform free to use?</h3>
                  <p className="text-sm text-muted-foreground">
                    We offer both free and premium plans. Basic features are available for free, with advanced features in our premium plans.
                  </p>
                </div>
                <div className="border-b border-border/50 pb-4">
                  <h3 className="font-semibold text-foreground mb-2">What subjects are covered?</h3>
                  <p className="text-sm text-muted-foreground">
                    We cover all major engineering subjects across 6 departments with comprehensive materials for all 4 years.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How can I contribute resources?</h3>
                  <p className="text-sm text-muted-foreground">
                    You can contribute by sharing your notes, creating content, or helping other students through our community features.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">Need Immediate Help?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                For urgent academic support or technical issues
              </p>
              <Button variant="outline" className="btn-outline-premium">
                <Phone className="mr-2 h-4 w-4" />
                Call Support: (555) 123-HELP
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;