/**
 * バブルソート
 * @param array
 */
var bubble = function(array){
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
};

module.exports = bubble;