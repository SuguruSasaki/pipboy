var List = require('./list');


/**
 * Queueクラス
 * @constructor
 */
var Queue = function() {
    this.values = null;
    this.first  = null;
};
//--------------------------------
// Header
//--------------------------------
Queue.prototype['enqueue'] = enqueue;
Queue.prototype['dequeue'] = dequeue;


/**
 * 追加
 * @param data
 */
function enqueue(data){
    var temp = new List(data);
    if(!this.values) {
        this.values = temp;
        this.first  = temp;
    }
    else {
        this.values.next = temp;
        this.values      = temp;
    }
}

/**
 * 取り出し
 * @returns {*|null}
 */
function dequeue() {
    var temp    = this.first;
    this.first  = temp.next;
    return temp.data;
}


module.exports = Queue;