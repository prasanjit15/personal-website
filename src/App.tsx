import React, { useState } from 'react';
import { Github, Linkedin, Instagram, User, Menu, X } from 'lucide-react';
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
      accentColor: 'text-red-500',
      borderColor: 'border-gray-700'
    },
    {
      name: 'Matte White',
      bgTheme: 'white' as const,
      textColor: 'text-gray-900',
      accentColor: 'text-red-700',
      borderColor: 'border-gray-300'
    },
    {
      name: 'Matte Red',
      bgTheme: 'red' as const,
      textColor: 'text-gray-100',
      accentColor: 'text-gray-200',
      borderColor: 'border-red-600'
    }
  ];

  const handleThemeChange = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  const theme = themes[currentTheme];

  const techStack = [
    'rancher', 'powershell', 'putty', 'nginx', 'mongodb', 'kubernetes',
    'json', 'html5', 'apache_groovy', 'flask', 'asp', 'cassandra',
    'bash', 'aws', 'helm', 'csharp', 'ansible', 'postman',
    'podman', 'docker', 'gitlab', 'git', 'windows', 'linux',
    'swift', 'mysql', 'postgresql', 'confluence', 'jira', 'visual_studio',
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
            
            <p className={`text-base sm:text-lg md:text-xl font-light mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4 ${theme.textColor}`}>
              Senior Infra Associate at{" "}
              <span className={`font-semibold ${theme.accentColor}`}>NOMURA</span>
              <span className="block mt-2"> Powering resilient systems for tomorrow's ideas 💡 while connecting markets East and West 🌍 </span>
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
              <User className={`w-6 h-6 md:w-8 md:h-8 ${theme.textColor} hover:${theme.accentColor.replace('text-', 'text-')} transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95`} />
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
                className={`px-6 py-3 rounded-full text-base ${theme.textColor} opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer flex items-center space-x-2 border ${theme.borderColor} backdrop-blur-sm bg-white/5`}
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <span>Résumé</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              
              {/* Mobile Tech Stack Grid */}
              <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto px-4 relative z-10">
                {techStack.slice(0, 16).map((tech, index) => (
                  <div key={`mobile-${tech}-${index}`} className={`h-16 bg-white/5 backdrop-blur-sm rounded-lg border ${theme.borderColor} p-2`}>
                    <TechLogo name={tech} className={`w-full h-full ${theme.textColor}`} />
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleThemeChange}
                className={`w-16 h-16 rounded-full text-3xl font-bold transition-all duration-700 ease-in-out ${theme.accentColor} opacity-90 hover:opacity-100 hover:scale-110 transform flex items-center justify-center border ${theme.borderColor} backdrop-blur-sm bg-white/5`}
              >
                {['黒', '白', '赤'][currentTheme]}
              </button>
            </div>
          )}

          {/* Desktop Bottom Navigation */}
          <div className="hidden md:flex absolute bottom-8 left-8 right-8 justify-between items-center">
            <button
              className={`px-4 py-2 rounded-full text-sm ${theme.textColor} opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer flex items-center space-x-2 backdrop-blur-sm bg-white/5 border ${theme.borderColor}`}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <span>Résumé</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            
            {/* Desktop Tech Stack Slider */}
            <div className={`flex-1 mx-8 overflow-hidden relative backdrop-blur-xl rounded-2xl border ${theme.borderColor} bg-white/5`}>
              <div className="overflow-hidden whitespace-nowrap rounded-2xl py-4">
                <div className="inline-flex animate-tech-slide">
                  {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                    <div key={`desktop-${tech}-${index}`} className="w-24 h-16 mx-4 opacity-90 p-2">
                      <TechLogo name={tech} className={`w-full h-full ${theme.textColor}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Theme Toggle Button */}
            <button
              onClick={handleThemeChange}
              className={`w-12 h-12 rounded-full text-2xl font-bold transition-all duration-700 ease-in-out ${theme.accentColor} opacity-90 hover:opacity-100 hover:scale-110 transform flex items-center justify-center backdrop-blur-sm bg-white/5 border ${theme.borderColor}`}
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