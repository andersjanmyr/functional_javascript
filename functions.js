// Arguments, an array to iterate over,
// an action, to apply to each item
function each(array, action) {
  for (var i=0; i < array.length; i++) {
    action(array[i]);
  }
}

// Arguments, an array to iterate over,
// a predicate to apply to each item
// returns a new array with the
// items that evaluated to true
function filter(array, predicate) {
  var list = [];
  for (var i=0; i < array.length; i++) {
    if (predicate(array[i]))
      list.push(array[i]);
  }
  return list;
}

// Arguments, an array, to iterate over,
// a unary function, to apply to each item
// returns a new array with the result
function map(array, unaryFunc) {
  var list = [];
  for (var i=0; i < array.length; i++) {
    list.push(unaryFunc(array[i]));
  }
  return list;
}

// Arguments, an array, to iterate over,
// a seed, and a binary function, to apply
// to each item and the seed.
// returns a value
function reduce(array, seed, binaryFunc) {
  var res = seed;
  for (var i=0; i < array.length; i++) {
    res = binaryFunc(res, array[i]);
  }
  return res;
}

function zip(arr1, arr2, binaryFunc) {
  if (!binaryFunc)
    binaryFunc = function(a, b) {
      return [a, b];};
  var len = Math.min(arr1.length, arr2.length);
  var list = [];
  for (var i=0; i < len; i++) {
    list.push(binaryFunc(arr1[i], arr2[i]));
  }
  return list;
}

function time(fn) {
    var start = new Date().getTime();
    result = fn();
    var end = new Date().getTime();
    var elapsed = end - start;
    return [result, elapsed + ' ms'];
}

function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

function memoize(fn) {
  return function() {
    var key = serialize(arguments);
    var cache = fn['_cache'] || (fn['_cache'] = {});
    return key in cache ? cache[key] :
      cache[key] = fn.apply(this, arguments);
  }
}

function serialize(arguments) {
    return Array.prototype.splice.call(this, arguments, 0);
}

function sum(){
    for(var s = 0, i = arguments.length; i > 0;s += arguments[--i]);
    return s;
};

Function.prototype.wrap = function(wrapper) {
    var slice = Array.prototype.slice;
    var _method = this;
    return function() {
        var args = slice.apply(arguments);
        return wrapper.apply(this, 
                [_method].concat(args));
    }
}


function Y(X) {
  return (function(procedure) {
    return X(function(arg) {
      return procedure(procedure)(arg);
    });
  })(function(procedure) {
    return X(function(arg) {
      return procedure(procedure)(arg);
    });
  });
}

// function Y(X) {
  // var proc = function(procedure) {
    // return X(function(arg) {
      // return procedure(procedure)(arg);
    // });
  // }

  // return proc(proc);
// }

