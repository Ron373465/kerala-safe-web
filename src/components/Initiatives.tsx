
import { Shield, AlertTriangle, Info } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Initiatives = () => {
  return (
    <section id="initiatives" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A3D62]">Our Initiatives</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kerala Police is implementing comprehensive strategies to combat drug abuse through education, 
            enforcement, and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-[#0A3D62] hover:shadow-lg transition duration-300">
            <CardContent className="pt-6">
              <div className="mb-4 bg-blue-100 rounded-full p-3 w-fit">
                <Shield className="h-8 w-8 text-[#0A3D62]" />
              </div>
              <h3 className="text-xl font-bold mb-2">School Protection</h3>
              <p className="text-gray-600">
                Our officers visit schools to educate students on the dangers of drug use and how to resist peer pressure.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-[#EA2027] hover:shadow-lg transition duration-300">
            <CardContent className="pt-6">
              <div className="mb-4 bg-red-100 rounded-full p-3 w-fit">
                <AlertTriangle className="h-8 w-8 text-[#EA2027]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Anti-Drug Campaigns</h3>
              <p className="text-gray-600">
                Regular awareness campaigns in communities to inform the public about the dangers and legal consequences of drug abuse.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-[#3498db] hover:shadow-lg transition duration-300">
            <CardContent className="pt-6">
              <div className="mb-4 bg-blue-100 rounded-full p-3 w-fit">
                <Info className="h-8 w-8 text-[#3498db]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Partnerships</h3>
              <p className="text-gray-600">
                Working with local organizations, healthcare providers, and community leaders to create a united front against drug abuse.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
