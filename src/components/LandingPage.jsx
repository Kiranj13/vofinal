import React from 'react';
import logo from '../assets/logo.png';
import zenturioLogo from '../assets/zenturio-logo.png';

export default function LandingPage({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <header className="w-full bg-gray-100 p-4 flex justify-between items-center">
        <img src={logo} alt="App Logo" className="h-12" />
        <h1 className="text-3xl font-bold">Vocabulary Drawing App</h1>
      </header>

      <main className="flex flex-col items-center mt-20">
        <button
          onClick={onStart}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600"
        >
          Start Drawing
        </button>
      </main>

      <footer className="w-full bg-gray-100 p-4 flex flex-col items-center">
        <p>Contact: support@zenturiotech.com</p>
        <img src={zenturioLogo} alt="ZenturioTECH" className="h-8 mt-2" />
      </footer>
    </div>
  );
}
