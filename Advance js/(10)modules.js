//  we need modules as our application grow in size and functionality for bigger applications 
// Native ES Modules
// CommonJS
// UMD
// AMD
// IIFE : modulePattern
var fightModule = (function() {
  // private
  var harry = 'potter'
  var vodemort = 'He who must not be named'

  function fight (char1, char2){
   var attack1 = Math.floor(math.random * char1.length);
   var attack2 = Math.floor(math.random * char2.length);
   return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
  }
  var 
  return {
    // anything you wants to export in public api from the above private code , or defined a kind of interface 
    fight : fight
  }
})
// we can access only fight that is return by IIfe or module pattern and both var harry and voldemort is private not not polluting to global scope like 
fightModule.fight() 
//  drawbacks of module pattern
/* 
1. scripts of differnet module pattern needs to be in correct order so that anything that we have export from the script needs to be placed first at the top over the importing module script else we get Reference error 

2. module pattern can be overwritten because modulePattern is open in global namespace and can be overwritten from the global scope this is called dependency resolution
 
*/
// Solutions of modulePattern drawbacks 
// CommonJS
// import function in common js by using require('func_name')
// and export function in commonjs by using dot 
var fightModule = require('module1').fightModule; // import module1 in fightModule and also export fightModule

// we can define function in fightModule and export it as obj
function fight() {
// instruction
}
module.exports = {
  fight : fight 
}

// two things that are developed for commonJS in order to resolve problems that we have with modulePattern i.e, browserify - for module bundling and web packs (lets you require('modules ') in the browser by bundling up all of your dependencies ) by using cmd line

// browserify script.js > bundle.js 

// browerify and web packs application with commonJS is compact syntax of commonJs and it is not anymore polluting global namespace and script order is not need to care

// modules with commonJS are meant to  be loaded synchronously and this is the limitation of commonJS and that's why commonJS is for servers and not for browsers and commonJS used in node.js


// and AMD (asynchronous module defination) specially for the browsers it loads the script or modules asynchronously
//  to import function from the module define it at the top and return whatever you wants to export

define(['module1', 'module2'],
function (module1Import, module2Import) {
  var module1 = module1Import // fight;
  var module2 = module2Import // importedFunc2

  function dance() {
// instrunctions
  }
  return {
    dance : dance
  }
}
)

//  how to share import and export the modules to the developer community
//  our own Native module system / native module suppport
// newly released ES6 modules as Used in React
// JS needed a way support modules and JS is not only just for browser in can now use JS for server, mobile, desktop, iot and other platforms