
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Resources = () => {
  return (
    <section id="resources" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A3D62]">Help & Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Support is available for those affected by drug abuse. Recovery is possible, and we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition duration-300">
            <div className="grid md:grid-cols-3">
              <div className="bg-[#0A3D62] text-white p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-3">For Drug Users</h3>
                <p className="mb-4">Help is available. Take the first step toward recovery.</p>
                <Button className="bg-white text-[#0A3D62] hover:bg-blue-100">Get Help</Button>
              </div>
              <div className="md:col-span-2 p-6 md:p-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-[#0A3D62] rounded-full p-1 mr-3 mt-0.5">&#10003;</span>
                    <span>Free counseling services available 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-[#0A3D62] rounded-full p-1 mr-3 mt-0.5">&#10003;</span>
                    <span>Rehabilitation centers throughout Kerala</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-[#0A3D62] rounded-full p-1 mr-3 mt-0.5">&#10003;</span>
                    <span>Support groups for recovery and maintaining sobriety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-[#0A3D62] rounded-full p-1 mr-3 mt-0.5">&#10003;</span>
                    <span>Medical assistance for withdrawal and recovery</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition duration-300">
            <div className="grid md:grid-cols-3">
              <div className="bg-[#EA2027] text-white p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-3">For Families</h3>
                <p className="mb-4">Get support in helping your loved ones through addiction.</p>
                <Button className="bg-white text-[#EA2027] hover:bg-red-100">Family Support</Button>
              </div>
              <div className="md:col-span-2 p-6 md:p-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-red-100 text-[#EA2027] rounded-full p-1 mr-3 mt-0.5">&#10003;</span>
                    <span>Family counseling sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-[#EA2027] rounded-full p-1 mr-3 mt-0.5">&#10003;</span>
                    <span>Educational resources on addiction and recovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-[#EA2027] rounded-full p-1 mr-3 mt-0.5">&#10003;</span>
                    <span>Support groups for families affected by addiction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-[#EA2027] rounded-full p-1 mr-3 mt-0.5">&#10003;</span>
                    <span>Guidance on intervention strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;
