snakeGame.controller = {
  init: function(num) {
    var size = num || 5;
    // reassign this
    var _this = this;

    this.board = snakeGame.boardModel;
    this.snake = snakeGame.snakeModel;
    this.view = snakeGame.view;
    this.snake.init()
    this.board.init(size, this.snake.snakeBody);
    this.view.init(function (e) {
      _this.arrowPressHandler(e);
    });
    this.view.render(this.board);

    setInterval(function () {
        _this.run();
    }, 1000);
  },
  run: function() {
    var grow = this.eatFood(); // Boolean grow, T if ate food
    this.moveSnake(grow);
    this.view.render(this.board);
  },
  arrowPressHandler: function(e) {
    this.snake.changeDirection(snakeGame.keyCodeDirMappings[ e.keyCode ]);
  },
  moveSnake: function (grow) {
    var addRemoveSnakeCells = this.snake.move(grow);
    this.board.moveSnake(addRemoveSnakeCells);
  },
  eatFood: function () {
    return this.board.checkIfAteFood( this.snake.snakeBody[0] );
  }
}
