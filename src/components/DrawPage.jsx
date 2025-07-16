import React, { useState, useRef, useEffect } from 'react';
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={word}
          readOnly
          className="border p-2 mr-2 rounded shadow"
        />
        <FaVolumeUp className="cursor-pointer" onClick={() => speak(word)} title="Speak" />
      </div>

      <div className="flex items-center mb-4">
        <input
          type="text"
          value={teluguWord}
          readOnly
          className="border p-2 mr-2 rounded shadow"
        />
        <FaVolumeUp className="cursor-pointer" onClick={() => speak(teluguWord)} title="Speak in Telugu" />
      </div>

      <canvas
        ref={canvasRef}
        width={400}
        height={250}
        className="border-2 border-black mb-4"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>

      <button
        onClick={onSubmit}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </div>
  );
}
