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
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">404</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Oops — this page fell asleep during a 2 a.m. coding session.
        </p>
        <a href="/" className="inline-block px-4 py-2 rounded border hover:bg-accent hover:text-accent-foreground transition-colors">
          Head back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
