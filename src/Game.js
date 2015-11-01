function Game() {
  this.score = 0;
  this.noOfA = 0;
  this.noOfB = 0;
  this.noOfC = 0;
  this.noOfD = 0;
  this.totalPointsA = 0;
  this.totalPointsB = 0;
  this.bonus = 0;
};

Game.prototype.addLetter = function(letter) {
  if(letter === 'A') { this.add_A_Letter(); }
  else if(letter === 'B') { this.add_B_Letter(); }
  else if(letter === 'C') { this.add_C_Letter(); }
  else if(letter === 'D') { this.add_D_Letter(); }
};

Game.prototype.add_C_Letter = function() {
  this.noOfC++;
  this.score = this.score + 20;
};

Game.prototype.add_D_Letter = function() {
  this.noOfD++;
  this.score = this.score + 15;
};

Game.prototype.add_A_Letter = function() {
  this.noOfA++;
  this.totalPointsA = this.totalPointsA + 50;
  if (this.noOfA % 3 === 0) { this.bonus_A(); }
  else { this.score = this.score + 50; }
};

Game.prototype.add_B_Letter = function() {
  this.noOfB++;
  this.totalPointsB = this.totalPointsB + 30;
  if (this.noOfB % 2 === 0) { this.bonus_B(); }
  else { this.score = this.score + 30; }
};

Game.prototype.bonus_A = function() {
  this.score = this.score + 100;
  this.totalPointsA = this.totalPointsA + 50;
  this.bonus = this.bonus + 50;
};

Game.prototype.bonus_B = function() {
  this.score = this.score + 60;
  this.totalPointsB = this.totalPointsB + 30;
  this.bonus = this.bonus + 30;
};

Game.prototype.reset = function() {
  this.score = 0;
  this.noOfA = 0;
  this.noOfB = 0;
  this.noOfC = 0;
  this.noOfD = 0;
  this.totalPointsA = 0;
  this.totalPointsB = 0;
  this.bonus = 0;
};
