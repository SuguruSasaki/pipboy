var bubble      = require('./algorithm/sort/bubble');
var insertion   = require('./algorithm/sort/insertion');
var selection   = require('./algorithm/sort/selection');



var array = [];
for(var i = 0; i < 100; ++i) {
    array.push(Math.floor(Math.random() * 1000 + 1) );
}


// bubble(array);
// insertion(array, 0);
selection(array);

console.log(array);