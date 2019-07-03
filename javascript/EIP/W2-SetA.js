class Guest {
    //  prev, next, name
    //prev; next; name; age;
    constructor(name) {
        this.name = name;
    }
}

class JaneList {
    //root;
    add(name) {

        if (!this.root) {
            this.root = new Guest(name);
            this.root.next = root;
            this.root.prev = root;
        }

        else {

            var guest = new Guest(name);
            var current = this.root;
            while (current) {

                if (name < current.name) {
                    guest.prev = current.prev;
                    guest.next = current;

                    current.prev.next = guest;
                    current.prev = guest;
                    break;

                }
                else if (current.next == this.root) {
                
                    current.next = guest;
                    guest.prev = current;
                    guest.next = this.root;
                    this.root.prev = guest;
                    break;
                }

                current = current.next;

            }
        }
    }

    get(name) {
        var current = this.root;
        while (current) {
            if (current.name == name) return [current.prev.name, current.next ? current.next.name : this.root];
            if (current.next != this.root)
                current = current.next;
            else break;
        }
        return [];
    }

    delete(name) {
        var current = this.root;
        while (current) {
            if (current.name == name) {

                current.prev.next = current.next;
                current.next.prev = current.prev;

                current.prev = null;
                current.next = null;

                if (current.next != root)
                    current = current.next;
                else break;

            }
        }
    }
}

list = new JaneList();

list.add("Jane");  // jane makes sure to include herself
list.add("Fred");
list.add("Mary");
list.add("Bob");

console.log(list);


// Jane
//Fred          Mary
//Bom

//list.get("Fred")  //-> ["Bob", "Jane"]

//list.delete("Bob");
//list.get("Fred")  //-> ["Mary", "Jane"]