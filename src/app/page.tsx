import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import HyperText from "@/components/magicui/hyper-text";
import TypingAnimation from "@/components/magicui/typing-animation";
import WordRotate from "@/components/magicui/word-rotate";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CoolMode } from "@/components/magicui/cool-mode";
import { Button } from "@/components/ui/glow-on-hover";

export default function Home() {
  const words = 'I have 2 years of experience in the field of IT. I have worked on various projects and have experience in various technologies. I am a quick learner and always ready to learn new technologies.I am a hardworking and dedicated person. I am always ready to take on new challenges and work hard to achieve my goals. I am passionate about my work and always strive to deliver the best results. I am looking for new opportunities to grow and develop my skills.';

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    
    // Set the URL of the file
    link.href = '/files/my-document.pdf';
    
    // Set the download attribute to suggest a file name
    link.download = 'my-document.pdf';

    // Append the link to the body (not visible)
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the body
    document.body.removeChild(link);
  };
  
  return (
    <main className="w-full">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />

      <div className="w-full h-screen items-center flex flex-wrap md:flex-nowrap justify-between">
        <div className="w-full md:w-[48%]">
          <div className=" pl-8">
            <TypingAnimation
              className="text-5xl text-start font-bold text-black dark:text-white"
              text="Hello, I'm Sayan"
              duration={100}
            />
            <div className="flex flex-nowrap justify-start">
              <p className="text-3xl mt-[4px] mr-2 font-bold text-purple-600">
                I am a
              </p>
              <WordRotate
                className="text-2xl text-pink-600 font-bold"
                words={["Full Stack Devoloper","Cloud Engineer","DevOps Engineer","Cyber Security Expert"]}
              />
            </div>

            <TextGenerateEffect className="text-sm" words={words} />
            
            <CoolMode>
              <Button text="Download Resume" className="py-3 px-5 font-semibold" />
            </CoolMode>
          </div>
        </div>

        <div className="w-full md:w-[48%] flex flex-nowrap justify-center">
          <NeonGradientCard className="p-0 rounded-full w-60 sm:w-80">
            <Image
              src="/WhatsApp Image 2024-08-22 at 3.31.05 PM.jpeg"
              alt="Web Developer"
              width={400}
              height={400}
              className="rounded-full m-0 p-0"
            />
          </NeonGradientCard>
        </div>
      </div>
    </main>
  );
}
