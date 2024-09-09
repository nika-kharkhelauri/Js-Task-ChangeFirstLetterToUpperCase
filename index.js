/* შევქმნათ ფუნქცია რომელსაც გადაეცემა სტრინგი არეული ასოებით დიდი და პატარა, 
ფუნქციამ უნდა დაგვიბრუნოს ყველა სიტყვა პატარა ასოთი მაგრამ პირველი ასო უნდა იყოს დიდი,
 მაგალითად ჩავაწოდეთ: heLLO wOrlD, ფუნქციამ უნდა დააბრუნოს Hello World */

function capitalLetter(string) {
  let result = "";
  const letterLowerCase = string.toLowerCase().trim();
  const strToArr = letterLowerCase.split(" ");
  for (let eachWord of strToArr) {
    result += eachWord[0].toUpperCase() + eachWord.slice(1) + " ";
  }
  return result;
}

console.log(capitalLetter("heLLO WoRLD"));
