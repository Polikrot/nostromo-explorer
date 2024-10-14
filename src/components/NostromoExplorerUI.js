import React from 'react';
import { Monitor, AlertTriangle, Battery, Compass, Map, Settings, Users } from 'lucide-react';

const RotatingEarthGlobe = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-64 h-64 rounded-full bg-green-900 relative overflow-hidden animate-spin-slow">
      <div className="absolute inset-0 bg-green-700">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-1 bg-green-900"
            style={{ top: `${i * 20}%`, transform: `rotate(${i * 15}deg)` }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-1 bg-green-900"
            style={{ left: `${i * 14}%`, transform: `rotate(${i * 15}deg)` }}
          />
        ))}
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-green-500 text-xs">Earth</div>
    </div>
  </div>
);

const NostromoExplorerUI = () => {
  return (
    <div className="bg-black text-green-500 p-4 h-screen font-mono">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">NOSTROMO EXPLORER</h1>
        <div className="flex items-center">
          <Battery className="mr-2" />
          <span>Power: 87%</span>
        </div>
      </header>
      
      <main className="flex h-[calc(100%-4rem)]">
        <nav className="w-16 flex flex-col items-center justify-around border-r border-green-500">
          <button className="p-2 hover:bg-green-900 rounded"><Compass /></button>
          <button className="p-2 hover:bg-green-900 rounded"><Map /></button>
          <button className="p-2 hover:bg-green-900 rounded"><Monitor /></button>
          <button className="p-2 hover:bg-green-900 rounded"><Settings /></button>
          <button className="p-2 hover:bg-green-900 rounded"><Users /></button>
        </nav>
        
        <section className="flex-grow p-4">
          <h2 className="text-xl mb-4">Planet Surface</h2>
          <div className="border border-green-500 h-[calc(100%-2rem)]">
            <RotatingEarthGlobe />
          </div>
        </section>
        
        <aside className="w-64 border-l border-green-500 p-4">
          <h3 className="text-lg mb-2">Status</h3>
          <ul>
            <li className="mb-2">Oxygen: 92%</li>
            <li className="mb-2">Temperature: 22°C</li>
            <li className="mb-2">Radiation: Low</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-lg mb-2">Alerts</h3>
            <div className="flex items-center text-yellow-500">
              <AlertTriangle className="mr-2" />
              <span>Unknown life form detected</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default NostromoExplorerUI;