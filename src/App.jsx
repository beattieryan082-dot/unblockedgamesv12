export default function App() {
  const bgImage = "https://private-user-images.githubusercontent.com/159876365/477138731-0aa67016-6eaf-458a-adb2-6e31a0763ed6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzM0Mzk2MDIsIm5iZiI6MTc3MzQzOTMwMiwicGF0aCI6Ii8xNTk4NzYzNjUvNDc3MTM4NzMxLTBhYTY3MDE2LTZlYWYtNDU4YS1hZGIyLTZlMzFhMDc2M2VkNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMzEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDMxM1QyMjAxNDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kOTU0OWFhOWM0ZTRiODJjOTEzMTBiZjVkNGU1OTU2ZmZmYjJhNjQ4ODA4YTMxYTQwNDE4ODczMGVhODliYzhmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.N-Wk-OWS27nv0qKDs8VTcElRGM_ZCDJUAfP55UrTiCE";

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 blur-sm scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-widest uppercase">
          Powered by Gemini
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4">
          google ai <span className="text-emerald-500">studio</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
          The fastest way to build with Gemini. Design, prototype, and deploy AI-powered applications in minutes.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20">
            Get Started
          </button>
          <button className="px-8 py-3 bg-zinc-900/50 hover:bg-zinc-800 border border-white/10 text-white font-medium rounded-full transition-all backdrop-blur-md">
            Documentation
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
    </div>
  );
}
