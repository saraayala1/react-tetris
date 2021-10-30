export const TETROMINOS = {
    0: { shape: [(0)], color: '0,0,0'},
    I: {
        shape: [
            [0, 'I', 0, 0, 0],
            [0, 'I', 0, 0, 0],
            [0, 'I', 0, 0, 0],
            [0, 'I', 0, 0, 0]
        ], 
        Color: '80, 227, 230'
        },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            [0, 'J', 0],
            [0, 'J', 0]
        ], 
    Color: '36, 95, 223'
        },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 0]
        ], 
        Color: '223, 173, 36'
        },
    O: {
     shape: [
         ['O', 'O'],
         ['O', 'O'],
        ], 
        Color: '223, 217, 16'
        },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ], 
        Color: '48, 211, 56'
        },  
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ], 
        Color: '132, 61, 198'
        }, 
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ], 
        Color: '227, 78, 78'
        }

    }

    export const randomTetromino =() => {
        const tetrominos ='IJLOSTZ' ;
        const randomTetromino = 
            tetrominos[Math.floor(Math.random()*tetrominos.length)];
        return TETROMINOS[randomTetromino];
        }