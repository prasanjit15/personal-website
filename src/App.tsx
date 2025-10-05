import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, User, Menu, X, ArrowUpRight } from 'lucide-react';
import { MatteBackground } from './components/MatteBackground';
import { TechLogo } from './components/TechLogo';

function App() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const themes = [
    {
      name: 'Matte Black',
      bgTheme: 'black' as const,
      textColor: 'text-gray-100',
      accentColor: 'text-red-400',
      borderColor: 'border-gray-700'
    },
    {
      name: 'Matte White',
      bgTheme: 'white' as const,
      textColor: 'text-gray-900',
      accentColor: 'text-red-400',
      borderColor: 'border-gray-300'
    },
    {
      name: 'Matte Red',
      bgTheme: 'red' as const,
      textColor: 'text-gray-100',
      accentColor: 'text-black',
      borderColor: 'border-red-600'
    }
  ];

  const handleThemeChange = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  // Set favicon dynamically
  useEffect(() => {
    const setFavicon = () => {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = '/logos/pm.png';
      link.type = 'image/png';
    };

    setFavicon();
  }, []);

  const theme = themes[currentTheme];

  const techStack = [
    'rancher', 'powershell', 'putty', 'nginx', 'mongodb', 'kubernetes',
    'json', 'html5', 'groovy', 'flask', 'asp', 'cassandra',
    'bash', 'aws', 'helm', 'csharp', 'ansible', 'postman',
    'podman', 'docker', 'gitlab', 'git', 'windows', 'linux',
    'swift', 'mysql', 'postgresql', 'confluence', 'jira',
    'pycharm', 'spark', 'vscode', 'dbeaver', 'prometheus', 'mlflow',
    'dvc', 'terraform', 'sonarqube', 'splunk', 'servicenow', 'django',
    'python', 'chocolatey', 'cpp', 'cisco', 'grafana', 'nexus', 'jenkins'
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Matte Background */}
      <MatteBackground theme={theme.bgTheme} />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="text-center max-w-4xl mx-auto w-full">
          {/* Main Content */}
          <div className="mb-8 md:mb-12">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight ${theme.textColor} leading-tight`}>
              Hi, I'm Prasannjit.
            </h1>
            
            <p className={`text-base sm:text-lg md:text-xl font-light mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-4 ${theme.textColor}`}>
              <span className="inline-flex items-center space-x-2">
                <span>Senior Infra Associate at</span>
                <img
                  src={theme.bgTheme === 'red' ? '/logos/nomblack.png' : '/logos/nomred.png'}
                  alt="NOMURA logo"
                  className="h-3 sm:h-4 md:h-5 w-auto"
                />
              </span>
              <br />
              Powering resilient systems for tomorrow's ideas, while connecting markets East and West 🌍
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center space-x-4 md:space-x-6 mb-8 md:mb-16">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className={`w-6 h-6 md:w-8 md:h-8 ${theme.textColor} hover:${theme.accentColor.replace('text-', 'text-')} transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95`} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className={`w-6 h-6 md:w-8 md:h-8 ${theme.textColor} hover:${theme.accentColor.replace('text-', 'text-')} transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95`} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className={`w-6 h-6 md:w-8 md:h-8 ${theme.textColor} hover:${theme.accentColor.replace('text-', 'text-')} transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95`} />
              </a>
              <a href="https://prasannjit.me" target="_blank" rel="noopener noreferrer">
                <User className={`w-6 h-6 md:w-8 md:h-8 ${theme.textColor} hover:${theme.accentColor.replace('text-', 'text-')} transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95`} />
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden fixed top-4 right-4 z-50 p-3 rounded-full ${theme.textColor} ${theme.borderColor} border backdrop-blur-sm bg-black/10 hover:bg-black/20 transition-all duration-300`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 z-40 backdrop-blur-lg flex flex-col items-center justify-center space-y-8">
              <MatteBackground theme={theme.bgTheme} className="opacity-95" />
              <button
                className={`w-[120px] h-[75px] rounded-xl text-lg font-bold leading-none transition-all duration-700 ease-in-out ${theme.textColor} bg-transparent opacity-90 hover:opacity-100 hover:scale-110 transform flex items-center justify-center space-x-2`}
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <span>Résumé</span>
                <ArrowUpRight className={`w-6 h-6 ${theme.textColor}`} />
              </button>
              
              <button
                className={`w-16 h-16 rounded-full text-3xl font-bold transition-all duration-700 ease-in-out ${theme.bgTheme === 'red' ? 'text-black' : 'text-red-400 shadow-sm'} ${theme.accentColor} !important bg-transparent opacity-90 hover:opacity-100 hover:scale-110 transform flex items-center justify-center`}
                onClick={handleThemeChange}
              >
                {['黒', '白', '赤'][currentTheme]}
              </button>
            </div>
          )}

          {/* Mobile Bottom Navigation */}
          <div className="md:hidden fixed bottom-8 left-0 right-0 flex justify-center items-center">
            <div className={`w-[70vw] mx-auto overflow-hidden relative backdrop-blur-xl bg-white/5 rounded-2xl border ${theme.borderColor}`}>
              <div className="overflow-hidden whitespace-nowrap rounded-2xl py-2">
                <div className="inline-flex animate-tech-slide-mobile">
                  {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                    <div key={`mobile-home-${tech}-${index}`} className="w-12 h-8 mx-2 opacity-90 p-1">
                      <TechLogo name={tech === 'visual_studio' ? 'visual_studio' : tech} className={`w-full h-full ${theme.textColor}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Bottom Navigation */}
          <div className="hidden md:flex absolute bottom-8 left-8 right-8 justify-between items-center">
            <button
              className={`w-[110px] h-[65px] rounded-xl text-base font-bold leading-none transition-all duration-700 ease-in-out ${theme.textColor} bg-transparent opacity-90 hover:opacity-100 hover:scale-110 transform flex items-center justify-center space-x-2`}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <span>Résumé</span>
              <ArrowUpRight className={`w-6 h-6 ${theme.textColor}`} />
            </button>
            
            <div className={`w-[80%] mx-auto overflow-hidden relative backdrop-blur-xl bg-white/1 rounded-2xl border ${theme.borderColor}`}>
              <div className="overflow-hidden whitespace-nowrap rounded-2xl py-4">
                <div className="inline-flex animate-tech-slide">
                  {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                    <div key={`desktop-${tech}-${index}`} className="w-24 h-16 mx-4 opacity-90 p-2">
                      <TechLogo name={tech === 'visual_studio' ? 'visual_studio' : tech} className={`w-full h-full ${theme.textColor}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <button
              className={`w-12 h-12 rounded-full text-2xl font-bold transition-all duration-700 ease-in-out ${theme.bgTheme === 'red' ? 'text-black' : 'text-red-400 shadow-sm'} ${theme.accentColor} !important bg-transparent opacity-90 hover:opacity-100 hover:scale-110 transform flex items-center justify-center`}
              onClick={handleThemeChange}
            >
              {['黒', '白', '赤'][currentTheme]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;