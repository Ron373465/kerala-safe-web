import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-3 px-4 md:px-8 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/placeholder.svg" alt="Kerala Police Logo" className="h-10 w-10" />
          <span className="font-semibold text-lg md:text-xl">Kerala Police</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-blue-200 transition">Home</a>
          <a href="#initiatives" className="hover:text-blue-200 transition">Initiatives</a>
          <a href="#resources" className="hover:text-blue-200 transition">Resources</a>
          <a href="#about" className="hover:text-blue-200 transition">About</a>
        </div>
        
        <Button variant="destructive" className="flex items-center space-x-2">
          <Phone size={16} className="animate-pulse" />
          <span className="font-bold">Emergency: 1098</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
