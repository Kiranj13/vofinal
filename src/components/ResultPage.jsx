import React from 'react';

export default function ResultPage({ onRetry, onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-6">Your Result</h2>

      <div className="w-1/2 h-40 border-2 border-gray-400 mb-6 flex items-center justify-center">
        {/* Placeholder for result output */}
      </div>

      <div className="flex gap-6">
        <button
          onClick={onRetry}
          className="bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500"
        >
          Retry
        </button>
        <button
          onClick={onNext}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
