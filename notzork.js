const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// remember the StateMachine lecture
// https://bootcamp.burlingtoncodeacademy.com/lessons/cs/state-machines
let states = {
  'roomOne': { canChangeTo: [ 'roomTwo' ] },
  'roomTwo': { canChangeTo: [ 'roomThree' ] },
  'roomThree': { canChangeTo: [ 'roomOne' ] }
};

let currentState = "green";

function enterState(newState) {
  let validTransitions = states[currentState].canChangeTo;
  if (validTransitions.includes(newState)) {
    currentState = newState;
  } else {
    throw 'Invalid state transition attempted - from ' + currentState + ' to ' + newState;
  }
}

start();

async function start() {
  const welcomeMessage = `You are in a post-apoloctptic shelter.
You are standing in the Safe house. 
This is the epicenter of the last remaining humans you know.
You're starving. You need more food.
There is one door here. A keypad is on the wall.
On the door is a handwritten sign.
...
`;
  let answer = await ask(welcomeMessage);
  let response = await ask ()
  console.log ('response')
  


  console.log('Now write your code to make this work!');
  process.exit();
}
