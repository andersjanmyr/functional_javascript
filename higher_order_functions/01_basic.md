!SLIDE center transition=cover
# Functional Javascript

!SLIDE bullets incremental
# Functional?

* Functions (Doh!)
* No side-effects
* No *visible* side-effects
* **Minimum of visible** side-effects

!SLIDE bullets incremental

# Why Functional?

* Easier to reason about
* Easier to test
* (Simpler concurrency)

!SLIDE bullets incremental
# First Class Functions

* Created during execution
* Stored in data structures
* Passed as arguments
* Returned from functions


!SLIDE center transition=cover
# Code!

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

!SLIDE center transition=wipe
# Basic Functions

!SLIDE execute
# Action

    @@@ javaScript
    // Takes one argument,
    // usually, does something with it,
    // and, returns nothing
    function sayHello(arg) {
      alert('Hello ' + arg);
    }

    sayHello('tapir');

!SLIDE execute
# Predicate

    @@@ javaScript
    // Takes one argument
    // and, returns a boolean
    function isTapir(arg) {
      return arg === 'tapir';
    }

    result = [isTapir('tapir'), 
              isTapir('aardvark')];

!SLIDE execute
# Unary function, mapping function

    @@@ javaScript
    // Takes one arguments,
    // and, returns one value
    function multiplyByTwo(arg) {
      return arg * 2;
    }

    result = multiplyByTwo(21);

!SLIDE execute
# Binary function, reduction function

    @@@ javaScript
    // Takes two arguments,
    // and, returns one value
    function add(arg1, arg2) {
      return arg1 + arg2;
    }

    result = add(1, 2);

