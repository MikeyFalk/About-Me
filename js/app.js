'use strict';
// alert('is this thing on? test 1 2 3...');

// user name is called throughout the code so declaring userName as a global function below  
var userName = '';
// This counter needs to run throughout code -also a global variable 
var answerCount = 0;

function welcomeMessage() {
  alert('Hello, welcome to my About Me project!');

  //Get user's name
  userName = prompt('What is your name?');
  //console.log('The user\'s name is ' + userName);
}
welcomeMessage();

//Question 1 - Do you want to play the game?
function questionOne() {
  var greeting = prompt('Nice to meet you ' + userName + '. Would you like to play a guessing game about me today?');
  if (greeting.toLowerCase() === 'yes' || greeting.toLowerCase() === 'y') {
    answerCount++;
    alert('Excellent. Let\'s begin. ' + answerCount + '/7 correct answers!');
    //console.log(userName + ' is interested in playing -- right on!');
  } else {
    alert('Wrong answer. ' + answerCount + '/7 correct answers. You can do better.');
    //console.log(userName + ' turned us down -- bummer --sadface');
  }
}
questionOne();

//Question 2 - Do I live in Seattle?
function questionTwo() {
  var whereILive = prompt('Do I live in Seattle?');
  if (whereILive.toLowerCase() === 'yes' || whereILive.toLowerCase() === 'y') {
    answerCount++;
    alert('Bingo! You are correct. Why would anybody live anywhere else? ' + answerCount + '/7 correct answers!');
    //console.log(userName + ' thinks you live in Seatlle');
  } else {
    alert('Ouch... Incorrect. I moved to Seattle in 2009 and love it! ' + answerCount + '/7 correct answers!');
    //console.log(userName + 'thinks you live somewhere else');
  }
}
questionTwo();

//Question 3 - Do I have any pets?
function questionThree() {
  var doIHavePets = prompt('Do I have any pets?');
  if (doIHavePets.toUpperCase() === 'YES' || doIHavePets.toUpperCase() === 'Y') {
    answerCount++;
    alert('Very nice! Correct, I have two pets. A cat named Kitty and a dog named Chloe. ' + answerCount + '/7 correct answers!');
    //console.log(userName + ' thinks you have pets');
  } else {//console.log(userName + ' thinks you don\'t have any pets');
    alert('Opps, incorrect.... I have two pets. A cat named Kitty and a dog named Chloe. ' + answerCount + '/7 correct answers!');
  }
}
questionThree();

//Question 4 - Do I have any hobbies?
function questionFour() {
  var hobbies = prompt('Do I have any hobbies?');
  if (hobbies.toLowerCase() === 'yes' || hobbies.toLowerCase() === 'y') {
    answerCount++;
    alert('Well done!, I love to ski, play golf, cook and ride bicylces. ' + answerCount + '/7 correct answers!');
    //console.log(userName + ' thinks you have hobbies' );
  } else {
    alert('What?!?! Do think all I do is write code all day? Everybody\'s got a hobbie. ' + answerCount + '/7 correct answers!');
    //console.log(userName + ' Thinks you only like to code');
  }
}
questionFour();

//Question 5 - Do I have any kids?
function questionFive() {
  var kids = prompt('Do I have kids?');
  if (kids.toLowerCase() === 'yes' || kids.toLowerCase() === 'y') {
    answerCount++;
    alert('Correct, I have a son named Max who\'s almost 2 and is awesome!' + answerCount + '/7 correct answers!');
    //console.log(userName + ' thinks you have kids');
  } else {
    alert('Incorrect. I have a son named Max who\'s almost 2 and is amazing!' + answerCount + '/7 correct answers!');
    //console.log(userName + ' thinks you don\'t have any kids');
  }
}
questionFive();

//Question 6 - Guess a number

function guessingGame() {
  var numbguess = 22;
  for (var i = 0; i < 5; i++) {
    var guessQuest = prompt('How many countries have I visited?: ');
    //console.log(i);
    if (parseInt(guessQuest) === numbguess) {
      answerCount++;
      alert('Dang, You are good and you know me well! ' + answerCount + '/7 correct answers!');
      //console.log('user guessed correctly');
      break;
    } else if (parseInt(guessQuest) > 22) {
      alert('Nope, too high, try lower!');
      //console.log ('too high');
    } else if (parseInt(guessQuest) < 21) {
      alert('Nope, too low, guess higher!');
      //console.log ('too low');
    }
    if (i === 3 && parseInt(guessQuest) !== numbguess) {
      //console.log('User ran out of guesses');
      alert('Sorry, you ran out of guesses, I\'ve been to 22 countries so far. ' + answerCount + '/7 correct answers!');
      break;
    }
  }
}
guessingGame();

function movieGuessingGame() {
  var topMovie = ['the big lebowski', 'bill and ted\'s excellent adventure', 'spectre', 'layer cake', 'the empire strikes back', 'monty python\'s search for the holy grail', 'ghostbusers', 'batman begins', 'thor: ragnarok', 'the godfather part ii'];

  for (var i = 0; i < 4; i++) {
    var movieFound = false;
    var movieGuess = prompt('Can you name one of my top 10 favorite movies?').toLowerCase();
    for (var x = 0; x < topMovie.length; x++) {
      if (movieGuess === topMovie[x]) {
        answerCount++;
        //console.log('correct');
        movieFound = true;
        alert('Whoa, you guessed it. You know me well! ' + answerCount + '/7 correct answers!');
        break;
      } else if (movieGuess !== topMovie[x]) {
        //alert(movieGuess + 'had some plot holes. Try again');
        //console.log('incorrect');
      } if (i === 3 && movieGuess !== topMovie[x]) {
        ///console.log('end of guesses');
        //alert('Looks like you are out of guesses nice try! ' answerCount + '/7 correct answers!')
        break;
      }
    } if (i === 4 && movieGuess !== topMovie[x]) { break; }
    if (movieFound === true) {
      break;
    }
  }
}

movieGuessingGame();


var endOfGameAlt = alert('Thank you for playing ' + userName + 'You scored ' + answerCount + '/7! I live in Seattle. I have 2 pets, a cat and a dog. I like to cook, play golf, ski, hike and ride bicycles. I have a son named Max who will be 2 in December.');
