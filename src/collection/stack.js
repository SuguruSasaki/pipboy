var List = require('./list');

/**
 * Stackクラス
 * @constructor
 */
var Stack = function(){
    this.values = null;
};
//------------------------------
// Header
//------------------------------
Stack.prototype['push'] = push;
Stack.prototype['pop']  = pop;


/**
 * スタックに追加
 * @param data
 */
function push(data) {
    var temp = new List(data);
    if(!this.values) {
        this.values = temp;
    }
    else {
        temp.next = this.values;
        this.values = temp;
    }
}

/**
 * スタックを取得
 * @returns {*}
 */
function pop() {
    var temp = this.values;
    this.values = temp.next;
    return temp.data;
}



module.exports = Stack;

