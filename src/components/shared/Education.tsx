import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Education() {
  const data = [
    {
      title: "B.Tech in CS",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm xl:text-lg font-normal mb-8">
            I am currently pursuing  in my B.Tech in Computer Science & Engineering from College of Engineering & Management, Kolaghat. 
            <br />
            I got 79.1% upto 6th semester.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: "Higher Secondary",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs xl:text-lg  md:text-sm font-normal mb-8">
            I have completed my Higher Secondary from Tamluk Hamilton High School in 2020. 
            <br />
            I got 87.8% in my Higher Secondary.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: "Secondary",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm xl:text-lg  font-normal mb-4">
            I have completed my Secondary from Tamluk Hamilton High School in 2018. 
            <br />
            I got 89.1% in my Secondary.
          </p>
          <div className="grid grid-cols-2 gap-4">
           
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
