const path = require('path');
const fs = require('fs');
const pluginPath = '../functions';
const debug = true;
// Function Library
var run = {};

function loadFunctions(cb, debug) {
  const directoryPath = path.join(__dirname, pluginPath);
  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to load functions: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        var func = file.split('.')[0];
        run[func] = require(pluginPath+"/"+file);
    });
    cb();
  });
}

function invokeChain(chainObj, result, debug) {
  if(debug)console.log('invoke the chain', result)
  if (chainObj.chain.length === 0) return invoke('finalize', [result]);

  const chain = chainObj.chain;
  const link = chain.shift();

  const args = link.arguments || {};
  args.unshift(result || {type: 'null', value: null});
  const promise = invoke(link.function, args);
  return promise.then(function (result) {
    if(debug)console.log('resolved', result);
    return invokeChain({type:'chain', chain: chain}, result);
  }).catch((err)=>console.log(err));
}

function invoke(fnName, args, debug) {
  if(debug)console.log('invoking', fnName, args[0])
  if(run[fnName]) {
    var isAsync = run[fnName].constructor.name == 'AsyncFunction';
    if(debug)console.log(fnName + ' isAsync ' + isAsync)
    if(isAsync) {
        return run[fnName](args[0]);
    } else {
        var promise = new  Promise (function(resolve, reject) {
            if(debug)console.log('called with args', args[0]);
            let result = run[fnName](args[0]);
            if(debug)console.log('sending sync result back as promise', result)
            resolve(result);
        })
        return promise;
    }
  } else {
    var promise = new Promise (function(resolve, reject) {
        if(debug)console.log('sending finalized result back as promise', args[0])
        resolve(args[0]);
    })
    return promise;
  }
}

module.exports.invokeChain = invokeChain;
module.exports.invoke = invoke;
module.exports.run = run;
module.exports.loadFunctions = loadFunctions;
