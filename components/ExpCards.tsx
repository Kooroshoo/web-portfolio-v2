"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Jan 2024 — Present",
    currentPosition: "Junior Technician in Augmented Reality and Computer Vision",
    previousPositions: ["Istituto Italiano di Tecnologia"],
    description:
      "As a technician at IIT, I develop the MEMEX and BoSS Android apps using Unity C#, AR Core, and manage backend servers with Flask, Strapi, and Docker, integrating data with 3D Gaussian splatting models.",
    skills: [
      "Unity",
      "C#",
      "UI/UX Design",
      "Google ARCore",
      "Python",
      "Flask",
      "Strapi",
      "Docker",
      "3DGS",
      "Git",
      "Linux"
    ],
    link: "https://www.masmasak.com/memex" // Add actual link if available
  },
  {
    timeline: "Sep 2021 — Dec 2023",
    currentPosition: "Software Engineer for Mixed Reality Software and Simulation",
    previousPositions: ["Istituto Italiano di Tecnologia"],
    description:
      "As lead developer at IIT, I worked on the INAIL mixed reality training project, \"Caduta dall'Alto,\" focusing on VR development and UE4 C++ to create a VR simulation for training workers at height.",
    skills: [
      "Unreal Engine 4",
      "C++",
      "Virtual Reality (VR)",
      "Motion Capture",
      "OpenXR",
      "Node.js",
      "Git",
      "Perforce"
    ],
    link: "https://www.masmasak.com/ffh" // Add actual link if available
  },
  {
    timeline: "Oct 2020 — Mar 2021",
    currentPosition: "UE4 Programmer",
    previousPositions: ["AnteMotion"],
    description:
      "I completed a 6-month internship at AnteMotion, where I implemented a virtual LIDAR sensor in Unreal Engine using C++ for automotive ADAS driving simulation. My master's thesis was also closely related to this work.",
    skills: [
      "Unreal Engine 4",
      "C++",
      "Transmission Control Protocol (TCP)",
      "User Datagram Protocol (UDP)",
      "LiDAR",
      "Point Clouds"
    ],
    link: "https://www.masmasak.com/lidar" // Add actual link if available
  },
  {
    timeline: "Jun 2015 — Aug 2015",
    currentPosition: "Website Developer",
    previousPositions: [
      "Amirkabir University of Technology",
    ],
    description:
      "During my 3-month internship at Amirkabir University of Technology I developed and managed websites using WordPress. The topic of my bachelor's thesis was also relevant to my internship.",
    skills: [
      "WordPress",
      "Joomla!",
      "HTML",
      "CSS"
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <a
            key={index}
            href={job.link} // Use the link from the job position data
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card
              className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
            >
              <CardHeader className="h-full w-full p-0">
                <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                  {job.timeline}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col p-0">
                <p className="text-foreground font-bold">
                  {job.currentPosition}
                </p>
                {job.previousPositions.map((position, index) => (
                  <p key={index} className="text-slate-400 text-sm font-bold">
                    {position}
                  </p>
                ))}
                <CardDescription className="py-3 text-muted-foreground">
                  {job.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
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
