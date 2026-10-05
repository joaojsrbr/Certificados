"use client";

export function BackgroundAurora() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#06080d]" />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      {/* Radial glow spots */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-violet-600/25 via-indigo-500/20 to-cyan-400/20 rounded-full blur-[140px] animate-pulse duration-1000" />
      
      <div className="absolute top-[25%] -left-32 w-[500px] h-[400px] bg-blue-600/15 rounded-full blur-[130px]" />
      
      <div className="absolute top-[45%] -right-32 w-[550px] h-[450px] bg-purple-600/15 rounded-full blur-[140px]" />

      <div className="absolute bottom-10 left-1/3 w-[600px] h-[350px] bg-emerald-600/10 rounded-full blur-[150px]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,8,13,0.6)_100%)]" />
    </div>
  );
}
