'use client';

import { SplashScreen } from '@/components/ui/SplashScreen';
import { Editor } from '@/components/editor/Editor';

export default function Home() {
  return (
    <>
      <SplashScreen />
      <main className="min-h-screen">
        <Editor />
      </main>
    </>
  );
}
