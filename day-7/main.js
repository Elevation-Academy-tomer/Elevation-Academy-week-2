////    Callbacks ////
//// Exercise 1 ////
/*
const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

const pushPull = function (Callback) {
    Callback();
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

//// Exercise 2 ////

const returnTime = function (time) {
    alert('The current time is: ' + time)
}

const getTime = function (callBack) {
    const time = new Date();
    callBack(time);
}

getTime(returnTime)

//// Exercise 3 ////


const logData = data => console.log(data);
const alert = data => window.alert(data);

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

displayData(alert, logData, "I like to party")

//// Exercise 4 ////

  setTimeout(function () {
    alert("I'm... saying stuff in delay");
  }, 1000);

                                              //// Arrow Functions////
//// Exercise 5 ////

const sumOfTreeNums = (a, b , c) => a + b +c
console.log(sumOfTreeNums(10,10,10));

//// Exercise 6 ////

const capitalize = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

console.log(capitalize("bOb"))// returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia

//// Exercise 7 ////

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

  const commentOnWeather = temp =>{
    const weather = determineWeather(temp);
    return console.log(`It's ${weather}`);
}


commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

//// Exercise 8 ////

const explode = (lightFunc, soundFunc , sound) => {
    lightFunc();
    soundFunc(sound);
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow";
const makeSound = (sound) => alert(sound);

explode(shineLight , makeSound , "BOOM")

                                              //// CLOSURES & MODULES////
 //// Exercise 1 ////

const StringFormatter = function(){
    const capitalizeFirst = string => console.log(string[0].toUpperCase() + string.slice(1).toLowerCase());
    const skewerCase = string => console.log(string.replace(' ','-'));
    return {
        capitalizeFirst : capitalizeFirst,
        skewerCase : skewerCase
    }

}


const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box


 //// Exercise 2 ////

 const Bank = function(){
     let money = 500;
     const depositCash = cash => money += cash
     const checkBalance = () => console.log(money);
     return {
        deposit : depositCash,
        showBalance : checkBalance
     }
 }

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
*/

 //// Exercise 3 ////
 const SongsManager = function(){
    const songs = {};
    const addSong = (key, link) => songs[key] = link.slice(32);
    const getSong = songKey => console.log(`https://www.youtube.com/watch?v=${songs[songKey]}`);
    return {
        addSong : addSong,
        getSong : getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

