// Binary Search Tree

class Node {
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

    insert(value) {
        const newNode = new Node(value);
        
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode); 
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);  
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }

    findMinNode(node = this.root) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }

    findMaxNode(node = this.root) {
        while (node && node.right !== null) {
            node = node.right;
        }
        return node;
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }
            let minNode = this.findMinNode(node.right);
            node.value = minNode.value;  
            node.right = this.deleteNode(node.right, minNode.value);
        }
        return node;
    }

    // In-Order Traversal always returns the keys in sorted order
    inOrder(node = this.root, result = []) {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }

    preOrder(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }

    postOrder(node = this.root, result = []) {
        if (node !== null) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

var bst1 = () => {
    var bst = new BinarySearchTree();

    var n = prompt("Input the size of the Binary Search Tree:");

    for (var i = 1; i <= n; i++) {
        var tmp = prompt(`Input the element with index = ${i}`);
        bst.insert(parseInt(tmp));
    }

    alert(`
        In-Order Traversal (A sorted array): ${JSON.stringify(bst.inOrder())}\n
        Pre-Order Traversal:  ${JSON.stringify(bst.preOrder())}\n
        Post-Order Traversal:  ${JSON.stringify(bst.postOrder())}\n
        Max Key:  ${JSON.stringify(bst.findMaxNode().value)}\n
        Min Key:  ${JSON.stringify(bst.findMinNode().value)}\n
    `);
}