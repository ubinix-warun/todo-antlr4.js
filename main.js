
var antlr4 = require('antlr4/index');
var TodoLexer = require('./antlr4/lib/todoLexer');
var TodoParser = require('./antlr4/lib/todoParser');

input = `
* play with antlr4
* write a tutorial
`
console.log(input);

var updateTree = function(tree, ruleNames) {
    for (var i = 0; i < tree.children.length; i++) {
        var child = tree.children[i];
        var nodeType = ruleNames[child.ruleIndex];
        if (nodeType == "element") {
            console.log(child.children[2].getText());
        }
    }
};

var chars = new antlr4.InputStream(input);
var lexer = new TodoLexer.todoLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new TodoParser.todoParser(tokens);
parser.buildParseTrees = true;
var tree = parser.elements();
console.log("Parsed: "+ tree);

updateTree(tree, parser.ruleNames);