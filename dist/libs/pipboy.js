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

	var bubble      = __webpack_require__(1);
	var insertion   = __webpack_require__(2);
	var selection   = __webpack_require__(3);



	var array = [];
	for(var i = 0; i < 100; ++i) {
	    array.push(Math.floor(Math.random() * 1000 + 1) );
	}


	// bubble(array);
	// insertion(array, 0);
	selection(array);

	console.log(array);

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);