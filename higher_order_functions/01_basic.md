!SLIDE center
# Functional Javascript

!SLIDE bullets
# First Class Functions

* Created during execution
* Stored in data structures
* Passed as arguments
* Returned as values from functions

!SLIDE
# function *operator*

    @@@ javascript
    var f = function sum(arg1, arg2) {
      return arg1 + arg2;
    }

!SLIDE
# function *statement*

    @@@ javascript
    // Statement
    function sum(arg1, arg2) {
      return arg1 + arg2;
    }

    // Equivalent to
    var sum = function sum(arg1, arg2) {
      return arg1 + arg2;
    }

!SLIDE
# Basic Functions

!SLIDE execute
# Action

    @@@ javaScript
    // Takes one argument,
    // usually, does something with it,
    // and, returns nothing
    function action(arg) {
      console.log(arg);
    }

    result = action('tapir');

!SLIDE execute
# Predicate

    @@@ javaScript
    // Takes one argument
    // and, returns a boolean
    function predicate(arg) {
      return arg === 'tapir';
    }

    result = [predicate('tapir'), 
              predicate('aardvark')];

!SLIDE execute
# Unary function, mapping function

    @@@ javaScript
    // Takes one arguments,
    // and, returns one value
    function unary(arg) {
      return arg * 2;
    }

    result = unary(21);

!SLIDE execute
# Binary function, reduction function

    @@@ javaScript
    // Takes two arguments,
    // and, returns one value
    function binary(arg1, arg2) {
      return arg1 + arg2;
    }

    result = binary(1, 2);

