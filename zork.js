const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}

// remember the StateMachine lecture
// https://bootcamp.burlingtoncodeacademy.com/lessons/cs/state-machines
// let states = {
//   'roomOne': { canChangeTo: [ 'roomTwo' ] },
//   'roomTwo': { canChangeTo: [ 'roomThree' ] },
//   'roomThree': { canChangeTo: [ 'roomOne' ] }
// };

// let currentState = "green";

// function enterState(newState) {
//   let validTransitions = states[currentState].canChangeTo;
//   if (validTransitions.includes(newState)) {
//     currentState = newState;
//   } else {
//     throw 'Invalid state transition attempted - from ' + currentState + ' to ' + newState;
//   }
// }

let medicalSupplies
let food
let sign
let keyPad
let currentRoom
let door2
let door3
let medSupplyRoom






class Room {
    constructor(roomName, roomDescription, items, puzzles, connectingRooms) {
        this.roomName = roomName,
            this.roomDescription = roomDescription,
            this.items = items,
            this.puzzles = puzzles,
            this.connectingRooms = connectingRooms,
            this.move = function (room) { currentRoom = room }


    }
}

class Item {
    constructor(itemName, itemDescription, useofItem, takeAbility) {
        this.itemName = itemName
        this.itemDescription = itemDescription
        this.useofItem = useofItem
        this.takeAbility = takeAbility

    }

}

let door1 = new Item("Door Number 1", "This is Door Number 1. It leads in and out of the Safe House Room. It requires a keypad to enter.", openDoor, false)

door1.isLocked = true

let key = new Item("Key", "This is the Key to get into the Medical Supply Room. There might be food in there.", keyDoor2, true)

let person = new Item("Dying person", "There appears to be a person dying on the ground in the Safe House Room... you should probably try to save them!", savePerson, false)

function keyDoor2() {
    //if //user has key in inventory, OPEN DOOR 2 changes property of door2 to islocked to false

    //else (console.log("Door 2 requires a Key it remains locked."))
}

function savePerson() { /*if (medical supplies is in Invetory*/ }

function openDoor() {

    if (this.isLocked === true) { console.log("This door is locked.") }
    else (console.log("you have moved into the next room"))

}

let hallwayRoom = new Room("Hallway Room", "You are now in the Hallway. There are three Doors. Door 1, Door 2, and Door 3. Which Room would you like to go to next?", ["door1", "door2", "door3", "keypad"], ["door2", "keyPad"], ["safeHouse", "zombieRoom", "medSupplyRoom"])


let safeHouse = new Room("Safe House Room", "You are safe in this Safe House Room. There is a table with a KEY on it. There is a dying PERSON in the corner that needs MEDICAL SUPPLIES to be saved. There is a DOOR. The DOOR has a SIGN on it. The DOOR also has a KEYPAD (you may need to use this to enter a code to open the door...). ", "door1, key, person, keyPad, sign", "person, keyPad, sign", "hallwayRoom")

let zombieRoom = new Room("Do NOT ENTER Room", " You are in a terrible place and will die soon... you should've listened to the note.", "there are no items in this room", "runZombies", "no connecting rooms, you will die.")


lookupObject = {
    "safeHouse": safeHouse,
    "hallwayRoom": hallwayRoom,
    "zombieRoom": zombieRoom,
    "medSupplyRoom": medSupplyRoom,
    "key": key,
    "door1": door1,
    "door2": door2,
    "door3": door3,
    "keyPad": keyPad,
    "medicalSupplies": medicalSupplies,




}




let userplayer = {
    inventory: [],
    takeItem(item) {
        this.inventory.push(item)
    }
}

//await.ask (){
// if(answer === "take" {
//    player.take   
//}}


start();

async function start() {
    const welcomeMessage = `You are in a post-apoloctptic shelter.
You are standing in the Safe house. 
This is the epicenter of the last remaining humans.
You're starving. You need food.
There is one door here. A keypad is on the wall.
On the door is a handwritten sign.
...
`;
    let answer = await ask(welcomeMessage);
    let currentRoom = safeHouse

    console.log('You entered: ' + answer);
    while (answer !== "exit") {
        // if (currentRoom === safeHouse)

        // if (moveArray.includes(answer) && answer.includes) { console.log(safeHouse.roomDescription) }

        //function checkImput(input) 


        let lowerInput = answer.toLowerCase()
        let inputArray = lowerInput.split(' ');
        let thisAction = inputArray[0];
        let focus = inputArray[inputArray.length - 1]

        let searchroomArray = ["inspect", "look", "notice", "find", "examine", "search"]

        if (searchroomArray.includes(thisAction)) {

            console.log(currentRoom.roomDescription)

        }
        else (console.log("You can't do that."))

        answer = await ask("what do you want to do?")
    }











    process.exit();


}





