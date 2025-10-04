import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, User } from 'lucide-react';
import p5 from 'p5';

function App() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);

  const themes = [
    {
      name: 'Matte Black',
      bgClass: 'matte-black',
      textColor: 'text-white',
      accentColor: 'text-red-500',
      bgColor: '#1a1a1a'
    },
    {
      name: 'Matte White',
      bgClass: 'matte-white',
      textColor: 'text-gray-900',
      accentColor: 'text-red-700',
      bgColor: '#f5f5f5'
    },
    {
      name: 'Matte Red',
      bgClass: 'matte-red',
      textColor: 'text-white',
      accentColor: 'text-gray-200',
      bgColor: '#800000'
    }
  ];

  const handleThemeChange = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  const theme = themes[currentTheme];

  // Array of tech logos for easier management and animation
  const techLogos = [
    { src: "./logos/aws.png", alt: "AWS Logo" },
    { src: "./logos/terraform.png", alt: "Terraform Logo" },
    { src: "./logos/jenkins.png", alt: "Jenkins Logo" },
    { src: "./logos/docker.png", alt: "Docker Logo" },
    { src: "./logos/kubernetes.png", alt: "Kubernetes Logo" },
    { src: "./logos/jira.png", alt: "Jira Logo" },
    { src: "./logos/confluence.png", alt: "Confluence Logo" },
    { src: "./logos/postman.png", alt: "Postman Logo" },
    { src: "./logos/chocolatey.png", alt: "Chocolatey Logo" },
    { src: "./logos/ansible.png", alt: "Ansible Logo" },
    { src: "./logos/asp.png", alt: "ASP Logo" },
    { src: "./logos/nexus.png", alt: "Nexus Logo" },
    { src: "./logos/linux.png", alt: "Linux Logo" },
    { src: "./logos/windows.png", alt: "Windows Logo" },
    { src: "./logos/gitlab.png", alt: "GitLab Logo" },
    { src: "./logos/cisco.png", alt: "Cisco Logo" },
    { src: "./logos/sql.png", alt: "SQL Logo" },
    { src: "./logos/csharp.png", alt: "C# Logo" },
    { src: "./logos/cpp.png", alt: "C++ Logo" },
    { src: "./logos/python.png", alt: "Python Logo" },
    { src: "./logos/django.png", alt: "Django Logo" },
    { src: "./logos/flask.png", alt: "Flask Logo" },
    { src: "./logos/servicenow.png", alt: "ServiceNow Logo" },
    { src: "./logos/sonarqube.png", alt: "SonarQube Logo" },
    { src: "./logos/splunk.png", alt: "Splunk Logo" }
  ];

  useEffect(() => {
    const sketch = (p: p5) => {
      let logos: p5.Image[] = [];
      let logoPositions: { x: number; y: number; vy: number; bounceCount: number }[] = [];

      p.preload = () => {
        techLogos.forEach((logo) => {
          logos.push(p.loadImage(logo.src));
        });
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasRef.current!);
        p.background(theme.bgColor);

        // Initialize logo positions and velocities
        logos.forEach((_, index) => {
          logoPositions.push({
            x: p.random(0, p.width),
            y: p.random(-p.height, 0), // Start above the screen
            vy: p.random(2, 5), // Random vertical velocity
            bounceCount: 0
          });
        });
      };

      p.draw = () => {
        p.background(theme.bgColor);

        logoPositions.forEach((pos, index) => {
          // Update position
          pos.y += pos.vy;
          pos.x += p.random(-1, 1); // Random horizontal drift

          // Bounce when hitting the bottom
          if (pos.y + logos[index].height > p.height) {
            pos.y = p.height - logos[index].height;
            pos.vy *= -0.7; // Elasticity (70% bounce back)
            pos.bounceCount++;
            if (pos.bounceCount > 3) pos.vy = 0; // Stop after a few bounces
          }

          // Reset to top if out of bounds (for continuous effect)
          if (pos.y < -logos[index].height) {
            pos.y = p.random(-p.height, 0);
            pos.vy = p.random(2, 5);
            pos.bounceCount = 0;
          }

          // Draw the logo
          p.image(logos[index], pos.x, pos.y);
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, [theme.bgColor]);

  return (
    <div 
      className={`min-h-screen w-full relative overflow-hidden ${theme.bgClass}`}
    >
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 tracking-tight ${theme.textColor}`}>
              Hi, I'm Prasannjit.
            </h1>
            
            <p className={`text-lg md:text-xl font-light mb-8 max-w-4xl mx-auto leading-relaxed ${theme.textColor}`}>
                Senior Infra Associate at{" "}
                <span className={`font-semibold ${theme.accentColor}`}>NOMURA</span>
                <span className="block"> Powering resilient systems for tomorrow's ideas 💡 while connecting markets East and West 🌍 </span>
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-16">
              <Github className={`w-8 h-8 ${theme.textColor} hover:${theme.accentColor.replace('text-', 'text-')} transition-all duration-300 cursor-pointer hover:scale-110`} />
              <Linkedin className={`w-8 h-8 ${theme.textColor} hover:${theme.accentColor.replace('text-', 'text-')} transition-all duration-300 cursor-pointer hover:scale-110`} />
              <Instagram className={`w-8 h-8 ${theme.textColor} hover:${theme.accentColor.replace('text-', 'text-')} transition-all duration-300 cursor-pointer hover:scale-110`} />
              <User className={`w-8 h-8 ${theme.textColor} hover:${theme.accentColor.replace('text-', 'text-')} transition-all duration-300 cursor-pointer hover:scale-110`} />
            </div>
          </div>
          
          {/* Bottom Navigation */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
            <div className={`px-4 py-2 rounded-full text-sm ${theme.textColor} opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer flex items-center space-x-2`}>
              <span>Résumé</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            
            {/* Canvas for Logo Animation */}
            <div ref={canvasRef} className="w-full h-24 flex items-center justify-center"></div>
            
            {/* Single Transitioning Kanji Button */}
            <button
              onClick={handleThemeChange}
              className={`w-12 h-12 rounded-full text-2xl font-bold transition-all duration-700 ease-in-out ${theme.accentColor} opacity-90 hover:opacity-100 hover:scale-110 transform flex items-center justify-center`}
            >
              {['黒', '白', '赤'][currentTheme]}
            </button>
          </div>
          
          {/* Theme Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {themes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTheme 
                    ? `${theme.accentColor.replace('text-', 'bg-')} opacity-100` 
                    : `${theme.textColor.replace('text-', 'bg-')} opacity-30`
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;