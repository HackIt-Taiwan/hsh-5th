
import React from 'react';
import { Bell, CalendarCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AnnouncementSection: React.FC = () => {
  return (
    <section id="announcement" className="py-16 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title flex items-center gap-2">
            <Bell className="h-8 w-8 text-hackathon-pink" />
            最新公告
          </h2>
          
          <div className="grid gap-6 mt-8">
            <Card className="border-l-4 border-l-hackathon-pink shadow-sm card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-hackathon-pink/10 p-3 rounded-full">
                    <CalendarCheck className="h-6 w-6 text-hackathon-pink" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">報名截止</h3>
                    <p className="text-gray-600">5/10（六）17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-hackathon-blue shadow-sm card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-hackathon-blue/10 p-3 rounded-full">
                    <CalendarCheck className="h-6 w-6 text-hackathon-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">創意構想繳交截止</h3>
                    <p className="text-gray-600">5/12（一）17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-hackathon-purple shadow-sm card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-hackathon-purple/10 p-3 rounded-full">
                    <CalendarCheck className="h-6 w-6 text-hackathon-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">繳交連結寄送</h3>
                    <p className="text-gray-600">5/10 晚上寄送至隊長信箱</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
