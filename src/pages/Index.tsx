import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Bell, CalendarCheck, ArrowDown, Users, FileText, FileCheck, FileWarning,
  Lightbulb, Video, Globe, Award, Music, Play, Pause, ArrowRight
} from 'lucide-react';

import news from '@/news';

const thisNews = news.ch;

const Index: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // For HackathonHero
  const scrollToContent = () => {
    const contentElement = document.getElementById('announcement');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-hero overflow-hidden py-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-hackathon-blue opacity-20 animate-float"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full border border-white opacity-10"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full border border-white opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 max-w-5xl">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-3xl">🧠</span>
            </span>
            <span className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-3xl">🚀</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-8">
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
            <Button size="lg" className="bg-white text-hackathon-purple hover:bg-white/80 text-lg px-8 rounded-full" asChild>
              <a href="https://w.wolf-yuan.dev/youtube" target="_blank">
                立即報名</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContent}
              className="border-white text-white hover:text-white bg-white/10 hover:bg-white/20 text-lg px-8 rounded-full"
            >
              了解更多
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
          <ArrowDown />
        </div>
      </div>

      <section id="announcement" className="py-16 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title flex items-center gap-2">
              <Bell className="h-8 w-8 text-hackathon-pink" />
              最新公告
            </h2>

            <div className="grid gap-6 mt-8">
              {thisNews.map((item, index) => (
                <Card className="border-l-4 border-l-hackathon-blue shadow-sm" key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-hackathon-blue/10 p-3 rounded-full">
                        <CalendarCheck className="h-6 w-6 text-hackathon-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* ThemeSection */}
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

      {/* ResourcesSection */}
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
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-b from-hackathon-purple/5 to-hackathon-blue/5">
                <div className="p-4 bg-hackathon-purple/10 rounded-full mb-4">
                  <Video className="h-6 w-6 text-hackathon-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">活動影音簡報</h3>
                <p className="text-gray-600 mb-4">活動說明與創意撰寫教學</p>
                <Button variant="link" className="text-hackathon-purple mt-auto">
                  觀看影片 →
                </Button>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-b from-hackathon-blue/5 to-hackathon-pink/5">
                <div className="p-4 bg-hackathon-blue/10 rounded-full mb-4">
                  <Globe className="h-6 w-6 text-hackathon-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">教師線上研習</h3>
                <p className="text-gray-600 mb-4">不限領域、同步授課</p>
                <Button variant="link" className="text-hackathon-blue mt-auto">
                  研習報名連結 →
                </Button>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-b from-hackathon-pink/5 to-hackathon-purple/5">
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

      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-hackathon-pink/10 rounded-full">
                    <Music className="h-6 w-6 text-hackathon-pink" />
                  </div>
                  <h3 className="text-2xl font-bold">活動主題曲</h3>
                </div>

                <h4 className="text-xl font-bold mb-2">「夢想起飛 Dreams Take Flight」</h4>
                <p className="text-gray-600 mb-6">
                  作曲：AI／作詞：Y.C.L.／演唱：AI x 人類
                </p>

                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe src="https://www.youtube-nocookie.com/embed/FkZpg2C-Zgo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className='absolute top-0 left-0 w-full h-full rounded' allowFullScreen></iframe>
                </div>
              </div>

              <div className="h-2 bg-gradient-to-r from-hackathon-purple via-hackathon-blue to-hackathon-pink"></div>
            </div>
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
