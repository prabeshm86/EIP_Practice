class Node {
   
    constructor(str) { this.name = str; }

    addNode(name){
        if (name < this.name ){
            if (!this.left) this.left = new Node(name);
            else this.left.addNode(name);
        }
        else{
            if(!this.right) this.right = new Node(name);
            else this.right.addNode(name);
        }
    }

    findNode(str){
        if (str == this.name) return this.name;
        else if(this.left && str < this.name) return this.left.findNode(str);
        else if(this.right && str > this.name) return this.right.findNode(str);
        else return null;
    }
}

class JaneList {
    
    add(name){
        if (!this.first)
            this.first = new Node(name);
        else this.first.addNode(name);
    }

    get(name){
        return this.first.findNode(name);
    }
}


list = new JaneList();



list.add("Jane");  // jane makes sure to include herself
list.add("Fred");
list.add("Mary");
list.add("Bob");

//console.log(list);
console.log(list.get("Fred"));  //-> ["Bob", "Jane"]

// list.delete("Bob");
// list.get("Fred")  -> ["Mary", "Jane"]