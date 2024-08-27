import React from "react";
import '../styles/tictactoeField.css';

const TicTacToeField: React.FC = () => {
  return (
    <div className="tictactoeField">
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
    </div>
  );
};

export default TicTacToeField;
