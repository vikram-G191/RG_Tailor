import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
export default function HomePage() {
  return (
    <main>
      <Navbar/>
<Hero/>
<About/>
<Services/>
<Gallery/>
<Contact/>
    </main>
  );
}
