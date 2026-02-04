import { useEffect } from 'react';
import { CustomCursor } from '@/app/components/custom-cursor';
import { Navigation } from '@/app/components/navigation';
import { LandingHero } from '@/app/components/landing-hero';
import { HorizontalGallery } from '@/app/components/horizontal-gallery';
import { SplitScreenSection } from '@/app/components/split-screen-section';
import { BehindTheScenes } from '@/app/components/behind-the-scenes';
import { ExhibitionAwards } from '@/app/components/exhibition-awards';
import { ContactSection } from '@/app/components/contact-section';

export default function App() {
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      
      {/* Landing Page */}
      <LandingHero />
      
      {/* Work Showcase - Horizontal Scrolling Gallery */}
      <div id="work">
        <HorizontalGallery />
      </div>
      
      {/* About - Split Screen with Parallax */}
      <div id="about">
        <SplitScreenSection />
      </div>
      
      {/* Process - Behind the Scenes */}
      <div id="process">
        <BehindTheScenes />
      </div>
      
      {/* Recognition - Exhibition & Awards */}
      <div id="recognition">
        <ExhibitionAwards />
      </div>
      
      {/* Contact */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
