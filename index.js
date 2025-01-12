// code your solution here
function saturdayFun() {
    console.log("This Saturday, I want to roller-skate!");
}

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


function mondayWork() {
    console.log("This Monday, I will; go in the office.");
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}


function wrapAdjective() {
    console.log("You are a hard worker!");
}

function wrapAdjective(special = "hard worker") {
    return `You are a ${special}!`;
}

function wrapAdjective(special) {
    return function(adjective) {
        return `You are ${special}${adjective}${special}!`;
    };
}