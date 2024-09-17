"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/ml-agent.png",
    title: "Walker Agent",
    description:
      "This project involves creating and training a walker agent using Unity's ML-Agents toolkit. The walker learns to stand, walk, and balance through reinforcement learning.",
    skills: [
      "Unity",
      "C#",
      "AI",
      "Reinforcement Learning",
      "ML-Agents",
    ],
    link: "https://github.com/Kooroshoo/ml-agents",
  },
  {
    imagePath: "/mario.png",
    title: "A 2D Game Engine",
    description:
      "A 2D Game Engine written in C++ and the SFML library",
    skills: [
      "C++",
      "SFML",
    ],
    link: "https://github.com/Kooroshoo/KEngine",
  },
  {
    imagePath: "/conway.png",
    title: "Conway's Game of Life",
    description:
      "Conway's Game of Life is a zero-player game simulating cell evolution with simple rules, displayed in a web browser.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: "https://github.com/Kooroshoo/Conway-s-Game-of-Life",
  },
  {
    imagePath: "/games.png",
    title: "Games, Games and More Games",
    description:
      "Developed several games using Unity, including Afterlife: Dogs of Eden, Pigeons Aren't Real, and Towards the Light.",
    skills: [
      "Unity",
      "C#",
    ],
    link: "https://www.youtube.com/watch?v=MjI8Fg1PuDg&ab_channel=Kooroshoo",
  },
  {
    imagePath: "/crowd.png",
    title: "Pedestrian Simulation",
    description:
      "Implemented crowd simulation in Unity using the BOIDS and ORCA models to create realistic and dynamic group behaviors.",
    skills: ["Unity", "C#", "AI"],
    link: "https://github.com/Kooroshoo/Pedestrian-Simulation-Final-",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
