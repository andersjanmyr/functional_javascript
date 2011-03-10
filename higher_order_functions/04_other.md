!SLIDE center
# Other Useful Functions



!SLIDE execute
# Fibonacci

    @@@javaScript
    function fib(n) {
        if (n < 2) {
            return n;
        }
        return fib(n-1) + fib(n-2);
    }
 
    result = time(function() { return fib(36); });



!SLIDE execute
# Memoize

    @@@javaScript
    function memoize(fn) {
      return function() {
        var key = serialize(arguments);
        var cache = fn['_cache'] || (fn['_cache'] = {});
        return key in cache ? cache[key] :
          cache[key] = fn.apply(this, arguments);
      }
    }

    var memFib = memoize(fib);
    result = time(function() {
        return memFib(36)
    });

!SLIDE execute
# Mixin
    
    @@@javaScript
    function mixin(destination, source) {
       for (var key in source)
            destination[key] = source[key];
       return destination;
    }

    var coolish = {cool: function() { 
        return this + " are cool!" }
    };

    mixin(String.prototype, coolish);
    result = 'Tapirs'.cool();



!SLIDE execute
# Curry

    @@@javaScript
    Function.prototype.curry = function() {
      var slice = Array.prototype.slice;
        var fn = this;
        var args = slice.apply(arguments);
        return function() { return fn.apply(null, args.concat(slice.apply(arguments))); };
    }

    var addFortyTwo = sum.curry(42);
    result = addFortyTwo(624);


!SLIDE execute
# Wrap

    @@@javaScript
    Function.prototype.wrap = function(wrapper) {
        var slice = Array.prototype.slice;
        var _method = this;
        return function() {
            var args = slice.apply(arguments);
            return wrapper.apply(this, 
                    [_method].concat(args));
        }
    }
    
    sum = sum.wrap(function() {
        var args = Array.prototype.slice.apply(arguments);
        var original = args.shift();
        return original.apply(this, args) * 2;
    });
    result = sum(1, 2, 3, 4);



!SLIDE execute
# Y Combinator

    @@@ javaScript
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

!SLIDE execute
# Y Combinator

    @@@ javaScript
    var factorial = Y(function(recurse) {
      return function(x) {
        return x == 0 ? 1 : x * recurse(x-1);
      };
    });

    result = factorial(6);
