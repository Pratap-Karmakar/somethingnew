import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marque";
import MainService from "@/sections/MainService";
import AboutPage from "@/sections/AboutPage";
import CircularTeamDisplay from "@/sections/OurTeam";

export default function Home() {
  return <div className="bg-black h-screen text-white">
    <Header/>
    <Hero/>
    <Marquee/>
    <AboutPage/>
    <MainService/>
    <CircularTeamDisplay/>
    <Footer/>
  </div>;
}