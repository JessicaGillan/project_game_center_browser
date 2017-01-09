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
    addRemoveSnakeCells = this.snake.move();
    this.board.moveSnake(addRemoveSnakeCells);
    this.view.render(this.board);
  },
  arrowPressHandler: function(e) {
    this.snake.changeDirection(snakeGame.keyCodeDirMappings[ e.keyCode ]);
  }
}
