/**
 * 挿入ソート
 * @param array
 * @param min       配列内の最小値
 */
var Insertion = function(array, min){

};
//------------------------------------------
// Header
//------------------------------------------
Insertion.prototype['sort'] = sort;




function sort(array, min) {
    var array = [];
    for(var i = 0; i < 100; ++i) {
        array.push(Math.floor(Math.random() * 1000 + 1) );
    }
}

module.exports = Insertion;

