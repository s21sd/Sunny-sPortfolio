import { CardStackDemo } from "@/components/Achievement";
import FirstComp from "@/components/FirstComp";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";
import { Whyme } from "@/components/Whyme";
import { Works } from "@/components/Works";
import { Navbar } from "@/pages/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstComp />
      <Whyme />
      <CardStackDemo />
      <Works />
      <Skills />
      <Footer />

    </div>
  );
}
