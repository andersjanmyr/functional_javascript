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
       for (property in source)
            destination[property] = source[property];
       return destination;
    }

    var coolish = {cool: function() { return "Yes I'm cool" }};
    mixin(String.prototype, coolish);
    result = 'Anders'.cool();



!SLIDE execute
# Curry


!SLIDE execute
# Wrap


!SLIDE execute
# Y Combinator, Scheme

    @@@ python
    (define Y
      (lambda (X)
        ((lambda (procedure)
           (X (lambda (arg)
            ((procedure procedure) arg))))
         (lambda (procedure)
           (X (lambda (arg)
            ((procedure procedure) arg)))))))


!SLIDE execute
# Y Combinator, Javascript

    @@@ javaScript
    function Y (X) {
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
