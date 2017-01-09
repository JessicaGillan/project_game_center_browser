snakeGame.boardModel = {
  init: function(boardSize, snake) {
    this.size = boardSize || 5;
    this.grid = this.setupBoard(this.size, snake);
  },
  setupBoard: function(size, snake) {
    var board = this.newBoard(size);
    board = this.addSnake(board, snake)
    return this.addFood(board, snake);
  },
  addSnake: function(board, snake){
    var c;
    for(i = 0; i < snake.length; i ++){
      c = snake[i].x + "_" + snake[i].y;
      board[c] = snake[i];
    }
    return board;
  },
  addFood: function() {
    
  };
  newBoard: function(size) {
    grid = {};

    for(var r = 0; r < size; r++) {
      for(var c = 0; c < size; c++) {
        grid[r + "_" + c] = new snakeGame.Coord(r,c);
      }
    }

    return grid;
  },
  moveSnake: function(addRemoveCells) {
    this.updateCell(addRemoveCells.add);
    this.updateCell(addRemoveCells.remove);

    return this.grid;
  },
  updateCell: function(coord){
    var cell = coord.x + "_" + coord.y;
    this.grid[cell] = coord;

    return this.grid[cell];
  }
}
