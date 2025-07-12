import { useState, useEffect } from "react";

export default function LoadingOverlay({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const delayBeforeFade = 1500; // 1.5s delay before fading out
    const fadeDuration = 1000; // fade out duration

    const timer1 = setTimeout(() => setFadeOut(true), delayBeforeFade);
    const timer2 = setTimeout(() => onFinish(), delayBeforeFade + fadeDuration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed top-0 left-0 w-full p-6 text-center text-2xl font-bold bg-black z-50 neon-purple flicker transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ lineHeight: 1.5 }}
    >
      <div className="loading-banner animate-pulse">
      Get Ready-to-Descend..
      Prepare to step down...
      </div>
    </div>
  );
}
