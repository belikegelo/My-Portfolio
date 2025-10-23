import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Angelo
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Antimo
            </span>
            <br />
            <span className="opacity-0 animate-fade-in-delay-3 inline-block">
              <ReactTyped
                className="text-primary text-2xl md:text-4xl mt-4"
                strings={[
                  "a Full Stack Developer",
                  "a Mobile Developer",
                  "a Web Developer",
                  "a Virtual Assistant",
                  "a WordPress Builder"
                ]}
                typeSpeed={60}
                backSpeed={35}
                backDelay={1500}
                loop
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            Designing innovative and user-friendly web experiences that bring digital solutions to life.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
