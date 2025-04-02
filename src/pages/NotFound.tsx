
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Pagina Niet Gevonden | INNOVISUAL";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">404</h1>
          <p className="text-xl text-innovisual-muted mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Deze pagina bestaat niet
          </p>
          <Link to="/" className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button className="bg-innovisual text-white hover:bg-innovisual-light">
              Terug naar home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
