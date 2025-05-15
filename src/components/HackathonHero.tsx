
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HackathonHero: React.FC = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById('announcement');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-hero overflow-hidden py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-hackathon-pink opacity-20 animate-pulse-soft"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-hackathon-blue opacity-20 animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full border border-white opacity-10 animate-spin-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full border border-white opacity-10 animate-spin-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 max-w-5xl">
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <span className="text-3xl">🧠</span>
          </span>
          <span className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <span className="text-3xl">🚀</span>
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          第五屆中學生黑客松
          <span className="block text-hackathon-yellow">AI賦能 × 雲端創意</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          一起站上巨人肩膀，啟動你的創意挑戰！
        </p>
        
        <p className="text-lg mb-10 text-white/80 max-w-2xl mx-auto">
          歡迎全台國中、高中職學生組隊參加「第五屆中學生黑客松」！
          透過雲端資源與AI賦能，打造你的創意應用，和夥伴一起挑戰現實、連結世界！
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-hackathon-purple hover:bg-white/90 text-lg px-8 rounded-full">
            立即報名
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={scrollToContent}
            className="border-white text-white hover:bg-white/10 text-lg px-8 rounded-full"
          >
            了解更多
          </Button>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <ArrowDown />
      </div>
    </div>
  );
};

export default HackathonHero;
