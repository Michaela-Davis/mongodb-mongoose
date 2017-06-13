# Tips for starting your first express project

## Starting your app

### Entry point
It's best to start your app via npm. You can do this
by adding an entry to the 'scripts' property of the
`packages.json` file.

### Nodemon
Nodemon is a utility that watches your project's files
for changes and automatically restarts the server
whenever a change is detected. It saves a lot of 
development time.
 

## Creating files

### Strict mode
Always start with 'use strict' on the first line of the file. It enables 'strict mode',
which helps with some stuff. More info [here](https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it)

### Variable scoping
'const' and 'let' are in, 'var' is out. Const and let both do a much better job of 
controlling the variable's scope, which [helps makes code cleaner](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Scoping_rules_2).

### Export statement
It's best practice to always put your `module.exports` statement at the top of the page. This improves 
file readability. 
