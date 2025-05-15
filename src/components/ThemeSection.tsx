
import React from 'react';
import { Lightbulb } from 'lucide-react';

const ThemeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-hackathon-purple/90 to-hackathon-blue/90 text-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
            <Lightbulb className="h-8 w-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">主題與重點</h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-xl mb-6">以生活化AI加值雲端應用為核心：</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 p-5 rounded-xl">
                <p className="text-lg">
                  <span className="font-bold">📌</span> 聚焦於「食、衣、住、行、育、樂」等生活議題
                </p>
              </div>
              
              <div className="bg-white/10 p-5 rounded-xl">
                <p className="text-lg">
                  <span className="font-bold">📌</span> 創意應用結合 AI 與雲端資源（入圍後需明確標註平台）
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
