!SLIDE
# Higher Order Javascript
### anders.janmyr@jayway.com
### http://anders.janmyr.com
### @andersjanmyr

!SLIDE center
![Well](well.jpg)
.notes A priest fell into a well, but managed to grab hold of a small root an the way down. He started to scream, "Hello, is there anybody up there?". Nothing happened! He screamed again "Hello, is there anybody up there?", Suddenly a sound of thunder came from the clouds above the well. "This is your God speaking, let go of the root and I will save you!" A brief silence then the priest screamed, "Is there anybody else up there?"
.notes Whether you like Javascript or not does not have anything to do with rational thinking, it is a lot closer to religion than that. My point with this presentation is to show you why I love Javascript, with the hope, that you will come to love it too.

!SLIDE bullets
# First Class Functions

* Created during execution
* Stored in data structures
* Passed as arguments
* Returned as values from functions

!SLIDE
# function operator

    @@@ javascript
    var f = function sum(arg1, arg2) {
      return arg1 + arg2;
    }

!SLIDE
# function statement

    @@@ javascript
    // Statement
    function sum(arg1, arg2) {
      return arg1 + arg2;
    }

    // Rougly equivalent to
    var sum = function(arg1, arg2) {
      return arg1 + arg2;
    }


