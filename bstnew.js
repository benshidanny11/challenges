class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }
}

class BST {

    constructor(){
        this.root=null;
    }

    insert(data){
      let node=new Node(data);
      if(this.root==null){
        this.root=node;
        return this.root;
      }
      let current=this.root;

      while (true){
        if(current.value<data){
            if(!current.right){
                current.right=node;
                return this;
            }
            current=current.right; 
           
        }else {
            if(!current.left){
                current.left=node;
                return this;
            }
            current=current.left;
        }
      }
     //console.log(current)
     
    }
    
    lookup(data){
     let node=new Node(data);
     let current=this.root;

     while(true){
        if(current.value<data){
            if(current.value==data){
                return true;
            }
            if(!current.right){
                return false;
            }
            current=current.right; 
           
        }else {
            if(current.value==data){
                return true;
            }
            if(!current.left){
                return false;
            }
            current=current.left;
        }
     }
    }

    delete(data){
    let node=new Node(data);
     let current=this.root;
     
    
     while(true){
        let previous=current;
        if(current.value<data){
            
            if(current.value==data){
                previous.right=current.right;
                current=previous;
                return true;
            }
            if(!current.right){
                return false;
            }
            previous=current;
            current=current.right; 
           
        }else {
            if(current.value==data){
                previous.right=current.right;
                current=previous;
                return true;
            }
            if(!current.left){
                return false;
            }
            current=current.left;
        }
     }
    }

}

const bst=new BST();
bst.insert(10);
bst.insert(8);
bst.insert(12);
bst.insert(15);
bst.insert(6);
bst.delete(6)
bst.delete(15)
bst.delete(12)
console.log(bst);
