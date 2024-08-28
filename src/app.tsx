import React from 'react';
import TicTacToeField from './app/gameBoard/playField';

const App: React.FC = () => {
  return (
    <>
      <div>
        <h1>A</h1>
        <h2>
          Score : <span></span>
        </h2>
      </div>
      <TicTacToeField />
      <div>
        <h1>B</h1>
        <h2>
          Score : <span></span>
        </h2>
      </div>
    </>
  );
};

export default App;
