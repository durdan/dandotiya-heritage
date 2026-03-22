export default function Mandala() {
  return (
    <div className="hero-mandala">
      <svg viewBox="0 0 600 600" fill="none">
        <g stroke="#C45C00" strokeWidth="0.6">
          <circle cx="300" cy="300" r="280" />
          <circle cx="300" cy="300" r="250" />
          <circle cx="300" cy="300" r="220" />
          <circle cx="300" cy="300" r="180" />
          <circle cx="300" cy="300" r="140" />
          <circle cx="300" cy="300" r="100" />
          <line x1="300" y1="20" x2="300" y2="580" />
          <line x1="20" y1="300" x2="580" y2="300" />
          <line x1="103" y1="103" x2="497" y2="497" />
          <line x1="497" y1="103" x2="103" y2="497" />
          <line x1="55" y1="195" x2="545" y2="405" />
          <line x1="545" y1="195" x2="55" y2="405" />
          <line x1="195" y1="55" x2="405" y2="545" />
          <line x1="405" y1="55" x2="195" y2="545" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
            <ellipse key={`a${r}`} cx="300" cy="160" rx="20" ry="60" transform={`rotate(${r} 300 300)`} />
          ))}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((r) => (
            <ellipse key={`b${r}`} cx="300" cy="220" rx="12" ry="40" transform={`rotate(${r} 300 300)`} />
          ))}
          <rect x="80" y="80" width="440" height="440" transform="rotate(45 300 300)" strokeOpacity="0.35" />
          <rect x="60" y="60" width="480" height="480" strokeOpacity="0.18" />
        </g>
      </svg>
    </div>
  );
}
