import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChristmasGame } from './components/ChristmasGame';
import { GlowBackground } from './components/GlowBackground';

const GameOnly: React.FC = () => {
  return (
    <div className="relative w-screen h-screen bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
      <GlowBackground />
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        {/* 
          onClose is required by the component. 
          In standalone mode, we reload the page to "restart" or "exit" to the initial state.
        */}
        <ChristmasGame onClose={() => window.location.reload()} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GameOnly />
  </React.StrictMode>
);