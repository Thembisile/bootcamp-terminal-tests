var isFromBellVille = require('../isFromBellville.js');
var assert = require('assert');

describe('isFromBellville' , function(){
    it('should return true if the registration is from Bellville' , function(){
        assert.equal(isFromBellville("CY 456"), true);
    });
});