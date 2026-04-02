import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Flavors from './components/Flavors';
import Story from './components/Story';
import Experience from './components/Experience';
import SocialProof from './components/SocialProof';
import StoreLocator from './components/StoreLocator';
import Shop from './components/Shop';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-drp-black">
      <Navbar />
      <main>
        <Hero />
        <Flavors />
        <Story />
        <Experience />
        <SocialProof />
        <StoreLocator />
        <Shop />
      </main>
      <Footer />
    </div>
  );
}
