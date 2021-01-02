var readlinSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
 
var highScore = [
  {name : 'Unnati', score : 4},
  {name : 'Anita', score : 9},
  {name : 'Jyoti', score : 8}
];

var largest = {name:highScore[0].name,score:highScore[0].score};

var userName = readlinSync.question(chalk.keyword('magenta')('Give your name: '));
console.log(chalk.green('\nWelcome '+chalk.blue(userName)+' to play Quiz on Node.js'));
console.log('\n----------------------------------');

one = {
  que : '\n1) Node.js is ___________ Language.',
  options : [
    {key : 'a', value : 'Server Side'},
    {key : 'b', value : 'Client Side'},
    {key : 'c', value : 'Both'}],
  ans : 'a'
};
two = {
  que : '\n2) Node.js is written in _____________ .',
  options : [
    {key : 'a', value : 'Javascript'},
    {key : 'b', value : 'C'},
    {key : 'c', value : 'C++'},
    {key : 'd', value : 'All of the Above'}],
  ans : 'd'
};
three = {
  que : '\n3) Is node js multithreaded?',
  options : [
    {key : 'a', value : 'Yes'},
    {key : 'b', value : 'No'}],
  ans : 'b'
};
four = {
  que : '\n4) Which extension is used to save NodeJs files?',
  options : [
    {key : 'a', value : '.js'},
    {key : 'b', value : '.node'},
    {key : 'c', value : '.java'},
    {key : 'd', value : '.txt'}],
  ans : 'a'
};
five = {
  que : '\n5) In Node process is ______',
  options : [
    {key : 'a', value : 'Global Object'},
    {key : 'b', value : 'Local Object'}],
  ans : 'a'
};
six = {
  que : '\n6) Node Js is _________.',
  options : [
    {key : 'a', value : 'Asynchronous'},
    {key : 'b', value : 'Synchronous'}],
  ans : 'a'
};
seven = {
  que : '\n7) Which function is used to include modules in Node Js.',
  options : [
    {key : 'a', value : 'include()'},
    {key : 'b', value : 'require()'},
    {key : 'c', value : 'attach()'}],
  ans : 'b'
};
eight = {
  que : '\n8) Which of following is not builtin node module.',
  options : [
    {key : 'a', value : 'zlib'},
    {key : 'b', value : 'https'},
    {key : 'c', value : 'dgram'},
    {key : 'd', value : 'fsread'}],
  ans : 'd'
};
nine = {
  que : '\n9) How Node.js modules are availble externally',
  options : [
    {key : 'a', value : 'module.exports'},
    {key : 'b', value : 'module.spread'},
    {key : 'c', value : 'module.expose'},
    {key : 'd', value : 'None of Above'}],
  ans : 'a'
};
ten = {
  que : '\n10) What does the fs module stand for?',
  options : [
    {key : 'a', value : 'File Service'},
    {key : 'b', value : 'File System'},
    {key : 'c', value : 'File Store'}],
  ans : 'b'
};

var question = [one,two,three,four,five,six,seven,eight,nine,ten];

function play(obj){
  console.log(chalk.rgb(255,255,0)(obj.que));
  for(var i=0; i<obj.options.length; i++){
    console.log(obj.options[i].key + '. ' + obj.options[i].value);
  }
  var userAns = readlinSync.question(chalk.rgb(0,0,255)('Enter your answer: '));
  if(userAns == obj.ans){
    console.log(chalk.rgb(0,255,0)('You are right!'));
    score++;
  }else{
    console.log(chalk.rgb(255,0,0)('You are wrong!'));
  }
}

for(var i=0; i<question.length; i++){
  play(question[i]);
}
highScore.push({name:userName,score:score});
console.log('Your final score is: '+score);

for(var i=0; i<highScore.length; i++){
  if(largest.score < highScore[i].score){
    largest = highScore[i];
  }
}
console.log(chalk.rgb(255,255,0).bold('\n---------High Score--------'));
console.log('High Scorer name is: '+largest.name);
console.log('High Score is: '+largest.score);
