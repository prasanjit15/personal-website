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
            
            <p className={`text-lg md:text-xl font-light mb-8 max