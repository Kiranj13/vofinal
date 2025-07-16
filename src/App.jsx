import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import DrawPage from './components/DrawPage';
import ResultPage from './components/ResultPage';

export default function App() {
  const [page, setPage] = useState('landing');

  return (
    <>
      {page === 'landing' && <LandingPage onStart={() => setPage('draw')} />}
      {page === 'draw' && <DrawPage onSubmit={() => setPage('result')} />}
      {page === 'result' && (
        <ResultPage
          onRetry={() => setPage('draw')}
          onNext={() => setPage('landing')}
        />
      )}
    </>
  );
}
