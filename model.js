snakeGame.model = {
  score: 0,
  addPoint: function() {
    this.score++;
  },
  getScore: function() {
    return this.score;
  }
}
