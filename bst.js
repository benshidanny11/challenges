class Node {
    constructor(data) {
        this.right = null;
        this.left = null;
        this.data = data;
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(data) {
        const node = new Node(data);

        if (!this.root) {
            this.root = node;
        } else {
            let currentNode = this.root;
            while (true) {
                if (currentNode.data > data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(data) {
        if (!this.root) {
            return false;
        } else {
            if(this.root.data===data){
                return true;
            }else {
                let currentNode = this.root;
                while (true) {
                    if (currentNode.data > data) {
                        if (!currentNode.left) {
                            return false;
                        }
                        if(currentNode.left.data===data){
                            return true;
                        }else {
                            currentNode = currentNode.left;
                        }
                    } else {
                        if (!currentNode.right) {
                            return false;
                        }
                         if(currentNode.right.data===data){
                            return true;
                        }else {
                            currentNode = currentNode.right;
                        }
                        
                    }
                }
            }
            
        }
    }
}

const tree = new BST();
tree.insert(21);
tree.insert(6);
tree.insert(7);
tree.insert(123);
tree.insert(111)
tree.insert(130)
console.log(JSON.stringify(tree));
console.log(tree.lookup(131));