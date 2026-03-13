import { useState } from 'react';
import { Gamepad2, X, Maximize2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gamesData from './games.json';

export default function App() {
  const [view, setView] = useState('splash'); // 'splash' or 'hub'
  const [selectedGame, setSelectedGame] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (view === 'splash') {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
        {/* High-end CSS Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_40%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#333_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-widest uppercase"
          >
            Powered by Gemini
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4"
          >
            google ai <span className="text-emerald-500">studio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed"
          >
            The fastest way to build with Gemini. Design, prototype, and deploy AI-powered applications in minutes.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => setView('hub')}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20 flex items-center gap-2"
            >
              Play Games <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('splash')}>
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Gamepad2 className="text-zinc-950 w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              Games<span className="text-emerald-500">Hub</span>
            </h1>
          </div>

          <button 
            onClick={() => setView('splash')}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Exit Hub
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gamesData.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedGame(game)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-xl transition-all group-hover:border-emerald-500/50">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent flex items-end p-4">
                  <span className="text-white font-bold">{game.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Game Viewer Overlay */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950 flex flex-col"
          >
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-4 bg-zinc-900">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="text-zinc-950 w-5 h-5" />
                </div>
                <span className="font-bold">{selectedGame.title}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors text-zinc-400 hover:text-white"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => {
                    setSelectedGame(null);
                    setIsFullScreen(false);
                  }}
                  className="p-2 hover:bg-red-500/20 hover:text-red-500 rounded-lg transition-colors text-zinc-400"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className={`flex-1 bg-black relative ${isFullScreen ? 'fixed inset-0 z-[60]' : ''}`}>
              {isFullScreen && (
                <button 
                  onClick={() => setIsFullScreen(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-md rounded-full text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <iframe
                src={selectedGame.url}
                className="w-full h-full border-none"
                allow="autoplay; fullscreen; keyboard"
                title={selectedGame.title}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
