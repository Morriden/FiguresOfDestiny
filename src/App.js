import React from 'react';
import Board from './components/Board';
import Card from './components/Card';
import BoardSquare from './components/BoardSquare';

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <BoardSquare />
          <Card id="card-1" className="card" draggable="true">
          </Card>
        </Board>

        {/* <BoardTwo id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
          </Card>
        </BoardTwo> */}
        
      </main>
    </div>
  );
}

export default App;
