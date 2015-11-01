describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with a score of 0', function() {
    expect(game.score).toEqual(0);
  });

  it('adds 20 points when C is pressed', function() {
    game.addLetter('C');
    expect(game.score).toEqual(20);
  });

  it('adds 15 points when D is pressed', function() {
    game.addLetter('D');
    expect(game.score).toEqual(15);
  });

  it('adds 50 points when A is pressed', function() {
    game.addLetter('A');
    expect(game.score).toEqual(50);
  });

  it('adds 30 points when B is pressed', function() {
    game.addLetter('B');
    expect(game.score).toEqual(30);
  });

  it('accumulates to 200 points when A pressed every 3rd time', function() {
    game.addLetter('A');
    game.addLetter('A');
    game.addLetter('A');
    expect(game.score).toEqual(200);
  });

  it('accumulates to 90 points when B pressed every 2nd time', function() {
    game.addLetter('B');
    game.addLetter('B');
    expect(game.score).toEqual(90);
  });

  it('stores the number of 10 A items and calculates their sum of 650', function() {
    for(var i = 0; i < 10; i++) { game.addLetter('A'); }
    expect(game.score).toEqual(650);
    expect(game.noOfA).toEqual(10);
  });

  it('stores the number of 9 B items and calculates their sum of 390', function() {
    for(var i = 0; i < 9; i++) { game.addLetter('B'); }
    expect(game.score).toEqual(390);
    expect(game.noOfB).toEqual(9);
  });

  it('stores the number of 8 C items and calculates their sum of 160', function() {
    for(var i = 0; i < 8; i++){ game.addLetter('C'); }
    expect(game.score).toEqual(160);
    expect(game.noOfC).toEqual(8);
  });

  it('stores the number of 7 D items and calculates their sum of 105', function() {
    for(var i = 0; i < 7; i++) { game.addLetter('D') };
    expect(game.score).toEqual(105);
    expect(game.noOfD).toEqual(7);
  });

})

