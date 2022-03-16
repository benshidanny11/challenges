class Graph{
    constructor(){
        this.length=0;
        this.adjacencies= {}
    }

    addNode(node){
        this.adjacencies[node]=[];
        this.length++;
    }
    addAjancence(node1,node2){
       if(this.length!==0){
        this.adjacencies[node1].push(node2);
        this.adjacencies[node2].push(node1);
       }
    }
    showConnections(){
        Object.keys(this.adjacencies).forEach((node)=>console.log(`${node}===>${this.adjacencies[node]}`))
    }
}

const graph=new Graph();
graph.addNode('1');
graph.addNode('3');
graph.addNode('5');
graph.addNode('6');
graph.addNode('9');
graph.addAjancence('1','5');
graph.addAjancence('1','3');
graph.addAjancence('1','9');
graph.addAjancence('3','6');
graph.addAjancence('3','9');
graph.addAjancence('5','6');
graph.showConnections();