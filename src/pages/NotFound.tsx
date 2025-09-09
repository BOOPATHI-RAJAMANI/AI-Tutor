import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gradient-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg hover:scale-105 transition-all duration-200 hover:shadow-glow"
          >
            Return to Home
          </a>
          <div className="text-sm text-muted-foreground">
            or go back to{" "}
            <a href="/academics" className="text-primary hover:underline">
              start learning
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
