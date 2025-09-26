
function node(val) {
    this.val = val
    this.next = null
}
var MyLinkedList = function() {
    this.head = null
    this.size=0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index>=this.size) return -1
    let curr =  this.head // curr pointing to head
    // looping till the given index
    for(let i=0;i<index;i++){
        curr = curr.next // moving curr to ahead
    }
    return curr.val // returning the value at the index, 
    //note:if u do this 'return curr' it will return the node
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    // creating new node
    let newNode = new node(val)
    // created node point to head
    newNode.next = this.head
    // converting newly created node to head
    this.head = newNode
    // increasing LL size
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
     // create new node 
     let newNode = new node(val)
     // check if head is null or not, if null than add new node to head
     if(this.head===null){
        this.head = newNode
     }else{
        //loop and reach the last element/tail
        let curr = this.head // curr pointing to head
        // if curr.next is not null than move curr ahead
        while(curr.next!==null){
            curr = curr.next
        }
        curr.next = newNode // point curr.next to new node
        
        
     }
     this.size ++ // inc LL by 1
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
     if (index < 0 || index > this.size) return;
    // if index is zero than call addAtHead()
    if(index ==0){
        this.addAtHead(val)
        return
    // if index is at last/tail than call addAtTail()
    }else if(index === this.size){
        this.addAtTail(val)
        return
    }else{
    // create new node
    let newNode = new node(val)
    // point curr to head
    let curr = this.head
    // looping till we reach before the given index 
    // let say index =2 loop will reach at index-1 ==> 2-1=1
    for(let i=0;i<index-1  && curr !== null;i++){
        // moving curr ahead
        curr = curr.next


    }
    // pointing new node to its next node
    newNode.next = curr.next
    // pointin curr to new node
    curr.next = newNode
    }
    this.size ++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    // what if index is less than zero or greter than LL size
    if(index < 0 || index>=this.size) return
    // what if i want to delete at 0th index 
    if(index===0) {
        this.head = this.head.next
    }else{
    let curr = this.head // pointing curr to head
  for(let i=0 ;i<index-1;i++){
    curr = curr.next // move curr ahead
 }
  curr.next = curr.next.next // moving 2 steps ahead and connecting

    }
    this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */