// ECMAscript engine is like a translator in between human and computer
// V8 engine written(2008) in c++ , spiderMonkey , nodeJs and other more
// first one who created js Engine and js l/g is ? Brendan Eich working and co-founder of netscape that runs in firefox
// jsCOde -> Parser -> Ast ->Interpreter -> ByteCode or profiler to compiler to optimized code
// AST - abstact synatax tree creted tokens

// anybody can create own js engine but it make a chaos therefore ecmaStandards standarised js

// lets create own small js Engine
function jsEngine(code) {
  return code.split(/\s+/) // spliting the code
}

console.log(jsEngine("var a = 5"))
// two ways of translating code to machine language
// 1. Interpreter (line by line execution of code, it converts the code you written into bytecode)
// 2. Compilers (it read the code and converts the code into some x language)

// in order to write optimized code that is not much problematic to jsEngine ensure to not use following till then it not very compulsary to use
// (1). eval() (2). arguments (3). for in (4). with (5). delete (6). hidden classes (7). inline caching
