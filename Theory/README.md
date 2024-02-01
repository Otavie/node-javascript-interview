# NON CODING INTERVIEW QUESTIONS

1.  **Explain the purpose of the package.json file in a Node.js project.**

The package.json file in a Node project serves as a manifest file that contains metadata about the project and configuration details.

It is a standard form of presenting project details and dependencies, thereby ensuring consistency, easy collaboration and simplifications of the process of managing Node projects

2. **What is ECMAScript?**

This is a scripting language standard or specifications upon which scripting languages like JavaScript, JScript and ActionScript are based on

### ECMAScript 6 or ES6 and why is it so talked about?

This is ECMAScript Standard version 6 that was released in 2015. It was the first major update since 2009. The following features were introduced:

- Arrow functions
- Destructing
- Modules
- Classes
- Object Literals
- For... of Loops
- The let and const Keyword
- String operations such as string.includes(), .endsWith(), .startsWith(), etc

3. **Var and its Scope**
   Where variables are available for use

`var` declarations are globally scoped or function/locally scoped.

It is global, when it is declared outside a function. This also means it available for use throughout the window

`
var greeter = "hey hi";

    function newFunction() {
        var hello = "hello";
    }

`
`Console.log('Hello') will give an error`

`var` can be redeclared and updated
