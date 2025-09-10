import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Import hero images
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: hero1,
      title: "Learn Smarter with AI Tutor",
      subtitle: "Personalized Learning Experience",
      description: "Experience the future of education with our AI-powered tutoring system designed specifically for engineering students.",
      cta: "Start Learning Now",
      ctaLink: "/year-selection"
    },
    {
      id: 2,
      image: hero2,
      title: "Your Personalized Learning Companion",
      subtitle: "Advanced AI Technology",
      description: "Get instant help, explanations, and guidance from our intelligent tutoring system available 24/7 for all engineering subjects.",
      cta: "Explore AI Tutor",
      ctaLink: "/ai-tutor"
    },
    {
      id: 3,
      image: hero3,
      title: "Engineering Excellence Redefined",
      subtitle: "Comprehensive Education Portal",
      description: "Access resources, study materials, and collaborative learning tools across all engineering departments and academic years.",
      cta: "View Resources",
      ctaLink: "/resources"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
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

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center space-x-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>{slides[currentSlide].subtitle}</span>
                </motion.div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient-primary">
                    {slides[currentSlide].title}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {slides[currentSlide].description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="btn-hero">
                    <Link to={slides[currentSlide].ctaLink}>
                      {slides[currentSlide].cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="btn-outline-premium">
                    <Play className="mr-2 h-5 w-5" />
                     <Link to="/about">
                    Watch Demo
                 </Link>
                  </Button>
              
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gradient-primary">4</div>
                    <div className="text-sm text-muted-foreground">Years of Study</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gradient-secondary">6</div>
                    <div className="text-sm text-muted-foreground">Departments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gradient-accent">24/7</div>
                    <div className="text-sm text-muted-foreground">AI Support</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Content - Image Slider */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-accent scale-125'
                        : 'bg-background/60 hover:bg-background/80'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play control */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-all duration-200"
              >
                {isAutoPlaying ? (
                  <motion.div
                    className="w-2 h-2 bg-accent rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-accent" />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary/20 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
