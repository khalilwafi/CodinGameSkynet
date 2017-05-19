/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

class Node {

    constructor(id){
        this.id = id;
        this.isGateway = false;
    }
}


class Link {
    constructor(N1, N2){
        this.N1 = N1;
        this.N2 = N2;
    }

    print(){
        printErr('Link ' + this.N1 + '/' + this.N2);
    }
}


class Game {
    constructor(){
        this.links = [];
        this.nodes = [];
    }

    addNode(node){
        this.nodes.push(node);
    }

    addLink(link){
        this.links.push(link);
    }

    getNode(id){
        return this.nodes[id];
    }

    getLinks(node){ // return all links of this node

    }


    //ici



    FoundNumberLinkInNode(node, link){
        linksNode = game.getLinks(node);
        linksNode = game.getLinks(node);





    }






    print(){
        let msg = '';
        for(let node of this.nodes){
            msg = msg  + node.id + ' G ' + node.isGateway + ' / ';
        }
        printErr('GAME ' + msg);
    }
}

//***********************************************************************************




var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways

let game = new Game();

for(let n = 0; n < N ; n++){
    let node = new Node(n);
    game.addNode(node);

}

for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    var N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    var N2 = parseInt(inputs[1]);

    let link = new Link(N1, N2);
    link.print();
    game.addLink(link);

}

for (var i = 0; i < E; i++) {
    var EI = parseInt(readline()); // the index of a gateway node
    let nodeGateway = game.getNode(EI);
    nodeGateway.isGateway = true;
    let linksGateway = game.getLinks(nodeGateway);
}

game.print();

// game loop
while (true) {
    var SI = parseInt(readline());


    for(let node of game.nodes)
    {
        let linksNode = game.getLinks(node);
    }


    print('1 2');
}

