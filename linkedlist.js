class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new Node(data);
    if (this.size == 0) {
      this.head = node;
      this.size++;
      return node;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
    return current.next;
  }



  addFirst(data) {
    const node = new Node(data);
    if (this.size == 0) {
      this.head = node;
      this.size++;
      return node;
    }
    const temp = this.head;
    this.head = node;
    this.head.next = temp;
    this.size++;
    return node;
  }

  printData() {
    let current = this.head;
    console.log(current.data);
    while (current.next) {
      console.log(current.next.data)
      current = current.next;
    }
  }

  insertAt(index, data) {
    const node = new Node(data)
    if (index === 0) {
      this.addFirst(node);
    } else if (index > this.size - 1) {
      this.add(node);
    } else {
      let count = 0;
      let current = this.head;
      while (current.next) {
        count++;
        current = current.next;
        if(count===index){
          break;
        }
      }
      const nextData=current.next;
      current.next=node;
      node.next=nextData;
    }
  }

  
}
const linkedList = new LinkedList();
linkedList.add(21);
linkedList.add(6)
linkedList.add(41)
linkedList.add(92)
linkedList.add(2)
linkedList.addFirst(36)
linkedList.insertAt(2, 27);
linkedList.printData();
