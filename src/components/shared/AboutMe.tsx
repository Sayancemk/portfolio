"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export default function AboutMe() {
    return (
        <div className="w-full relative">
            <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
                About Me
            </h1>
            <div className="absolute inset-x-20 top-10 md:top-12 lg:top-[72px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-10 md:top-12 lg:top-[72px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-10 md:top-12 lg:top-[72px] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-10 md:top-12 lg:top-[72px] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            <div className="w-full absolute inset-0">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={80}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <p 
            className=" leading-7 p-3 max-w-[500px] mx-auto text-center my-5 text-gray-200">
                I'm a software engineer with a passion for web development and design. I enjoy creating beautiful, user-friendly websites and applications that make people's lives easier. I'm always looking for new challenges and opportunities to learn and grow as a developer. When I'm not coding, you can find me hiking, reading, or playing video games. I'm excited to see what the future holds for me in the world of web development!{" "}
            </p>
            <p><strong className="font-bold text-white">Name: </strong><span className="text-gray-200"> Sayan</span></p>
            <p><strong className="font-bold text-white">Name: </strong><span className="text-gray-200"> Sayan</span></p>
            <p><strong className="font-bold text-white">Name: </strong><span className="text-gray-200"> Sayan</span></p>
            <p><strong className="font-bold text-white">Name: </strong><span className="text-gray-200"> Sayan</span></p>
            <p><strong className="font-bold text-white">Name: </strong><span className="text-gray-200"> Sayan</span></p>
            <p><strong className="font-bold text-white">Name: </strong><span className="text-gray-200"> Sayan</span></p>
        </div>
    );
}

