import React, { useState } from 'react';
import '../styles/tictactoeField.css';

const TicTacToeField: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [clickOrder, setClickOrder] = useState<{ [key: number]: number }>({});

  /**
   * @brief 전역 count가 짝수면 O, 홀수면 X를 textContent에 입력
   * @details 타일의 index : count를 clickOrder에 저장하여, 몇번 째 클릭인지 기록한다.
   * @param index 타일의 index
   * @param e 이벤트 할당 요소 지정
   * @returns count + 1
   */
  function clickTile(index: number, e: React.MouseEvent<HTMLDivElement>): void {
    const target = e.currentTarget;

    // 이미 클릭된 타일은 무시한다.
    if (target.textContent === 'X' || target.textContent === 'O') {
      return;
    }

    // 현재 타일이 몇 번째로 클릭되었는지 기록
    setClickOrder((prev) => ({
      ...prev,
      [index]: clickCount, // 클릭 당시의 카운트를 저장
    }));

    // 클릭 수에 따라 'O' 또는 'X' 배치
    if (clickCount % 2 === 0) {
      target.textContent = 'O';
    } else {
      target.textContent = 'X';
    }

    // 클릭 수 업데이트
    setClickCount(clickCount + 1);
  }

  /**
   * @brief 7번째 이후에 클릭된 타일의 textContent를 공란으로 만드는 함수
   * @details clickOrder 객체를 순회하여, 각 타일의 클릭 시점을 기록한 값과 현재 클릭 수를 비교합니다.
   */
  function checkAndClearTiles(): void {
    // 각 타일의 클릭 순서와 현재 클릭 카운트를 비교해 7번 뒤의 타일을 초기화
    for (let index in clickOrder) {
      const tileClickCount = clickOrder[+index];
      const tileElement = document.querySelectorAll('.block')[+index];

      if (clickCount - tileClickCount >= 7) {
        // 7번째 후의 클릭이 이루어진 타일의 내용 제거
        if (tileElement) {
          tileElement.textContent = '';
        }
      }
    }
  }

  // 클릭이 발생할 때마다 clcikOrder을 확인하여 clickCount + 6인 타일 초기화
  React.useEffect(() => {
    checkAndClearTiles();
  }, [clickCount]);

  return (
    <div className="tictactoeField">
      {/* 첫번째 인수는 사용하지 아니함. */}
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="block"
          onClick={(e) => clickTile(index, e)}
        ></div>
      ))}
    </div>
  );
};

export default TicTacToeField;
