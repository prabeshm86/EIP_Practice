class Node {
    Node(val) {
        this.val = val;
    }

}

//var root = new Node(5);
//root

/*

 2
/ \
1   3
  / \
 4   6
  \   \
   5   7
        \
         8
*/

// var root = new Node(2);
// var n1 = new Node(1); root.left = n1;

// var n2 = new Node(3); root.right = n2;

//     var n3 = new Node(4); n2.left = n3;
//         var n4 = new Node(5); n3.right = n4;
//     var n5 = new Node(6); n3.right = n5;
//         var n6 = new Node(7); n5.right = n6;
//             var n7= new Node(8); n6.right = n7;


/*
        5
      /   \
    2       7
  /   \   /   \
1      3 6     8
*/


var root = new Node(5);
root.left = new Node(2);
root.left.left = new Node(1);
root.left.right = new Node(3);

root.right = new Node(7);
root.right.left = new Node(6);
root.right.right = new Node (8);



console.log(isBalanced(root));

function isBalanced(root) {

    if(!calculateDepth(root)) return true; else return false;
}


function calculateDepth(node) {

    leftDepth = 0;
    rightDepth = 0;

    if (node.left) {
        // Calculate the number left most edges
        leftDepth = 1 + calculateDepth(node.left);
    }
    if (node.right) {
        // Calculate the right most edges
        rightDepth = 1 + calculateDepth(node.right);
    }
    if (Math.abs(leftDepth -rightDepth) > 1) return false;
    
    return Math.max(leftDepth, leftDepth);

}