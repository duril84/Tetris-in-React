export const tetrominos = {
  E:  {  shape:[[0]], color: 'white', },
  I:  { shape:
        [
          [ 0 , 'I', 0 , 0 ],
          [ 0 , 'I', 0 , 0 ],
          [ 0 , 'I', 0 , 0 ],
          [ 0 , 'I', 0 , 0 ]
        ]
      },
  L:  { shape:
        [
          [  0 , 'L',  0  ],
          [  0 , 'L',  0  ],
          [  0 , 'L', 'L' ]
        ] 
      },
  J:  { shape:
        [
          [  0 , 'J', 0 ],
          [  0 , 'J', 0 ],
          [ 'J', 'J', 0 ]
        ] 
      },      
  T:  { shape:
        [
          [  0 ,  0 ,  0  ],
          [ 'T', 'T', 'T' ],
          [  0 , 'T',  0  ]
        ] 
      },
  Z:  { shape:
        [
          [ 'Z', 'Z',  0  ],
          [  0 , 'Z', 'Z' ],
          [  0 ,  0 ,  0  ]
        ] 
      }, 
  S:  { shape:
        [
          [  0 , 'S', 'S' ],
          [ 'S', 'S',  0  ],
          [  0 ,  0 ,  0  ]
        ] 
      },  
  O:  { shape:
        [
          [ 'O', 'O' ],
          [ 'O', 'O' ]
        ] 
      },       
}

// funkcja zwracająca losowy klocek/tetromino
export const randomTetromino = () => {
  const listOfTetrominos = 'IJLOSTZ';
  const randomTetromino = listOfTetrominos[ Math.floor( Math.random() * listOfTetrominos.length )  ]
  return tetrominos[randomTetromino];
}