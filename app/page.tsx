import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Services } from "@/components/services";
import { SocialProof } from "@/components/social-proof";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <SocialProof />
        <Location />
      </main>
      <Footer />
    </>
  );
}
