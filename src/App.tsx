import { lazy, Suspense } from 'react';
import { Hero } from './features/hero/Hero';

const About      = lazy(() => import('./features/about/About').then(m => ({ default: m.About })));
const Skills     = lazy(() => import('./features/skills/Skills').then(m => ({ default: m.Skills })));
const Experience = lazy(() => import('./features/experience/Experience').then(m => ({ default: m.Experience })));
const Projects   = lazy(() => import('./features/projects/Projects').then(m => ({ default: m.Projects })));
const Blog       = lazy(() => import('./features/blog/Blog').then(m => ({ default: m.Blog })));
const Contact    = lazy(() => import('./features/contact/Contact').then(m => ({ default: m.Contact })));

export default function App() {
  return (
    <main className="bg-[#0a0a0a] text-white font-sans antialiased">
      <Hero />
      <Suspense fallback={
        <div className="flex items-center justify-center py-20">
          <div className="w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
        </div>
      }>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </Suspense>
    </main>
  );
}
