#!/usr/bin/env node

chainparser = require('timelion-chain-parser');
const { invoke, invokeChain, loadFunctions } = require('./lib/chain.js');
var args = process.argv.slice(2);
var struct  = chainparser(args[0] || '.some_function(param1=true).chain(extra=tag).x100().x200()');
const debug = false;

loadFunctions(init);

function init() {
  var chain = struct.tree[0];
  var data = args[1] ? JSON.parse(args[1]) : { test: 1 };
  invokeChain(chain,data).then((result) => {
    console.log(result);
  });
}
