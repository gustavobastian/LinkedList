
import {linkedList} from './linkedList.js'

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
