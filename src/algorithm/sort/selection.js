/**
 * 選択ソート
 * @param array
 */
var Selection = function(array){
    var len = array.length;

    var min = 0;
    var temp = null;
    for(var i = 0; i < len; ++i){
        min = i;
        for(var j = i + 1; j <= len; ++j){
            if(array[j] < array[min]) {
                min = j;
            }
        }
        temp       = array[min];
        array[min] = array[i];
        array[i]   = temp;
    }
};

module.exports = Selection;