// code your solution here
// function saturdayFun(activity = 'I want to roller-skate') {
//     return `This Saturday, let's ${activity}!`;
// }
// function mondayWork(activity = 'go to the office') {
//     return `This Monday, let's ${activity}!`;
// }
// function wrapAdjective(flair = "*") {
//     return function(adjective = "special") {
//         return `You are ${flair}${adjective}${flair}!`;
//     }
// }

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}



const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(saturdayFun()); 
console.log(mondayWork()); 
console.log(encouragingPromptFunction()); 
console.log(encouragingPromptFunction("amazing")); 
