const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = function(video) {
//   const title = [];
//   video.map(function(tutorial) {
//   let character = tutorial.split(" ");
//   let upperCase = character.map(function(letter) {
//     return letter[0].toUpperCase() + letter.substring(1)
//   }).join(" ");
//   title.push(upperCase);
// });
// return title;
// };
// console.log(titleCased(tutorials));

function titleCased() {
  const titles = tutorials.map(function(tutorial) {
  const character = tutorial.split(" ");
  const upperCase = character.map(function(letter) {
    const word = letter.charAt(0).toUpperCase();
    const jointWord =letter.slice(1); 
    return word + jointWord;
  })
  console.log(upperCase)
  return upperCase.join(" ")
})
console.log(titles)
return titles
}