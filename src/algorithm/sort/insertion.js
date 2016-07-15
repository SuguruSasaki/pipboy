/**
 * 挿入ソート
 * @param array
 * @param min       配列内の最小値
 */
var insertion = function(array, min){
    var len = array.length;
    array.unshift(min-1);
    for(var i = 1; i < len; ++i){
        var temp = array[i];
        if(array[i - 1] > temp ){
            var j = i;
            while(array[j - 1] > temp ){
                array[j] = array[j - 1];
                j--;
            }
            array[j] = temp;
        }
    }
    array.shift();
};

module.exports = insertion;