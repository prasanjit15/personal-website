import React, { useState } from 'react';
import { Github, Linkedin, Instagram, User } from 'lucide-react';

function App() {
  const [currentTheme, setCurrentTheme] = useState(0);
  
  const themes = [
    {
      name: 'Matte Black',
      bgClass: 'matte-black-bg',
      textColor: 'text-white',
      accentColor: 'text-red-500'
    },
    {
      name: 'Matte White',
      bgClass: 'matte-white-bg',
      textColor: 'text-gray-900',
      accentColor: 'text-red-700'
    },
    {
      name: 'Matte Red',
      bgClass: 'matte-red-bg',
      textColor: 'text-white',
      accentColor: 'text-gray-200'
    }
  ];

  const handleThemeChange = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  const theme = themes[currentTheme];

  // Array of tech logos for easier management and duplication
  const techLogos = [
    { src: "./logos/rancher.png", alt: "Rancher Logo" },
    { src: "./logos/powershell.png", alt: "PowerShell Logo" },
    { src: "./logos/putty.png", alt: "Putty Logo" },
    { src: "./logos/nginx.png", alt: "Nginx Logo" },
    { src: "./logos/mongodb.png", alt: "MongoDB Logo" },
    { src: "./logos/kubernetes.png", alt: "Kubernetes Logo" },
    { src: "./logos/json.png", alt: "JSON Logo" },
    { src: "./logos/html5.png", alt: "HTML5 Logo" },
    { src: "./logos/apache_groovy.png", alt: "Apache Groovy Logo" },
    { src: "./logos/flask.png", alt: "Flask Logo" },
    { src: "./logos/asp.net.png", alt: "ASP.NET Logo" },
    { src: "./logos/cassandra.png", alt: "Cassandra Logo" },
    { src: "./logos/bash.png", alt: "Bash Logo" },
    { src: "./logos/aws.png", alt: "AWS Logo" },
    { src: "./logos/helm.png", alt: "Helm Logo" },
    { src: "./logos/csharp.png", alt: "C# Logo" },
    { src: "./logos/ansible.png", alt: "Ansible Logo" },
    { src: "./logos/postman.png", alt: "Postman Logo" },
    { src: "./logos/podman.png", alt: "Podman Logo" },
    { src: "./logos/docker.png", alt: "Docker Logo" },
    { src: "./logos/gitlab.png", alt: "GitLab Logo" },
    { src: "./logos/git.png", alt: "Git Logo" },
    { src: "./logos/windows.png", alt: "Windows Logo" },
    { src: "./logos/linux.png", alt: "Linux Logo" },
    { src: "./logos/swift.png", alt: "Swift Logo" },
    { src: "./logos/mysql.png", alt: "MySQL Logo" },
    { src: "./logos/postgresql.png", alt: "PostgreSQL Logo" },
    { src: "./logos/confluence.png", alt: "Confluence Logo" },
    { src: "./logos/jira.png", alt: "Jira Logo" },
    { src: "./logos/visual_studio.png", alt: "Visual Studio Logo" },
    { src: "./logos/pycharm.png", alt: "PyCharm Logo" },
    { src: "./logos/spark.png", alt: "Spark Logo" },
    { src: "./logos/vscode.png", alt: "VSCode Logo" },
    { src: "./logos/dbeaver.png", alt: "DBeaver Logo" },
    { src: "./logos/prometheus.png", alt: "Prometheus Logo" },
    { src: "./logos/mlflow.png", alt: "MLflow Logo" },
    { src: "./logos/dvc.png", alt: "DVC Logo" },
    { src: "./logos/terraform.png", alt: "Terraform Logo" },
    { src: "./logos/sonarqube.png", alt: "SonarQube Logo" },
    { src: "./logos/splunk.png", alt: "Splunk Logo" },
    { src: "./logos/servicenow.png", alt: "ServiceNow Logo" },
    { src: "./logos/django.png", alt: "Django Logo" },
    { src: "./logos/python.png", alt: "Python Logo" },
    { src: "./logos/chocolatey.png", alt: "Chocolatey Logo" },
    { src: "./logos/cpp.png", alt: "C++ Logo" },
    { src: "./logos/cisco.png", alt: "Cisco Logo" },
    { src: "./logos/grafana.png", alt: "Grafana Logo" },
    { src: "./logos/nexus_repository.png", alt: "Nexus Repository Logo" },
    { src: "./logos/jenkins.png", alt: "Jenkins Logo" }
  ];

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
            <div className="flex-1 mx-8 overflow-hidden relative bg-white/5 backdrop-blur-xl rounded-xl frosted-glass">
              <div className="overflow-hidden whitespace-nowrap rounded-xl">
                <div className="inline-flex animate-tech-slide">
                  {[...techLogos, ...techLogos, ...techLogos, ...techLogos].map((logo, index) => (
                    <div key={`${logo.alt}-${index}`} className="flex items-center justify-center w-24 h-24 mx-6 opacity-90">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  ))}
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
        </div>
      </div>
    </div>
  );
}

export default App;