
import React from 'react';
import { Users, FileText, FileCheck, FileWarning } from 'lucide-react';

const EligibilitySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 tech-pattern">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-10">
            <span className="highlight-text">報名條件與參賽資訊</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Team Formation */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-hackathon-purple/10 rounded-xl">
                  <Users className="h-7 w-7 text-hackathon-purple" />
                </div>
                <h3 className="text-xl font-bold">組隊方式</h3>
              </div>
              <p className="text-gray-600">
                2～4位學生／可有 0～2 位指導老師
              </p>
            </div>
            
            {/* Submission Requirements */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-hackathon-blue/10 rounded-xl">
                  <FileText className="h-7 w-7 text-hackathon-blue" />
                </div>
                <h3 className="text-xl font-bold">提交內容</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• 一頁 300 字以上的「創意構想」</li>
                <li>• 一頁「圖像示意」（手繪、火柴人風格皆可，不評美術）</li>
              </ul>
            </div>
            
            {/* AI Collaboration */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-hackathon-orange/10 rounded-xl">
                  <FileCheck className="h-7 w-7 text-hackathon-orange" />
                </div>
                <h3 className="text-xl font-bold">AI 協作說明</h3>
              </div>
              <p className="text-gray-600">
                可使用 AI，但需由人類主導創作，並繳交「AI協作切結書」
              </p>
            </div>
            
            {/* Underage Participants */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-hackathon-pink/10 rounded-xl">
                  <FileWarning className="h-7 w-7 text-hackathon-pink" />
                </div>
                <h3 className="text-xl font-bold">18 歲以下成員</h3>
              </div>
              <p className="text-gray-600">
                須繳交「家長監護人同意書」（每人一份）
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
