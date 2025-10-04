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
            <div className="w-[60vw] mx-8 relative overflow-hidden h-36 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="flex animate-tech-slide items-center">
                  {/* Jenkins */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  
                  {/* GitLab */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 21.42l3.684-11.333h-7.368L12 21.42zM2.667 10.087L12 21.42l-9.333-11.333L2.667 10.087zm18.666 0L12 21.42l9.333-11.333L21.333 10.087zM21.333 10.087l-2.666-8.2c-.134-.412-.5-.687-.934-.687-.433 0-.8.275-.933.687l-2.667 8.2h7.2zM2.667 10.087h7.2L7.2 1.887C7.067 1.475 6.7 1.2 6.267 1.2c-.434 0-.8.275-.934.687l-2.666 8.2z"/>
                    </svg>
                  </div>
                  
                  {/* Docker */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.938-.089 2.835-.266a11.192 11.192 0 003.090-.142c.94-.4 1.818-.99 2.604-1.75.677-.652 1.248-1.479 1.695-2.454a14.707 14.707 0 001.304-2.330c.04-.083.077-.166.115-.25.444.264 1.164.45 1.823.45.827 0 1.449-.294 1.848-.873.389-.565.389-1.26.389-1.26s.005-.816-.461-1.39"/>
                    </svg>
                  </div>
                  
                  {/* Kubernetes */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12.204 8.745c-.185-.36-.535-.585-.926-.585-.39 0-.74.225-.925.585l-3.255 6.3c-.185.36-.185.795 0 1.155.185.36.535.585.925.585h6.51c.39 0 .74-.225.925-.585.185-.36.185-.795 0-1.155l-3.254-6.3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>
                  
                  {/* Sonatype Nexus */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  
                  {/* SonarQube */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  
                  {/* Terraform */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M8.5 2v6.5L14 11V4.5L8.5 2zM15 4.5V11l5.5-2.5V2L15 4.5zM8.5 9.5V16l5.5 2.5v-6.5L8.5 9.5zM2 6.5v6.5L7.5 16V9.5L2 6.5z"/>
                    </svg>
                  </div>
                  
                  {/* Grafana */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  
                  {/* Python */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12.17 2.69c-.69-.12-1.43-.12-2.34 0C8.76 2.84 8.4 3.54 8.4 4.26v1.44H12v.48H6.6c-.72 0-1.35.43-1.55 1.25-.23.94-.24 1.52 0 2.52.18.75.61 1.3 1.33 1.3h.86v-1.14c0-.82.71-1.54 1.55-1.54h3.6c.68 0 1.23-.56 1.23-1.25V4.26c0-.67-.57-1.18-1.25-1.3-.43-.08-.89-.12-1.2-.27zm-.68 1.07c.26 0 .48.22.48.49 0 .27-.22.49-.48.49-.27 0-.49-.22-.49-.49 0-.27.22-.49.49-.49z"/>
                      <path d="M17.4 8.9c-.18-.75-.52-1.3-1.33-1.3h-.86v1.14c0 .82-.73 1.54-1.55 1.54H9.06c-.68 0-1.23.56-1.23 1.25v3.57c0 .67.58 1.07 1.23 1.25.78.22 1.53.26 2.4 0 .57-.17.94-.51.94-1.25v-1.44H9v-.48h4.8c.72 0 .99-.5 1.24-1.25.26-.78.25-1.52 0-2.52-.13-.51-.37-.99-.64-1.51zm-5.03 5.41c.27 0 .49.22.49.49 0 .27-.22.49-.49.49-.26 0-.48-.22-.48-.49 0-.27.22-.49.48-.49z"/>
                    </svg>
                  </div>
                  
                  {/* C++ */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  
                  {/* C# */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  
                  {/* Linux */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  
                  {/* Windows */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-5.5V12l-8-.09V5.21l8-1.71zm0 11.25L12 18.95v-5.86l8-.09v5.25zM9 18.95L3 17.5v-5.25l6 .05v6.65z"/>
                    </svg>
                  </div>
                  
                  {/* SQL */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  
                  {/* AWS */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.071-.2.071-.08 0-.16-.04-.239-.112-.112-.12-.207-.248-.279-.383-.072-.135-.144-.287-.2-.455-.503.592-1.135.888-1.895.888-.543 0-.975-.16-1.287-.479-.32-.32-.479-.744-.479-1.279 0-.568.2-1.023.6-1.375.4-.353.928-.528 1.599-.528.22 0 .447.016.687.056.24.04.487.088.743.16v-.528c0-.544-.112-.927-.336-1.143-.231-.216-.624-.32-1.183-.32-.255 0-.518.032-.79.088-.271.056-.535.127-.79.24-.119.056-.207.088-.255.104-.048.016-.087.024-.111.024-.096 0-.144-.072-.144-.216v-.335c0-.112.016-.2.056-.255.04-.056.112-.112.207-.16.272-.144.6-.264.983-.36.384-.096.8-.144 1.239-.144.946 0 1.64.216 2.08.647.44.432.66 1.08.66 1.943v2.559zm-2.615 1.007c.215 0 .439-.04.671-.112.232-.08.439-.2.615-.368.112-.104.191-.224.239-.36.048-.135.08-.296.08-.479v-.24c-.184-.056-.383-.104-.591-.135-.208-.032-.416-.048-.624-.048-.447 0-.775.088-1.007.272-.231.184-.343.439-.343.775 0 .319.08.56.255.727.168.16.415.24.705.24zm5.312.96c-.12 0-.2-.024-.248-.064-.048-.048-.088-.144-.12-.288l-1.335-4.375c-.032-.104-.048-.176-.048-.216 0-.087.04-.135.128-.135h.52c.127 0 .215.024.255.064.048.048.08.144.112.288l.959 3.775 1.887-3.775c.032-.144.072-.24.112-.288.048-.048.144-.064.263-.064h.423c.12 0 .207.024.255.064.048.048.088.144.112.288l1.903 3.823.983-3.823c.032-.144.072-.24.112-.288.048-.048.135-.064.255-.064h.495c.087 0 .135.048.135.135 0 .032-.008.064-.016.104-.008.04-.024.096-.048.168l-1.375 4.375c-.032.144-.072.24-.12.288-.048.048-.135.064-.247.064h-.455c-.12 0-.207-.024-.255-.072-.048-.048-.088-.144-.112-.296l-1.887-3.735-1.871 3.735c-.032.144-.072.248-.112.296-.048.048-.144.072-.263.072h-.455zm8.496.215c-.319 0-.638-.04-.958-.112-.32-.08-.568-.176-.743-.296-.112-.08-.191-.168-.215-.248-.024-.08-.04-.168-.04-.264v-.335c0-.144.056-.216.16-.216.04 0 .08.008.12.024.04.016.1.048.175.08.239.112.495.2.767.264.279.064.551.096.823.096.435 0 .775-.08 1.015-.24.24-.16.36-.384.36-.68 0-.2-.064-.368-.191-.504-.128-.135-.368-.264-.719-.383l-1.031-.32c-.52-.167-.903-.415-1.143-.744-.24-.329-.36-.695-.36-1.095 0-.32.072-.6.207-.847.144-.248.336-.456.583-.624.248-.168.543-.296.888-.384.344-.088.72-.128 1.119-.128.144 0 .287.008.431.032.144.016.279.048.415.08.135.032.263.072.383.112.12.048.215.096.279.144.112.08.191.16.231.24.048.08.072.176.072.288v.304c0 .144-.056.224-.16.224-.056 0-.144-.024-.248-.08-.375-.192-.8-.288-1.279-.288-.4 0-.711.064-.927.2-.216.135-.32.336-.32.6 0 .2.072.375.207.52.144.144.4.279.775.4l1.007.32c.511.167.887.4 1.119.704.231.304.344.655.344 1.055 0 .32-.064.615-.2.879-.135.264-.32.495-.568.687-.248.192-.559.336-.927.44-.375.103-.791.151-1.247.151z"/>
                    </svg>
                  </div>
                  
                  {/* Splunk */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  
                  {/* ServiceNow */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  
                  {/* JIRA */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  
                  {/* Confluence */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
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
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  
                  {/* Ansible */}
                  <div className={`flex items-center justify-center w-24 h-24 mx-6 ${theme.textColor} opacity-70`}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
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