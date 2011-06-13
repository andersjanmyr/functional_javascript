!SLIDE center transition=toss
# Higher Order Functions

!SLIDE execute
# each

    @@@ javaScript
    // Arguments, an array to iterate over,
    // an action, to apply to each item
    function each(array, action) {
      for (var i=0; i < array.length; i++) {
        action(array[i]);
      }
    }

    result = '';
    each([1,2,3], function(i) {
      result += " Item: " + i;
    });

!SLIDE execute
# filter

    @@@ javaScript
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

    result = filter([1,2,3], function(i) {
      return (i % 2) == 1 //odd;
    });


!SLIDE execute
# map

    @@@ javaScript
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

    result = map([1,2,3], function(i) {
      return i * 7;
    });




!SLIDE execute
# reduce

    @@@ javaScript
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

    result = reduce([1,2,3], 10, function(a, b) {
      return a * b;
    });




!SLIDE execute
# sum

    @@@ javaScript
    // Sums all the elements of an array
    function sum(array) {
      return reduce(array, 0, function(a, b) {
        return a + b;
      });
    }

    result = sum([1,2,3,4]);

!SLIDE execute
# join

    @@@ javaScript
    // Joins all the elements of an array
    // With an optional separator
    function join(array, sep) {
      if (!sep) sep = ' '
      first = array.shift();
      return reduce(array, first, function(a, b) {
        return a + sep + b;
      });
    }

    result = join([1,2,3,4], ':');

!SLIDE execute
# any

    @@@javaScript
    function any(array, predicate) {
      return reduce(array, false, function(a, b) {
        return a || predicate(b);
      });
    }

    function even(n) { return n%2 === 0}
    result = [
      any([1, 3, 5], even),
      any([1, 3, 6], even)
    ]

!SLIDE execute
# all

    @@@javaScript
    function all(array, predicate) {
      return reduce(array, true, function(a, b) {
        return a && predicate(b);
      });
    }

    function even(n) { return n%2 === 0}
    result = [
      all([1, 3, 5], even),
      all([2, 4, 6], even)
    ]




!SLIDE execute
# zip

    @@@ javaScript
    // Zips two arrays with an optional function
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

    result = zip([1,2,3], [9, 10, 11]);

!SLIDE execute
# zip

    @@@ javaScript
    result = zip([1,2,3], [9, 10, 11], 
        function(a,b) {return a*b});
    
!SLIDE center transtion=growY
# Recursion vs Iteration 

!SLIDE bullets
# Tail Recursion

* An optimization of recursive functions
* The recursive call must be last in the function
* Flattens the stack
* Replaces a `call` with a `jump`


!SLIDE execute
# factorial
    
    @@@ javaScript
    function factorial(n) { 
      if (n == 0)
       return 1;
      else
       return n * factorial(n-1);
    }

    result = factorial(3);

!SLIDE execute
# factorial
    
    @@@ javaScript
    function factorial(n) {
      function fact(i, ack) {
        if (i == 0)
         return ack;
        else
         return fact(i-1, i*ack);
      }
      return fact(n, 1);
    }

    result = factorial(3);

!SLIDE center transition=scrollHorz
# Tail Recursion
## Stack Depth = 4

<table>
<tr>
<td>
<pre>
call factorial(3)
 call factorial(2)
  call factorial(1)
   call factorial(0)
   return 1
  return 1
 return 2
return 6
</pre>
</td>
<td>
<pre>
call factorial(3)
 call fact(3 1)
  call fact(2 3)
   call fact(1 6)
    call fact(0 6)
    return 6
   return 6
  return 6
 return 6
return 6
</pre>
</td>
</tr>
</table>

!SLIDE 
# Tail Recursion
## Stack Depth = 1

<table>
<tr>
<td>
<pre>
call factorial (3)
 call fact (3 1)
  call fact (2 3)
   call fact (1 6)
    call fact (0 6)
    return 6
   return 6
  return 6
 return 6
return 6
</pre>
</td>
<td>
<pre>
call factorial (3)
 jump fact (3 1)
  jump fact (2 3)
   jump fact (1 6)
    jump fact (0 6)
    return 6
</pre>
</td>
</tr>
</table>



!SLIDE execute
# Tail Recursion in Javascript 

    @@@ javaScript
    function factorial(n, callback) {
      function fact(i, ack) {
        if (i == 0)
          callback(ack)
        else
          setTimeout(function() {fact(i-1, i*ack);}, 0);
      }
      return fact(n, 1);
    }
  
    factorial(3, function(result) {
      alert(result);
    });





