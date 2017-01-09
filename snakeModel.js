snakeGame.snakeModel = {
  init: function() {
    this.moveHead(); // Add head to body
  },
  moveHead: function() {
    return this.snakeBody.unshift( new snakeGame.Coord(this.headVector.x, this.headVector.y, "snake"));
  },
  moveTail: function() {
    return this.snakeBody.pop();
  },
  headVector: {
    x: 0,
    y: 0,
    d: {x: 1, y: 0}
  },
  move: function(grow) {
    grow = !!grow;

    this.headVector.x += this.headVector.d.x
    this.headVector.y += this.headVector.d.y

    this.moveHead();

    // if not "growing" then remove the last cell in body
    var tail;
    if (!grow) {
      tail = this.moveTail();
      tail.value = null
    }

    // this.headVector = new head location to add snake cell on grid for
    // tail = the snakeGame.Coord to remove snake cell on grid for (unless grew, then == undefined)
    return {add: this.snakeBody[0], remove: tail}
  },
  changeDirection: function(newDirection) {
    newDirection = newDirection || this.headVector.d;
    this.headVector.d.x = newDirection.x;
    this.headVector.d.y = newDirection.y;
  },
  snakeBody: []
}
