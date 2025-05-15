
import React from 'react';
import HackathonHero from '@/components/HackathonHero';
import AnnouncementSection from '@/components/AnnouncementSection';
import EligibilitySection from '@/components/EligibilitySection';
import ResourcesSection from '@/components/ResourcesSection';
import ThemeSection from '@/components/ThemeSection';
import MusicSection from '@/components/MusicSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HackathonHero />
      <AnnouncementSection />
      <EligibilitySection />
      <ThemeSection />
      <ResourcesSection />
      <MusicSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
