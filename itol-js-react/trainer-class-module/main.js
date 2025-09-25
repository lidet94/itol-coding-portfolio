// main.js
import { Trainer } from './trainer.js';

const tim = new Trainer("Tim", 1, 50);
tim.train();
console.log(tim.describe());

const ana = new Trainer("Ana", 2, 70);
ana.rest();
console.log(ana.describe());