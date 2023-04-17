function writeCards(names, surprise) {
 let messages = [];
 for (let i = 0; i < names.length; i++) {
  let message = `Thank you, ${names[i]}, for the wonderful ${surprise} gift!`;
  messages.push(message);
 }
 return messages;
}

let messages = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

console.log(messages);

function countDown(num) {
 let reverseCount = num;
 while (reverseCount >= 0) {
  console.log(reverseCount);
  reverseCount--;
 }
 return reverseCount;
}

console.log(countDown(10));
console.log(countDown(4));

