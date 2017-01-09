snakeGame.view = {
  init: function( keyPressHandler, playButtonHandler ) {
    this.gameWrapper = document.getElementsByTagName('snake-game')[0];
    this.playBtn = document.getElementsByTagName('input')[0];
    this.addEventListeners(keyPressHandler, playButtonHandler);
  },
  render: function(board, snakeBody) {
    this.gameWrapper.innerHTML = "";
    var size = Math.round(500 / board.size);
    var grid = board.grid;

    for(coord in grid) {
      var cell = document.createElement('DIV');
      cell.classList.add('cell');

      if (grid[coord].value) {cell.classList.add(grid[coord].value)};
      cell.style.height = size;
      cell.style.width = size;
      cell.style.top = grid[coord].y * size;
      cell.style.left = grid[coord].x * size;

      this.gameWrapper.appendChild(cell);
    }
  },
  addEventListeners: function(keyPressHandler, playButtonHandler) {
    document.addEventListener('keydown', keyPressHandler );
    this.playBtn.addEventListener('click', playButtonHandler );
  }
}
