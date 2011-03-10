!SLIDE center
# Javascript Magic Variables

!SLIDE 
# Magic variable `this`

<table>
<tr>
<th>Invocation</th>
<th>Example</th>
<th><pre>this</pre></th>
</tr>
<tr>
<td>function</td>
<td><pre>say('Hi');</pre></td>
<td>the global object (window)</td>
</tr>
<tr>
<td>method</td>
<td><pre>tapir.say('Hi');</pre></td>
<td>the target object (tapir)</td>
</tr>
<tr>
<td>constructor</td>
<td><pre>new say('Hi');</pre></td>
<td>a new object</td>
</tr>
<tr>
<td>apply (call)</td>
<td><pre>say.apply(frog, 'Hi');</pre></td>
<td>the first parameter to apply (frog)</td>
</tr>
</table>


!SLIDE execute
# Magic variable `arguments`

    @@@javaScript
    function sum() {
      var i, n = arguments.length, total = 0;
      for (i = 0; i < n; i += 1) {
        total += arguments[i];
      }
      return total;
    }
    
    result = sum(6, 6, 6);


!SLIDE center
# Structure Functions
## Module Functions


!SLIDE execute
# Namespace

    @@@javaScript
    var app = {}
    app.id = 42;

    app.next = function() {
        return app.id++;
    }

    app.reset = function() {
        return app.id = 0;
    }

    result = [app.next(), app.next(), app.reset()]




!SLIDE execute
# Namspace with Literals
    @@@javaScript
    var app = {
        id: 42,

        next: function() {
            return this.id++;
        },

        reset: function() {
            return this.id = 0;
        }
    }

    result = [app.next(), app.next(), app.reset()]



!SLIDE execute
# Module

    @@@javaScript
    var app = (function() {
        var id= 42;

        return {
            next: function() {
                return id++;
            },

            reset: function() {
                return id = 0;
            }
        };
    })();	

    result = [app.next(), app.next(), app.reset()]

!SLIDE execute
# Dynamic Module

    @@@javaScript
    var app = {};
    (function(context) {
        var id = 42;

        context.next = function() {
            return id++;
        };

        context.reset = function() {
            return id = 0;
        }
    })(app);	

    result = [app.next(), app.next(), app.reset()]

!SLIDE execute
# Dynamic Module with `this`

    @@@javaScript
    var app = {};
    (function() {
        var id = 42;

        this.next = function() {
            return id++;
        };

        this.reset = function() {
            return id = 0;
        }
    }).apply(app); // call would also work here

    result = [app.next(), app.next(), app.reset()]

