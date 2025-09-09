import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FolderOpen,
  FileText,
  Download,
  BookOpen,
  Calendar,
  Monitor,
  Zap,
  Cog,
  Building,
  Smartphone,
  Bot,
  Search,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Resources = () => {
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const years = [
    { id: '1', name: '1st Year', icon: Calendar },
    { id: '2', name: '2nd Year', icon: Calendar },
    { id: '3', name: '3rd Year', icon: Calendar },
    { id: '4', name: '4th Year', icon: Calendar }
  ];

  const departments = [
    { id: 'cse', name: 'Computer Science Engineering', icon: Monitor },
    { id: 'ece', name: 'Electronics & Communication Engineering', icon: Zap },
    { id: 'mech', name: 'Mechanical Engineering', icon: Cog },
    { id: 'civil', name: 'Civil Engineering', icon: Building },
    { id: 'it', name: 'Information Technology', icon: Smartphone },
    { id: 'aids', name: 'AI & Data Science', icon: Bot }
  ];

  // Sample resources data
  const resourcesBySubject = {
    'math1': [
      { name: 'Calculus Fundamentals.pdf', type: 'Lecture Notes', size: '2.3 MB', downloads: 245 },
      { name: 'Linear Algebra Problems.pdf', type: 'Question Bank', size: '1.8 MB', downloads: 189 },
      { name: 'Math I Syllabus.pdf', type: 'Syllabus', size: '456 KB', downloads: 156 },
      { name: 'Differential Equations PPT.pptx', type: 'Presentation', size: '3.2 MB', downloads: 98 }
    ],
    'physics': [
      { name: 'Mechanics Notes.pdf', type: 'Lecture Notes', size: '2.1 MB', downloads: 234 },
      { name: 'Thermodynamics Lab Manual.pdf', type: 'Lab Manual', size: '1.5 MB', downloads: 167 },
      { name: 'Physics Previous Papers.pdf', type: 'Previous Papers', size: '2.8 MB', downloads: 298 }
    ],
    'ds': [
      { name: 'Data Structures Complete Notes.pdf', type: 'Lecture Notes', size: '4.2 MB', downloads: 456 },
      { name: 'Algorithm Implementation.zip', type: 'Code Files', size: '1.2 MB', downloads: 234 },
      { name: 'DS Practice Problems.pdf', type: 'Assignments', size: '1.9 MB', downloads: 345 }
    ]
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Lecture Notes': 'bg-primary/10 text-primary',
      'Question Bank': 'bg-secondary/10 text-secondary',
      'Syllabus': 'bg-accent/10 text-accent',
      'Presentation': 'bg-purple-100 text-purple-700',
      'Lab Manual': 'bg-green-100 text-green-700',
      'Previous Papers': 'bg-orange-100 text-orange-700',
      'Code Files': 'bg-blue-100 text-blue-700',
      'Assignments': 'bg-red-100 text-red-700'
    };
    return colors[type as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  const filteredResources = Object.entries(resourcesBySubject).reduce((acc, [subject, resources]) => {
    const filtered = resources.filter(resource =>
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[subject] = filtered;
    }
    return acc;
  }, {} as typeof resourcesBySubject);

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
            Learning Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive study materials, notes, and resources for all engineering subjects
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="bg-card border border-border/50 rounded-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Year Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Filter className="inline h-4 w-4 mr-2" />
                Select Year
              </label>
              <div className="grid grid-cols-2 gap-2">
                {years.map((year) => (
                  <button
                    key={year.id}
                    onClick={() => setSelectedYear(selectedYear === year.id ? '' : year.id)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      selectedYear === year.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-background text-foreground hover:border-primary/50'
                    }`}
                  >
                    <year.icon className="h-4 w-4 mx-auto mb-1" />
                    <div className="text-xs font-medium">{year.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Department Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Select Department
              </label>
              <div className="grid grid-cols-2 gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(selectedDepartment === dept.id ? '' : dept.id)}
                    className={`p-3 rounded-lg border transition-all duration-200 text-center ${
                      selectedDepartment === dept.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-background text-foreground hover:border-primary/50'
                    }`}
                  >
                    <dept.icon className="h-4 w-4 mx-auto mb-1" />
                    <div className="text-xs font-medium">{dept.name.split(' ')[0]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Search className="inline h-4 w-4 mr-2" />
                Search Resources
              </label>
              <Input
                placeholder="Search by name or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12"
              />
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 w-full"
                onClick={() => {
                  setSelectedYear('');
                  setSelectedDepartment('');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Resources Grid */}
        {!selectedYear || !selectedDepartment ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FolderOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Select Year & Department
            </h3>
            <p className="text-muted-foreground mb-6">
              Choose your academic year and department to view available resources
            </p>
            <Button asChild className="btn-hero">
              <Link to="/year-selection">
                Browse by Learning Path
              </Link>
            </Button>
          </motion.div>
        ) : (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {Object.entries(filteredResources).map(([subject, resources]) => (
              <div key={subject} className="bg-card border border-border/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold text-foreground capitalize">
                    {subject === 'math1' ? 'Mathematics I' : 
                     subject === 'ds' ? 'Data Structures' : 
                     subject.charAt(0).toUpperCase() + subject.slice(1)}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources.map((resource, index) => (
                    <motion.div
                      key={index}
                      className="border border-border/50 rounded-lg p-4 hover:border-primary/50 hover:shadow-card transition-all duration-200 group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                        <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>

                      <h4 className="font-medium text-foreground mb-2 line-clamp-2">
                        {resource.name}
                      </h4>

                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(resource.type)}`}>
                          {resource.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{resource.size}</span>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        {resource.downloads} downloads
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {Object.keys(filteredResources).length === 0 && (
              <div className="text-center py-16">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No Resources Found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Upload Request */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="text-muted-foreground mb-4">
            Request specific study materials or contribute your own resources to help fellow students
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" className="btn-outline-premium">
              Request Resource
            </Button>
            <Button className="btn-accent">
              Contribute Resources
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;