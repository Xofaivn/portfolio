import { BackToTop } from './components/BackToTop';
import { BokehBackground } from './components/BokehBackground';
import { TopNavbar } from './components/TopNavbar';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { InfoSection } from './sections/InfoSection';
import { PersonalSection } from './sections/PersonalSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { StacksSection } from './sections/StacksSection';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Night sky base */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-[#040917]"
      />
      {/* Nebula/aurora overlays */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(30,58,138,0.32),transparent),radial-gradient(ellipse_at_88%_85%,rgba(109,40,217,0.18),transparent_55%),radial-gradient(ellipse_at_5%_65%,rgba(0,150,136,0.12),transparent_50%)]"
      />

      <BokehBackground />

      <TopNavbar />

      <main className="relative mx-auto max-w-screen-xl px-6 pb-20 pt-28 sm:pt-32">
        <PersonalSection />
        <div className="h-10" />
        <InfoSection />
        <div className="h-10" />
        <ProjectsSection />
        <div className="h-10" />
        <StacksSection />
        <div className="h-10" />
        <ContactSection />
        <div className="h-16" />
        <Footer />
      </main>

      <BackToTop />
    </div>
  );
}

