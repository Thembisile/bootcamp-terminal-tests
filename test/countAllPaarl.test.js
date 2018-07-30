var countAllPaarl = require('../countAllPaarl.js');
var assert = require('assert');

describe('Count All From Paarl', function(){
    it('should count all registrations from Paarl', function(){
        assert.equal(countAllPaarl( 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864, CJ 1521', 'CJ'), 3)
    })
})