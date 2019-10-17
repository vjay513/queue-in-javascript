class Queue{
    constructor(){
        this.items =[]
    }
    enqueue(element) 
    {     
        // adding element to the queue 
        this.items.push(element); 
    } 
    dequeue() 
    { 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    } 
}
