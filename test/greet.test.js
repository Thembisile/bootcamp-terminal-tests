var greet = require('../greet.js')
var assert = require('assert');

describe('The greet function', function(){
    it('should greet Xola correctly', function(){
        
        assert.equal('Hello Xola', greet('Xola'))
    })
})