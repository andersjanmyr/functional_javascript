!SLIDE
# Functional Javascript
### anders.janmyr@jayway.com
### http://anders.janmyr.com
### @andersjanmyr

!SLIDE center transition=blindZ
# Short History
![Netscape 1995](netscape.png)

.notes The Wild West of the Internet

!SLIDE center
![Brendan Eich](brendan_eich.jpg)
## Brendan Eich

.notes Supremely smart fellow, make a programming language for browser, steals code


!SLIDE
# Scheme

    @@@python
    (define map
      (lambda (list f)
        (if (null? list)
          nil
          (cons (f (car list))
            (map (cdr list) f)))))

!SLIDE center
# George Bush Jr.
![GBJ](george_bush_jr.jpg)

.notes Visited from Texas to invest some oil money in this new hype
called the internet. 
Daddy, daddy, there is this german dude, that is trying to put
a foreign programming language into an american browser.

!SLIDE center
# George Bush Sr.
![GBS](george_bush_sr.png)

.notes Head of the CIA, at the time. 
How do you know its not american?
It has these weird sounding names in it, LAMBDA and stuff.
We can't have that!

!SLIDE center
# Big George Makes Some Calls
![george_calls](george_calls.jpg)


!SLIDE center
![Brendan Eich](brendan_eich2.jpg)
## Brendan Eich
.notes Pissed off, but what can he do?

!SLIDE
# Scheme

    @@@python
    (define map
      (lambda (list f)
        (if (null? list)
          nil
          (cons (f (car list))
            (map (cdr list) f)))))


!SLIDE
# SchemeScript

    @@@python
    (define map
      (function (list f)
        (if (null? list)
          nil
          (cons (f (car list))
            (map (cdr list) f)))))

!SLIDE center
# The Bushes
![Bushes](the_bushes2.jpg)

.notes Daddy, daddy, all he did was change the name, he's mocking me!
Big George goes, Look here fellow, you better change it some more or
we'll deport your ass!

!SLIDE center
# Big George Makes Some More Calls
![george_calls](george_calls.jpg)


!SLIDE
# SchemeScript

    @@@python
    (define map
      (function (list f)
        (if (null? list)
          nil
          (cons (f (car list))
            (map (cdr list) f)))))

!SLIDE
# JavaScript

    @@@javascript
    var map =
      function(list, f) {
        if (!list) {
          return [];
        } else {
          var car = list.shift();
          return map(list, f).unshift(f(car));
        }
      }

!SLIDE center
# Little George Happy
![geroge_happy](george_jr_happy.jpg)

.notes With that little george is happy.



