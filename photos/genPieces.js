// run me in the desired directory: `node --harmony genPieces.js`
var fs = require('fs');
var directory = process.cwd();
String.prototype.contains = _ => this.indexOf(_) != -1;
String.prototype.contains = function(_) {return this.indexOf(_) != -1};
var pieces = fs.readdirSync(directory)
               .filter(_ => _.contains('.png') || _.contains('jpg'))
               .map(_ => {
                  var title = _.substring(0, _.indexOf('.'));
                  return '\nnew Piece({\n\ttitle: \'' + title + '\',\n\t'
                  + 'description: \'a description for ' + title + '\',\n\t' 
                  + 'photoURL: \'' + _ + '\'\n})';
               }).join(',');
console.log('[' + pieces + ']');
