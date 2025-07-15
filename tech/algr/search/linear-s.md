# Linear Search
1. 
```js
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage:
const numbers = [5, 3, 8, 4, 2];
const target = 4;
const result = linearSearch(numbers, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found");
}
```
# Binary Tree Search
```js
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a new value into the binary search tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                // Go left
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                // Go right
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    // Search for a value in the binary search tree
    search(value) {
        if (this.root === null) return false; // Tree is empty
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return true; // Value found
            } else if (value < currentNode.value) {
                currentNode = currentNode.left; // Go left
            } else {
                currentNode = currentNode.right; // Go right
            }
        }
        return false; // Value not found
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

const targetValue = 7;
const found = bst.search(targetValue);

if (found) {
    console.log(`Value ${targetValue} found in the binary search tree.`);
} else {
    console.log(`Value ${targetValue} not found in the binary search tree.`);
}
```
# Hash Search
