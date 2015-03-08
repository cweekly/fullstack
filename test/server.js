var assert  = require('assert')
  , express = require('express')
  , http    = require('http')
  , sinon   = require('sinon')
  , app
  , server
  , ripple
  , Mocha = require('mocha')
  , mocha = new Mocha

describe('Ripple Server', function(){

  beforeEach(function(done){
    app = server = ripple = null  
    app = express()
    server = http.createServer(app)
    ripple = require('../')(server, app)
    ripple('some.data', [1,2,3])
    done()
  })

  it('should have standard and shortcut functions', function(){  
    assert.equal('function', typeof ripple.db)  
    assert.equal('function', typeof ripple)  
  })

  it('should register a resource', function(){  
    assert.equal(3, ripple('some.data').length)
  })

  it('should update a resource', function(done){
    ripple('some.data').once('response', function(){ done() })
    ripple('some.data')[0] = { id: 5, val: 5 }

    assert.deepEqual({ id: 5, val: 5 }, ripple('some.data')[0])
    assert.equal(2, ripple('some.data')[1])
    assert.equal(3, ripple('some.data')[2])
  })

  it('should add to a resource', function(done){
    ripple('some.data').once('response', function(){ done() })

    ripple('some.data').push({ id: 7, value: 7 })
    assert.equal(4, ripple('some.data').length)
  })

  it('should delete from a resource', function(done){
    ripple('some.data').once('response', function(){ done() })

    ripple('some.data').pop()
    assert.equal(2, ripple('some.data').length)
  })

  it('should create two different ripple nodes', function(){
    var ripple1 = require('../')()
      , ripple2 = require('../')()
    
    assert.notDeepEqual(ripple1, ripple2)

  })

  it('should import resources from other nodes via .use', function(){
    var ripple1 = require('../')()
      , ripple2 = require('../')()

    ripple2('meh', { raa: 'hello' })
    ripple1.use(ripple2)

    assert.equal(ripple1('meh').raa, 'hello')
  })
})