import { useEffect, useState } from 'react';
import { Bell, Settings } from 'lucide-react';

export function HomeownerDashboard() {
  const [hoveredPoint, setHoveredPoint] = useState<{ time: string; kw: string } | null>(null);
  const [lineDrawn, setLineDrawn] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    if (motionQuery.matches) {
      setLineDrawn(true);
    } else {
      const timer = setTimeout(() => {
        setLineDrawn(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  // Production curve coordinates (SVG viewBox 0 0 400 130)
  // Curve rises from 6am (x=40, y=110), peaks at 12pm (x=200, y=25), sets around 7pm (x=360, y=110)
  const pathD = "M 40 110 C 100 110, 140 25, 200 25 C 260 25, 300 110, 360 110";
  const areaD = "M 40 110 C 100 110, 140 25, 200 25 C 260 25, 300 110, 360 110 L 360 115 L 40 115 Z";

  const keyPoints = [
    { time: '6a', kw: '0.4 kW', cx: 40, cy: 110 },
    { time: '9a', kw: '3.6 kW', cx: 120, cy: 55 },
    { time: '12p', kw: '5.8 kW', cx: 200, cy: 25 },
    { time: '3p', kw: '3.9 kW', cx: 280, cy: 58 },
    { time: '6p', kw: '0.6 kW', cx: 360, cy: 110 },
  ];

  return (
    <div
      id="hero-homeowner-dashboard"
      className="w-full lg:h-[420px] bg-white/[0.09] backdrop-blur-[24px] border border-white/20 rounded-[24px] p-5 sm:p-7 text-left select-none transition-colors duration-150 flex flex-col justify-between"
    >
      {/* Top row: System status + functional icons only (Section 8) */}
      <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.12]">
        <div className="flex items-center gap-2">
          {/* Plain text status per Rule 8 & Hard Rule 4, no pill badge */}
          <span className="w-2 h-2 rounded-full bg-[#8A9A8E]" aria-hidden="true" />
          <span className="font-sans text-[13px] sm:text-[14px] font-medium text-[#8A9A8E]">
            System online
          </span>
        </div>

        {/* Right aligned icons: notification bell and settings gear (flat Paper/Sage color) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            id="dashboard-notifications-btn"
            aria-label="System notifications"
            className="text-[#8A9A8E] hover:text-[#F6F5F1] transition-colors p-1 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-[6px]"
          >
            <Bell className="w-4 h-4" />
          </button>
          <button
            type="button"
            id="dashboard-settings-btn"
            aria-label="System settings"
            className="text-[#8A9A8E] hover:text-[#F6F5F1] transition-colors p-1 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-[6px]"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Primary Metrics: Today's production & Year savings */}
      <div className="grid grid-cols-2 gap-4 py-2">
        <div id="dashboard-metric-production">
          <div className="font-serif font-semibold text-[28px] sm:text-[32px] text-[#F6F5F1] leading-none mb-1.5 tracking-tight">
            34.2 kWh
          </div>
          <div className="font-sans text-[13px] text-[#8A9A8E]">
            Produced today
          </div>
        </div>

        <div id="dashboard-metric-savings">
          <div className="font-serif font-semibold text-[28px] sm:text-[32px] text-[#E8A94A] leading-none mb-1.5 tracking-tight">
            $1,240
          </div>
          <div className="font-sans text-[13px] text-[#8A9A8E]">
            Saved this year
          </div>
        </div>
      </div>

      {/* Production curve section */}
      <div className="flex flex-col justify-end pt-1">
        <div className="flex items-center justify-between text-[12px] font-sans text-[#8A9A8E] mb-2">
          <span>Daily sunlight curve</span>
          <span>
            {hoveredPoint ? `${hoveredPoint.time}: ${hoveredPoint.kw}` : 'Peak: 5.8 kW'}
          </span>
        </div>

        {/* SVG Curve - Flat gold stroke, flat low-opacity fill, NO gradient per Hard Rule 5 */}
        <div className="relative w-full aspect-[400/130]">
          <svg
            viewBox="0 0 400 130"
            className="w-full h-full overflow-visible"
            aria-label="Solar production curve across daylight hours"
          >
            {/* Flat low-opacity Gold area fill (no gradient) */}
            <path
              d={areaD}
              fill="#E8A94A"
              fillOpacity="0.08"
            />

            {/* Flat Gold stroke line with initial load-in draw */}
            <path
              d={pathD}
              fill="none"
              stroke="#E8A94A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="600"
              strokeDashoffset={lineDrawn || prefersReducedMotion ? '0' : '600'}
              style={{
                transition: prefersReducedMotion ? 'none' : 'stroke-dashoffset 1.4s ease-out',
              }}
            />

            {/* Interactive key time points */}
            {keyPoints.map((pt, i) => (
              <circle
                key={i}
                cx={pt.cx}
                cy={pt.cy}
                r="4"
                fill="#E8A94A"
                className="cursor-pointer hover:r-5 transition-all"
                onMouseEnter={() => setHoveredPoint({ time: pt.time, kw: pt.kw })}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            ))}
          </svg>
        </div>

        {/* Hour marks: 6a, 12p, 6p */}
        <div className="flex justify-between text-[12px] font-sans text-[#8A9A8E] px-4 pt-2">
          <span>6a</span>
          <span>12p</span>
          <span>6p</span>
        </div>
      </div>
    </div>
  );
}
