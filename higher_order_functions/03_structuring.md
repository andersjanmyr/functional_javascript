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
# memoize

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
# curry


!SLIDE execute
# wrap


!SLIDE execute
# curry


!SLIDE execute
# namespace


!SLIDE execute
# encapsulation


!SLIDE execute
# module


