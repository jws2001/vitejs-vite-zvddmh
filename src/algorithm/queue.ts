//使用链表实现队列
export default {};

// type Val = CreateNode | null;

// //创建一个链表节点
// class CreateNode {
//   value: any = null;
//   next: Val = null;
//   constructor(value: any, next: Val = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// //创建一个队列
// class Queue {
//   start: Val = null;
//   end: Val = null;
//   constructor() {}
//   //入队
//   public enqueue(val: any) {
//     //节点
//     const node: CreateNode = new CreateNode(val);
//     if (this.start) {
//       this.end && (this.end.next = node);
//       this.end = node;
//     } else {
//       this.start = this.end = node;
//     }
//   }
//   //出队
//   public dequeue() {
//     let result: Val = null;
//     if (this.start) {
//       result = this.start;
//       this.start = this.start.next;
//       result.next = null;
//     }
//     return result;
//   }
// }

declare global {
  interface Window {
    $queue: Queue;
  }
}

// window.$queue = new Queue();

//使用数组实现循环队列
class Queue {
  key: Symbol = Symbol('null');
  data: any[] = [];
  start: number = 0;
  end: number = 0;
  constructor(length: number = 5) {
    this.data = new Array(length).fill(this.key);
  }
  public enqueue(value: any) {
    //判断队列是否已满
    if ((this.end + 1) % this.data.length === this.start) {
      return false;
    }
    this.data[this.end] = value;
    this.end = (this.end + 1) % this.data.length;
    return true;
  }
  public dequeue() {
    //判断队列是否为空
    if (this.start === this.end) {
      return false;
    }
    const result = this.data[this.start];
    this.data[this.start] = this.key;
    this.start = (this.start + 1) % this.data.length;
    return result;
  }
}
window.$queue = new Queue();
