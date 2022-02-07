export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.falling = false;

    this.board = Array(this.height).fill().map(() => Array(this.width).fill(".") );

    //const matrix = new Array(5).fill(0).map(() => new Array(4).fill(0));

    //for (var i = 0; i < x.length; i++) {
  //x[i] = new Array(3);
  }



    //this.board = [[0,1,2] [0,1,2] [0,1,2]];
                   //i0     i1      i2


  toString() {

    let string = '';


    for(let i = 0; i < this.board.length; ++i){
      string += this.board[i].join("") + '\n';
    }

    return string;
  }

  drop(block){

    for(let i = 0; i < this.height; ++i){
      for(let j = 0; j < this.width; ++j){
        if (this.board[i][j] !== "." && this.board[i+1][j] === "."){
          throw new Error("already falling");
        }

      }//Lets  gooo!!!!!!!!!!


    }
    this.falling = true;
    this.board[0][1] = block.shape;
  }


  tick(){

    for(let i = this.height; i >= 0; --i){

      for(let j = 0; j < this.width; ++j){

        if (!this.board[i+1][j] || this.board[i+1][j] !== "."){
        falling = false;
        }

    for(let i = this.height-1; i >= 0; --i){

      for(let j = 0; j < this.width; ++j){

        if (this.board[i][j] !== "." && this.board[i+1][j] === "."){
          this.board[i+1][j] = this.board[i][j];
          this.board[i][j] = ".";
        }
      }
    }
  }

  hasFalling(){

    return this.falling;

  }
}


