"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I'm a software engineer with a focus on creating sofware, video games and simulations. I have hands-on experience developing applications for{" "}
          <span className="text-white">
            virtual reality (VR) and augmented reality (AR)
          </span>{" "}
          , using advanced technologies to build engaging and interactive experiences.
        </p>

        <p className="text-start text-muted-foreground lg:px-6">
           In addition to my expertise in VR/AR, I'm deeply interested in{" "}
          <span className="text-white">
            artificial intelligence (AI) and machine learning
          </span>{" "} 
          , exploring how these technologies can integrate with my work and create new exciting opportunities.
        </p>

        <p className="text-start  text-muted-foreground lg:px-6">
          I'm always eager to learn and experiment with new technologies, constantly looking for ways to improve my skills and create more interesting and engaging software.{" "}
        </p>
        
      </div>
    </section>
  );
}
