import { Suspense, lazy } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
const Projects = lazy(() => import('@/components/Projects'));
const FunFacts = lazy(() => import('@/components/FunFacts'));
const Contact = lazy(() => import('@/components/Contact'));
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Suspense fallback={<div className="container mx-auto px-6 py-12 text-muted-foreground">Loading projects…</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="container mx-auto px-6 py-12 text-muted-foreground">Loading fun facts…</div>}>
          <FunFacts />
        </Suspense>
        <Suspense fallback={<div className="container mx-auto px-6 py-12 text-muted-foreground">Loading contact…</div>}>
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
