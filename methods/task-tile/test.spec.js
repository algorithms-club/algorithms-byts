'use strict';

const coverByTile = require('./index.js');

describe('#coverByTile', function() {

  it('should count amount of tiles to cover area (integer)', function() {
    let tilesAmount = coverByTile(5, 3, 2);

    tilesAmount.should.be.eql(6);
  });

  it('should count amount of tiles to cover area (float)', function() {
    let tilesAmount = coverByTile(0.5, 1.3, 0.2);

    tilesAmount.should.be.eql(21);
  });

})