
/********************************************
 * バブルソート
 * @constructor
 *
 *******************************************/
var Bubble = function(){

};
//------------------------------------
// Header
//------------------------------------
Bubble.prototype['sort']    = sort;
Bubble.prototype['sortKey'] = sortKey;


/**
 * 数値配列のソート
 * @param array
 */
function sort(array) {
    var len = array.length;
    var temp = 0;
    for(var i = len; i >= 1; --i){
        for(var j = 1; j <= i; ++j){
            if( array[j - 1] > array[j] ){
                temp       = array[j-1];
                array[j-1] = array[j];
                array[j]   = temp;
            }
        }
    }
}

/**
 * 指定Keyを使って、オブジェクトをソートする
 * @param array
 * @param key
 */
function sortKey(array, key) {
    var len = array.length;
    var temp = 0;
    for(var i = len; i >= 1; --i){
        for(var j = 1; j <= i; ++j){
            if( array[j - 1][key] > array[j][key] ){
                temp       = array[j-1][key];
                array[j-1][key] = array[j][key];
                array[j][key]   = temp;
            }
        }
    }
}


module.exports = Bubble;