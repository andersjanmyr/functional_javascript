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

    result = each([1,2,3], function(i) {
      console.log("Item: " + i);
    });

!SLIDE execute
# filter

    @@@ javaScript
    // Arguments, an array to iterate over,
    // an predicate to apply to each item
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
    // an unary function, to apply to each item
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
    function sum(array) {
      reduce(array, 0, function(a, b) {
        return a + b;
      });
    }

    sum([1,2,3,4]); // 10



!SLIDE execute
# zip

    @@@ javaScript
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

    result = zip([1,2,3], [9, 10], function(a,b) {return a+b});

