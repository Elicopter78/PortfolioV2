import React from 'react';

function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin"
            style={{ animationDuration: '2s' }}
          >
            <defs>
              <radialGradient id="petalGrad" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#ffd6e6" />
                <stop offset="60%" stopColor="#ffb3d1" />
                <stop offset="100%" stopColor="#ff8fbf" />
              </radialGradient>
              <radialGradient id="centerGrad" cx="35%" cy="35%" r="70%">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="100%" stopColor="#ffc93d" />
              </radialGradient>
            </defs>

            <g transform="translate(200,200)">
              {[0, 72, 144, 216, 288].map((angle) => (
                <g key={angle} transform={`rotate(${angle})`}>
                  <path
                    d="M0,0 C -35,-15 -45,-55 -18,-90 C -8,-100 8,-100 18,-90 C 45,-55 35,-15 0,0 Z"
                    fill="url(#petalGrad)"
                    stroke="#e8629e"
                    strokeWidth="1"
                  />
                  <path d="M0,-88 L-6,-96 L0,-92 L6,-96 Z" fill="#fff0f7" />
                </g>
              ))}

              <g stroke="#e8629e" strokeWidth="1" strokeLinecap="round">
                <line x1="0" y1="0" x2="32" y2="-6" />
                <line x1="0" y1="0" x2="30" y2="14" />
                <line x1="0" y1="0" x2="20" y2="30" />
                <line x1="0" y1="0" x2="4" y2="34" />
                <line x1="0" y1="0" x2="-14" y2="30" />
                <line x1="0" y1="0" x2="-28" y2="16" />
                <line x1="0" y1="0" x2="-32" y2="-4" />
                <line x1="0" y1="0" x2="-20" y2="-24" />
                <line x1="0" y1="0" x2="-4" y2="-32" />
                <line x1="0" y1="0" x2="14" y2="-28" />
              </g>

              <g fill="#ffc93d" stroke="#e8629e" strokeWidth="0.5">
                <circle cx="32" cy="-6" r="3" />
                <circle cx="30" cy="14" r="3" />
                <circle cx="20" cy="30" r="3" />
                <circle cx="4" cy="34" r="3" />
                <circle cx="-14" cy="30" r="3" />
                <circle cx="-28" cy="16" r="3" />
                <circle cx="-32" cy="-4" r="3" />
                <circle cx="-20" cy="-24" r="3" />
                <circle cx="-4" cy="-32" r="3" />
                <circle cx="14" cy="-28" r="3" />
              </g>

              <circle r="14" fill="url(#centerGrad)" stroke="#e8a020" strokeWidth="0.5" />
              <circle r="3" fill="#ff8fbf" />
            </g>
          </svg>
        </div>
        <h2 className="text-2xl font-serif-jp text-sakura font-semibold">Chargement...</h2>
        <p className="text-gray-500 mt-3 text-sm">Merci de patienter</p>
      </div>
    </div>
  );
}

export default Loading;
