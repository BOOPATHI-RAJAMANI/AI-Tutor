import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import StartJourney from "./pages/StartJourney";
import YearSelection from "./pages/YearSelection";
import DepartmentSelection from "./pages/DepartmentSelection";
import SubjectSelection from "./pages/SubjectSelection";
import LearningInterface from "./pages/LearningInterface";
import Login from "./pages/Login";
import ProfileSetup from "./pages/ProfileSetup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      navigate('/login', { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
};

const AppContent = () => {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const noHeaderFooterRoutes = ['/login', '/profile-setup'];
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  // Global profile setup redirection for authenticated users without profile
  useEffect(() => {
    if (loading) return;

    if (user && !profile && location.pathname !== '/profile-setup' && location.pathname !== '/login') {
      navigate('/profile-setup', { replace: true });
    }
  }, [user, profile, loading, navigate, location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/start-journey" element={<StartJourney />} />
          <Route path="/year-selection" element={<YearSelection />} />
          <Route path="/department-selection" element={<DepartmentSelection />} />
          <Route path="/subject-selection" element={<SubjectSelection />} />
          <Route path="/learning" element={<LearningInterface />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile-setup" element={
            <ProtectedRoute>
              <ProfileSetup />
            </ProtectedRoute>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
