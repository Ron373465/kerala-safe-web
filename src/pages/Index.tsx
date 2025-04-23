
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Initiatives from "@/components/Initiatives";
import Resources from "@/components/Resources";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Banner />
        <Initiatives />
        <Resources />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
