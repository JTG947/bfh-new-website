import { Encryption } from "../components/main/encryption";
import { Hero } from "../components/main/hero";
import { Projects } from "../components/main/projects";
import { Skills } from "../components/main/skills";
import { Navbar } from "../components/main/navbar"
import  Sidebar  from "@/components/main/sidebar";
import About from "../components/main/about"



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Navbar />
        <Sidebar />
      
      </div>
    </main>
  );
}
