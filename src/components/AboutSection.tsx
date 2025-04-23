
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-[#0A3D62] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Mission</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Kerala Police is committed to creating a drug-free Kerala through proactive enforcement, 
            education, and community collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why We Fight Drug Abuse</h3>
            <p className="mb-6">
              Drug abuse devastates individuals, families, and communities. It contributes to crime, 
              health problems, and social issues that affect everyone in our society.
            </p>
            <p className="mb-6">
              Our anti-drug initiatives aim to prevent drug use before it starts, help those struggling 
              with addiction, and stop drug trafficking through effective law enforcement.
            </p>
            <p>
              Together, we can create a safer, healthier Kerala where our children can grow up 
              free from the dangers of drug abuse.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80" 
              alt="Say No to Drugs Campaign" 
              className="rounded-lg shadow-xl w-full h-80 object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
