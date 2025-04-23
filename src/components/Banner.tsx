
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-[#0A3D62] to-[#3867d6] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Say No to Drugs for a Safer Kerala
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Join Kerala Police in our mission to combat drug abuse and create a healthier, safer society.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#EA2027] hover:bg-red-700">
                Report Drug Activity
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#0A3D62]">
                Get Help Now
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80" 
              alt="Kerala Landscape" 
              className="rounded-lg shadow-xl max-h-96 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
