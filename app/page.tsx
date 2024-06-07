import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Spotlight } from "./components/ui/Spotlight";
import { Fragment } from "react";
import FeaturedCourses from "./components/FeaturedCourses";
import { BackgroundGradient } from "./components/ui/background-gradient";
export default function Home() {
  return (
    <main className="mt-4 min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <HeroSection/>
        <div className="items-center justify-center text-center">
          <p >Featured Courses</p>
          

        </div>

        <FeaturedCourses/>
        

    </main>
  )
}
