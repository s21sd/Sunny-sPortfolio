import { CardStackDemo } from "@/components/Achievement";
import FirstComp from "@/components/FirstComp";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";
import { Whyme } from "@/components/Whyme";
import { Works } from "@/components/Works";
export default function Home() {
  return (
    <div>

      <FirstComp />
      <Whyme />
      <CardStackDemo />
      <Works />
      <Skills />
      <Footer />

    </div>
  );
}
