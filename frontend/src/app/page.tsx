export const dynamic = "force-dynamic";

import { getPortfolio } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Qualifications from "@/components/Qualifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home() {
  const portfolio = await getPortfolio();

  return (
    <main className="min-h-screen">
      <Navbar name={portfolio.profile.name} />
      <Hero profile={portfolio.profile} />
      <Skills skills={portfolio.skills} />
      <Qualifications qualifications={portfolio.qualifications} />
      <Projects projects={portfolio.projects} />
      <Contact contact={portfolio.contact} />
      <Footer name={portfolio.profile.name} contact={portfolio.contact} />
    </main>
  );
}
