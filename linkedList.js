class node {
    constructor(dataP, nextP=null){
        this.data=dataP;
        this.next=nextP;
    }    
}

class linkedList{
    constructor(){
        this.headNode=null;
        this.length = 0;
    }

    append(value){
        const newNode = new node(value,this.headNode);
        this.headNode=newNode;
        this.length++;                
    }

    prepend(value){
        const newNode = new node(value,null);
        let localNode= this.headNode;  
        let indexLocal = this.length-0;        
        let i=0;
        while(i<indexLocal-1){
            localNode=localNode.next;
            i++;
        }     
        localNode.next=newNode;
        this.length++;
    }
    size(){
        return this.length;
    }
    tail(){        
        return this.headNode.data;
    }
    head(){        
        return this.at(0);
    }

    at(index){
        if(index<0 || index>this.length) return null;

        let indexLocal = this.length-index;

        let localNode= this.headNode;
        let i=0;
        while(i<indexLocal-1){
            localNode=localNode.next;
            i++;
        }
        
        return localNode.data
    }

    contains(value){
        let localNode= this.headNode;
        for(let i=0;i<this.length-1;i++){
            if(localNode.data === value){
                return true;
            }
            localNode=localNode.next
        }
        return false;
    }

    find(value){
        let localNode= this.headNode;
        for(let i=0;i<this.length;i++){
            if(localNode.data === value){
                return this.length-i-1;
            }
            localNode=localNode.next
        }
        return -1;
    }

    pop(){
        let localNode= this.headNode;
        localNode=localNode.next;
        this.headNode=localNode;  
        this.length--;
    }

    toString(){
        let output="";
        let localNode= this.headNode;
        while (localNode!= null){
            output+="("+localNode.data+") -> ";
            localNode=localNode.next;
        }
        output+="null";
        return output;
    }

    removeAt (index){
        let indexLocal = this.length-index;
        let localNode= this.headNode;

        if(index == this.length-1){         
            localNode=localNode.next;
            this.headNode=localNode;            
            this.length-- ;
            return;
        }

        if(index == this.length-2){         
            localNode.next=(localNode.next).next;                        
            this.length-- ;
            return;
        }

        let i=0;
        while(i<indexLocal-2){
            localNode=localNode.next;
            i++;
        }
        localNode.next=(localNode.next).next
        this.length-- ;
    }

    insertAt (value,index){
        
        let indexLocal = this.length-index;
        let localNode= this.headNode;
        let newNode= new node(value,null);        

        if(parseInt(index)>= ((this.length))){
            console.log("here")    
            this.append(value);
            this.length++;
            return;
        }
        if(parseInt(index)== (0)){
            this.prepend(value);
            this.length++;
            return;
        }

        if(index == this.length-1){
            newNode.next=localNode.next         
            localNode.next=newNode;
            this.headNode=localNode;                        
            this.length++ ;
            return;
        }
        let i=0;
        while(i<indexLocal-1){
            localNode=localNode.next;
            i++;
        }
        newNode.next=localNode.next         
        localNode.next=newNode;
        this.length++ ;
    }
}

function filling(){

let l1= new linkedList();
l1.append(10);
l1.append(9);
l1.append(22);
l1.append(22);
l1.append(22);

console.log(l1)
console.log("SIZE = "+l1.size())
console.log("tail = "+l1.tail())

//l1.prepend(2);
console.log(l1)

console.log("toString : "+l1.toString())
l1.insertAt(32,0);
console.log("toString : "+l1.toString())
console.log("SIZE = "+l1.size())

}
filling();