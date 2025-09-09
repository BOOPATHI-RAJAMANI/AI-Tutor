import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  BookOpen, 
  Play, 
  FileText, 
  CheckCircle,
  ArrowLeft,
  GraduationCap,
  Bot,
  Send,
  MessageCircle,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LearningInterface = () => {
  const [searchParams] = useSearchParams();
  const year = searchParams.get('year') || '1';
  const department = searchParams.get('department') || 'cse';
  const subject = searchParams.get('subject') || 'math1';

  const [chatMinimized, setChatMinimized] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('ch1');

  const yearNames = { '1': 'First', '2': 'Second', '3': 'Third', '4': 'Fourth' };
  const deptNames = {
    cse: 'Computer Science Engineering',
    ece: 'Electronics & Communication Engineering', 
    mech: 'Mechanical Engineering',
    civil: 'Civil Engineering',
    it: 'Information Technology',
    aids: 'AI & Data Science'
  };

  // Sample course structure - would come from API/database
  const courseContent = [
    {
      id: 'ch1',
      title: 'Introduction & Fundamentals',
      lessons: [
        { id: 'l1', title: 'Basic Concepts', duration: '12 min', completed: true },
        { id: 'l2', title: 'Core Principles', duration: '18 min', completed: true },
        { id: 'l3', title: 'Practical Applications', duration: '15 min', completed: false }
      ]
    },
    {
      id: 'ch2',
      title: 'Advanced Topics',
      lessons: [
        { id: 'l4', title: 'Complex Problems', duration: '25 min', completed: false },
        { id: 'l5', title: 'Case Studies', duration: '20 min', completed: false },
        { id: 'l6', title: 'Industry Examples', duration: '30 min', completed: false }
      ]
    },
    {
      id: 'ch3',
      title: 'Practical Implementation',
      lessons: [
        { id: 'l7', title: 'Hands-on Lab', duration: '45 min', completed: false },
        { id: 'l8', title: 'Project Work', duration: '60 min', completed: false },
        { id: 'l9', title: 'Assessment', duration: '30 min', completed: false }
      ]
    }
  ];

  const chatMessages = [
    { type: 'ai', message: 'Hello! I\'m your AI tutor. How can I help you with this topic today?' },
    { type: 'user', message: 'Can you explain the main concept of this lesson?' },
    { type: 'ai', message: 'Of course! The main concept focuses on understanding the fundamental principles. Let me break it down into simpler parts...' }
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Handle message sending logic here
      setChatMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <Link to={`/subject-selection?year=${year}&department=${department}`}>
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Subjects
              </Button>
            </Link>
            <div className="flex items-center text-muted-foreground text-sm">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span>{yearNames[year as keyof typeof yearNames]} Year • {deptNames[department as keyof typeof deptNames]}</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-foreground">
            Mathematics I - Introduction & Fundamentals
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Left Sidebar - Course Content */}
          <motion.div
            className="lg:col-span-1 bg-card border border-border/50 rounded-lg p-4 overflow-y-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <BookOpen className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-semibold text-foreground">Course Content</h3>
            </div>

            <div className="space-y-4">
              {courseContent.map((chapter) => (
                <div key={chapter.id} className="border border-border/30 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setSelectedChapter(selectedChapter === chapter.id ? '' : chapter.id)}
                    className="w-full p-3 text-left bg-surface hover:bg-surface/80 transition-colors"
                  >
                    <div className="font-medium text-foreground text-sm">{chapter.title}</div>
                  </button>
                  
                  {selectedChapter === chapter.id && (
                    <div className="bg-background">
                      {chapter.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between p-3 border-t border-border/30 hover:bg-surface/50 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            {lesson.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <Play className="h-4 w-4 text-muted-foreground" />
                            )}
                            <div>
                              <div className="text-sm font-medium text-foreground">{lesson.title}</div>
                              <div className="text-xs text-muted-foreground">{lesson.duration}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            className={`${chatMinimized ? 'lg:col-span-3' : 'lg:col-span-2'} bg-card border border-border/50 rounded-lg p-6 flex flex-col`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Play className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Basic Concepts</h2>
                  <p className="text-sm text-muted-foreground">Chapter 1, Lesson 1 • 12 minutes</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Notes
              </Button>
            </div>

            {/* Video/Content Placeholder */}
            <div className="flex-1 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center border-2 border-dashed border-border/50">
              <div className="text-center">
                <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Video Content</h3>
                <p className="text-muted-foreground">Video player and learning materials will be displayed here</p>
                <Button className="mt-4 btn-hero">
                  Start Lesson
                </Button>
              </div>
            </div>
          </motion.div>

          {/* AI Tutor Chat Panel */}
          {!chatMinimized && (
            <motion.div
              className="lg:col-span-1 bg-card border border-border/50 rounded-lg flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-border/50">
                <div className="flex items-center">
                  <Bot className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-semibold text-foreground">AI Tutor</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setChatMinimized(true)}
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        msg.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-surface text-foreground'
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-border/50">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask your AI tutor..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button size="sm" onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Minimized Chat Button */}
        {chatMinimized && (
          <motion.div
            className="fixed bottom-6 right-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              className="rounded-full w-14 h-14 shadow-glow"
              onClick={() => setChatMinimized(false)}
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LearningInterface;