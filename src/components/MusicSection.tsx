
import React, { useState } from 'react';
import { Music, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Note: In a real implementation, we would control audio playback here
    console.log('Toggle music playback');
  };

  return (
    <section className="py-16 bg-gray-50">
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
              
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-2 border-hackathon-purple mr-4"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 text-hackathon-purple" />
                  ) : (
                    <Play className="h-5 w-5 text-hackathon-purple" />
                  )}
                </Button>
                <span className="text-gray-700">點擊收聽主題曲</span>
              </div>
            </div>
            
            <div className="h-2 bg-gradient-to-r from-hackathon-purple via-hackathon-blue to-hackathon-pink"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
