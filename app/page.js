import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { ContactSection } from "./components/ContactSection";
import { Header } from "./components/Header";

export default function Home() {
  const hats = [
    {
      prep: '',
      suffix: 'New Look, Coming Soon'
    },
    
  ];
  return (
    <main className="h-screen w-screen bg-black flex flex-col items-center align-middle">
      <NavBar/>

      <Header/>
      <ContactSection/>
    </main>
  );
}
