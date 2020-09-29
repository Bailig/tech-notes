class Graph {
  constructor() {
    this.nodeCount = 0;
    this.adjacentList = {};
  }
  addNode(node) {
    this.adjacentList[node] = [];
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const myGraph = new Graph();
myGraph.addNode(0);
myGraph.addNode(1);
myGraph.addNode(2);
myGraph.addNode(3);
myGraph.addNode(4);
myGraph.addNode(5);
myGraph.addNode(6);
myGraph.addEdge(0, 1);
myGraph.addEdge(0, 2);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(3, 4);
myGraph.addEdge(4, 5);
myGraph.addEdge(5, 6);
console.log(JSON.stringify(myGraph.adjacentList, null, 2));
