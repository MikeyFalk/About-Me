'use strict';
// alert('is this thing on? test 1 2 3...');

alert('Hello, welcome to my About Me project!');

//Get user's name
var userName = prompt('What is your name?');
//console.log('The user\'s name is ' + userName);

//Question 1 - Do you want to play the game?
var greeting = prompt('Nice to meet you ' + userName + '. Would you like to play a guessing game about me today?');
if(greeting.toLowerCase() === 'yes' || greeting.toLowerCase()==='y'){
  alert('Excellent. Let\'s begin.');
  //console.log(userName + ' is interested in playing -- right on!');
} else {
  alert('Oh, come on. You\'re already here. These questions are easy.');
  //console.log(userName + ' turned us down -- bummer --sadface');
}

//Question 2 - Do I live in Seattle?
var whereILive =prompt('Do I live in Seattle?');
if(whereILive.toLowerCase() === 'yes' || whereILive.toLowerCase()==='y'){
  alert('Bingo! You are correct. Why would anybody live anywhere else?');
  //console.log(userName + ' thinks you live in Seatlle');
} else {
  alert('Ouch... Incorrect. I moved to Seattle in 2009 and love it!');
  //console.log(userName + 'thinks you live somewhere else');
}

//Question 3 - Do I have any pets?
var doIHavePets = prompt('Do I have any pets?');
if(doIHavePets.toUpperCase()==='YES' || doIHavePets.toUpperCase()==='Y'){
  alert('Very nice! Correct, I have two pets. A cat named Kitty and a dog named Chloe.');
  //console.log(userName + ' thinks you have pets');
} else {//console.log(userName + ' thinks you don\'t have any pets');
  alert('Opps, incorrect.... I have two pets. A cat named Kitty and a dog named Chloe.');
}
//Question 4 - Do I have any hobbies?
var hobbies = prompt('Do I have any hobbies?');
if(hobbies.toLowerCase()==='yes'|| hobbies.toLowerCase()==='y'){
  alert('Well done!, I love to ski, play golf, cook and ride bicylces.');
  //console.log(userName + ' thinks you have hobbies' );
} else {
  alert('What?!?! Do think all I do is write code all day? Everybody\'s got a hobbie.');
  //console.log(userName + ' Thinks you only like to code');
}

//Question 5 - Do I have any kids?
var kids = prompt('Do I have kids?');
if(kids.toLowerCase()==='yes'|| kids.toLowerCase()==='y'){
  alert('Correct, I have a son named Max who\'s almost 2 and is awesome!');
  //console.log(userName + ' thinks you have kids');
} else {
  alert('Incorrect. I have a son named Max who\'s almost 2 and is amazing!');
  //console.log(userName + ' thinks you don\'t have any kids');
}

//Question 6 - Guess a number
var numbguess = 22;
for(var i = 0; i<5; i++){
  var guessQuest = prompt('How many countries have I visited?: ');
  //console.log(i);
  if (parseInt(guessQuest) === numbguess){
    alert('Dang, You are good and you know me well!');
    //console.log('user guessed correctly');
    break;
  }else if (parseInt(guessQuest) > 13){
    alert('Nope, too high, try lower!');
    //console.log ('too high');
  }else if (parseInt(guessQuest)< 13){
    alert('Nope, too low, guess higher!');
    //console.log ('too low');
  }
  if (i===3 && parseInt(guessQuest) !== numbguess){
    //console.log('User ran out of guesses');
    alert('Sorry, you ran out of guesses, I\'ve been to 22 countries so far.');
    break;
  }
}

//Question 7 doesn't work yet 

//var topMovie = ['The Big Lebowski','Bill and Ted\'s Excellent Adventure','Spectre','Layer Cake','The Empire Strikes Back',   'Monty Python\'s Search for the Holy Grail','Ghostbusers','Batman Begins','Thor: Ragnarok', 'The Godfather Part II']

//for (var i = 0; i<4; i++){
//console.log('i is = ' + i + ' and ' + topMovie[i] + ' is the best movie'){
//  var movieGuess = prompt('Can you name one of my top 10 favorite movies?');
//} if (movieGuess.toLowerCase() = topMovie.toLowerCase()){
//console.log('user guessed correctly')
//}
//}

var endOfGameAlt = alert('Thank you for playing ' + userName + '! I live in Seattle. I have 2 pets, a cat and a dog. I like to cook, play golf, ski, hike and ride bicycles. I have a son named Max who will be 2 in December.');

//var endOfGame = alert('Thank you for playing ' + userName + '! I live in Seattle. I have 2 pets, a cat and a dog. I like to cook, play golf, ski, hike and ride bicycles. I have a son named Max who will be 2 in December. Finally, I love to travel. I have visited over 20 countries and can\'t wait till covid is over so I can see more.');
