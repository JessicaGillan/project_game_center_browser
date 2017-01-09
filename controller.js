snakeGame.controller = {
  init: function(num) {
    var size = num || 5;
    // reassign this
    var _this = this,
        t = 750;

    this.board = snakeGame.boardModel;
    this.snake = snakeGame.snakeModel;
    this.view = snakeGame.view;
    this.snake.init()
    this.board.init(size, this.snake.snakeBody);
    this.view.init(function (e) { _this.arrowPressHandler(e); },
                   function() { _this.runLoop = _this.playButtonHandler(t) });
    this.view.render(this.board);

    // this.runInterval = setInterval(function () {
    //     _this.run();
    // }, 750);
  },
  run: function() {
    var grow = this.eatFood(); // Boolean grow, T if ate food
    if (!this.moveSnake(grow)) {
      alert("Uh-Oh You had a collision! Game Over.");
      window.clearInterval(this.runLoop);
      this.resetGame();
    };

    this.view.render(this.board);
  },
  arrowPressHandler: function(e) {
    this.snake.changeDirection(snakeGame.keyCodeDirMappings[ e.keyCode ]);
  },
  playButtonHandler: function(t) {
    var _this = this;
    return setInterval(function () { _this.run() }, t);
  },
  moveSnake: function (grow) {
    var addRemoveSnakeCells = this.snake.move(grow);
    return this.board.moveSnake(addRemoveSnakeCells);
  },
  eatFood: function () {
    return this.board.checkIfAteFood( this.snake.snakeBody[0] );
  },
  resetGame: function() {
    this.snake.init()
    this.board.init(15, this.snake.snakeBody);
  }
}
