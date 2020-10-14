import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


let final2014 = fifaData.filter((game) => {
    return (game.Year === 2014 && game.Stage === 'Final');
});
console.log(final2014[0]["Home Team Goals"]);

if(final2014[0]["Home Team Goals"] > final2014[0]["Away Team Goals"]){
    console.log(`Winner = ${final2014[0]["Home Team Name"]}`);
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let finalsGames = data.filter((game) => {
        return (game.Stage === 'Final');
    });
    return finalsGames;
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let years = callback.map((game) => {
        return game.Year;
    });
    return years;
}

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winners = [];
    // for (let i in callback){
    //     if(callback[i]["Home Team Goals"] > callback[i]["Away Team Goals"]){
    //         winners.push(callback[i]["Home Team Name"]);
    //     }
    //     else if(callback[i]["Home Team Goals"] < callback[i]["Away Team Goals"]){
    //         winners.push(callback[i]["Away Team Name"]);
    //     }
    //     else {
    //         winners.push("Tied in Regulation");
    //     }
    // }

    callback.forEach(data => {
        if(data["Home Team Goals"] > data["Away Team Goals"]){
            winners.push(data["Home Team Name"]);
        }
        else if(data["Home Team Goals"] < data["Away Team Goals"]){
            winners.push(data["Away Team Name"]);
        }
        else {
            winners.push("Tied in Regulation");
        }
    });



    return winners;



};

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWinners, cbYears) {
    for (let i in cbYears){
        console.log(`In ${cbYears[i]}, ${cbWinners[i]} won the world cup!`);
    }
};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeTotal = data.reduce(function(counter,goals){
        return counter + goals["Home Team Goals"];
    },0);
    let awayTotal = data.reduce(function(counter2,goals){
        return counter2 + goals["Away Team Goals"];
    },0);
    console.log(`Number of games: ${data.length}`);
    console.log(`Total Home Team goals: ${homeTotal}, Average: ${(homeTotal/data.length).toPrecision(3)}`);
    console.log(`Total Away Team goals: ${awayTotal}, Average: ${(awayTotal/data.length).toPrecision(3)}`);
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

let homeInitials = fifaData.map(function(item){
    return item["Home Team Initials"];
});
let awayInitials = fifaData.map((item) => {return item["Away Team Initials"]});
console.log(homeInitials);
console.log(awayInitials);

function getCountryWins(data, initials) {
    let arrInit = [];
    for (let i in data){
        if (data[i]["Home Team Initials"] === initials || data[i]["Away Team Initials"] === initials){
            arrInit.push(data[i]);
        }
    }
    console.log(arrInit);
    // for (let k in arrInit){
    //     var newARR = arrInit[k]["Win conditions"].toUpperCase();
    // }
    // console.log(newARR);
    const wins = arrInit.reduce(function (count, item){
        if (item["Home Team Initials"] === initials && item["Home Team Goals"] > item["Away Team Goals"]){
        count++;
        }
        else if (item["Away Team Initials"] === initials && item["Away Team Goals"] > item["Home Team Goals"]){
        count++;
        }
        else if (item["Win conditions"].slice(0,3).toUpperCase() === initials) {
           count++;
        }
        return count;
    }, 0);
    return wins;


    // let wins = 0;
    // for(let j in data){
    //     if (data[j]["Home Team Initials"] === initials && data[j]["Home Team Goals"] > data[j]["Away Team Goals"]){
    //     wins++;
    //     }
    //     else if (data[j]["Away Team Initials"] === initials && data[j]["Away Team Goals"] > data[j]["Home Team       Goals"]){
    //     wins++;
    //     }
        // else if (data[j]["Home Team Initials"] === data[j]["Away Team Initials"]){

        // }
    // }
    
//     console.log(arrInit);
//     return wins;
}

console.log(getCountryWins(fifaData, "GER"));

console.log(fifaData[576]["Win conditions"].toUpperCase());
/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
