import React, { useState, useEffect } from 'react';

const upgradeSvgs = {
  bud: '🌱',
  flower: '🌸',
  cherry: '🍒',
  cherrytree: '🌳',
};

function KonamiGame({ onClose }) {
  const [petals, setPetals] = useState(0);
  const [perClick, setPerClick] = useState(1);
  const [perSecond, setPerSecond] = useState(0);
  const [scale, setScale] = useState(1);
  const [upgrades, setUpgrades] = useState({
    bud: { count: 0, cost: 50, name: 'Bourgeon', perClick: 1 },
    flower: { count: 0, cost: 500, name: 'Fleur', perSecond: 1 },
    cherry: { count: 0, cost: 2000, name: 'Cerise', perSecond: 5 },
    cherrytree: { count: 0, cost: 5000, name: 'Cerisier', perSecond: 20 },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setPetals((prev) => prev + perSecond);
    }, 1000);
    return () => clearInterval(timer);
  }, [perSecond]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleMainClick = () => {
    setPetals((prev) => prev + perClick);
    setScale(1.2);
    setTimeout(() => setScale(1), 100);
  };

  const buyUpgrade = (key) => {
    const upgrade = upgrades[key];
    if (petals >= upgrade.cost) {
      setPetals((prev) => prev - upgrade.cost);
      setUpgrades((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          count: prev[key].count + 1,
        },
      }));

      if (upgrade.perClick) {
        setPerClick((prev) => prev + upgrade.perClick);
      } else if (upgrade.perSecond) {
        setPerSecond((prev) => prev + upgrade.perSecond);
      }
    }
  };

  const formatNumber = (num) => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return Math.floor(num).toString();
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 overflow-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl p-8 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-5xl font-bold text-center mb-8 drop-shadow-lg" style={{ color: '#FFB7D9' }}>
          🌸 SAKURA CLICKER 🌸
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center justify-center gap-8 bg-gray-900 rounded-2xl p-8 border-2" style={{ borderColor: '#FFB7D9' }}>
              <div className="text-center">
                <p className="text-6xl font-bold drop-shadow-lg" style={{ color: '#FFE4F0' }}>
                  {formatNumber(petals)}
                </p>
                <p className="text-lg drop-shadow-lg mt-2" style={{ color: '#FFB7D9' }}>
                  Pétales de sakura
                </p>
                {perSecond > 0 && (
                  <p className="text-sm drop-shadow-lg" style={{ color: '#FFD9E8' }}>
                    +{formatNumber(perSecond)} par seconde
                  </p>
                )}
              </div>

              <button
                onClick={handleMainClick}
                className="transition-transform hover:scale-110 active:scale-95"
                style={{
                  transform: `scale(${scale})`,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '200px',
                  filter: 'drop-shadow(0 0 30px rgba(255, 105, 180, 0.8))',
                }}
              >
                🌸
              </button>

              <p className="text-xl font-bold drop-shadow-lg" style={{ color: '#FFB7D9' }}>
                +{perClick} par clic
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border-2 overflow-y-auto max-h-[600px]" style={{ borderColor: '#FFB7D9' }}>
            <h2 className="text-2xl font-bold mb-4 drop-shadow-lg" style={{ color: '#FFB7D9' }}>
              Améliorations
            </h2>

            <div className="space-y-3">
              {Object.entries(upgrades).map(([key, upgrade]) => {
                const canBuy = petals >= upgrade.cost;
                return (
                  <button
                    key={key}
                    onClick={() => buyUpgrade(key)}
                    disabled={!canBuy}
                    className="w-full p-4 rounded-lg transition-all text-left"
                    style={{
                      background: canBuy ? '#FF69B4' : '#666',
                      color: canBuy ? '#1a0a2e' : '#999',
                      opacity: canBuy ? 1 : 0.5,
                      cursor: canBuy ? 'pointer' : 'not-allowed',
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1 text-3xl">
                          {upgradeSvgs[key]}
                        </div>
                        <div>
                          <p className="font-bold">{upgrade.name}</p>
                          <p className="text-sm">
                            {upgrade.perClick ? `+${upgrade.perClick}/clic` : `+${upgrade.perSecond}/sec`}
                          </p>
                          <p className="text-sm mt-1">Possédé: {upgrade.count}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-bold">{formatNumber(upgrade.cost)}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={onClose}
              className="w-full mt-6 px-4 py-3 font-bold rounded-lg transition-all hover:scale-105"
              style={{
                background: '#FFB7D9',
                color: '#1a0a2e',
              }}
            >
              Fermer (ESC)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KonamiGame;

