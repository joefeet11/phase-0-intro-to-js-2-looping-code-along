// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(Names, Event) {
    let messages = []
    for(let i = 0; i < Names.length; i++){
        const message = `Thank you, ${Names[i]}, for the wonderful ${Event} gift!`;

        messages.push(message);
    }
    return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"],"suprise" );

function countDown(x) {
    let i = 0
    let b = x
    while ((i)<(x+1)){
        i++;
        console.log(b)
        b--;
        
    }

}
countDown(10);
