import React from 'react';
import fachadaBg from '../assets/images/Fachada da REFRIGERAR sem veículos.png';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Background Storefront Image with dark blue atmosphere */}
      <div 
        className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] scale-105 filter brightness-[0.28] contrast-[1.12] blur-[1px] transition-transform duration-1000"
        style={{
          backgroundImage: `url("${fachadaBg}")`,
        }}
      />

      {/* Deep Navy/Black Theme Gradients with blue ice glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050D1A]/90 via-[#061124]/85 to-[#030811]/95" />

      {/* Top Ambient Frost Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-cyan-500/20 via-blue-600/15 to-transparent blur-3xl pointer-events-none" />

      {/* Bottom Subtle Cool Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-t from-blue-700/15 via-cyan-500/8 to-transparent blur-3xl pointer-events-none" />

      {/* Ambient Grid overlay for tech look */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};

