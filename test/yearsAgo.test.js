var yearsAgo = require('../yearsAgo.js');
var assert = require('assert');

describe('yearsAgo function test', function(){
    it('should return how many years ago in number', function(){
        assert.equal(yearsAgo('2010'), 8)
    })
})