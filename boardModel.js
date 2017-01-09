snakeGame.boardModel = {
  init: function(boardSize, snake) {
    this.size = boardSize || 5;
    this.grid = this.setupBoard(this.size, snake);
    this.food = null;
    this.addFood();
  },
  setupBoard: function(size, snake) {
    var board = this.newBoard(size);

    return this.addSnake(board, snake);
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
    if (this.food) this.food.value = null;

    var foodCell = this.getRandomCell();
    while (foodCell.value) {
      foodCell = this.getRandomCell();
    }
    foodCell.value = "food";

    this.food = foodCell;

    return foodCell;
  },
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
    if (addRemoveCells.add) this.updateCell(addRemoveCells.add);
    if (addRemoveCells.remove) this.updateCell(addRemoveCells.remove);

    return this.grid;
  },
  checkIfAteFood: function (snakeHead) {
    if (snakeHead.x === this.food.x && snakeHead.y === this.food.y) {
      this.addFood();
      return true;
    }
    return false;
  },
  updateCell: function(coord){
    var cell = coord.x + "_" + coord.y;
    this.grid[cell] = coord;

    return this.grid[cell];
  },
  getRandomCell: function () {
    var keys = Object.keys(this.grid),
        len = keys.length,
        rnd = Math.floor(Math.random()*len),
        key = keys[rnd];

    return this.grid[key];
  }
}
