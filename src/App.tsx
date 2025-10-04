import React, { useState } from 'react';
import { Github, Linkedin, Instagram, User } from 'lucide-react';

function App() {
  const [currentTheme, setCurrentTheme] = useState(0);
  
  const themes = [
    {
      name: 'Black Red',
      bgClass: 'black-red-gradient',
      textColor: 'text-white',
      accentColor: 'text-red-400'
    },
    {
      name: 'White Red',
      bgClass: 'white-red-gradient',
      textColor: 'text-gray-900',
      accentColor: 'text-red-600'
    },
    {
      name: 'Red Black',
      bgClass: 'red-black-gradient',
      textColor: 'text-white',
      accentColor: 'text-red-200'
    }
  ];

  const handleThemeChange = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  const theme = themes[currentTheme];

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
            
            {/* Tech Stack Slider */}
            <div className="flex-1 mx-8 overflow-hidden relative">
              <div className="overflow-hidden whitespace-nowrap">
                <div className="inline-flex animate-tech-slide">
                  {/* AWS */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/aws.png"
                      alt="AWS Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Terraform */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/terraform.png"
                      alt="Terraform Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Jenkins */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/jenkins.png"
                      alt="Jenkins Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Docker */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/docker.png"
                      alt="Docker Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Kubernetes */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/kubernetes.png"
                      alt="Kubernetes Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Jira */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/jira.png"
                      alt="Jira Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Confluence */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/confluence.png"
                      alt="Confluence Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Postman */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/postman.png"
                      alt="Postman Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Chocolatey */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/chocolatey.png"
                      alt="Chocolatey Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Ansible */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/ansible.png"
                      alt="Ansible Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* ASP */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/asp.png"
                      alt="ASP Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Nexus */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/nexus.png"
                      alt="Nexus Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Linux */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/linux.png"
                      alt="Linux Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Windows */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/windows.png"
                      alt="Windows Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* GitLab */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/gitlab.png"
                      alt="GitLab Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Cisco */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/cisco.png"
                      alt="Cisco Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* SQL */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/sql.png"
                      alt="SQL Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* C# */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/csharp.png"
                      alt="C# Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* C++ */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/cpp.png"
                      alt="C++ Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Python */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/python.png"
                      alt="Python Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Django */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/django.png"
                      alt="Django Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Flask */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/flask.png"
                      alt="Flask Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* ServiceNow */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/servicenow.png"
                      alt="ServiceNow Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* SonarQube */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/sonarqube.png"
                      alt="SonarQube Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Splunk */}
                  <div className="flex items-center justify-center w-24 h-24 mx-6 opacity-70">
                    <img
                      src="./logos/splunk.png"
                      alt="Splunk Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            
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