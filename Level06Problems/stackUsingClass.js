class Stack {
    constructor() {
      this.stack = "";
    }
  
    push(element) {
      this.stack += element; 
      console.log(`${element} pushed to stack`);
    }
  
    pop() {
      if (this.stack.length === 0) {
        console.log("Stack is empty. Cannot pop element.");
        return null;
      }
      const topElement = this.stack[this.stack.length - 1]; 
      this.stack = this.stack.slice(0, -1); 
      console.log(`${topElement} popped from stack`);
      return topElement;
    }
  

    peek() {
      if (this.stack.length === 0) {
        console.log("Stack is empty. No top element.");
        return null;
      }
      const topElement = this.stack[this.stack.length - 1]; 
      console.log(`Top element is ${topElement}`);
      return topElement;
    }
  }
  
  const stack = new Stack();
  stack.push("A"); 
  stack.push("B"); 
  stack.push("C"); 
  
  stack.peek();    
  stack.pop();     
  stack.pop();    
  stack.pop();    
  stack.pop();     
  