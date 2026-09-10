import { useEffect, useRef, useState } from 'react';

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (videoRef.current && !prefersReducedMotion && !videoFailed) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted or blocked; fall back gracefully
        setVideoFailed(true);
      });
    }
  }, [prefersReducedMotion, videoFailed]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
    >
      {/* Fallback still image when video cannot play or reduced motion is enabled */}
      {prefersReducedMotion || videoFailed ? (
        <img
          src="/solar-roof-still.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ) : (
        <video
          ref={videoRef}
          src="/solar-rooftop-loop.mp4"
          poster="/solar-roof-still.jpg"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Flat Ink overlay at 60% opacity per Section 4 */}
      <div className="absolute inset-0 w-full h-full bg-[#151A21]/60" />
    </div>
  );
}
