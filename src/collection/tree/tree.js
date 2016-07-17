
/**
 * Treeクラス
 * @constructor
 */
var Tree = function(){
    this.root = null;
};
Tree.prototype['replace'] = replace;



function replace(parent, oldNode, newNode) {
    if(parent == null) {
        this.root = newNode;
        return ;
    }

    if(parent.left == oldNode) {
        parent.left = newNode;
    }
    else if( parent.right == oldNode) {
        parent.right = newNode;
    }
    else {
        throw new Error("子要素がみつかりません。");
    }
}