import React, { Component } from 'react';
import { BOARD_HEIGHT, BOARD_LENGTH } from '../initializationVariables';
import { tetrominos, randomTetromino } from '../tetrominos';
import Buttons from './Buttons';
import Displays from './Displays';
import Board from './Board';
import Title from './Title';
import GameOver from './GameOver';
import Store from "../Store/Store";

export class Tetris extends Component {
  state = { 
    board: [...Array(BOARD_HEIGHT).fill([...Array(BOARD_LENGTH).fill([0,'clear'])])],
    position: { X: Math.floor(BOARD_LENGTH/2)-2, Y: 0, },
    currentTetromino: randomTetromino(),
    points: -1,
    firstEntry: true,
    level: 1,
    record: 987654,
    gameOver: true,
    gamePaused: false,
  }

  render() { 


    return (
      <div tabIndex="0" onKeyDown={e => this.moveTetromino(e)} className="tetris">
        <Title />
        <div className="board">
          { (this.state.gameOver && !this.state.firstEntry ) ? <GameOver points={this.state.points} newGame={e => this.newGame(e)}/> :(
            <>
              <Board BOARD_HEIGHT={BOARD_HEIGHT} BOARD_LENGTH={BOARD_LENGTH} board={this.state.board} />
              <Displays points={this.state.points} level={this.state.level} record={this.findRecord()} />
            </>
          )}
        </div>
        <Buttons
            newGame={e => this.newGame(e)}
            moveTetromino={e => this.moveTetromino(e)} 
            pauseGame={e => this.pauseGame(e)}
            isPaused={e => this.isPaused(e)}
            isOver={e => this.isOver(e)}
            />
      </div>
    );
  }

  //-----------------------------------------------------------------------------------------------{ newGame }
  newGame = e => {
    this.setState({
      board: [...Array(BOARD_HEIGHT).fill([...Array(BOARD_LENGTH).fill([0,'clear'])])],
      position: { X: Math.floor(BOARD_LENGTH/2)-2, Y: -1, },
      currentTetromino: randomTetromino(),
      points: 0,
      firstEntry: false,
      level: 1,
      gameOver: false,
      gamePaused: false,
    })
    this.gameLoop();
  }

  findRecord = () => {
    const { data } = this.state;
    let max = 0;
    if ( data ) {
       max = data.map( data => data.points ).sort( (a,b)=> b-a )[0];
    }
    return max;
  }
  //-----------------------------------------------------------------------------------------------{ pauseGame }
  pauseGame = e => {
    this.setState({
      gamePaused: !this.state.gamePaused,
    })
    this.gameLoop();
  }

  //-----------------------------------------------------------------------------------------------{ isPaused }
  isPaused = e => {
    return this.state.gamePaused;
  }

  //-----------------------------------------------------------------------------------------------{ isOver }
  isOver = e => {
    return this.state.gameOver;
  }

  //-----------------------------------------------------------------------------------------------{ componentDidMount }
  componentDidMount() {
    if ( this.state.gameOver ) {
      // pobranie początkowych wartości z state
      let { board, position } = this.state;
      // ustawieni pustego tetromino ( zajmujący 1 komórkę mający kolor tła / dlatego go niewidać )
      position = this.state.position;
      const emptyTetromino = tetrominos['E'];
      // wstawianie pustego tetromino na planszy
      board = this.drawTetromino( board, emptyTetromino, position);
      // aktualizacja state / ustawienie wartości początkowych gry ( w tym pozycję "kursora" na środku górnej krawędzi ) /
      this.setState({
        board,
        position,
        points: 0,
        gameOver: true,
        gamePaused: false,
      })
    }
    fetch(`http://localhost:3000/results`)
      .then(resp => resp.json()) 
      .then(dataFromApi => {
          this.setState({
              data: dataFromApi,
          })
      })
      .catch(err => console.error(err));
    
  }

  //-----------------------------------------------------------------------------------------------{ componentDidMount }
  gameLoop = () => {
    // jeżeli został wcześniej utworzony interval dla pętli gry to go usuwamy
    if ( this.gameLoopID) {
      clearInterval(this.gameLoopID);
    } 
    // zmiana prędkości zależnie od levelu
    const level = this.state.level;
    const speed = 1100 - level*100;
    const move = {X: 0, Y:+1};
    // zainiaclizowanie pętli gry (uruchomienie)
    
    this.gameLoopID = setInterval(()=>{
      if ( this.state.gameOver ) {
        clearInterval(this.gameLoopID);
      }
      if ( this.state.gamePaused ) {
        clearInterval(this.gameLoopID);
        return null;
      }
      const currentTetromino = this.state.currentTetromino;
      let position = this.state.position;
      let board = this.state.board;
      // sprawdzenie wystąpienia kolizji
      const collided = this.detectCollision(position, move, currentTetromino, board);
      // jeżeli wwstąpiłą kolizja po przesunięciu klocka w dół scalamy go z planszą
      if ( collided ) {
        this.mergeTetromino(board);
      }
      // jeżeli przy wykonaniu ruchu nie napotkano na kolizję wyświetlamy nową planszę/ robimy aktualizaję state
      if (!collided) {
        position = { X: position.X+move.X, Y: position.Y+move.Y, };
        const newBoard = this.drawTetromino(board,currentTetromino,position);
        this.setState({
          currentTetromino,
          board: newBoard,
          position,
        })
      }
     // console.log(moveDown);
    }, speed)
    
  }
  

  //-----------------------------------------------------------------------------------------------{ componentWillUnmount }
  componentWillUnmount(){
    clearInterval(this.gameLoopID);
  }
 
  //-----------------------------------------------------------------------------------------------{ drawTetromino }
  // funkcja wstawiająca tetromino na planszy
  drawTetromino = (prevBoard,tetromino,position) => {
    // utworzenie "czystej" planszy / przejście po każdym wierszu
    const newBoard = [...prevBoard].map( row => {
      // jeśli dana komórka ma ustwioną wartość na 'clear' to ją czyścimy w innym wypadku pozostawiamy jej  stan
      return [...row].map(cell => cell[1] === 'clear' ? [0,'clear'] : cell );
    } );

    // wstawianie tetromino na nową plaszę
    tetromino.shape.forEach( (row,Y) => {
      row.forEach( (value,X) => {
          // wstawianie tetromino wykonujemy tylko dla komórek które reprezentują kształt klocka
          if (tetromino.shape[Y][X] !== 0 ) {
            // tetromino wstawiany jest w odniesieniu do obecnej pozycji "kursora"
            newBoard[Y+position.Y][X+position.X] = [value, 'clear'];
          }
        } )
      } )
    
    // zwracamy nową planszę z umiejscowionym tetromino
    return newBoard;
  } 

  //-----------------------------------------------------------------------------------------------{ checkRowDeletion }
  // funkcja sprawdzająa czy dany wiersz należy usunąć
  checkRowDeletion = (row) => {
    // sprawdzenie ile komórek w danym wierszu jest zajętych
    const occupiedCells = row.reduce ( (prev,curr) => {
      if ( curr[1] === 'merged' ) {
        return prev + 1;
      } else {
        return 0;
      }
    }, 0);
    // jeżeli liczba komórek, które są zajęte jest równa długości wiersza to wiersz należy usunąć 
    if ( occupiedCells === row.length ) {
      return true;
    }
    return false;
  }

  //-----------------------------------------------------------------------------------------------{ rowsToDelete }
  // funkcja tworząca tablicę wierszy do usunięcia 
  rowsToDelete = (board) => {
    const rowsToDelete = [];
    board.forEach( (row,rowIndex) => {
      if ( this.checkRowDeletion(row) ) {
        rowsToDelete.push(rowIndex);
      }  
    } )
    return rowsToDelete;
  }

  //-----------------------------------------------------------------------------------------------{ deleteRow }
  // funkcja usuwająca wiersz
  deleteRow = (board) => {
    // pobranie listy wierszy do usunięcia
    const rowsToDelete = this.rowsToDelete(board);
    // liczba zdobytyh punktów równa się liczbie usuniętych wierszy
    // points = (długość_wiersza) * (2)^(ilość_usuniętych_wierszy) 
    // points = [ 20 || 40 || 80 || 160 ]
    const points = this.state.points + board[0].length * Math.pow(2, rowsToDelete.length);
    let level = this.state.level;
    // co 250 punktów zwiększamy level
    if ( Math.floor(points/250) + 1 > level  ) {
      level++;
    }
    // jeżeli są wiersze do usunięcia tworzymy nową tablicę wierszy i ją zwracamy
    const newBoard = [];
    if ( rowsToDelete.length > 0 ){
      // do nowej tablicy dodajemy tyle nowych wierszy ile będziemy usuwać
      for( let rowIndex = 0; rowIndex < rowsToDelete.length; rowIndex++ ){
        newBoard.push(board[0]);
      }
      // dodajemy te wiersze z starej planszy, które nie będą usunięte
      for( let rowIndex = 0; rowIndex < board.length; rowIndex++ ){
        if ( (rowsToDelete.indexOf(rowIndex) < 0) ) {
          newBoard.push(board[rowIndex]);
        } 
      }
      // aktualizujemy stan punktów
      this.setState({
        points,
        level,
      })
      // zwracamy nową planszę
      return newBoard;
    }
    // jeżeli niema wierszy do usunięcia zwracamy aktulaną tablicę wierszy
    return board;
  }

  //-----------------------------------------------------------------------------------------------{ mergeTetromino }
  // funkcja scalająca tetromino z planszą po wykryciu kolizji przy ruchu w dół
  mergeTetromino(board) {
    board.forEach( (row,Y) => {
      row.forEach( (cell,X) => {
        if ( board[Y][X][0] !== 0 ) {
          board[Y][X] = [ cell[0] ,'merged'];
        }
      })
    } )
    // po złączeniu tetromino z planszą usuwane są wiersze zapełnione w całośi (cell='merged')
    board = this.deleteRow(board);
    // ustawienie pozycji wyjściowej dla nowegoklocka
    const position = { X: Math.floor(BOARD_LENGTH/2)-2, Y: 0, };
    // wylosowanie nowego tetromino
    const currentTetromino = randomTetromino();
    const move = { X: 0, Y: 0 };
    const collided = this.detectCollision( position, move, currentTetromino, board);
    // Jeśli nowy klocek nie mieści się na planszy następuje koniec gry
    if ( collided ) {
      //console.log('Game Over');
      this.setState({
        gameOver: true,
      })
    } else {
      // aktualizacja state
      board = this.drawTetromino( board, currentTetromino, position);
      this.setState({
        board,
        position,
        currentTetromino,
      })
    }
  }

  //-----------------------------------------------------------------------------------------------{ detectCollision }
  // funkcja sprawdzająca kolizje przy próbie wykonania ruchu
  detectCollision( position, move, tetromino, board) {
    for ( let Y = 0; Y < tetromino.shape.length; Y++ ){
      for ( let X = 0; X < tetromino.shape[0].length; X++ ){
        // sprawdzamy tylko kolizje komórek zajętych w tetromino
        if (tetromino.shape[Y][X] !== 0 ) {
          // przekroczenie wysokości planszy 
          if ( Y + position.Y + move.Y >= BOARD_HEIGHT ) {
            return true;
          }
          // ograniczenie ruchów na boki planszy
          if ( X + position.X + move.X >= BOARD_LENGTH || X + position.X + move.X < 0 ) {
            return true;
          }
          // sprawdzenie czy dana komórka jest zajęta
          if ( board[Y + position.Y + move.Y][X + position.X + move.X][1] !== 'clear' ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  //-----------------------------------------------------------------------------------------------{ rotateTetromino }
  // funkcja obracająca tetromino o 90 stopni w prawo
   rotateTetromino = (currentTetromino) => {
    // tworzymy nowy "obraz/reprezentację" obecnego klocka (zamieniamy wiersze z kolumnami)
    const newTetromino = { shape: [], };
    for ( let X = 0; X < currentTetromino.shape.length; X++ ) {
      const newRow = [];
      for ( let Y = currentTetromino.shape.length-1; Y >= 0; Y-- ) {
        newRow.push(currentTetromino.shape[Y][X])
      }
      newTetromino.shape.push(newRow);
    }
    return newTetromino;
  }

  //-----------------------------------------------------------------------------------------------{ moveTetromino }
  // funkcja obsługująca przyciski (przesuwanie lub obracanie tetromino)
  moveTetromino = e => {
    // dla wprowadzenia sterowania za pomocą przycisków, sprawdzamy czy przekazany argument został przekazany przez
    // naciśnięcie klawisza czy kliknięcie przycisku
    let code;
    if ( typeof e === 'object' ) {
      code = e.keyCode;
    } else {
      code = e;
    }
    //console.log(code);
    // utworzenie kopi planszy z obecnego state
    const board = [...this.state.board].map( row => {
      return [...row];
    } );
    // pobranie obecnej pozycji "kursora"
    let position = this.state.position;
    // pobranie obecnego tetromino do ewentualnego obrotu
    let rotatedTetromino = this.state.currentTetromino;
    // zmienna przechowująca zamierzaną zmianę pozycji
    let move = { X: 0, Y: 0 };
    // obsługa przycisków LEFT / RIGHT / UP / DOWN
    switch(code){
      // LEFT KEY
      case 37: 
        move = { X:-1, Y: 0 };
        break;

      // RIGHT KEY
      case 39: 
        move = { X:+1, Y: 0 };
        break;

      // UP KEY
      case 38: 
        rotatedTetromino = this.rotateTetromino(this.state.currentTetromino);
        break;

      // DOWN KEY
      case 40: 
        move = {X: 0, Y:+1}
        break;

      // SPACE KEY
      case 32: 
        this.pauseGame();
        break;
    }

    // sprawdzenie wystąpienia kolizji
    const collided = this.detectCollision(position, move, rotatedTetromino, board);
    // jeżeli wwstąpiłą kolizja po przesunięciu klocka w dół scalamy go z planszą
    if ( collided && e.keyCode === 40 ) {
      this.mergeTetromino(board);
    }
    // jeżeli przy wykonaniu ruchu nie napotkano na kolizję wyświetlamy nową planszę/ robimy aktualizaję state
    if ( !collided ) {
      if ( !this.state.gameOver ) {
       if (  !this.state.gamePaused  ) {
        position = { X: position.X+move.X, Y: position.Y+move.Y, };
        const newBoard = this.drawTetromino(board,rotatedTetromino,position);
        
        this.setState({
          currentTetromino: rotatedTetromino,
          board: newBoard,
          position,
        })
       }
      }
    }
  }
}

export default Tetris;