
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">第五屆中學生黑客松</h3>
              <p className="text-gray-400">AI賦能 × 雲端創意</p>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <h4 className="font-bold mb-3">資源連結</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">創意構想說明</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">教師研習連結</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">活動獎勵詳情</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">聯絡方式</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">活動官方 Line</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">電子郵件</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} 中學生黑客松組委會. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
