import { Briefcase, Code, Code2, Layout, Smartphone, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web & Mobile Developer
            </h3>

            <p className="text-muted-foreground">
              An aspiring web and mobile developer focusing on JavaScript, React, and PHP. I have hands-on experience managing and improving websites during my internship, which helped me build a strong foundation in front-end development and real-world problem solving.
            </p>

            <p className="text-muted-foreground">
              I’m also familiar with TailwindCSS and Bootstrap, and I’m committed to continuous learning and growth. Like the stars in the sky, the possibilities of what I can build are endless — and I’m excited to keep exploring them through code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1oR78GQUQzLG2yaXdRaCx2R6hDWJaC0gz/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and functional websites using JavaScript, React, and PHP, with a focus on clean UI and usability.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile Develoment</h4>
                  <p className="text-muted-foreground">
                    Developing cross-platform mobile applications and adapting web concepts for mobile experiences while continuously expanding into modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layout className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">WordPress & Front-End Tools</h4>
                  <p className="text-muted-foreground">
                    Managing and enhancing WordPress sites with custom layouts and plugins, designing interfaces using Figma, and styling efficiently with TailwindCSS and Bootstrap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};