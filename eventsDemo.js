import { EventEmitter } from "events";

class MyNodeEvents extends EventEmitter {}
const eventEmitter = new MyNodeEvents();

const names = ["Ali", "Bobur", "Umar"];
eventEmitter.on("salom", (ism) => {
  console.log(`My name is ${ism}`);
});

eventEmitter.emit("salom", 'Vali');

eventEmitter.removeAllListeners("salom");

eventEmitter.emit('salom','Ali')
eventEmitter.emit('salom','Ali')