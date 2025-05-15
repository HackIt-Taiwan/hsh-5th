
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">📍 馬上報名</h2>
          <p className="text-xl mb-10">
            加入第五屆中學生黑客松，開啟屬於你的創意旅程！
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-hackathon-purple hover:bg-white/90 text-lg px-8 rounded-full flex items-center gap-2"
            >
              線上報名表單
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-white text-white hover:text-white bg-white/10 hover:bg-white/20 text-lg px-8 rounded-full"
            >
              聯絡活動官方
            </Button>
          </div>
          
          <p className="mt-10 text-white/80">
            讓我們陪你一起創作與實現！
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
