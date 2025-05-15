
import React from 'react';
import { Video, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResourcesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-3">
            <span className="highlight-text">專為親師生設計的活動與資源</span>
          </h2>
          
          <p className="text-center text-gray-600 mb-10">
            我們提供豐富的學習資源，協助您更好地準備與參與
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-b from-hackathon-purple/5 to-hackathon-blue/5 card-hover">
              <div className="p-4 bg-hackathon-purple/10 rounded-full mb-4">
                <Video className="h-6 w-6 text-hackathon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">活動影音簡報</h3>
              <p className="text-gray-600 mb-4">活動說明與創意撰寫教學</p>
              <Button variant="link" className="text-hackathon-purple mt-auto">
                觀看影片 →
              </Button>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-b from-hackathon-blue/5 to-hackathon-pink/5 card-hover">
              <div className="p-4 bg-hackathon-blue/10 rounded-full mb-4">
                <Globe className="h-6 w-6 text-hackathon-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">教師線上研習</h3>
              <p className="text-gray-600 mb-4">不限領域、同步授課</p>
              <Button variant="link" className="text-hackathon-blue mt-auto">
                研習報名連結 →
              </Button>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-b from-hackathon-pink/5 to-hackathon-purple/5 card-hover">
              <div className="p-4 bg-hackathon-pink/10 rounded-full mb-4">
                <Award className="h-6 w-6 text-hackathon-pink" />
              </div>
              <h3 className="text-xl font-bold mb-2">活動獎勵詳情</h3>
              <p className="text-gray-600 mb-4">豐富獎項與參賽證明</p>
              <Button variant="link" className="text-hackathon-pink mt-auto">
                查看詳情 →
              </Button>
            </div>
          </div>
          
          <div className="bg-hackathon-yellow/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">🏆 你可以獲得…</h3>
            <ul className="grid gap-4 md:grid-cols-2">
              <li className="flex items-start gap-3">
                <span className="text-xl">🎖️</span>
                <span>國教署獎狀（學生＆教師）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🎮</span>
                <span>任天堂遊戲機、筆電、平板、獎盃與獎金</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🧑‍🎨</span>
                <span>Microsoft 一日見習生、參賽證明、修課證書</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🌏</span>
                <span>國際賽(APICTA)代表隊推薦資格！</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
