/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Bubble      = __webpack_require__(1);
	var Insertion   = __webpack_require__(2);
	var Selection   = __webpack_require__(3);


	var List        = __webpack_require__(4);
	var Stack       = __webpack_require__(5);
	var Queue       = __webpack_require__(6);


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

/***/ },
/* 1 */
/***/ function(module, exports) {

	
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

/***/ },
/* 2 */
/***/ function(module, exports) {

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



/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * 選択ソート
	 * @param array
	 */
	var selection = function(array){
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
	module.exports = selection;

/***/ },
/* 4 */
/***/ function(module, exports) {

	

	var List = function(data){
	    this.next = null;
	    this.data = data;
	};
	//------------------------------------
	// Header
	//-------------------------------------


	module.exports = List;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var List = __webpack_require__(4);

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



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var List = __webpack_require__(4);


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

/***/ }
/******/ ]);