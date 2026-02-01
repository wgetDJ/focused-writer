'use client';

import { SplashScreen } from '@/components/ui/SplashScreen';

export default function Home() {
  return (
    <>
      <SplashScreen />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Welcome to Focused Writer</h1>
          <p className="text-muted-foreground">
            A distraction-free markdown writing experience
          </p>
        </div>
      </div>
    </>
  );
}
