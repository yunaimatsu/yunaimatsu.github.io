# Documentation -JS

# MDN JavaScript

`https://developer.mozilla.org/en-US/`

## Header(Hamburger)

### Reference`docs/Web`

`docs/Web/JavaScript`

- `docs/Web/JavaScript/Refernece`
    - `Global_Objects`
        
        `docs/Web/JavaScript/Reference/Global_Objects`
        
        [Standard built-in objects](Documentation%20-JS%20120496eb7c9080e3bde9ec6008e9a771/Standard%20built-in%20objects%20c7906a9c5fe547e39222592eb71266ad.md)
        
    - `Operators`
        
        `docs/Web/JavaScript/Reference/Operators`
        
    - `Statements`
        
        `docs/Web/JavaScript/Reference/Statements`
        
    - `Functions`
        
        `docs/Web/JavaScript/Reference/Functions`
        
    - `Classes`
        
        `docs/Web/JavaScript/Reference/Classes`
        
        [Expressions and operators](Documentation%20-JS%20120496eb7c9080e3bde9ec6008e9a771/Expressions%20and%20operators%204156f1212c4e4b18805e181f40c5191b.md)
        

`docs/Web/JavaScript/Guide`

`docs/Web/JavaScript/Language_overview`

`docs/Web/JavaScript/Data_structures`

`docs/Web/JavaScript/Equality_comparisons_and_sameness`

`docs/Web/JavaScript/Enumerability_and_ownership_of_properties`

`docs/Web/JavaScript/Closures`

`docs/Web/JavaScript/Inheritance_and_the_prototype_chain`

`docs/Web/JavaScript/Memory_management`

`docs/Web/JavaScript/Event_loop`

### Guides`docs/Learn`

`docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks`

`docs/Learn/JavaScript`

`docs/Learn/JavaScript/First_steps`

`docs/Learn/JavaScript/Building_blocks`

`docs/Learn/JavaScript/Objects`

`docs/Learn/JavaScript/Asynchronous`

`docs/Learn/JavaScript/Client-side_web_APIs`

# **JavaScript**

**JavaScript** (**JS**) is

- a lightweight interpreted (or [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) compiled) programming language with [first-class functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
    - Use-case
        - most well-known as the scripting language for Web pages
        - [many non-browser environments](https://en.wikipedia.org/wiki/JavaScript#Other_usage) also use it, such as
            - [Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js)
            - [Apache CouchDB](https://couchdb.apache.org/)
            - [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/)
- a [prototype-based](https://developer.mozilla.org/en-US/docs/Glossary/Prototype-based_programming)
- multi-paradigm, [single-threaded](https://developer.mozilla.org/en-US/docs/Glossary/Thread), [dynamic](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing) language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
- Its dynamic capabilities include
    - runtime object construction
    - variable parameter lists
    - function variables
    - dynamic script creation (via [`eval`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval))
    - object introspection (via [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) and [`Object` utilities](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods))
    - source-code recovery (JavaScript functions store their source text and can be retrieved through [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)).

This section is dedicated to

- the JavaScript language itself
- not the parts that are specific to Web pages or other host environments.
    - For information about [APIs](https://developer.mozilla.org/en-US/docs/Glossary/API) that are specific to Web pages, please see [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) and [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM).
- The standards for JavaScript
    - the [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262)
    - the [ECMAScript Internationalization API specification](https://tc39.es/ecma402/) (ECMA-402)
    
    <aside>
    <img src="https://www.notion.so/icons/calculator_lightgray.svg" alt="https://www.notion.so/icons/calculator_lightgray.svg" width="40px" />
    
    As soon as one browser implements a feature, we try to document it. 
    
    This means that cases where some [proposals for new ECMAScript features](https://github.com/tc39/proposals) have already been implemented in browsers, documentation and examples in MDN articles may use some of those new features.
    
    Most of the time, this happens between the [stages](https://tc39.es/process-document/) 3 and 4, and is usually before the spec is officially published.
    
    </aside>
    
- Do not confuse JavaScript with the [Java programming language](https://en.wikipedia.org/wiki/Java_(programming_language))
    
    **JavaScript is *not* "Interpreted Java"**.
    
    Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. 
    
    However, the two programming languages have very different syntax, semantics, and use.
    
- JavaScript documentation of core language features (pure [ECMAScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview), for the most part) includes the following:
    - The [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
    - The [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- For more information about JavaScript specifications and related technologies
    
    see [JavaScript technologies overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview).
    

## [Tutorials](https://developer.mozilla.org/en-US/docs/Web/JavaScript#tutorials)

Learn how to program in JavaScript with guides and tutorials.

### [For complete beginners](https://developer.mozilla.org/en-US/docs/Web/JavaScript#for_complete_beginners)

- `docs/Learn/JavaScript`**JavaScript — Dynamic client-side scripting(I don’t consider myself beginner so I won’t read it)**
    
    [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) is a programming language that allows you to implement complex functionalities on web pages. Every time a web page does more than just sit there and display static information for you to look at—displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more—you can bet that JavaScript is probably involved.
    
    ## [Prerequisites](https://developer.mozilla.org/en-US/docs/Learn/JavaScript#prerequisites)
    
    JavaScript is arguably more difficult to learn than related technologies such as [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML) and [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS). Before attempting to learn JavaScript, you are strongly advised to get familiar with at least these two technologies first, and perhaps others as well. Start by working through the following modules:
    
    - [Getting started with the Web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
    - [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
    - [Introduction to CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
    
    Having previous experience with other programming languages might also help.
    
    After getting familiar with the basics of JavaScript, you should be in a position to learn about more advanced topics, for example:
    
    - JavaScript in depth, as taught in our [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
    - [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
    
    ## [Modules](https://developer.mozilla.org/en-US/docs/Learn/JavaScript#modules)
    
    **Our policy on modern JavaScript**
    
    JavaScript is an actively evolving language and has changed greatly over the years. In particular, the 6th edition of the language (sometimes known as ECMAScript 2015 or ES6), introduced in 2015, added many new features. At the same time, to maintain backwards compatibility with older websites, old features of the language have been retained, even when they are no longer considered good practice.
    
    We think that the features added to JavaScript in ECMAScript 2015 and subsequent versions enable developers to write more readable, reliable, and expressive code, and that it's important to learn about them.
    
    The features we teach in this course are stable and have been supported by all major browsers for several years.
    
    This topic contains the following modules, in a suggested order for working through them.
    
    [JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)In our first JavaScript module, we first answer some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", before moving on to taking you through your first practical experience of writing JavaScript. After that, we discuss some key JavaScript features in detail, such as variables, strings, numbers and arrays.[JavaScript building blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)In this module, we continue our coverage of all JavaScript's key fundamental features, turning our attention to commonly-encountered types of code block such as conditional statements, loops, functions, and events. You've seen this stuff already in the course, but only in passing — here we'll discuss it all explicitly.[Introducing JavaScript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)In JavaScript, most things are objects, from core JavaScript features like strings and arrays to the browser APIs built on top of JavaScript. You can even create your own objects to encapsulate related functions and variables into efficient packages. The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you. Here we teach object theory and syntax in detail, look at how to create your own objects, and explain what JSON data is and how to work with it.[Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)In this module we take a look at asynchronous JavaScript, why it is important, and how it can be used to effectively handle potential blocking operations such as fetching resources from a server.[Client-side web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs)When writing client-side JavaScript for websites or applications, you won't go very far before you start to use APIs — interfaces for manipulating different aspects of the browser and operating system the site is running on, or even data from other websites or services. In this module we will explore what APIs are, and how to use some of the most common APIs you'll come across often in your development work.
    
    ## [Solving common JavaScript problems](https://developer.mozilla.org/en-US/docs/Learn/JavaScript#solving_common_javascript_problems)
    
    [Solve common problems in your JavaScript code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto) provides a little advice on how to avoid common beginner JavaScript programming mistakes, along with many helpful links to topics that show how to solve common JavaScript programming problems.
    
    ## [See also](https://developer.mozilla.org/en-US/docs/Learn/JavaScript#see_also)
    
    [JavaScript on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)The main entry point for core JavaScript documentation on MDN — this is where you'll find extensive reference docs on all aspects of the JavaScript language, and some advanced tutorials aimed at experienced JavaScripters.[Learn JavaScript](https://learnjavascript.online/)An excellent resource for aspiring web developers — Learn JavaScript in an interactive environment, with short lessons and interactive tests, guided by automated assessment. The first 40 lessons are free.[Coding math](https://www.youtube.com/user/codingmath)An excellent series of video tutorials to teach the math you need to understand to be an effective programmer, by [Keith Peters](https://www.bit-101.com/2017/about-me/).
    

Head over to our [Learning Area JavaScript topic](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)CK if you want to learn JavaScript but have no previous experience with JavaScript or programming. The complete modules available there are as follows:

- [JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)CK
    
    Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.
    
- [JavaScript building blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)CK
    
    Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code blocks such as conditional statements, loops, functions, and events.
    
- [Introducing JavaScript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)CK
    
    The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.
    
- [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)CK
    
    Discusses asynchronous JavaScript, why it is important, and how it can be used to effectively handle potential blocking operations such as fetching resources from a server.
    
- [Client-side web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs)CK
    
    Explores what APIs are, and how to use some of the most common APIs you'll come across often in your development work.
    

### [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript#javascript_guide)

- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)CK
    
    A much more detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.
    

### [Intermediate](https://developer.mozilla.org/en-US/docs/Web/JavaScript#intermediate)

- [Understanding client-side JavaScript frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)CK
    
    JavaScript frameworks are an essential part of modern front-end web development, providing developers with proven tools for building scalable, interactive web applications. This module gives you some fundamental background knowledge about how client-side frameworks work and how they fit into your toolset, before moving on to a series of tutorials covering some of today's most popular ones.
    
- [JavaScript language overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview)CK
    
    An overview of the basic syntax and semantics of JavaScript for those coming from other programming languages to get up to speed.
    
- [JavaScript data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)CK
    
    Overview of available data structures in JavaScript.
    
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)CK
    
    JavaScript provides three different value comparison operations: strict equality using `===`, loose equality using `==`, and the [`Object.is()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) method.
    
- [Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)CK
    
    How different methods that visit a group of object properties one-by-one handle the enumerability and ownership of properties.
    
- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)CK
    
    A closure is the combination of a function and the lexical environment within which that function was declared.
    

### [Advanced](https://developer.mozilla.org/en-US/docs/Web/JavaScript#advanced)

- [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)CK
    
    Explanation of the widely misunderstood and underestimated prototype-based inheritance.
    
- [Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management)CK
    
    Memory life cycle and garbage collection in JavaScript.
    
- [The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)CK
    
    JavaScript has a runtime model based on an "event loop".
    

## [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference)

Browse the complete [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)CK documentation.

- [Standard objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)CK
    
    Get to know standard built-in objects [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error), [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function), [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap), [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet), and others.
    
- [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)CK
    
    Learn more about the behavior of JavaScript's operators [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof), [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof), [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new), [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), the [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence), and more.
    
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)CK
    
    Learn how [`do-while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while), [`for-in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in), [`for-of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of), [`try-catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch), [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var), [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), [`if-else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else), [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch), and more JavaScript statements and keywords work.
    
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)CK
    
    Learn how to work with JavaScript's functions to develop your applications.
    
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)CK
    
    JavaScript classes are the most appropriate way to do object-oriented programming.