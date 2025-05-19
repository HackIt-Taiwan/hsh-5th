import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Bell, CalendarCheck, ArrowDown, Users, FileText, FileCheck, FileWarning,
  Lightbulb, Video, Globe, Award, Music, ArrowRight
} from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/i18n/LanguageContext';
import news from '@/news';

const Index: React.FC = () => {
  const { locale, t } = useLanguage();

  const currentNews = locale === 'en' ? news.en : news.ch;

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

        <div className="absolute top-4 right-4 z-10">
          <LanguageSwitcher />
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
            {t.hero.title}
            <span className="block text-hackathon-yellow">{t.hero.subtitle}</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            {t.hero.description}
          </p>

          <p className="text-lg mb-10 text-white/80 max-w-2xl mx-auto">
            {t.hero.welcome}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-hackathon-purple hover:bg-white/80 text-lg px-8 rounded-full" asChild>
              <a href="https://discord.gg/KGwQxZqp9z" target="_blank">
                {t.hero.discord}</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContent}
              className="border-white text-white hover:text-white bg-white/10 hover:bg-white/20 text-lg px-8 rounded-full"
            >
              {t.hero.learnMore}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
          <ArrowDown />
        </div>
      </div>

      <section id="announcement" className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">
              {t.announcement.title}
            </h2>

            <div className="grid gap-6 mt-8">
              {currentNews.map((item, index) => (
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

      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-10">
              <span className="highlight-text">{t.eligibility.title}</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-hackathon-purple/10 rounded-xl">
                    <Users className="h-7 w-7 text-hackathon-purple" />
                  </div>
                  <h3 className="text-xl font-bold">{t.eligibility.teamFormation.title}</h3>
                </div>
                <p className="text-gray-600">
                  {t.eligibility.teamFormation.description}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-hackathon-blue/10 rounded-xl">
                    <FileText className="h-7 w-7 text-hackathon-blue" />
                  </div>
                  <h3 className="text-xl font-bold">{t.eligibility.submission.title}</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  {t.eligibility.submission.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-hackathon-orange/10 rounded-xl">
                    <FileCheck className="h-7 w-7 text-hackathon-orange" />
                  </div>
                  <h3 className="text-xl font-bold">{t.eligibility.aiCollaboration.title}</h3>
                </div>
                <p className="text-gray-600">
                  {t.eligibility.aiCollaboration.description}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-hackathon-pink/10 rounded-xl">
                    <FileWarning className="h-7 w-7 text-hackathon-pink" />
                  </div>
                  <h3 className="text-xl font-bold">{t.eligibility.underage.title}</h3>
                </div>
                <p className="text-gray-600">
                  {t.eligibility.underage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-hackathon-purple/90 to-hackathon-blue/90 text-white">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
              <Lightbulb className="h-8 w-8" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.theme.title}</h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-xl mb-6">{t.theme.core}</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 p-5 rounded-xl">
                  <p className="text-lg">
                    <span className="font-bold">📌</span> {t.theme.item1}
                  </p>
                </div>

                <div className="bg-white/10 p-5 rounded-xl">
                  <p className="text-lg">
                    <span className="font-bold">📌</span> {t.theme.item2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-3">
              <span className="highlight-text">{t.resources.title}</span>
            </h2>

            <p className="text-center text-gray-600 mb-10">
              {t.resources.subtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-b from-hackathon-purple/5 to-hackathon-blue/5 card-hover">
                <div className="p-4 bg-hackathon-purple/10 rounded-full mb-4">
                  <Video className="h-6 w-6 text-hackathon-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.resources.videoTitle}</h3>
                <p className="text-gray-600 mb-4">{t.resources.videoDesc}</p>
                <Button variant="link" className="text-hackathon-purple mt-auto" asChild>
                  <a href="https://tinyurl.com/hsh-2025-vid0" target="_blank">
                    {t.resources.videoLink} →
                  </a>
                </Button>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-b from-hackathon-blue/5 to-hackathon-pink/5 card-hover">
                <div className="p-4 bg-hackathon-blue/10 rounded-full mb-4">
                  <Globe className="h-6 w-6 text-hackathon-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.resources.infoTitle}</h3>
                <p className="text-gray-600 mb-4">{t.resources.infoDesc}</p>
                <Button variant="link" className="text-hackathon-blue mt-auto" asChild>
                  <a href="https://tinyurl.com/hsh-2025-4d" target="_blank">
                    {t.resources.infoLink} →
                  </a>
                </Button>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-b from-hackathon-pink/5 to-hackathon-purple/5 card-hover">
                <div className="p-4 bg-hackathon-pink/10 rounded-full mb-4">
                  <Award className="h-6 w-6 text-hackathon-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.resources.awardsTitle}</h3>
                <p className="text-gray-600 mb-4">{t.resources.awardsDesc}</p>
                <Button variant="link" className="text-hackathon-blue mt-auto" asChild>
                  <a href="https://tinyurl.com/hsh-2025-awards" target="_blank">
                    {t.resources.awardsLink} →
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-hackathon-yellow/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center">{t.resources.rewardsTitle}</h3>
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🎖️</span>
                  <span>{t.resources.rewards.certificate}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🎮</span>
                  <span>{t.resources.rewards.gaming}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🧑‍🎨</span>
                  <span>{t.resources.rewards.internship}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🌏</span>
                  <span>{t.resources.rewards.international}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 tech-pattern">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-hackathon-pink/10 rounded-full">
                    <Music className="h-6 w-6 text-hackathon-pink" />
                  </div>
                  <h3 className="text-2xl font-bold">{t.music.title}</h3>
                </div>

                <h4 className="text-xl font-bold mb-2">{t.music.songTitle}</h4>
                <p className="text-gray-600 mb-6">
                  {t.music.credits}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl mb-10">
              {t.cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-hackathon-purple hover:bg-white/90 text-lg px-8 rounded-full flex items-center gap-2"
                asChild
              >
                <a href="https://discord.gg/KGwQxZqp9z" target="_blank">
                  {t.cta.buttonText}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:text-white bg-white/10 hover:bg-white/20 text-lg px-8 rounded-full"
                asChild
              >
                <a href="https://line.me/R/ti/p/@659cnniv" target="_blank">
                  {t.cta.contactButton}
                </a>
              </Button>
            </div>

            <p className="mt-10 text-white/80">
              {t.cta.footer}
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">{t.hero.title}</h3>
                <p className="text-gray-400">{t.hero.subtitle}</p>
              </div>

              <div className="flex flex-wrap gap-8">
                <div>
                  <h4 className="font-bold mb-3">{t.footer.links}</h4>
                  <ul className="space-y-2">
                    <li><a href="https://sites.google.com/k12moocs.edu.tw/hsh/%E6%AD%B7%E5%B1%86%E6%B4%BB%E5%8B%95%E5%89%AA%E5%BD%B1?authuser=0" className="text-gray-400 hover:text-white transition-colors">{t.footer.pastEvents}</a></li>
                    <li><a href="https://line.me/R/ti/p/@659cnniv" className="text-gray-400 hover:text-white transition-colors">{t.footer.lineAccount}</a></li>
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
