'use strict';
var assert = require('chai').assert;
var cli = require('..')();

describe('etherscan-cli', function() {
  it('have a parse method', function(done) {
    assert.ok(cli.parse);
    done();
  });

  const assert = require('chai').assert;
  var exec = require('child-process-promise').exec;

  var commands =[
    './bin/ethcli -h',
    './bin/ethcli a',
    'echo foo | ./bin/ethcli'
  ];

  it('executes the commands', function(done) {

    function execAndDone(command){
      return exec(command).catch(done);
    }

    commands = commands.map(execAndDone);
    Promise
      .all(commands)
      .then(function (result) {
          result.map(assert.ok);
          done();
      }).catch(done);
  }).timeout(5000);

});
