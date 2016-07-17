var Bubble      = require('./algorithm/sort/bubble');
var Insertion   = require('./algorithm/sort/insertion');
var Selection   = require('./algorithm/sort/selection');


var List        = require('./collection/list');
var Stack       = require('./collection/stack');
var Queue       = require('./collection/queue');


var array = [];
for(var i = 0; i < 100; ++i) {
    array.push(Math.floor(Math.random() * 1000 + 1) );
}

var bubble = new Bubble();
bubble.sort(array);


var list1 = new List(10);
var list2 = new List(2);


list1.next = list2;


var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());